import { NextRequest, NextResponse } from "next/server";
import sendCarrierConsultation from '@/app/utils/sendCarrierConsultation';

const PASSWORD = process.env.FITCHECK_RESULT_ROUTE_PASSWORD; // Store your password in an environment

export const POST = async (req: NextRequest) => {
  try {
    const data = await req.formData();
    const file = data.get('file');

    const props = {
      name: data.get('name'),
      email: data.get('email'),
      carrier1: data.get('carrier1'),
      carrier2: data.get('carrier2'),
      carrier3: data.get('carrier3'),
      carrier4: data.get('carrier4'),
      carrier1_desc: data.get('carrier1_desc'),
      carrier2_desc: data.get('carrier2_desc'),
      carrier3_desc: data.get('carrier3_desc'),
      carrier4_desc: data.get('carrier4_desc')
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