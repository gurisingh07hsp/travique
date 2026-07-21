import { NextRequest, NextResponse } from "next/server";
import {connectDB} from "@/lib/mongodb";
import Booking from "@/models/booking";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await params;
    const { payment } = await req.json();

    if (!["pending", "done"].includes(payment)) {
      return NextResponse.json(
        { message: "Invalid payment status" },
        { status: 400 }
      );
    }

    const booking = await Booking.findByIdAndUpdate(
      id,
      { payment },
      { new: true }
    );

    if (!booking) {
      return NextResponse.json(
        { message: "Booking not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      booking,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}