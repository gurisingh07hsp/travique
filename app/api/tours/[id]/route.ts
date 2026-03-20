import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Tour from "@/models/Tour";


export async function GET(req: Request,{ params }: { params: Promise<{ id: string }> }) {
  await connectDB();

  try {
    const { id } = await params; // ✅ FIX HERE

    const tour = await Tour.findOne({title: id});

    if (!tour) {
      return NextResponse.json(
        { message: "Tour not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({tour});
  } catch (error) {
    return NextResponse.json(
      { message: "Error deleting tour", error },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request,{ params }: { params: Promise<{ id: string }> }) {
  await connectDB();

  try {
    const { id } = await params;
    const data = await req.json();

    const updatedTour = await Tour.findByIdAndUpdate(id, data, {
      new: true,
    });

    if (!updatedTour) {
      return NextResponse.json(
        { message: "Tour not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedTour);
  } catch (error) {
    return NextResponse.json(
      { message: "Error updating tour", error },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  await connectDB();

  try {
    const { id } = await params; // ✅ FIX HERE

    const deletedTour = await Tour.findByIdAndDelete(id);

    if (!deletedTour) {
      return NextResponse.json(
        { message: "Tour not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Tour deleted successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Error deleting tour", error },
      { status: 500 }
    );
  }
}