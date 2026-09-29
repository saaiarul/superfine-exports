import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Log the received RFQ enquiry to the server console as required
    console.log("==========================================");
    console.log("📥 NEW B2B FABRIC RFQ ENQUIRY RECEIVED");
    console.log("Timestamp:", new Date().toISOString());
    console.log("Payload:", JSON.stringify(body, null, 2));
    console.log("==========================================");

    // Validate required fields
    if (!body.name || !body.email || !body.company) {
      return NextResponse.json(
        { success: false, message: "Missing required fields: Name, Email, or Company" },
        { status: 400 }
      );
    }

    const enquiryId = `SFE-${Date.now().toString().slice(-6)}-${Math.floor(100 + Math.random() * 900)}`;

    return NextResponse.json(
      {
        success: true,
        enquiryId,
        message: "Thank you for reaching out to Superfine Exports. Our global export desk has received your RFQ and will respond within 24 hours.",
        receivedData: {
          name: body.name,
          company: body.company,
          email: body.email,
          phone: body.phone,
          fabricType: body.fabricType,
          gsm: body.gsm,
          quantity: body.quantity,
          destinationCountry: body.destinationCountry,
          sampleRequested: body.sampleRequested,
        },
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error processing enquiry API:", error);
    return NextResponse.json(
      { success: false, message: "Failed to process enquiry. Please try again." },
      { status: 500 }
    );
  }
}
