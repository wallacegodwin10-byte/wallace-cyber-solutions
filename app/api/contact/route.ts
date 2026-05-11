import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "wallacegodwin10@gmail.com",
      subject: "New Contact Form Submission",
      html: `
        <h2>New Message</h2>

        <p><strong>Name:</strong> ${body.fullName}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Company:</strong> ${body.company}</p>

        <p><strong>Message:</strong></p>
        <p>${body.message}</p>
      `,
    });

    return Response.json(data);
  } catch (error) {
    console.error(error);

    return Response.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}