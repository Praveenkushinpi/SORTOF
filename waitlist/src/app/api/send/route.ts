import { Resend } from 'resend'; // ✅ Make sure this is at the top

const resend = new Resend(process.env.RESEND_API_KEY); // ✅ Initialize it here

export async function POST(req: Request) {
  try {
    const { name, email } = await req.json();

    const { error, data } = await resend.emails.send({
      from: "Your App <info@waitsortedof.kushinpi.me>", // Only works if domain is allowed
      to: [email],
      subject: "🎉 Welcome to Our App!",
      html: `<p>Hi <strong>${name}</strong>,<br/>Thanks for joining our waitlist!</p>`,
    });

    if (error) {
      console.error("Resend Error:", error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch (err) {
    console.error("Internal Error:", err);
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }
}
