import { NextRequest, NextResponse } from "next/server";

const PASSWORD = process.env.FITCHECK_RESULT_ROUTE_PASSWORD; // Store your password in an environment

export const POST = async (req: NextRequest) => {
  try {
    const { password, link, email } = await req.json();

    if (password !== PASSWORD) {
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }

    console.log('req ', link);
    console.log('email ', email);

    // Process the rest of the request
    // const formData = await req.formData();
    // const email = formData.get('email');

    return NextResponse.json({ success: true, message: 'Authorized' });
  } catch (error) {
    console.error('Error in POST handler:', error);
    return NextResponse.json({ success: false, error: error.message });
  }
};