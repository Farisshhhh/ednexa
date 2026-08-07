import { Resend } from "resend";
import { NextResponse } from "next/server";


const resend = new Resend(process.env.RESEND_API_KEY);

const clientConfirmationEmail = (name: string): string => `
  <h2>Thank you for your enquiry, ${name}!</h2>
  <p>We've received your project enquiry and will get back to you shortly.</p>
  <p>Best regards,<br/>Ednexa Team</p>
`;

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Email to you
    const { error: adminError } = await resend.emails.send({
      from: "Ednexa <onboarding@resend.dev>",
      to: "mohdfarisshhhh@gmail.com",
      subject: `New Project Enquiry from ${body.name}`,
      html: `
        <h2>New Project Enquiry</h2>

        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Company:</strong> ${body.company}</p>
        <p><strong>Phone:</strong> ${body.phone}</p>
        <p><strong>Service:</strong> ${body.service}</p>
        <p><strong>Budget:</strong> ${body.budget}</p>
        <p><strong>Timeline:</strong> ${body.timeline}</p>

        <h3>Project Details</h3>

        <p>${body.message}</p>
      `,
    });

    if (adminError) {
      return NextResponse.json(
        {
          success: false,
          error: adminError,
        },
        {
          status: 500,
        }
      );
    }

    // Confirmation email to client
    const { error: clientError } = await resend.emails.send({
      from: "Ednexa <onboarding@resend.dev>",
      to: body.email,
      subject: "We've received your enquiry • Ednexa",
      html: clientConfirmationEmail(body.name),
    });

    if (clientError) {
      return NextResponse.json(
        {
          success: false,
          error: clientError,
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      success: true,
    });

  } catch (err) {
    console.error(err);

    return NextResponse.json(
      {
        success: false,
        error: err instanceof Error ? err.message : String(err),
      },
      {
        status: 500,
      }
    );
  }
}