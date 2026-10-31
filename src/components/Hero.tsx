"use client";

import { useState } from "react";
import Image from "next/image";

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
  socials: [
    {
      name: "GitHub",
      label: "GitHub",
      href: "https://github.com/ashish4497",
      ariaLabel: "Ashish Kumar on GitHub (opens in new tab)",
    },
    {
      name: "LinkedIn",
      label: "LinkedIn",
      href: "https://linkedin.com/in/ashish4497",
      ariaLabel: "Ashish Kumar on LinkedIn (opens in new tab)",
    },
    {
      name: "Twitter",
      label: "Twitter / X",
      href: "https://x.com/Ashish4497",
      ariaLabel: "Ashish Kumar on X / Twitter (opens in new tab)",
    },
    {
      name: "Codewars",
      label: "Codewars",
      href: "https://www.codewars.com/users/ashish4497",
      ariaLabel: "Ashish Kumar on Codewars (opens in new tab)",
    },
  ],
};

function GitHubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function TwitterIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function CodewarsIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M1.072.142A1.072 1.072 0 0 0 0 1.214v21.572a1.072 1.072 0 0 0 1.072 1.072h21.856A1.072 1.072 0 0 0 24 22.786V1.214A1.072 1.072 0 0 0 22.928.142zm9.736 1.818a.904.904 0 0 1 .828.539.784.784 0 0 1 1.274.493.639.639 0 0 1 .29-.06c.33.008.59.262.625.575a1.322 1.322 0 0 1 .624-.515 1.325 1.325 0 0 1 1.718.571 1.106 1.106 0 0 1 .549-.65 1.106 1.106 0 0 1 .683-.108 1.02 1.02 0 0 1 .553-.893 1.02 1.02 0 0 1 .333-.104.916.916 0 0 1 .425-1.17.919.919 0 0 1 .131-.052.736.736 0 0 1-.09-.134.738.738 0 0 1 .169-.886.661.661 0 0 1-.28-.284.67.67 0 0 1 .149-.693.67.67 0 0 1 .586-.339h.011a.584.584 0 0 1 .53.351.583.583 0 0 1 .019.387l-.02.059a.74.74 0 0 1 .582.723.74.74 0 0 1-.413.666 1.024 1.024 0 0 1-.141 1.273 1.025 1.025 0 0 1-.303.224 1.108 1.108 0 0 1-.237 1.326 1.107 1.107 0 0 1-.806.345 1.328 1.328 0 0 1-1.312.924 1.326 1.326 0 0 1-1.22-.808.639.639 0 0 1-.58.375.786.786 0 0 1-.77-.636.904.904 0 0 1-.818-.242l-7.07 4.23a1.597 1.597 0 0 0-.25.187 1.593 1.593 0 0 0-.464 1.134v5.334a1.2 1.2 0 0 0 1.2 1.2h1.6a1.2 1.2 0 0 0 1.2-1.2v-3.79l5.074-3.036a1.76 1.76 0 0 0 .54.086 1.761 1.761 0 0 0 1.31-.577l2.846-3.136a1.691 1.691 0 0 0 1.12-.426 1.688 1.688 0 0 0 .438-1.127l-.004-.047a1.523 1.523 0 0 0-.395-.995 1.527 1.527 0 0 0-1.077-.477 1.458 1.458 0 0 0-1.01.406l-2.847 3.136a.653.653 0 0 1-.491.216.653.653 0 0 1-.482-.206l-5.045 3.02v-3.69a2.796 2.796 0 0 1 1.282-2.366z" />
    </svg>
  );
}

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

      <div className="hero-art-wrapper w-full flex flex-col items-center lg:items-end justify-center relative my-2 lg:my-0 gap-3 sm:gap-3.5">
        <div
          className="hero-art relative w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[420px] h-[380px] sm:h-[440px] lg:h-[520px] p-2 sm:p-2.5 lg:p-3 rounded-2xl sm:rounded-[22px]"
          aria-label={`Portrait of ${content.portraitName}`}
        >
          {/* Framed Canvas */}
          <div className="hero-photo-frame relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden">
            <div
              className={`hero-photo ${portraitMode === "sketch" ? "is-sketch" : "is-photo"} absolute inset-0`}
              role="img"
              aria-label={
                portraitMode === "sketch"
                  ? content.portraitAlt
                  : "Ashish Kumar — Professional photography portrait"
              }
            >
              <Image
                src={portraitMode === "sketch" ? "/sketch-avatar.jpg" : "/profile.jpg"}
                alt={
                  portraitMode === "sketch"
                    ? content.portraitAlt
                    : "Ashish Kumar — Professional photography portrait"
                }
                fill
                priority
                sizes="(max-width: 640px) 360px, (max-width: 1024px) 400px, 420px"
                className={`object-cover ${
                  portraitMode === "sketch" ? "object-[center_18%]" : "object-[center_20%]"
                } select-none pointer-events-none transition-all duration-700`}
              />
            </div>
            {/* Elegant Luxury Overlays over image */}
            <div className="hero-photo-overlay absolute inset-0 z-[2] pointer-events-none" />
            <div className="hero-photo-vignette absolute inset-0 z-[2] pointer-events-none" />
          </div>

          {/* Interactive Portrait Toggle (First Tab: Sketch, Second Tab: Photo) */}
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

        {/* Social Media Links Dock - Directly Below Profile Image */}
        <div
          className="hero-social-dock w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[420px] grid grid-cols-2 min-[440px]:grid-cols-4 gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-xl sm:rounded-2xl border border-[var(--line)] bg-[var(--card-bg)] backdrop-blur-md shadow-sm transition-all"
          aria-label="Direct social media profiles"
        >
          {content.socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link group flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-2.5 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-medium border border-transparent hover:border-transparent hover:bg-[var(--chip-bg)] transition-all duration-300 text-[var(--foreground-muted)] hover:text-[var(--gold)]"
              aria-label={social.ariaLabel}
            >
              {social.name === "GitHub" && (
                <GitHubIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current transition-transform duration-300 group-hover:scale-110 flex-shrink-0" />
              )}
              {social.name === "LinkedIn" && (
                <LinkedInIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current transition-transform duration-300 group-hover:scale-110 flex-shrink-0" />
              )}
              {social.name === "Twitter" && (
                <TwitterIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current transition-transform duration-300 group-hover:scale-110 flex-shrink-0" />
              )}
              {social.name === "Codewars" && (
                <CodewarsIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current transition-transform duration-300 group-hover:scale-110 flex-shrink-0" />
              )}
              <span className="font-sans font-medium text-[10px] sm:text-[11px] text-[var(--foreground)] group-hover:text-[var(--gold)] transition-colors whitespace-nowrap">
                {social.label}
              </span>
              <span
                className="text-[9px] sm:text-[10px] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[var(--gold)]"
                aria-hidden="true"
              >
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="hero-index relative mt-4 pt-3 lg:absolute lg:mt-0 lg:pt-0 lg:bottom-4.5 lg:left-0 lg:right-0 flex justify-between">
        <span className="hero-index-num">COLLECTION {content.projectCount}</span>
        <span className="hero-index-scroll">{content.scrollLabel} ↓</span>
      </div>
    </section>
  );
}
