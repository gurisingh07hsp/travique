import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import nodemailer from "nodemailer";


const SHEET_ID = process.env.GOOGLE_SHEET_ID as string;
const SHEET_NAME = process.env.GOOGLE_SHEET_NAME || "Sheet1";


function formatTimestamp(date: Date) {
  return new Intl.DateTimeFormat("en-NZ", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Pacific/Auckland",
  }).format(date);
}

function getAuth() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const rawKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;

  if (!email || !rawKey || !SHEET_ID) {
    throw new Error(
      "Missing Google Sheets env vars. Check GOOGLE_SHEET_ID, GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY."
    );
  }

  return new google.auth.JWT({
    email,
    key: rawKey.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

export async function POST(req: NextRequest) {
  let body: {
    name?: string;
    phone?: string;
    email?: string;
    tour?: string;
    source?: string;
  };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { name, phone, email, tour, source } = body;

  if (!name?.trim() || !phone?.trim() || !email?.trim() || !tour?.trim()) {
    return NextResponse.json(
      { error: "Name, phone, email and tour are all required" },
      { status: 400 }
    );
  }

  try {
    const auth = getAuth();
    const sheets = google.sheets({ version: "v4", auth });

    // Ensure a header row exists once, harmless if it already does.
    const existing = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range: `${SHEET_NAME}!A1:A1`,
    });
    if (!existing.data.values) {
      await sheets.spreadsheets.values.update({
        spreadsheetId: SHEET_ID,
        range: `${SHEET_NAME}!A1:F1`,
        valueInputOption: "RAW",
        requestBody: {
          values: [
            ["Submitted At", "Name", "Phone", "Email", "Tour", "Page URL"],
          ],
        },
      });
    }

    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: `${SHEET_NAME}!A:F`,
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [
          [
            formatTimestamp(new Date()),
            name.trim(),
            phone.trim(),
            email.trim(),
            tour.trim(),
            source || "",
          ],
        ],
      },
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS, // app password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'tours.milkyways@gmail.com',
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
                            <p style="margin:2px 0 0 0;font-size:15px;font-weight:600;color:#0f172a;">${name}</p>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:14px 18px;border-bottom:1px solid #f1f5f9;">
                            <p style="margin:0;font-size:12px;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;">Email</p>
                            <p style="margin:2px 0 0 0;font-size:15px;font-weight:600;">
                              <a href="mailto:${email}" style="color:#0891b2;text-decoration:none;">${email}</a>
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:14px 18px;">
                            <p style="margin:0;font-size:12px;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;">Phone</p>
                            <p style="margin:2px 0 0 0;font-size:15px;font-weight:600;">
                              <a href="tel:${phone}" style="color:#0891b2;text-decoration:none;">${phone}</a>
                            </p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>


                  <!-- Message -->
                  <tr>
                    <td style="padding:28px 40px 0 40px;">
                      <h2 style="margin:0 0 12px 0;font-size:12px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:#0f766e;">Popup Customer Message</h2>
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
                            <a href="mailto:${email}?subject=Re:Booking%20Request"
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
        </html>`,
    };

    const sendMailToUser = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "We've received your enquiry — here's what's next",
    html: `
      <div style="font-family: Arial, Helvetica, sans-serif; max-width: 480px; margin: 0 auto; background: #FFFDF9;">
        <div style="background: linear-gradient(135deg, #0B4F6C, #123B4F); padding: 28px 24px; border-radius: 12px 12px 0 0;">
          <h1 style="margin: 10px 0 0; color: #ffffff; font-size: 22px;">
            Thanks, ${name}!
          </h1>
        </div>
        <div style="padding: 24px; border: 1px solid #DDE6E9; border-top: none; border-radius: 0 0 12px 12px;">
          <p style="margin: 0 0 14px; color: #14213D; font-size: 15px; line-height: 1.6;">
            We've received your request for the <strong>${tour}</strong> tour.
            Our travel desk is already looking into the best options for you.
          </p>
          <p style="margin: 0 0 20px; color: #14213D; font-size: 15px; line-height: 1.6;">
            <strong>Our team will contact you within 24 hours</strong> to help plan your trip.
          </p>
          <p style="margin: 0; color: #5B6B75; font-size: 13px; line-height: 1.6;">
            In the meantime, feel free to reply to this email if you have any questions.
          </p>
        </div>
        <p style="text-align: center; color: #9AA7AE; font-size: 11px; margin: 16px 0 0;">
          You're receiving this because you submitted an enquiry on our website.
        </p>
      </div>
    `,
    }

    // 4. Send mail
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(sendMailToUser);

    return NextResponse.json({ result: "success" });
  } catch (err) {
    console.error("Tour inquiry submission failed:", err);
    return NextResponse.json(
      { error: "Failed to write to Google Sheets" },
      { status: 500 }
    );
  }
}