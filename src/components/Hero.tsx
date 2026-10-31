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
  const [portraitMode, setPortraitMode] = useState<"sketch" | "photo">("sketch");

  return (
    <section
      className="hero section-wrap grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] items-center gap-8 sm:gap-12 lg:gap-16 pt-4 sm:pt-6 lg:pt-10 pb-12 sm:pb-16 lg:pb-20 relative min-h-0 lg:min-h-[calc(100vh-100px)]"
      id="top"
      aria-labelledby="hero-title"
    >
      <div className="hero-copy relative z-[2]">
        <p className="eyebrow flex flex-wrap items-center gap-2 sm:gap-3">
          <span className="eyebrow-line w-5 sm:w-7" />
          <span className="eyebrow-role">{content.role}</span>
          <span className="eyebrow-location">· {content.location}</span>
        </p>

        <h1
          id="hero-title"
          className="text-[clamp(2.3rem,9vw,5.5rem)] lg:text-[clamp(62px,7.8vw,116px)] leading-[0.98] sm:leading-[0.92] my-4 sm:my-7 font-normal tracking-[-0.015em]"
        >
          {content.headlineStart}
          <br />
          {content.headlineSecond}{" "}
          <span className="type-accent">
            {content.headlineAccent}
            <span className="accent-period">.</span>
          </span>
        </h1>

        <div className="hero-bottom flex flex-col gap-5 sm:gap-7 max-w-full lg:max-w-[540px]">
          <p className="hero-intro text-[14.5px] sm:text-base leading-relaxed">{content.introduction}</p>

          <div className="hero-actions flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 w-full">
            <a className="hero-primary-btn w-full sm:w-auto justify-center" href="#work">
              <span>{content.workLink}</span>
              <span className="btn-arrow" aria-hidden="true">↓</span>
            </a>
            <a
              className="hero-secondary-btn w-full sm:w-auto justify-center"
              href={content.resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Ashish Kumar's résumé (opens in Google Drive)"
            >
              <span>{content.resumeLink}</span>
              <span className="btn-arrow" aria-hidden="true">↗</span>
            </a>
            <a className="hero-ghost-btn w-full sm:w-auto justify-center text-center" href="#experience">
              <span>{content.experienceLink}</span>
              <span className="btn-arrow" aria-hidden="true">→</span>
            </a>
          </div>

          <div className="hero-quick-tags flex flex-wrap items-center gap-1.5 sm:gap-2 pt-1" aria-label="Core technologies">
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

      <div className="hero-art-wrapper w-full flex justify-center lg:justify-end relative my-2 lg:my-0">
        <div
          className="hero-art relative w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[420px] h-[380px] sm:h-[440px] lg:h-[520px] p-2 sm:p-2.5 lg:p-3 rounded-2xl sm:rounded-[22px]"
          aria-label={`Portrait of ${content.portraitName}`}
        >
          {/* Framed Canvas */}
          <div className="hero-photo-frame relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden">
            <div
              className={`hero-photo ${portraitMode === "sketch" ? "is-sketch" : "is-photo"}`}
              role="img"
              aria-label={
                portraitMode === "sketch"
                  ? content.portraitAlt
                  : "Ashish Kumar — Professional photography portrait"
              }
            />
            <div className="hero-photo-vignette" />
          </div>

          {/* Interactive Portrait Toggle (Sketch vs Photography) */}
          <div className="hero-portrait-switch absolute top-2.5 left-2.5 sm:top-5 sm:left-5 z-10" role="group" aria-label="Portrait style selector">
            <button
              type="button"
              className={`portrait-switch-btn ${portraitMode === "sketch" ? "active" : ""}`}
              onClick={() => setPortraitMode("sketch")}
              title="Display artistic sketch portrait"
            >
              ✦ Sketch
            </button>
            <button
              type="button"
              className={`portrait-switch-btn ${portraitMode === "photo" ? "active" : ""}`}
              onClick={() => setPortraitMode("photo")}
              title="Display professional photograph"
            >
              📷 Photo
            </button>
          </div>

          {/* Bottom Luxury Caption Pill */}
          <div className="photo-label absolute left-2 right-2 bottom-2 sm:left-5 sm:right-5 sm:bottom-5 z-10">
            <div className="photo-label-left flex items-center gap-1.5 sm:gap-2 overflow-hidden truncate">
              <span className="photo-status-dot flex-shrink-0" />
              <span className="truncate">{content.photoCaption}</span>
            </div>
            <span className="photo-label-badge flex-shrink-0">{content.established}</span>
          </div>

          {/* Orbits */}
          <div className="orbit orbit-one" aria-hidden="true">✦</div>
          <div className="orbit orbit-two" aria-hidden="true">✦</div>

          {/* Royal Atelier Seal Crest */}
          <div
            className="hero-crest absolute -top-2.5 -right-0.5 sm:-top-3.5 sm:-right-2 lg:-top-4 lg:-right-4 z-12 w-[66px] h-[66px] sm:w-[76px] sm:h-[76px] lg:w-[92px] lg:h-[92px]"
            aria-hidden="true"
          >
            <span className="crest-top">{content.crestTop}</span>
            <strong className="crest-center">{content.crestCenter}</strong>
            <span className="crest-bottom">{content.crestBottom}</span>
          </div>
        </div>
      </div>

      <div className="hero-index relative mt-4 pt-3 lg:absolute lg:mt-0 lg:pt-0 lg:bottom-4.5 lg:left-0 lg:right-0 flex justify-between">
        <span className="hero-index-num">COLLECTION {content.projectCount}</span>
        <span className="hero-index-scroll">{content.scrollLabel} ↓</span>
      </div>
    </section>
  );
}
