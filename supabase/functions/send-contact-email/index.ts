import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

// Allowed origins for CORS - restrict to known domains
const ALLOWED_ORIGINS = [
  "https://construccioonesortiz.lovable.app",
  "https://id-preview--6ac0f481-48fb-4d46-beb5-41dad4240d51.lovable.app",
  "https://construccioonesortiz.vercel.app",
  "http://localhost:5173",
  "http://localhost:8080"
];

function getCorsHeaders(origin: string | null): Record<string, string> {
  const allowedOrigin = origin && ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Vary": "Origin"
  };
}

interface ContactEmailRequest {
  name: string;
  phone: string;
  email?: string;
  message: string;
}

// HTML escape function to prevent XSS attacks
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

// Simple in-memory rate limiter
// Note: In production with multiple instances, use Redis or a database
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX_REQUESTS = 5; // 5 requests per hour per IP

function checkRateLimit(identifier: string): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();
  const entry = rateLimitMap.get(identifier);
  
  // Clean up old entries periodically
  if (rateLimitMap.size > 1000) {
    for (const [key, value] of rateLimitMap.entries()) {
      if (now > value.resetTime) {
        rateLimitMap.delete(key);
      }
    }
  }
  
  if (!entry || now > entry.resetTime) {
    // First request or window expired
    rateLimitMap.set(identifier, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true };
  }
  
  if (entry.count >= RATE_LIMIT_MAX_REQUESTS) {
    const retryAfter = Math.ceil((entry.resetTime - now) / 1000);
    return { allowed: false, retryAfter };
  }
  
  entry.count++;
  return { allowed: true };
}

// Simple SMTP implementation for Office365
async function sendEmailViaSMTP(
  to: string[],
  subject: string,
  htmlBody: string,
  textBody: string,
  replyTo?: string
): Promise<void> {
  const host = Deno.env.get("SMTP_HOST") || "smtp.gmail.com";
  const port = parseInt(Deno.env.get("SMTP_PORT") || "587");
  const username = Deno.env.get("SMTP_USER")!;
  const password = Deno.env.get("SMTP_PASSWORD")!;

  // Connect to SMTP server
  let conn: Deno.Conn = await Deno.connect({ hostname: host, port });
  
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  async function readResponse(): Promise<string> {
    const buffer = new Uint8Array(1024);
    const n = await conn.read(buffer);
    if (n === null) throw new Error("Connection closed");
    return decoder.decode(buffer.subarray(0, n));
  }

  async function sendCommand(cmd: string): Promise<string> {
    await conn.write(encoder.encode(cmd + "\r\n"));
    return await readResponse();
  }

  // Read greeting
  await readResponse();

  // EHLO
  await sendCommand(`EHLO lovable.app`);

  // STARTTLS
  const starttlsResponse = await sendCommand("STARTTLS");
  if (!starttlsResponse.startsWith("220")) {
    throw new Error("STARTTLS failed");
  }

  // Upgrade to TLS
  conn = await Deno.startTls(conn as Deno.TcpConn, { hostname: host });

  // EHLO again after TLS
  await sendCommand(`EHLO lovable.app`);

  // AUTH LOGIN
  await sendCommand("AUTH LOGIN");
  await sendCommand(btoa(username));
  const authResponse = await sendCommand(btoa(password));
  
  if (!authResponse.includes("235")) {
    throw new Error("Authentication failed: " + authResponse);
  }

  // MAIL FROM
  await sendCommand(`MAIL FROM:<${username}>`);

  // RCPT TO for each recipient
  for (const recipient of to) {
    await sendCommand(`RCPT TO:<${recipient}>`);
  }

  // DATA
  await sendCommand("DATA");

  // Build email with proper MIME structure
  const boundary = "----=_Part_" + Math.random().toString(36).substring(2);
  const emailContent = [
    `From: Construcciones Ortiz <${username}>`,
    `To: ${to.join(", ")}`,
    `Subject: ${subject}`,
    replyTo ? `Reply-To: ${replyTo}` : "",
    `MIME-Version: 1.0`,
    `Content-Type: multipart/alternative; boundary="${boundary}"`,
    "",
    `--${boundary}`,
    `Content-Type: text/plain; charset=UTF-8`,
    "",
    textBody,
    "",
    `--${boundary}`,
    `Content-Type: text/html; charset=UTF-8`,
    "",
    htmlBody,
    "",
    `--${boundary}--`,
    ".",
  ].filter(Boolean).join("\r\n");

  const dataResponse = await sendCommand(emailContent);
  if (!dataResponse.includes("250")) {
    throw new Error("Email delivery failed");
  }

  // QUIT
  await sendCommand("QUIT");
  conn.close();
}

const handler = async (req: Request): Promise<Response> => {
  const origin = req.headers.get("origin");
  const corsHeaders = getCorsHeaders(origin);
  
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Rate limiting based on IP address
  const clientIP = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || 
                   req.headers.get("x-real-ip") || 
                   "anonymous";
  
  const rateLimitResult = checkRateLimit(clientIP);
  if (!rateLimitResult.allowed) {
    console.warn(`Rate limit exceeded for IP: ${clientIP}`);
    return new Response(
      JSON.stringify({ 
        error: "Has enviado demasiadas solicitudes. Por favor, espera un momento antes de intentarlo de nuevo." 
      }),
      {
        status: 429,
        headers: { 
          "Content-Type": "application/json",
          "Retry-After": String(rateLimitResult.retryAfter || 3600),
          ...corsHeaders 
        },
      }
    );
  }

  try {
    const { name, phone, email, message }: ContactEmailRequest = await req.json();
    
    console.log("Processing contact form submission from:", name);

    // Validate required fields
    if (!name || !phone || !message) {
      console.error("Missing required fields");
      return new Response(
        JSON.stringify({ error: "Nombre, teléfono y mensaje son obligatorios" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Validate field lengths
    if (name.length > 100 || phone.length > 20 || message.length > 2000) {
      console.error("Field length exceeded");
      return new Response(
        JSON.stringify({ error: "Los campos exceden la longitud permitida" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Sanitize user inputs to prevent XSS
    const safeName = escapeHtml(name);
    const safePhone = escapeHtml(phone);
    const safeEmail = email ? escapeHtml(email) : "";
    const safeMessage = escapeHtml(message);

    const emailHtml = `
      <h2>Nueva consulta desde la web</h2>
      <p><strong>Nombre:</strong> ${safeName}</p>
      <p><strong>Teléfono:</strong> ${safePhone}</p>
      ${safeEmail ? `<p><strong>Email:</strong> ${safeEmail}</p>` : ""}
      <p><strong>Mensaje:</strong></p>
      <p>${safeMessage.replace(/\n/g, "<br>")}</p>
      <hr>
      <p><small>Enviado desde el formulario de contacto de la web</small></p>
    `;

    const textBody = `Nueva consulta desde la web\n\nNombre: ${name}\nTeléfono: ${phone}\n${email ? `Email: ${email}\n` : ""}Mensaje: ${message}`;

    await sendEmailViaSMTP(
      ["josbolumburu@hotmail.com", "ortizsjesus@gmail.com", "viveconia.oficial@gmail.com"],
      `Nueva consulta web de ${name}`,
      emailHtml,
      textBody,
      email || undefined
    );

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    // Log full error details server-side only for debugging
    console.error("Error in send-contact-email function:", error);
    
    // Return generic error message to client (don't expose internal details)
    return new Response(
      JSON.stringify({ 
        error: "No pudimos enviar tu mensaje. Por favor, inténtalo de nuevo o contáctanos directamente por teléfono." 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
