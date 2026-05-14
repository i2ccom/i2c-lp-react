import React from "react";

const aiAppHighlights = [
  "AI-first workflow assistant designed for business reporting and operational visibility.",
  "Fits cloud-native teams that need faster analysis, summaries, and next-step recommendations.",
  "Built in the same practical product direction shown on i2cw.com: usable AI apps, not AI demos."
];

export default function AiAppsSection() {
  return (
    <section className="section" id="ai-apps">
      <div className="container">
        <div className="columns is-vcentered is-variable is-7">
          <div className="column is-5">
            <p className="has-text-weight-semibold" style={{ color: "#2563eb" }}>
              AI Apps
            </p>
            <h2 className="title is-2" style={{ marginTop: "0.5rem" }}>
              AI Report
            </h2>
            <p className="subtitle is-5" style={{ color: "#4b5563" }}>
              AI-powered reporting for faster decisions, cleaner summaries, and
              business-ready outputs.
            </p>
            <div className="content" style={{ color: "#374151" }}>
              <p>
                The live i2cw home page highlights AI Apps as part of the
                company&apos;s product direction. This section brings that idea into
                the landing page with a focused showcase for AI Report.
              </p>
              <ul>
                {aiAppHighlights.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                Everything is positioned around practical business delivery:
                clear outputs, cloud-ready deployment, and usable AI in day-to-day
                operations.
              </p>
            </div>
          </div>
          <div className="column is-7">
            <div
              className="card"
              style={{ borderRadius: "24px", overflow: "hidden", boxShadow: "0 24px 60px rgba(37, 99, 235, 0.12)" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "1.25rem 1.5rem",
                  borderBottom: "1px solid #e5e7eb",
                  background: "linear-gradient(180deg, #ffffff 0%, #eff6ff 100%)"
                }}
              >
                <img
                  src="/images/ai-apps/aiReport/logo.png"
                  alt="AI Report logo"
                  style={{ width: "64px", height: "64px", objectFit: "contain", borderRadius: "16px", background: "#fff" }}
                />
                <div>
                  <h3 className="title is-4" style={{ marginBottom: "0.25rem" }}>
                    aiReport
                  </h3>
                  <p style={{ margin: 0, color: "#6b7280" }}>
                    AI app showcase inspired by the live i2cw home page.
                  </p>
                </div>
              </div>
              <div style={{ padding: "1rem", background: "#f8fafc" }}>
                <img
                  src="/images/ai-apps/aiReport/screenshot_01.jpg"
                  alt="AI Report screenshot"
                  style={{ width: "100%", display: "block", borderRadius: "18px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}