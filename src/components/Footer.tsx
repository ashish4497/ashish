"use client";

import { useSyncExternalStore } from "react";

const content = {
  name: "Ashish Kumar",
  logo: "ASHISH",
  tagline: "Bespoke Frontend Architecture & Digital Craftsmanship.",
  linkedin: "https://linkedin.com/in/ashish4497",
  github: "https://github.com/ashish4497",
  x: "https://x.com/Ashish4497",
  email: "mailto:ak8393267@gmail.com",
  resumeHref: "https://drive.google.com/file/d/1ACQCI881mI3fXn1RRVHKzr4h_xj0XJku/view?usp=sharing",
};

const emptySubscribe = () => () => {};

export function Footer() {
  const currentYear = useSyncExternalStore(
    emptySubscribe,
    () => new Date().getFullYear(),
    () => 2025
  );

  return (
    <footer className="site-footer section-wrap">
      <div className="footer-brand">
        <a className="wordmark" href="#top" aria-label={`Back to top, ${content.name}`}>
          <span className="wordmark-name">{content.logo}</span>
          <span className="wordmark-dot">✦</span>
        </a>
        <p>{content.tagline}</p>
      </div>

      <div className="footer-links">
        <a href={content.linkedin} target="_blank" rel="noreferrer">
          LinkedIn ↗
        </a>
        <a href={content.github} target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
        <a href={content.x} target="_blank" rel="noreferrer">
          X ↗
        </a>
        <a
          href={content.resumeHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download Ashish Kumar's résumé (opens in Google Drive)"
        >
          Résumé ↗
        </a>
        <a href={content.email}>Direct Email ↗</a>
        <span className="footer-copyright">© {currentYear} {content.name}</span>
      </div>
    </footer>
  );
}
