import { ImageResponse } from "next/og";

export const alt = "Xenly Cloud — nowoczesne strony internetowe dla lokalnych firm";

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
          alignItems: "flex-start",
          background: "#070b14",
          color: "white",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "72px",
          position: "relative",
          width: "100%",
        }}
      >
        <div style={{ alignItems: "center", display: "flex", fontSize: 32, fontWeight: 700, gap: 16 }}>
          <div
            style={{
              alignItems: "center",
              background: "#635bff",
              borderRadius: 12,
              display: "flex",
              fontSize: 30,
              height: 52,
              justifyContent: "center",
              width: 52,
            }}
          >
            X
          </div>
          Xenly Cloud
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
          <div style={{ color: "#75b0ff", fontSize: 24, fontWeight: 600, letterSpacing: 4 }}>
            PREMIUMOWE STRONY DLA FIRM LOKALNYCH
          </div>
          <div style={{ fontSize: 72, fontWeight: 700, letterSpacing: -4, lineHeight: 1.05, marginTop: 24 }}>
            Nowoczesne strony internetowe dla lokalnych firm.
          </div>
        </div>
        <div style={{ color: "#a3b1c6", display: "flex", fontSize: 28 }}>
          Indywidualny projekt · Profesjonalne wdrożenie
        </div>
      </div>
    ),
    size,
  );
}
