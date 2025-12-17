import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

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
          justifyContent: "center",
          padding: 80,
          backgroundColor: "#0a0a0a",
          color: "#ffffff",
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
        }}
      >
        {/* top label */}
        <div
          style={{
            display: "flex",
            fontSize: 32,
            opacity: 0.6,
            marginBottom: 24,
          }}
        >
          subhraneel goswami.
        </div>

        {/* headline */}
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1.05,
          }}
        >
          <span>building in the&nbsp;</span>
          <span
            style={{
              fontStyle: "italic",
              opacity: 0.4,
            }}
          >
            shadows
          </span>
        </div>

        {/* subtitle */}
        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 24,
            opacity: 0.5,
          }}
        >
          portfolio under construction
        </div>
      </div>
    ),
    size
  );
}
