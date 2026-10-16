import os

admin_api_ts = """import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { CustomerEnquiry, LeadStatus } from "@/types";

const ENQUIRIES_FILE = path.join(process.cwd(), "data", "enquiries.json");

function readEnquiries(): CustomerEnquiry[] {
  try {
    if (!fs.existsSync(ENQUIRIES_FILE)) {
      return [];
    }
    const data = fs.readFileSync(ENQUIRIES_FILE, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading enquiries file in admin:", err);
    return [];
  }
}

function saveEnquiries(list: CustomerEnquiry[]): void {
  try {
    fs.writeFileSync(ENQUIRIES_FILE, JSON.stringify(list, null, 2));
  } catch (err) {
    console.error("Error writing enquiries file in admin:", err);
  }
}

export async function GET(req: NextRequest) {
  const enquiries = readEnquiries();
  
  const stats = {
    total: enquiries.length,
    newCount: enquiries.filter(e => e.status === "New").length,
    contactedCount: enquiries.filter(e => e.status === "Contacted").length,
    inProgressCount: enquiries.filter(e => ["Requirements Received", "Quote Sent", "In Progress"].includes(e.status)).length,
    completedCount: enquiries.filter(e => e.status === "Completed").length,
    closedCount: enquiries.filter(e => e.status === "Closed").length,
  };

  return NextResponse.json({ success: true, stats, enquiries });
}

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, status, newNote, noteAuthor, assignedTo } = body;

    if (!id) {
      return NextResponse.json({ success: false, error: "Lead ID is required" }, { status: 400 });
    }

    const enquiries = readEnquiries();
    const index = enquiries.findIndex(e => e.id === id);

    if (index === -1) {
      return NextResponse.json({ success: false, error: "Enquiry not found" }, { status: 404 });
    }

    const lead = enquiries[index];

    if (status) {
      lead.status = status as LeadStatus;
    }

    if (assignedTo !== undefined) {
      lead.assignedTo = assignedTo;
    }

    if (newNote && newNote.trim()) {
      if (!lead.notes) lead.notes = [];
      lead.notes.push({
        id: `note-${Date.now()}`,
        text: newNote.trim(),
        author: noteAuthor || "Compliance Specialist",
        createdAt: new Date().toISOString()
      });
    }

    lead.updatedAt = new Date().toISOString();
    enquiries[index] = lead;
    saveEnquiries(enquiries);

    return NextResponse.json({ success: true, lead });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
"""

with open("src/app/api/admin/enquiries/route.ts", "w") as f:
    f.write(admin_api_ts)

