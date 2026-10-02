"use client";

// Last-resort boundary: it replaces the whole document (layout included), so it is
// self-contained, with no providers or translations available. Neutral, bilingual text.
export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="it">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0b0d",
          color: "#f5f5f7",
          fontFamily: "system-ui, -apple-system, Segoe UI, sans-serif",
          textAlign: "center",
          padding: 24,
        }}
      >
        <div style={{ maxWidth: 440 }}>
          <h1 style={{ fontSize: 26, margin: "0 0 12px" }}>Qualcosa è andato storto · Something went wrong</h1>
          <p style={{ color: "#9a9aa0", lineHeight: 1.6, margin: "0 0 24px" }}>
            Riprova tra un attimo. · Please try again in a moment.
          </p>
          <button
            type="button"
            onClick={reset}
            style={{ background: "#16d19d", color: "#04231a", border: 0, borderRadius: 999, padding: "12px 24px", fontSize: 15, fontWeight: 600, cursor: "pointer" }}
          >
            Riprova · Retry
          </button>
        </div>
      </body>
    </html>
  );
}
