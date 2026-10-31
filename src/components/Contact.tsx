"use client";

import { useState } from "react";

const content = {
  kicker: "AVAILABLE FOR OPPORTUNITIES",
  headlineFirst: "Let’s build",
  headlineSecond: "something",
  headlineAccent: "great.",
  message:
    "Whether you have an ambitious product to ship, a full-time engineering opportunity, or just want to discuss frontend ideas — my inbox and phone are always open.",
  email: "ak8393267@gmail.com",
  phone: "+91-9805468955",
  location: "Himachal Pradesh, India",
  buttonLabel: "Send an email",
  resumeHref: "https://drive.google.com/file/d/1ACQCI881mI3fXn1RRVHKzr4h_xj0XJku/view?usp=sharing",
};

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(content.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="contact-section section-wrap" id="contact" aria-labelledby="contact-title">
      <div className="contact-kicker">
        <span className="availability-dot" /> {content.kicker}
      </div>
      <h2 id="contact-title">
        {content.headlineFirst}
        <br />
        {content.headlineSecond} <span>{content.headlineAccent}</span>
      </h2>

      <div className="contact-bottom">
        <div>
          <p className="contact-message">{content.message}</p>
          <div className="contact-card-box">
            <div className="contact-detail-row">
              <span className="contact-detail-label">Email</span>
              <a className="contact-detail-val" href={`mailto:${content.email}`}>
                {content.email}
              </a>
            </div>
            <div className="contact-detail-row">
              <span className="contact-detail-label">Phone</span>
              <a className="contact-detail-val" href={`tel:${content.phone.replace(/[^0-9+]/g, "")}`}>
                {content.phone}
              </a>
            </div>
            <div className="contact-detail-row">
              <span className="contact-detail-label">Location</span>
              <span className="contact-detail-val">{content.location}</span>
            </div>
          </div>
        </div>

        <div className="contact-buttons-col">
          <a className="contact-button" href={`mailto:${content.email}`}>
            {content.buttonLabel} <span aria-hidden="true">↗</span>
          </a>
          <a
            className="contact-button-secondary"
            href={content.resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Ashish Kumar's résumé (opens in Google Drive)"
            style={{ textAlign: "center" }}
          >
            <span>Download résumé ↗</span>
          </a>
          <button
            type="button"
            className="contact-button-secondary"
            onClick={handleCopyEmail}
            aria-label="Copy email address to clipboard"
          >
            {copied ? (
              <span style={{ color: "var(--accent)" }}>Email copied! ✓</span>
            ) : (
              <span>Copy email address</span>
            )}
          </button>
        </div>
      </div>

      <div className="contact-spark" aria-hidden="true">✳</div>
    </section>
  );
}
