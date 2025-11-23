import { NextResponse } from "next/server";
import { google } from "googleapis";
import { leadFormSchema } from "@/lib/lead-form-schema";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate incoming data
    const parsed = leadFormSchema.parse(body);

    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });


    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[
          parsed.firstName,
          parsed.lastName,
          parsed.email,
          parsed.phone,
          parsed.restaurantName,
          parsed.posSystem,
          parsed.noofresturant,
          new Date().toLocaleString()
        ]]
      }
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
