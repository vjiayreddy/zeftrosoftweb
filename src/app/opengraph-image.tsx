import { ImageResponse } from "next/og";

export const alt = "Zeftrosoft — Engineering technology for real business problems.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: "64px",
          fontFamily: "Helvetica Neue, Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              background: "#0f62fe",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 600,
            }}
          >
            Z
          </div>
          <div style={{ fontSize: 28, fontWeight: 600, color: "#161616" }}>
            Zeftrosoft
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 56,
              fontWeight: 300,
              color: "#161616",
              lineHeight: 1.15,
              maxWidth: 900,
              letterSpacing: -1,
            }}
          >
            Engineering technology for real business problems.
          </div>
          <div style={{ fontSize: 24, color: "#525252", maxWidth: 720 }}>
            Software, AI systems, and connected devices for businesses and
            organisations.
          </div>
        </div>
        <div
          style={{
            height: 8,
            width: 160,
            background: "#0f62fe",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