admin_page_ts = """\"use client\";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { CustomerEnquiry, LeadStatus } from "@/types";
import {
  ShieldCheck,
  Search,
  Filter,
  Download,
  Users,
  CheckCircle2,
  Clock,
  Phone,
  Mail,
  MessageCircle,
  AlertCircle,
  FileText,
  UserCheck,
  PlusCircle,
  RefreshCw,
  LogOut,
  Building,
  Lock,
  ChevronRight,
  ArrowUpDown
} from "lucide-react";

const TEAM_MEMBERS = [
  "Unassigned",
  "Rahul Sharma (GST Specialist)",
  "Amit Verma (TDS & Direct Tax)",
  "Priya Nair (Senior Bookkeeper)",
  "Sneha Gupta (Client Coordinator)"
];

const STATUS_OPTIONS: LeadStatus[] = [
  "New",
  "Contacted",
  "Requirements Received",
  "Quote Sent",
  "In Progress",
  "Completed",
  "Closed"
];

export default function AdminDashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [pinInput, setPinInput] = useState("");
  const [pinError, setPinError] = useState("");

  const [enquiries, setEnquiries] = useState<CustomerEnquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [serviceFilter, setServiceFilter] = useState<string>("All");

  const [selectedLead, setSelectedLead] = useState<CustomerEnquiry | null>(null);
  const [newNoteText, setNewNoteText] = useState("");
  const [noteAuthor, setNoteAuthor] = useState("TaxVeda Desk");
  const [updatingLead, setUpdatingLead] = useState(false);

  const fetchEnquiries = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/enquiries");
      const data = await res.json();
      if (data.success) {
        setEnquiries(data.enquiries);
        if (selectedLead) {
          const updated = data.enquiries.find((e: CustomerEnquiry) => e.id === selectedLead.id);
          if (updated) setSelectedLead(updated);
        }
      }
    } catch (err) {
      console.error("Failed to load enquiries:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const handleUpdateStatus = async (id: string, newStatus: LeadStatus) => {
    setUpdatingLead(true);
    try {
      const res = await fetch("/api/admin/enquiries", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus })
      });
      const data = await res.json();
      if (data.success) {
        await fetchEnquiries();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setUpdatingLead(false);
    }
  };

  const handleAssignTeam = async (id: string, assignedTo: string) => {
    setUpdatingLead(true);
    try {
      const res = await fetch("/api/admin/enquiries", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, assignedTo })
      });
      const data = await res.json();
      if (data.success) {
        await fetchEnquiries();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setUpdatingLead(false);
    }
  };

  const handleAddNote = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedLead || !newNoteText.trim()) return;

    setUpdatingLead(true);
    try {
      const res = await fetch("/api/admin/enquiries", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: selectedLead.id,
          newNote: newNoteText.trim(),
          noteAuthor
        })
      });
      const data = await res.json();
      if (data.success) {
        setNewNoteText("");
        await fetchEnquiries();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setUpdatingLead(false);
    }
  };

  // Export to CSV
  const handleExportCSV = () => {
    const headers = [
      "ID",
      "Full Name",
      "Business Name",
      "Mobile",
      "Email",
      "City",
      "Business Type",
      "Service Required",
      "Transaction Volume",
      "Preferred Contact",
      "Status",
      "Assigned To",
      "Created At"
    ];

    const rows = filteredEnquiries.map((e) => [
      `"${e.id}"`,
      `"${e.fullName}"`,
      `"${e.businessName || ""}"`,
      `"${e.mobile}"`,
      `"${e.email || ""}"`,
      `"${e.city}"`,
      `"${e.businessType}"`,
      `"${e.serviceRequired}"`,
      `"${e.transactionVolume || ""}"`,
      `"${e.preferredContact}"`,
      `"${e.status}"`,
      `"${e.assignedTo || "Unassigned"}"`,
      `"${new Date(e.createdAt).toLocaleString()}"`
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((r) => r.join(","))].join("\\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `taxveda_enquiries_${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredEnquiries = enquiries.filter((e) => {
    const matchesSearch =
      search === "" ||
      e.fullName.toLowerCase().includes(search.toLowerCase()) ||
      (e.businessName && e.businessName.toLowerCase().includes(search.toLowerCase())) ||
      e.mobile.includes(search) ||
      e.city.toLowerCase().includes(search.toLowerCase()) ||
      e.id.toLowerCase().includes(search.toLowerCase());

    const matchesStatus = statusFilter === "All" || e.status === statusFilter;
    const matchesService = serviceFilter === "All" || e.serviceRequired === serviceFilter;

    return matchesSearch && matchesStatus && matchesService;
  });

  const stats = {
    total: enquiries.length,
    newCount: enquiries.filter((e) => e.status === "New").length,
    inProgress: enquiries.filter((e) =>
      ["Requirements Received", "Quote Sent", "In Progress"].includes(e.status)
    ).length,
    completed: enquiries.filter((e) => e.status === "Completed").length
  };

  const getStatusBadge = (status: LeadStatus) => {
    switch (status) {
      case "New":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Contacted":
        return "bg-amber-100 text-amber-800 border-amber-200";
      case "Requirements Received":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "Quote Sent":
        return "bg-indigo-100 text-indigo-800 border-indigo-200";
      case "In Progress":
        return "bg-teal-light text-teal-dark border-teal/30";
      case "Completed":
        return "bg-emerald-100 text-emerald-800 border-emerald-200";
      case "Closed":
        return "bg-slate-100 text-slate-700 border-slate-200";
      default:
        return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 text-text-main flex flex-col font-sans">
      {/* Admin Top Navigation */}
      <header className="bg-navy text-white px-4 sm:px-8 py-3.5 flex items-center justify-between border-b border-navy-dark shadow-xs sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 text-white font-bold text-sm tracking-tight">
            <div className="w-7 h-7 rounded-lg bg-brand-blue flex items-center justify-center text-xs">
              TV
            </div>
            <span>{siteConfig.shortName} Admin Operations</span>
          </Link>
          <span className="hidden sm:inline-block text-[11px] text-teal bg-teal-light/20 px-2 py-0.5 rounded font-mono">
            v2.4 Lead Desk
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={fetchEnquiries}
            className="text-xs text-slate-300 hover:text-white flex items-center gap-1.5 p-1.5 rounded-lg hover:bg-slate-800 transition-colors"
            title="Refresh Leads"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
            <span className="hidden sm:inline">Refresh</span>
          </button>

          <Link
            href="/"
            className="text-xs text-slate-300 hover:text-white flex items-center gap-1.5 p-1.5 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Return to Website</span>
          </Link>
        </div>
      </header>

      {/* Main Admin Workspace */}
      <main className="flex-1 p-4 sm:p-8 max-w-7xl mx-auto w-full space-y-6">
        
        {/* Top Metrics Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-surface-border shadow-xs">
            <span className="text-xs font-semibold text-text-muted uppercase tracking-wider block">
              Total Enquiries
            </span>
            <div className="flex items-baseline justify-between mt-2">
              <span className="text-2xl font-black text-navy">{stats.total}</span>
              <span className="text-xs font-medium text-brand-blue bg-blue-50 px-2 py-0.5 rounded">
                All time
              </span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-surface-border shadow-xs">
            <span className="text-xs font-semibold text-text-muted uppercase tracking-wider block">
              New Enquiries
            </span>
            <div className="flex items-baseline justify-between mt-2">
              <span className="text-2xl font-black text-blue-600">{stats.newCount}</span>
              <span className="text-xs font-medium text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                Pending action
              </span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-surface-border shadow-xs">
            <span className="text-xs font-semibold text-text-muted uppercase tracking-wider block">
              In Progress
            </span>
            <div className="flex items-baseline justify-between mt-2">
              <span className="text-2xl font-black text-purple-700">{stats.inProgress}</span>
              <span className="text-xs font-medium text-purple-700 bg-purple-50 px-2 py-0.5 rounded">
                Active workflow
              </span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-surface-border shadow-xs">
            <span className="text-xs font-semibold text-text-muted uppercase tracking-wider block">
              Completed / Closed
            </span>
            <div className="flex items-baseline justify-between mt-2">
              <span className="text-2xl font-black text-emerald-600">{stats.completed}</span>
              <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                Delivered
              </span>
            </div>
          </div>
        </div>

        {/* Filter and Action Controls */}
        <div className="bg-white p-4 rounded-2xl border border-surface-border shadow-xs flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex flex-1 items-center gap-2 w-full">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by client name, mobile (+91), city, or business..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full text-xs text-text-main pl-9 pr-3 py-2 bg-slate-50 border border-surface-border rounded-xl focus:outline-none focus:ring-1 focus:ring-brand-blue"
              />
            </div>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="text-xs text-text-main bg-slate-50 border border-surface-border rounded-xl px-3 py-2 focus:outline-none"
            >
              <option value="All">All Statuses</option>
              {STATUS_OPTIONS.map((st) => (
                <option key={st} value={st}>
                  {st}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={handleExportCSV}
            className="w-full md:w-auto inline-flex items-center justify-center gap-1.5 bg-slate-50 hover:bg-slate-100 text-navy border border-surface-border text-xs font-semibold px-4 py-2 rounded-xl transition-colors shrink-0"
          >
            <Download className="w-3.5 h-3.5 text-brand-blue" />
            <span>Export CSV</span>
          </button>
        </div>

        {/* Main Leads Table */}
        <div className="bg-white rounded-2xl border border-surface-border shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50/80 border-b border-surface-border text-text-muted font-semibold uppercase tracking-wider text-[10px]">
                  <th className="py-3 px-4">Lead ID</th>
                  <th className="py-3 px-4">Client & Business</th>
                  <th className="py-3 px-4">Contact</th>
                  <th className="py-3 px-4">Service</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Assigned To</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {loading ? (
                  <tr>
                    <td colSpan={7} className="text-center py-10 text-text-muted">
                      <RefreshCw className="w-5 h-5 animate-spin mx-auto mb-2 text-brand-blue" />
                      Loading lead database...
                    </td>
                  </tr>
                ) : filteredEnquiries.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="text-center py-10 text-text-muted">
                      No matching enquiries found.
                    </td>
                  </tr>
                ) : (
                  filteredEnquiries.map((enquiry) => (
                    <tr
                      key={enquiry.id}
                      onClick={() => setSelectedLead(enquiry)}
                      className="hover:bg-blue-50/40 cursor-pointer transition-colors"
                    >
                      <td className="py-3 px-4 font-mono font-bold text-navy">
                        {enquiry.id}
                      </td>
                      <td className="py-3 px-4">
                        <span className="font-bold text-navy block">{enquiry.fullName}</span>
                        <span className="text-[11px] text-text-muted">
                          {enquiry.businessName || "Individual / Unregistered"} • {enquiry.city}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-1 font-semibold text-navy">
                          <Phone className="w-3 h-3 text-teal" />
                          <span>+91 {enquiry.mobile}</span>
                        </div>
                        <span className="text-[10px] text-text-muted block">
                          Prefers: {enquiry.preferredContact}
                        </span>
                      </td>
                      <td className="py-3 px-4 font-medium text-navy">
                        <span className="line-clamp-1">{enquiry.serviceRequired}</span>
                        <span className="text-[10px] text-text-muted">{enquiry.businessType}</span>
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold border ${getStatusBadge(
                            enquiry.status
                          )}`}
                        >
                          {enquiry.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-text-muted text-[11px]">
                        {enquiry.assignedTo || "Unassigned"}
                      </td>
                      <td className="py-3 px-4 text-right">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedLead(enquiry);
                          }}
                          className="text-xs font-semibold text-brand-blue hover:underline"
                        >
                          Details
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Selected Lead Modal / Side Drawer */}
        {selectedLead && (
          <div className="fixed inset-0 bg-navy/40 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in duration-150">
            <div className="bg-white rounded-2xl shadow-2xl border border-surface-border w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 space-y-6">
              
              {/* Header */}
              <div className="flex items-start justify-between pb-4 border-b border-surface-border">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono font-bold text-brand-blue bg-blue-50 px-2 py-0.5 rounded">
                      {selectedLead.id}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${getStatusBadge(selectedLead.status)}`}>
                      {selectedLead.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-navy">{selectedLead.fullName}</h3>
                  <p className="text-xs text-text-muted">
                    {selectedLead.businessName || "Proprietorship"} • {selectedLead.city}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedLead(null)}
                  className="text-xs font-bold text-text-muted hover:text-navy p-1"
                >
                  ✕ Close
                </button>
              </div>

              {/* Status & Assignment Quick Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div>
                  <label className="block text-xs font-bold text-navy mb-1">
                    Update Lead Status:
                  </label>
                  <select
                    value={selectedLead.status}
                    disabled={updatingLead}
                    onChange={(e) => handleUpdateStatus(selectedLead.id, e.target.value as LeadStatus)}
                    className="w-full text-xs bg-white border border-surface-border rounded-lg p-2 focus:outline-none"
                  >
                    {STATUS_OPTIONS.map((st) => (
                      <option key={st} value={st}>
                        {st}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy mb-1">
                    Assign Staff Member:
                  </label>
                  <select
                    value={selectedLead.assignedTo || "Unassigned"}
                    disabled={updatingLead}
                    onChange={(e) => handleAssignTeam(selectedLead.id, e.target.value)}
                    className="w-full text-xs bg-white border border-surface-border rounded-lg p-2 focus:outline-none"
                  >
                    {TEAM_MEMBERS.map((tm) => (
                      <option key={tm} value={tm}>
                        {tm}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Enquiry Details Grid */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-text-muted block text-[10px]">Mobile Contact</span>
                  <div className="font-bold text-navy flex items-center gap-1.5 mt-0.5">
                    <span>+91 {selectedLead.mobile}</span>
                    <a
                      href={`https://wa.me/91${selectedLead.mobile}?text=${encodeURIComponent(`Hello ${selectedLead.fullName}, this is regarding your enquiry for ${selectedLead.serviceRequired} at TaxVeda.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 hover:text-emerald-700 font-normal text-[11px]"
                    >
                      (Open WhatsApp)
                    </a>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-text-muted block text-[10px]">Email Address</span>
                  <span className="font-bold text-navy mt-0.5 block">
                    {selectedLead.email || "Not provided"}
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-text-muted block text-[10px]">Service Requested</span>
                  <span className="font-bold text-brand-blue mt-0.5 block">
                    {selectedLead.serviceRequired}
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-text-muted block text-[10px]">Est. Monthly Volume</span>
                  <span className="font-bold text-navy mt-0.5 block">
                    {selectedLead.transactionVolume || "Standard"}
                  </span>
                </div>
              </div>

              {/* Client Notes */}
              {selectedLead.additionalDetails && (
                <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-100 text-xs">
                  <span className="font-bold text-brand-blue block mb-1">
                    Client&apos;s Submitted Notes:
                  </span>
                  <p className="text-slate-800 leading-relaxed">
                    {selectedLead.additionalDetails}
                  </p>
                </div>
              )}

              {/* Internal Staff Notes Timeline */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold text-navy uppercase tracking-wider">
                  Internal Case Notes ({selectedLead.notes ? selectedLead.notes.length : 0})
                </h4>

                <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
                  {(!selectedLead.notes || selectedLead.notes.length === 0) ? (
                    <p className="text-xs text-text-muted italic">No internal notes added yet.</p>
                  ) : (
                    selectedLead.notes.map((n) => (
                      <div key={n.id} className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs">
                        <div className="flex items-center justify-between text-[10px] text-text-muted mb-1">
                          <span className="font-bold text-navy">{n.author}</span>
                          <span>{new Date(n.createdAt).toLocaleDateString()} {new Date(n.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                        </div>
                        <p className="text-slate-700 leading-relaxed">{n.text}</p>
                      </div>
                    ))
                  )}
                </div>

                {/* Add Note Form */}
                <form onSubmit={handleAddNote} className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="Add an internal note (e.g. Call made, client will send invoices tomorrow)..."
                      value={newNoteText}
                      onChange={(e) => setNewNoteText(e.target.value)}
                      className="flex-1 text-xs p-2 bg-slate-50 border border-surface-border rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-blue"
                    />
                    <button
                      type="submit"
                      disabled={updatingLead || !newNoteText.trim()}
                      className="bg-navy hover:bg-navy-light text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors disabled:opacity-50"
                    >
                      Add Note
                    </button>
                  </div>
                </form>
              </div>

            </div>
          </div>
        )}

      </main>
    </div>
  );
}
"""

with open("src/app/admin/page.tsx", "w") as f:
    f.write(admin_page_ts)

print("Created Admin Dashboard and Admin API successfully!")
