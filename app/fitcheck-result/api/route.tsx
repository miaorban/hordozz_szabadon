import { NextRequest, NextResponse } from "next/server";
import sendFitcheck from '../../utils/sendFitcheck';

const PASSWORD = process.env.FITCHECK_RESULT_ROUTE_PASSWORD; // Store your password in an environment

export const POST = async (req: NextRequest) => {
  try {
    const data = await req.formData();
    const password = data.get('password');
    const link = data.get('link');
    const email = data.get('email');
    const name = data.get('name');
    const file = data.get('file');

    if (password !== PASSWORD) {
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }

    await sendFitcheck({ link, name, email, file });

    return NextResponse.json({ success: true, message: 'Authorized' });
  } catch (error) {
    console.error('Error in POST handler:', error);
    return NextResponse.json({ success: false, error: error });
  }
};