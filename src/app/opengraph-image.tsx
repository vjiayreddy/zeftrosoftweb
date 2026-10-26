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
          background: "#f3f4f6",
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
              background: "#030712",
              color: "#98FF03",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 600,
              borderRadius: 12,
            }}
          >
            Z
          </div>
          <div style={{ fontSize: 28, fontWeight: 600, color: "#030712" }}>
            Zeftrosoft
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 56,
              fontWeight: 500,
              color: "#030712",
              lineHeight: 1.1,
              maxWidth: 900,
              letterSpacing: -2,
              textTransform: "uppercase",
            }}
          >
            Engineering technology for real business problems.
          </div>
          <div style={{ fontSize: 24, color: "#6b7280", maxWidth: 720 }}>
            Software, AI systems, and connected devices for businesses and
            organisations.
          </div>
        </div>
        <div
          style={{
            height: 8,
            width: 160,
            background: "#98FF03",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
