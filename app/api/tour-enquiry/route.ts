import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

/**
 * POST /api/tour-inquiry
 * ------------------------------------------------------------------
 * Appends a row to your Google Sheet for every popup form submission.
 * Runs server-side, so credentials never reach the browser.
 *
 * SHEET:
 * https://docs.google.com/spreadsheets/d/1ihimNL5XGvBMgSuGyBp0IFPyIHHUgC-K2o2uJFldW1c/edit
 *
 * SETUP:
 * 1. npm install googleapis
 *
 * 2. Create a Google Cloud service account:
 *    - console.cloud.google.com -> select/create a project
 *    - "APIs & Services" -> "Enabled APIs" -> enable "Google Sheets API"
 *    - "IAM & Admin" -> "Service Accounts" -> "Create service account"
 *      (any name, e.g. "sheets-writer")
 *    - Open the new service account -> "Keys" -> "Add key" -> "Create
 *      new key" -> JSON. This downloads a JSON file — keep it private,
 *      never commit it.
 *
 * 3. Share your Google Sheet with the service account:
 *    - Open the JSON file, copy the "client_email" value
 *      (looks like xxxx@xxxx.iam.gserviceaccount.com)
 *    - Open the Sheet -> Share -> paste that email -> give it "Editor"
 *      access.
 *
 * 4. Add these to .env.local (values come from the JSON file):
 *      GOOGLE_SHEET_ID=1ihimNL5XGvBMgSuGyBp0IFPyIHHUgC-K2o2uJFldW1c
 *      GOOGLE_SHEET_NAME=Sheet1
 *      GOOGLE_SERVICE_ACCOUNT_EMAIL=xxxx@xxxx.iam.gserviceaccount.com
 *      GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
 *
 *    The private_key value from the JSON has real newlines escaped as
 *    "\n" — paste it in quotes exactly as it appears in the JSON file.
 *    Also add the same 4 vars in your hosting provider's dashboard
 *    (e.g. Vercel -> Project -> Settings -> Environment Variables)
 *    for production, and restart/redeploy after adding them.
 *
 * 5. Restart `next dev` after editing .env.local (env vars are only
 *    read at server start).
 * ------------------------------------------------------------------
 */

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

    return NextResponse.json({ result: "success" });
  } catch (err) {
    console.error("Tour inquiry submission failed:", err);
    return NextResponse.json(
      { error: "Failed to write to Google Sheets" },
      { status: 500 }
    );
  }
}