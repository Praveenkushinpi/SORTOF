import dbConnect from '@/lib/dbConnect';
import UserModel from '@/model/User';
import { z } from 'zod';
import { isAlreadyInWaitlistSchema } from '@/schemas/isAlreadyInWaitlist';

const IsInWaitlistSchema = z.object({
  email: isAlreadyInWaitlistSchema,
});

export async function GET(request: Request) {
  await dbConnect();

  try {
    const { searchParams } = new URL(request.url);
    const queryParams = {
      email: searchParams.get('email'),
    };

    const result = IsInWaitlistSchema.safeParse(queryParams);

    if (!result.success) {
      const EmailErrors = result.error.format().email?._errors || [];
      return Response.json(
        {
          success: false,
          message:
            EmailErrors.length > 0
              ? EmailErrors.join(', ')
              : 'Invalid query parameters',
        },
        { status: 400 }
      );
    }

    const { email } = result.data;

    const existingEmail = await UserModel.findOne({
      email,
      isAlreadyInWaitlist: true,
    });

    if (existingEmail) {
      return Response.json(
        {
          success: true,
          isAlreadyInWaitlist: true,
          message: 'You are already in the waitlist',
        },
        { status: 200 }
      );
    }

    return Response.json(
      {
        success: true,
        isAlreadyInWaitlist: false,
        message: 'User is not yet in the waitlist',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error checking waitlist email:', error);
    return Response.json(
      {
        success: false,
        message: 'Error checking email',
      },
      { status: 500 }
    );
  }
}
