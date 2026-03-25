import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Booking from "@/models/booking";

export async function GET() {
  await connectDB();

  const bookings = await Booking.find().populate("destination");
  // const bookings = await Booking.find()

  return NextResponse.json(bookings);
}

export async function POST(req: Request) {
  await connectDB();

  const data = await req.json();

  const booking = await Booking.create(data);

  return NextResponse.json(booking);
}