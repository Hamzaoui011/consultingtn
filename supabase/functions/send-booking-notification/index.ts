import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface BookingNotification {
  service: string;
  date: string;
  time: string;
  fullName: string;
  email: string;
  phone: string;
  price: string;
  duration: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const booking: BookingNotification = await req.json();
    console.log("Sending booking notification:", booking);

    const emailResponse = await resend.emails.send({
      from: "EL Marketeur TN <onboarding@resend.dev>",
      to: ["Contact.hamzaoui.services@gmail.com"],
      subject: "IMPORTANT NEW CLIENT MEETING SCHUDLED",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #f59e0b; border-bottom: 2px solid #f59e0b; padding-bottom: 10px;">
            🎯 New Consultation Booking
          </h1>
          
          <div style="background: #f8fafc; border-radius: 8px; padding: 20px; margin: 20px 0;">
            <h2 style="color: #1e293b; margin-top: 0;">Client Information</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #64748b;"><strong>Full Name:</strong></td>
                <td style="padding: 8px 0;">${booking.fullName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b;"><strong>Email:</strong></td>
                <td style="padding: 8px 0;">${booking.email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b;"><strong>Phone:</strong></td>
                <td style="padding: 8px 0;">${booking.phone}</td>
              </tr>
            </table>
          </div>

          <div style="background: #fef3c7; border-radius: 8px; padding: 20px; margin: 20px 0;">
            <h2 style="color: #92400e; margin-top: 0;">Meeting Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #92400e;"><strong>Service:</strong></td>
                <td style="padding: 8px 0;">${booking.service}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #92400e;"><strong>Date:</strong></td>
                <td style="padding: 8px 0;">${booking.date}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #92400e;"><strong>Time:</strong></td>
                <td style="padding: 8px 0;">${booking.time}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #92400e;"><strong>Duration:</strong></td>
                <td style="padding: 8px 0;">${booking.duration}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #92400e;"><strong>Price:</strong></td>
                <td style="padding: 8px 0; font-weight: bold; font-size: 18px;">${booking.price}</td>
              </tr>
            </table>
          </div>

          <p style="color: #64748b; font-size: 12px; text-align: center; margin-top: 30px;">
            EL_Marketeur_TN - Hamzaoui Mohamed Yassine
          </p>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error sending notification:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
