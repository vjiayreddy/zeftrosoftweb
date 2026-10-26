import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          fontSize: 18,
          fontWeight: 700,
          fontFamily: "Helvetica Neue, Arial, sans-serif",
          borderRadius: 8,
        }}
      >
        Z
      </div>
    ),
    { ...size },
  );
}
