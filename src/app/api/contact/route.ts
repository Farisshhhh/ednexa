import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing");

      return NextResponse.json(
        {
          success: false,
          error: "RESEND_API_KEY is missing in the production environment.",
        },
        { status: 500 }
      );
    }

    if (!body.name || !body.email) {
      return NextResponse.json(
        {
          success: false,
          error: "Name and email are required.",
        },
        { status: 400 }
      );
    }

    // 1. Send enquiry to Ednexa
    const { data: adminData, error: adminError } =
      await resend.emails.send({
        from: "Ednexa <hello@ednexa.in>",
        to: "mohdfarisshhhh@gmail.com",
        subject: `New Project Enquiry from ${body.name}`,
        html: `
          <h2>New Project Enquiry</h2>

          <p><strong>Name:</strong> ${body.name}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          <p><strong>Company:</strong> ${body.company || "Not provided"}</p>
          <p><strong>Phone:</strong> ${body.phone || "Not provided"}</p>
          <p><strong>Service:</strong> ${body.service || "Not selected"}</p>
          <p><strong>Budget:</strong> ${body.budget || "Not selected"}</p>
          <p><strong>Timeline:</strong> ${body.timeline || "Not selected"}</p>

          <h3>Project Details</h3>

          <p>${body.message || "No additional details provided."}</p>
        `,
      });

    if (adminError) {
      console.error("ADMIN EMAIL ERROR:", adminError);

      return NextResponse.json(
        {
          success: false,
          error: adminError.message || "Failed to send enquiry email.",
        },
        { status: 500 }
      );
    }

    console.log("ADMIN EMAIL SENT:", adminData);

    // 2. Send confirmation to client
    const { data: clientData, error: clientError } =
      await resend.emails.send({
        from: "Ednexa <hello@ednexa.in>",
        to: body.email,
        subject: "We've received your enquiry • Ednexa",
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6;">
            <h2>Thank you, ${body.name}!</h2>

            <p>
              We've successfully received your enquiry.
            </p>

            <p>
              Our team will review your project and get back to you
              within 24 hours.
            </p>

            <p>
              Best regards,<br />
              <strong>Ednexa</strong>
            </p>
          </div>
        `,
      });

    if (clientError) {
      console.error("CLIENT EMAIL ERROR:", clientError);

      return NextResponse.json(
        {
          success: false,
          error:
            clientError.message ||
            "Your enquiry was received, but the confirmation email could not be sent.",
        },
        { status: 500 }
      );
    }

    console.log("CLIENT EMAIL SENT:", clientData);

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Unexpected server error.",
      },
      { status: 500 }
    );
  }
}   