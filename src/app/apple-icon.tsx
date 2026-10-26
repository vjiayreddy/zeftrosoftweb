import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#030712",
          color: "#98FF03",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 96,
          fontWeight: 700,
          fontFamily: "Helvetica Neue, Arial, sans-serif",
          borderRadius: 32,
        }}
      >
        Z
      </div>
    ),
    { ...size },
  );
}
