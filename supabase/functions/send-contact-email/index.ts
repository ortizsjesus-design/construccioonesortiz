import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

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

    const emailHtml = `
      <h2>Nueva consulta desde la web</h2>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Teléfono:</strong> ${phone}</p>
      ${email ? `<p><strong>Email:</strong> ${email}</p>` : ""}
      <p><strong>Mensaje:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
      <hr>
      <p><small>Enviado desde el formulario de contacto de la web</small></p>
    `;

    const emailResponse = await resend.emails.send({
      from: "Construcciones Ortiz <onboarding@resend.dev>",
      to: ["ortizsjesus@gmail.com"],
      subject: `Nueva consulta web de ${name}`,
      html: emailHtml,
      reply_to: email || undefined,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
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
