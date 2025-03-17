import { NextRequest, NextResponse } from "next/server";
import sendConsultationConfirmation from '../../utils/sendConsultationConfirmation';

const PASSWORD = process.env.FITCHECK_RESULT_ROUTE_PASSWORD; // Store your password in an environment

export const POST = async (req: NextRequest) => {
  try {
    const data = await req.formData();

    const props = {
      name: data.get('name'),
      email: data.get('email'),
      date: data.get('date'),
      type: data.get('type'),
      online: data.get('online') == 'true',
    }

    if (data.get('password') !== PASSWORD) {
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }

    await sendConsultationConfirmation(props);

    return NextResponse.json({ success: true, message: 'Authorized' });
  } catch (error) {
    console.error('Error in POST handler:', error);
    return NextResponse.json({ success: false, error: error });
  }
};