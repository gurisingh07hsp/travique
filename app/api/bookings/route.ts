import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Booking from "@/models/booking";
// import nodemailer from "nodemailer";

export async function GET() {
  await connectDB();

  const bookings = await Booking.find().sort({ createdAt: -1 });

  return NextResponse.json(bookings);
}

export async function POST(req: Request) {
  await connectDB();

  const data = await req.json();

  const booking = await Booking.create(data);
      // 2. Create transporter (Gmail example)
    // const transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   auth: {
    //     user: process.env.EMAIL_USER, // your email
    //     pass: process.env.EMAIL_PASS, // app password
    //   },
    // });

    // // 3. Mail content
    // const mailOptions = {
    //   from: process.env.EMAIL_USER,
    //   to: data.email,
    //   subject: "Booking Request Received",
    //   html: `
    //     <h2>New Booking Request</h2>
    //     <p><strong>Name:</strong> ${data.name}</p>
    //     <p><strong>Email:</strong> ${data.email}</p>
    //     <p><strong>Pickup Date:</strong> ${data.pickupDate}</p>
    //     <p><strong>Dropoff Date:</strong> ${data.dropoffDate}</p>
    //     <p><strong>Destination:</strong> ${data.destination}</p>
    //     <br/>
    //     <p>User wants a booking. We will contact you shortly.</p>
    //   `,
    // };

    // // 4. Send mail
    // await transporter.sendMail(mailOptions);

  return NextResponse.json(booking);
}