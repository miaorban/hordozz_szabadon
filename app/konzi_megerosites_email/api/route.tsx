import { NextRequest, NextResponse } from "next/server";
import sendCarrierConsultation from '../../utils/sendCarrierConsultation';

const PASSWORD = process.env.FITCHECK_RESULT_ROUTE_PASSWORD; // Store your password in an environment

export const POST = async (req: NextRequest) => {
  try {
    const data = await req.formData();
    const file = data.get('file');

    const props = {
      name: data.get('name'),
      email: data.get('email'),
    }

    if (data.get('password') !== PASSWORD) {
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }

    await sendCarrierConsultation(props, file);

    return NextResponse.json({ success: true, message: 'Authorized' });
  } catch (error) {
    console.error('Error in POST handler:', error);
    return NextResponse.json({ success: false, error: error });
  }
};