"use client";

import { useState } from "react";

const content = {
  kicker: "EXCLUSIVE ENGAGEMENTS & OPPORTUNITIES",
  headlineFirst: "Let’s create",
  headlineSecond: "something",
  headlineAccent: "monumental.",
  message:
    "Whether commissioning a flagship digital product, exploring senior frontend opportunities, or architecting next-generation user experiences — I welcome direct dialogue with founders, product leaders, and design ateliers.",
  email: "ak8393267@gmail.com",
  phone: "+91-9805468955",
  location: "Himachal Pradesh, India",
  buttonLabel: "Dispatch Email",
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
              <span className="contact-detail-label">Direct Inquiries</span>
              <a className="contact-detail-val" href={`mailto:${content.email}`}>
                {content.email}
              </a>
            </div>
            <div className="contact-detail-row">
              <span className="contact-detail-label">Telephone</span>
              <a className="contact-detail-val" href={`tel:${content.phone.replace(/[^0-9+]/g, "")}`}>
                {content.phone}
              </a>
            </div>
            <div className="contact-detail-row">
              <span className="contact-detail-label">Atelier Base</span>
              <span className="contact-detail-val">{content.location}</span>
            </div>
          </div>
        </div>

        <div className="contact-buttons-col flex flex-col items-stretch w-full sm:w-auto gap-3.5">
          <a className="contact-button w-full sm:w-auto justify-center" href={`mailto:${content.email}`}>
            <span>{content.buttonLabel}</span>
            <span aria-hidden="true">↗</span>
          </a>
          <a
            className="contact-button-secondary w-full sm:w-auto justify-center"
            href={content.resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Ashish Kumar's complete résumé (opens in Google Drive)"
          >
            <span>Download Résumé</span>
            <span aria-hidden="true">↗</span>
          </a>
          <button
            type="button"
            className="contact-button-ghost w-full sm:w-auto justify-center text-center"
            onClick={handleCopyEmail}
            aria-label="Copy email address to clipboard"
          >
            {copied ? (
              <span style={{ color: "var(--gold)" }}>Address Copied to Clipboard ✦</span>
            ) : (
              <span>Copy Direct Email</span>
            )}
          </button>
        </div>
      </div>

      <div className="contact-spark" aria-hidden="true">✦</div>
    </section>
  );
}
