import { resend } from "@/lib/resend";
import { ApiResponse } from "@/types/apiResponse";
import WaitlistEmail from "../../emails/WaitlistConfirmation";

export async function sendVerificationEmail(
  email: string,
  username: string,
  isAlreadyInWaitlist: boolean
): Promise<ApiResponse> {

  if (isAlreadyInWaitlist) {
    return {
      success: false,
      message: 'User is already in the waitlist. Email not sent.',
    };
  }

  try {
    await resend.emails.send({
      from: 'Acme <info@sortedof.kushinpi.me>',
      to: email,
      subject: 'Sortedof | Verification code',
      react: WaitlistEmail({ username, isAlreadyInWaitlist }),
    });

    return {
      success: true,
      message: 'Verification email sent successfully',
    };
  } catch (emailError) {
    console.error("Error sending verification email", emailError);
    return {
      success: false,
      message: 'Failed to send verification email',
    };
  }
}
