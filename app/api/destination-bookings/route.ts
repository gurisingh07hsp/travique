import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Booking from "@/models/booking";

export async function GET() {
  try {
    await connectDB();

    const bookingsByDestination = await Booking.aggregate([
      {
        $group: {
          _id: "$destination",
          bookings: { $sum: 1 },
        },
      },
      {
        $project: {
          _id: 0,
          destination: "$_id",
          bookings: 1,
        },
      },
      {
        $sort: {
          bookings: -1,
        },
      },
    ]);

    return NextResponse.json(bookingsByDestination);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch data" },
      { status: 500 }
    );
  }
}