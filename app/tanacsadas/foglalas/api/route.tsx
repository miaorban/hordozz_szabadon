import { NextRequest, NextResponse } from "next/server";
// import sendBookingReceived from "../../../utils/sendBookingReceived";
// import sendBookingMia from "../../../utils/sendBookingMia";
import { createBooking } from "../../../utils/cal";

export const POST = async (req: NextRequest) => {
  try {  
    const data = await req.json();
    console.log(" data", data);
    // await Promise.all([
    //   sendBookingReceived(data),
    //   sendBookingMia(data)
    // ]);
    
    await createBooking({
      start: new Date(data.date + " " + data.time).toISOString(),
      name: data.name,
      location: data.isOnline ? "online" : "offline",
      babyAge: data.babyAge,
      babyWeight: data.babyWeight,
      eventType: data.type,
      email: data.email,
      description: data.description,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error in POST handler:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
};
