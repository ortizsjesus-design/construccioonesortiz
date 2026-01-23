import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

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

  console.log(`Connecting to ${host}:${port}...`);

  // Connect to SMTP server
  let conn: Deno.Conn = await Deno.connect({ hostname: host, port });
  
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  async function readResponse(): Promise<string> {
    const buffer = new Uint8Array(1024);
    const n = await conn.read(buffer);
    if (n === null) throw new Error("Connection closed");
    const response = decoder.decode(buffer.subarray(0, n));
    console.log("SMTP Response:", response.trim());
    return response;
  }

  async function sendCommand(cmd: string): Promise<string> {
    console.log("SMTP Command:", cmd.startsWith("AUTH") ? "AUTH ***" : cmd.trim());
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
    throw new Error("STARTTLS not supported: " + starttlsResponse);
  }

  // Upgrade to TLS
  conn = await Deno.startTls(conn as Deno.TcpConn, { hostname: host });
  console.log("TLS connection established");

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
    throw new Error("Failed to send email: " + dataResponse);
  }

  // QUIT
  await sendCommand("QUIT");
  conn.close();

  console.log("Email sent successfully!");
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Received request to send-contact-email function");
  
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
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
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
