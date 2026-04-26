import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        background: "#111111",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "5px",
      }}
    >
      <span
        style={{
          color: "#C8A96A",
          fontSize: "13px",
          fontWeight: "700",
          letterSpacing: "1.5px",
          fontFamily: "serif",
        }}
      >
        MK
      </span>
    </div>,
    { ...size },
  );
}
