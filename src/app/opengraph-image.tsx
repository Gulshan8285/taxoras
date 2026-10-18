import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Taxoras Advisory & Compliance - Affordable Accounting, GST & Tax Services";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#120D0A",
          padding: "48px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle gradient overlay */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "600px",
            height: "600px",
            background: "radial-gradient(circle, rgba(217,119,6,0.15) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Top badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            backgroundColor: "rgba(217,119,6,0.12)",
            border: "1px solid rgba(217,119,6,0.25)",
            borderRadius: "100px",
            padding: "6px 14px",
            width: "auto",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              backgroundColor: "#D97706",
              borderRadius: "50%",
            }}
          />
          <span style={{ color: "#E5A962", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em" }}>
            PAN-INDIA • AFFORDABLE • TRANSPARENT
          </span>
        </div>

        {/* Logo Row */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px", marginTop: "32px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              background: "linear-gradient(135deg, #D97706 0%, #2E1C12 100%)",
              borderRadius: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "26px",
              fontWeight: 900,
            }}
          >
            T
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", alignItems: "baseline" }}>
              <span style={{ color: "#FAF4EF", fontSize: "32px", fontWeight: 900, letterSpacing: "-0.02em" }}>
                Tax
              </span>
              <span style={{ color: "#D97706", fontSize: "32px", fontWeight: 900, letterSpacing: "-0.02em" }}>
                oras
              </span>
            </div>
            <span
              style={{
                color: "#B8A99C",
                fontSize: "9px",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              Advisory & Compliance
            </span>
          </div>
        </div>

        {/* Main headline */}
        <div style={{ display: "flex", flexDirection: "column", marginTop: "28px", gap: "12px" }}>
          <h1
            style={{
              color: "#FAF4EF",
              fontSize: "42px",
              fontWeight: 900,
              lineHeight: "1.05",
              letterSpacing: "-0.03em",
              margin: 0,
              maxWidth: "760px",
            }}
          >
            Affordable Accounting, GST &amp; Tax Compliance for Indian Businesses
          </h1>
          <p
            style={{
              color: "#D1C3B7",
              fontSize: "16px",
              lineHeight: "1.5",
              margin: 0,
              maxWidth: "680px",
            }}
          >
            GST Registration • GSTR-1 & 3B Filing • TDS 24Q/26Q • Daily Bookkeeping • BRS • Udyam • ITR Filing
          </p>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "auto",
            paddingTop: "20px",
            borderTop: "1px solid rgba(46,34,27,0.8)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <span style={{ color: "#B8A99C", fontSize: "12px" }}>www.taxoras.online</span>
            <span style={{ color: "#2E221B", fontSize: "12px" }}>•</span>
            <span style={{ color: "#E5A962", fontSize: "12px", fontWeight: 600 }}>+91 88103 81949</span>
            <span style={{ color: "#2E221B", fontSize: "12px" }}>•</span>
            <span style={{ color: "#B8A99C", fontSize: "12px" }}>contact@taxoras.online</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ color: "#B8A99C", fontSize: "11px" }}>New Delhi • Pan-India Digital</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
