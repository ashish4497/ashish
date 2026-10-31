"use client";

import { useState } from "react";

const content = {
  role: "Frontend Developer & UI Architect",
  location: "Himachal Pradesh, India",
  headlineStart: "Architecting modern",
  headlineSecond: "web apps with",
  headlineAccent: "distinction",
  introduction:
    "Frontend Developer crafting high-performance, responsive, and visually opulent digital products with 3+ years of experience across React.js, Next.js, Redux, and modern luxury design systems.",
  workLink: "Explore selected work",
  experienceLink: "View experience",
  resumeLink: "Download résumé",
  resumeHref: "https://drive.google.com/file/d/1ACQCI881mI3fXn1RRVHKzr4h_xj0XJku/view?usp=sharing",
  portraitName: "Ashish Kumar",
  portraitAlt: "Ashish Kumar — Hand-drawn sketch illustration in bespoke gallery frame",
  photoCaption: "EDITION 01 · CRAFT & CODE",
  established: "3+ YEARS EXP",
  crestTop: "BESPOKE",
  crestCenter: "DEV",
  crestBottom: "REACT · NEXT.JS",
  projectCount: "01 — 06",
  scrollLabel: "DISCOVER PORTFOLIO",
  techHighlights: ["React.js", "Next.js", "Redux Toolkit", "Tailwind CSS", "React Native", "Clean Architecture"],
};

export function Hero() {
  const [activeTech, setActiveTech] = useState<string | null>(null);

  return (
    <section className="hero section-wrap" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="eyebrow-line" />
          <span className="eyebrow-role">{content.role}</span>
          <span className="eyebrow-location">· {content.location}</span>
        </p>

        <h1 id="hero-title">
          {content.headlineStart}
          <br />
          {content.headlineSecond}{" "}
          <span className="type-accent">
            {content.headlineAccent}
            <span className="accent-period">.</span>
          </span>
        </h1>

        <div className="hero-bottom">
          <p className="hero-intro">{content.introduction}</p>

          <div className="hero-actions">
            <a className="hero-primary-btn" href="#work">
              <span>{content.workLink}</span>
              <span className="btn-arrow" aria-hidden="true">↓</span>
            </a>
            <a
              className="hero-secondary-btn"
              href={content.resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Ashish Kumar's résumé (opens in Google Drive)"
            >
              <span>{content.resumeLink}</span>
              <span className="btn-arrow" aria-hidden="true">↗</span>
            </a>
            <a className="hero-ghost-btn" href="#experience">
              <span>{content.experienceLink}</span>
              <span className="btn-arrow" aria-hidden="true">→</span>
            </a>
          </div>

          <div className="hero-quick-tags" aria-label="Core technologies">
            <span className="quick-tags-label">EXPERTISE:</span>
            {content.techHighlights.map((tech) => (
              <button
                key={tech}
                type="button"
                className={`quick-tag ${activeTech === tech ? "quick-tag-active" : ""}`}
                onClick={() => setActiveTech(activeTech === tech ? null : tech)}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="hero-art-wrapper">
        <div className="hero-art" aria-label={`Portrait of ${content.portraitName}`}>
          <div className="hero-frame-outer" />
          <div className="hero-frame-inner" />
          <div className="hero-photo" role="img" aria-label={content.portraitAlt} />
          <div className="photo-label">
            <span>{content.photoCaption}</span>
            <span className="photo-label-badge">{content.established}</span>
          </div>

          <div className="orbit orbit-one" aria-hidden="true">✦</div>
          <div className="orbit orbit-two" aria-hidden="true">✦</div>

          <div className="hero-crest" aria-hidden="true">
            <span className="crest-top">{content.crestTop}</span>
            <strong className="crest-center">{content.crestCenter}</strong>
            <span className="crest-bottom">{content.crestBottom}</span>
          </div>
        </div>
      </div>

      <div className="hero-index">
        <span className="hero-index-num">COLLECTION {content.projectCount}</span>
        <span className="hero-index-scroll">{content.scrollLabel} ↓</span>
      </div>
    </section>
  );
}
