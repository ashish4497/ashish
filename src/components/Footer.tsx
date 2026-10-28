"use client";

import { useSyncExternalStore } from "react";

const content = {
  name: "Ashish Kumar",
  logo: "ashish",
  tagline: "Frontend Developer · Crafting responsive, high-performance web experiences.",
  linkedin: "https://linkedin.com/in/ashish4497",
  github: "https://github.com/ashish4497",
  x: "https://x.com/Ashish4497",
  email: "mailto:ak8393267@gmail.com",
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
      <a className="wordmark" href="#top" aria-label={`Back to top, ${content.name}`}>
        {content.logo}<span className="wordmark-dot">.</span>
      </a>
      <p>{content.tagline}</p>
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
        <a href={content.email}>Email ↗</a>
        <span>© {currentYear} {content.name}</span>
      </div>
    </footer>
  );
}
