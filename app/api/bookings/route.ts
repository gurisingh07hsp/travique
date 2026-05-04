import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Booking from "@/models/booking";
import nodemailer from "nodemailer";

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
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS, // app password
      },
    });

    // 3. Mail content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: data.email,
      subject: "Booking Request Received",
      html: `
      <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>New Booking Request</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f6f8;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1a1a1a;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f4f6f8;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.04);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#0f766e 0%,#0891b2 100%);padding:32px 40px;">
              <p style="margin:0 0 6px 0;font-size:13px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.85);">New Booking Request</p>
              <h1 style="margin:0;font-size:26px;line-height:1.3;font-weight:700;color:#ffffff;">A customer wants to book a tour</h1>
            </td>
          </tr>

          <!-- Intro -->
          <tr>
            <td style="padding:32px 40px 8px 40px;">
              <p style="margin:0;font-size:15px;line-height:1.6;color:#475569;">
                You've received a new booking request. Review the details below and get in touch with the customer to confirm.
              </p>
            </td>
          </tr>

          <!-- Customer Section -->
          <tr>
            <td style="padding:24px 40px 0 40px;">
              <h2 style="margin:0 0 12px 0;font-size:12px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:#0f766e;">Customer</h2>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid #e5e7eb;border-radius:8px;">
                <tr>
                  <td style="padding:14px 18px;border-bottom:1px solid #f1f5f9;">
                    <p style="margin:0;font-size:12px;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;">Name</p>
                    <p style="margin:2px 0 0 0;font-size:15px;font-weight:600;color:#0f172a;">${data.name}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:14px 18px;border-bottom:1px solid #f1f5f9;">
                    <p style="margin:0;font-size:12px;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;">Email</p>
                    <p style="margin:2px 0 0 0;font-size:15px;font-weight:600;">
                      <a href="mailto:info@zoolik.com" style="color:#0891b2;text-decoration:none;">${data.email}</a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:14px 18px;">
                    <p style="margin:0;font-size:12px;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;">Phone</p>
                    <p style="margin:2px 0 0 0;font-size:15px;font-weight:600;">
                      <a href="tel:+917589086920" style="color:#0891b2;text-decoration:none;">${data.phone}</a>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Trip Section -->
          <tr>
            <td style="padding:28px 40px 0 40px;">
              <h2 style="margin:0 0 12px 0;font-size:12px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:#0f766e;">Trip Details</h2>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid #e5e7eb;border-radius:8px;">
                <tr>
                  <td width="50%" style="padding:14px 18px;border-bottom:1px solid #f1f5f9;border-right:1px solid #f1f5f9;">
                    <p style="margin:0;font-size:12px;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;">Pickup Location</p>
                    <p style="margin:2px 0 0 0;font-size:15px;font-weight:600;color:#0f172a;">${data.pickupLocation}</p>
                  </td>
                  <td width="50%" style="padding:14px 18px;border-bottom:1px solid #f1f5f9;">
                    <p style="margin:0;font-size:12px;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;">Dropoff Location</p>
                    <p style="margin:2px 0 0 0;font-size:15px;font-weight:600;color:#0f172a;">${data.dropoffLocation}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:14px 18px;border-bottom:1px solid #f1f5f9;border-right:1px solid #f1f5f9;">
                    <p style="margin:0;font-size:12px;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;">Pickup Date</p>
                    <p style="margin:2px 0 0 0;font-size:15px;font-weight:600;color:#0f172a;">${data.departureDate}</p>
                  </td>
                  <td style="padding:14px 18px;border-bottom:1px solid #f1f5f9;">
                    <p style="margin:0;font-size:12px;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;">Dropoff Date</p>
                    <p style="margin:2px 0 0 0;font-size:15px;font-weight:600;color:#0f172a;">${data.returnDate}</p>
                  </td>
                </tr>
                <tr>
                  <td colspan="2" style="padding:14px 18px;background-color:#f0fdfa;">
                    <p style="margin:0;font-size:12px;color:#0f766e;text-transform:uppercase;letter-spacing:0.5px;font-weight:600;">Destination</p>
                    <p style="margin:2px 0 0 0;font-size:16px;font-weight:700;color:#0f172a;">${data.destination}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding:28px 40px 0 40px;">
              <h2 style="margin:0 0 12px 0;font-size:12px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:#0f766e;">Customer Message</h2>
              <div style="background-color:#f8fafc;border-left:3px solid #0891b2;padding:14px 18px;border-radius:4px;">
                <p style="margin:0;font-size:15px;line-height:1.6;color:#334155;font-style:italic;">"User wants a booking."</p>
              </div>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="padding:32px 40px;" align="center">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="border-radius:8px;background-color:#0f766e;">
                    <a href="mailto:${data.email}?subject=Re:${data.destination}%20Booking%20Request"
                       style="display:inline-block;padding:14px 28px;font-size:15px;font-weight:600;color:#ffffff;text-decoration:none;border-radius:8px;">
                       Reply to Customer
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px;background-color:#f8fafc;border-top:1px solid #e5e7eb;" align="center">
              <p style="margin:0;font-size:12px;color:#94a3b8;line-height:1.5;">
                This is an automated booking notification.<br/>
                Please respond to the customer within 24 hours.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>















      `,
    };

    // 4. Send mail
    await transporter.sendMail(mailOptions);

  return NextResponse.json(booking);
}