import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Tour from "@/models/Tour";

export async function GET() {
  await connectDB();
  const tours = await Tour.find();

  return NextResponse.json(tours);
}

export async function POST(req: Request) {
  await connectDB();

  const data = await req.json();

  const tour = await Tour.create(data);

  return NextResponse.json(tour);
}