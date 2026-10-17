import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { CustomerEnquiry } from "@/types";

const ENQUIRIES_FILE = path.join(process.cwd(), "data", "enquiries.json");

// Ensure enquiries.json exists with initial demo enquiries
function getInitialEnquiries(): CustomerEnquiry[] {
  return [
    {
      id: "LEAD-1001",
      fullName: "Vikram Malhotra",
      businessName: "Malhotra Electronics & Traders",
      mobile: "9811234567",
      email: "vikram@malhotratraders.in",
      city: "New Delhi",
      businessType: "Sole Proprietorship",
      serviceRequired: "GST Return Filing",
      transactionVolume: "200-500 invoices/month",
      preferredContact: "WhatsApp",
      additionalDetails: "Need monthly GSTR-1 and GSTR-3B filing and purchase 2B matching for 2 branches.",
      status: "In Progress",
      createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
      updatedAt: new Date(Date.now() - 86400000).toISOString(),
      notes: [
        {
          id: "n-1",
          text: "Discussed requirements on WhatsApp. Client shared previous GSTR-3B filings. Quote sent.",
          author: "Senior Consultant",
          createdAt: new Date(Date.now() - 86400000).toISOString(),
        }
      ],
      assignedTo: "Rahul Sharma",
    },
    {
      id: "LEAD-1002",
      fullName: "Pooja Hegde",
      businessName: "NovaCraft Digital Solutions",
      mobile: "9876543210",
      email: "pooja@novacraft.io",
      city: "Bengaluru",
      businessType: "Private Limited",
      serviceRequired: "Day-to-Day Accounting",
      transactionVolume: "50-200 invoices/month",
      preferredContact: "Phone Call",
      additionalDetails: "Looking for complete monthly bookkeeping and quarterly TDS 26Q filing support.",
      status: "Requirements Received",
      createdAt: new Date(Date.now() - 86400000 * 4).toISOString(),
      updatedAt: new Date(Date.now() - 86400000 * 2).toISOString(),
      notes: [
        {
          id: "n-2",
          text: "Initial call completed. Requested FY 25-26 bank statements and Zoho books access.",
          author: "Accounts Lead",
          createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
        }
      ],
      assignedTo: "Amit Verma",
    },
    {
      id: "LEAD-1003",
      fullName: "Sunil Agarwal",
      businessName: "Agarwal Handlooms",
      mobile: "9928012345",
      email: "",
      city: "Jaipur",
      businessType: "Partnership Firm",
      serviceRequired: "MSME / Udyam Registration",
      transactionVolume: "<50 invoices/month",
      preferredContact: "WhatsApp",
      additionalDetails: "Need Udyam registration to avail bank priority lending and delayed payment protection.",
      status: "New",
      createdAt: new Date(Date.now() - 3600000 * 5).toISOString(),
      updatedAt: new Date(Date.now() - 3600000 * 5).toISOString(),
      notes: [],
    }
  ];
}

function readEnquiries(): CustomerEnquiry[] {
  try {
    if (!fs.existsSync(ENQUIRIES_FILE)) {
      const initial = getInitialEnquiries();
      fs.writeFileSync(ENQUIRIES_FILE, JSON.stringify(initial, null, 2));
      return initial;
    }
    const data = fs.readFileSync(ENQUIRIES_FILE, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading enquiries file:", err);
    return getInitialEnquiries();
  }
}

function saveEnquiries(list: CustomerEnquiry[]): void {
  try {
    fs.writeFileSync(ENQUIRIES_FILE, JSON.stringify(list, null, 2));
  } catch (err) {
    console.error("Error writing enquiries file:", err);
  }
}

export async function GET(req: NextRequest) {
  const enquiries = readEnquiries();
  return NextResponse.json({ success: true, enquiries });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Honeypot spam check
    if (body.website_trap && body.website_trap.length > 0) {
      return NextResponse.json({ success: false, error: "Spam detected" }, { status: 400 });
    }

    const {
      fullName,
      businessName,
      mobile,
      email,
      city,
      businessType,
      serviceRequired,
      transactionVolume,
      preferredContact,
      additionalDetails,
    } = body;

    // Server-side validation
    if (!fullName || fullName.trim().length < 2) {
      return NextResponse.json({ success: false, error: "Full Name is required (minimum 2 characters)" }, { status: 422 });
    }

    // Indian mobile format: 10 digits starting with 6, 7, 8, or 9
    const cleanMobile = (mobile || "").replace(/[^0-9]/g, "");
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(cleanMobile)) {
      return NextResponse.json({ success: false, error: "Please provide a valid 10-digit Indian mobile number (e.g., 9876543210)" }, { status: 422 });
    }

    if (!city || city.trim().length < 2) {
      return NextResponse.json({ success: false, error: "City is required" }, { status: 422 });
    }

    if (!serviceRequired) {
      return NextResponse.json({ success: false, error: "Please select a service required" }, { status: 422 });
    }

    if (email && email.trim().length > 0) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return NextResponse.json({ success: false, error: "Please provide a valid email address or leave blank" }, { status: 422 });
      }
    }

    const newEnquiry: CustomerEnquiry = {
      id: `LEAD-${Math.floor(1000 + Math.random() * 9000)}`,
      fullName: fullName.trim(),
      businessName: businessName ? businessName.trim() : undefined,
      mobile: cleanMobile,
      email: email ? email.trim() : undefined,
      city: city.trim(),
      businessType: businessType || "Sole Proprietorship",
      serviceRequired: serviceRequired,
      transactionVolume: transactionVolume || "Not specified",
      preferredContact: preferredContact || "WhatsApp",
      additionalDetails: additionalDetails ? additionalDetails.trim() : undefined,
      status: "New",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      notes: [],
    };

    const existing = readEnquiries();
    existing.unshift(newEnquiry);
    saveEnquiries(existing);

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted successfully! A compliance specialist will contact you.",
      enquiryId: newEnquiry.id,
      lead: newEnquiry
    });
  } catch (error: unknown) {
    console.error("Enquiry API error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process enquiry. Please try again." },
      { status: 500 }
    );
  }
}
