import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import blog from "@/models/blog";

export async function GET() {
  await connectDB();
  const blogs = await blog.find();

  return NextResponse.json(blogs);
}

export async function POST(req: Request) {
  await connectDB();

  const data = await req.json();

  const Blog = await blog.create(data);

  return NextResponse.json({blog: Blog});
}