"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";
import {
  ShieldCheck,
  FileCheck2,
  UploadCloud,
  CheckCircle2,
  Clock,
  Download,
  FileText,
  AlertCircle,
  Lock,
  HelpCircle,
  User,
  ArrowRight
} from "lucide-react";

export default function CustomerPortalPage() {
  const [activeTab, setActiveTab] = useState<"checklist" | "status" | "deliverables">("checklist");
  const [uploadedFiles, setUploadedFiles] = useState<
    { name: string; size: string; status: "Verified" | "Under Review"; date: string }[]
  >([
    { name: "Bank_Statement_Sept_2026.pdf", size: "1.4 MB", status: "Verified", date: "Oct 05, 2026" },
    { name: "Sales_Register_Sept_2026.xlsx", size: "840 KB", status: "Verified", date: "Oct 07, 2026" },
    { name: "Vendor_Purchase_Bills_Batch1.zip", size: "4.2 MB", status: "Under Review", date: "Oct 12, 2026" }
  ]);

  const [dragOver, setDragOver] = useState(false);
  const [uploadMessage, setUploadMessage] = useState("");

  const handleSimulatedUpload = (fileName: string) => {
    setUploadMessage(`Uploaded "${fileName}" successfully for compliance verification!`);
    setUploadedFiles((prev) => [
      {
        name: fileName,
        size: "1.1 MB",
        status: "Under Review",
        date: "Today, just now"
      },
      ...prev
    ]);
    setTimeout(() => setUploadMessage(""), 4000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface-bg text-text-main">
      <Navbar />

      <main className="flex-1 pb-16">
        {/* Portal Header */}
        <section className="bg-white border-b border-surface-border py-8 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-teal bg-teal-light px-3 py-0.5 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
                    <Lock className="w-3 h-3" />
                    Encrypted Client Workspace
                  </span>
                  <span className="text-xs font-mono text-text-muted bg-slate-100 px-2 py-0.5 rounded">
                    Account: TV-CLI-8492
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight">
                  Customer Compliance Portal
                </h1>
                <p className="text-xs sm:text-sm text-text-muted mt-1">
                  Track ongoing filing statuses, securely share financial records, and download government acknowledgement receipts.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={siteConfig.links.whatsappUrl("Portal Support")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors shadow-xs"
                >
                  <WhatsAppIcon className="w-4 h-4 shrink-0" />
                  <span>Assigned Advisor Chat</span>
                </a>
              </div>
            </div>

            {/* Portal Tab Navigation */}
            <div className="flex items-center gap-2 mt-6 pt-4 border-t border-slate-100 text-xs font-semibold">
              <button
                onClick={() => setActiveTab("checklist")}
                className={`px-4 py-2 rounded-xl transition-all ${
                  activeTab === "checklist"
                    ? "bg-brand-blue text-white shadow-xs font-bold border border-amber-500/40"
                    : "bg-[#1C1510] text-[#BCAE9F] hover:text-[#FAF4EF] hover:bg-[#251C16] border border-surface-border"
                }`}
              >
                Document Checklist & Uploads
              </button>
              <button
                onClick={() => setActiveTab("status")}
                className={`px-4 py-2 rounded-xl transition-all ${
                  activeTab === "status"
                    ? "bg-brand-blue text-white shadow-xs font-bold border border-amber-500/40"
                    : "bg-[#1C1510] text-[#BCAE9F] hover:text-[#FAF4EF] hover:bg-[#251C16] border border-surface-border"
                }`}
              >
                Active Engagement Status
              </button>
              <button
                onClick={() => setActiveTab("deliverables")}
                className={`px-4 py-2 rounded-xl transition-all ${
                  activeTab === "deliverables"
                    ? "bg-brand-blue text-white shadow-xs font-bold border border-amber-500/40"
                    : "bg-[#1C1510] text-[#BCAE9F] hover:text-[#FAF4EF] hover:bg-[#251C16] border border-surface-border"
                }`}
              >
                Filed Acknowledgements & Proofs
              </button>
            </div>
          </div>
        </section>

        {/* Main Portal View */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          
          {uploadMessage && (
            <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2 animate-in fade-in duration-150">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{uploadMessage}</span>
            </div>
          )}

          {/* Tab 1: Document Checklist & Uploads */}
          {activeTab === "checklist" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left 7 Columns: Drag & Drop Upload Zone & Files List */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Upload Card */}
                <div className="bg-white rounded-2xl border border-surface-border p-6 shadow-xs">
                  <h3 className="text-sm font-bold text-navy mb-1 flex items-center gap-2">
                    <UploadCloud className="w-4 h-4 text-brand-blue" />
                    <span>Upload Financial Records & Statements</span>
                  </h3>
                  <p className="text-xs text-text-muted mb-4">
                    Upload PDF statements, Excel invoice registers, or scanned bills (Max 25MB per batch).
                  </p>

                  <div
                    onDragOver={(e) => {
                      e.preventDefault();
                      setDragOver(true);
                    }}
                    onDragLeave={() => setDragOver(false)}
                    onDrop={(e) => {
                      e.preventDefault();
                      setDragOver(false);
                      handleSimulatedUpload("Bank_Statements_Oct_Batch.pdf");
                    }}
                    className={`border-2 border-dashed rounded-xl p-8 text-center transition-all ${
                      dragOver ? "border-brand-blue bg-blue-50/50" : "border-slate-200 bg-slate-50/60"
                    }`}
                  >
                    <UploadCloud className="w-10 h-10 text-slate-400 mx-auto mb-2" />
                    <p className="text-xs font-semibold text-navy">
                      Drag and drop your statement files here, or{" "}
                      <button
                        type="button"
                        onClick={() => handleSimulatedUpload(`Statement_Upload_${Date.now().toString().slice(-4)}.pdf`)}
                        className="text-brand-blue hover:underline"
                      >
                        browse files
                      </button>
                    </p>
                    <p className="text-[11px] text-text-muted mt-1">
                      Supported formats: PDF, XLSX, CSV, ZIP • Bank-grade client encryption
                    </p>
                  </div>
                </div>

                {/* Upload History Table */}
                <div className="bg-white rounded-2xl border border-surface-border p-6 shadow-xs">
                  <h3 className="text-sm font-bold text-navy mb-4">Uploaded Files History</h3>
                  <div className="space-y-2.5">
                    {uploadedFiles.map((file, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs"
                      >
                        <div className="flex items-center gap-2.5 truncate mr-2">
                          <FileText className="w-4 h-4 text-brand-blue shrink-0" />
                          <div className="truncate">
                            <span className="font-semibold text-navy block truncate">{file.name}</span>
                            <span className="text-[10px] text-text-muted">{file.size} • {file.date}</span>
                          </div>
                        </div>

                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 border ${
                            file.status === "Verified"
                              ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                              : "bg-amber-50 text-amber-700 border-amber-200"
                          }`}
                        >
                          {file.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right 5 Columns: Monthly Checklist Tracker */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-white rounded-2xl border border-surface-border p-6 shadow-xs space-y-4">
                  <h3 className="text-sm font-bold text-navy pb-3 border-b border-surface-border">
                    Current Period Checklist (FY 26-27 Q2)
                  </h3>

                  <div className="space-y-3 text-xs">
                    <div className="p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-bold text-navy block">Sales Invoice Register</span>
                        <p className="text-text-muted text-[11px]">Submitted & matched with e-Way bill summaries.</p>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-bold text-navy block">Bank Statements (PDF / Excel)</span>
                        <p className="text-text-muted text-[11px]">Reconciled against cash book entries.</p>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-amber-50/50 border border-amber-100 flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-bold text-navy block">Vendor Purchase Bills (Batch 2)</span>
                        <p className="text-text-muted text-[11px]">Awaiting 4 vendor bills to finalize GSTR-2B credit claims.</p>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
                      <Clock className="w-4 h-4 text-text-muted mt-0.5 shrink-0" />
                      <div>
                        <span className="font-bold text-navy block">TDS Challan Counterfoils (Challan 281)</span>
                        <p className="text-text-muted text-[11px]">Scheduled for verification before 7th of next month.</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-100 text-[11px] text-text-muted flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                    <span>
                      Files uploaded here are stored in isolated encrypted cloud buckets and accessible only to your authorized compliance team.
                    </span>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* Tab 2: Active Engagement Status */}
          {activeTab === "status" && (
            <div className="bg-white rounded-2xl border border-surface-border p-6 sm:p-8 shadow-xs space-y-6 max-w-4xl mx-auto">
              <h3 className="text-lg font-bold text-navy pb-3 border-b border-surface-border">
                Live Compliance Status Tracker
              </h3>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div>
                    <span className="text-[10px] font-bold text-teal bg-teal-light px-2 py-0.5 rounded uppercase">
                      GSTR-1 Return
                    </span>
                    <h4 className="font-bold text-navy text-sm mt-1">Outward Supplies Return (September 2026)</h4>
                    <p className="text-text-muted text-[11px]">ARN: AA0709260194827 • Filed on 10-Oct-2026 via OTP</p>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 self-start sm:self-auto">
                    Successfully Filed
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div>
                    <span className="text-[10px] font-bold text-brand-blue bg-blue-50 px-2 py-0.5 rounded uppercase">
                      GSTR-3B Summary
                    </span>
                    <h4 className="font-bold text-navy text-sm mt-1">Monthly Tax & ITC Settlement (September 2026)</h4>
                    <p className="text-text-muted text-[11px]">2B reconciliation complete (₹1,48,250 ITC claimed). Draft challan sent for sign-off.</p>
                  </div>
                  <span className="text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 self-start sm:self-auto">
                    Awaiting Client Approval
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div>
                    <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded uppercase">
                      TDS Form 26Q
                    </span>
                    <h4 className="font-bold text-navy text-sm mt-1">Q2 Non-Salary Withholding Tax Return</h4>
                    <p className="text-text-muted text-[11px]">Deductee PAN master validated with zero FVU format errors.</p>
                  </div>
                  <span className="text-xs font-bold text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200 self-start sm:self-auto">
                    In Progress
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Deliverables & Acknowledgements */}
          {activeTab === "deliverables" && (
            <div className="bg-white rounded-2xl border border-surface-border p-6 sm:p-8 shadow-xs space-y-6 max-w-4xl mx-auto">
              <div className="flex items-center justify-between pb-3 border-b border-surface-border">
                <div>
                  <h3 className="text-lg font-bold text-navy">Government Acknowledgements & Certificates</h3>
                  <p className="text-xs text-text-muted">Download official proofs and certificates archived by our team</p>
                </div>
              </div>

              <div className="space-y-3 text-xs">
                {[
                  {
                    title: "GSTR-1 Official Filing Acknowledgement (September 2026)",
                    type: "Form GSTR-1 ARN Receipt",
                    date: "10-Oct-2026",
                    size: "420 KB"
                  },
                  {
                    title: "GST Registration Certificate (Form GST REG-06)",
                    type: "Permanent GSTIN Certificate",
                    date: "14-May-2025",
                    size: "1.2 MB"
                  },
                  {
                    title: "MSME Udyam Registration Certificate",
                    type: "Ministry of MSME Permanent Certificate",
                    date: "22-Jun-2025",
                    size: "890 KB"
                  },
                  {
                    title: "Form 27A TDS Quarterly Filing Provisional Receipt (Q1)",
                    type: "Protean / TIN-FC Receipt",
                    date: "28-Jul-2026",
                    size: "340 KB"
                  }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-brand-blue transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-brand-blue">
                        <FileCheck2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-navy">{item.title}</h4>
                        <span className="text-[11px] text-text-muted">{item.type} • {item.date}</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => alert(`Initiating download for ${item.title}`)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-blue hover:text-brand-blue-hover bg-white px-3 py-1.5 rounded-lg border border-surface-border shadow-2xs"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
