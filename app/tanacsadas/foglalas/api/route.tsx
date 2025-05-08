import { NextRequest, NextResponse } from "next/server";
import sendBookingReceived from "../../../utils/sendBookingReceived";
import sendBookingMia from "../../../utils/sendBookingMia";

export const POST = async (req: NextRequest) => {
  try {  
    const data = await req.json();
    await Promise.all([
      sendBookingReceived(data),
      sendBookingMia(data)
    ]);
    

    return NextResponse.json({ success: true, message: "Authorized" });
  } catch (error) {
    console.error("Error in POST handler:", error);
    return NextResponse.json({ success: false, error: error });
  }
};
