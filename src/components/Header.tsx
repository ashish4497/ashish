"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const content = {
  name: "Ashish Kumar",
  monogram: "AK",
  email: "ak8393267@gmail.com",
  availability: "Available for commissions & roles",
  resumeHref: "https://drive.google.com/file/d/1ACQCI881mI3fXn1RRVHKzr4h_xj0XJku/view?usp=sharing",
  navigation: [
    { num: "01", label: "Selected Work", href: "#work" },
    { num: "02", label: "Experience", href: "#experience" },
    { num: "03", label: "About", href: "#about" },
    { num: "04", label: "Contact", href: "#contact" },
  ],
};

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock website scrolling behind full-screen menu
  useEffect(() => {
    if (isOpen) {
      const originalHtmlOverflow = document.documentElement.style.overflow;
      const originalBodyOverflow = document.body.style.overflow;
      const originalTouchAction = document.body.style.touchAction;

      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";

      return () => {
        document.documentElement.style.overflow = originalHtmlOverflow;
        document.body.style.overflow = originalBodyOverflow;
        document.body.style.touchAction = originalTouchAction;
      };
    }
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Sticky Main Header */}
      <div className="site-header-container sticky top-0 z-[100] w-full">
        <header className="site-header section-wrap flex items-center justify-between h-[72px] md:h-[80px] lg:h-[88px]">
          <Link
            className="wordmark inline-flex items-center gap-1.5 text-base sm:text-lg lg:text-xl font-bold tracking-[0.18em] lg:tracking-[0.22em]"
            href="/"
            aria-label={`${content.name} home`}
          >
            <span className="wordmark-name">ASHISH</span>
            <span className="wordmark-dot text-[11px]">✦</span>
          </Link>

          {/* Desktop Navigation: Hidden on mobile & tablet, visible on desktop */}
          <nav className="main-nav hidden md:flex items-center gap-2 lg:gap-6" aria-label="Main navigation">
            {content.navigation.map((item) => (
              <a key={item.label} href={item.href} className="nav-item">
                {item.label}
              </a>
            ))}
          </nav>

          {/* Header Actions */}
          <div className="header-actions flex items-center gap-2 sm:gap-3">
            <ThemeToggle />

            {/* Availability pill: hidden on small mobile, compact on tablet, full on desktop */}
            <a
              className="availability hidden sm:inline-flex items-center gap-2"
              href={`mailto:${content.email}`}
              title="Available for commissions & full-time roles"
            >
              <span className="availability-dot" />
              <span className="availability-text hidden lg:inline">{content.availability}</span>
              <span className="availability-arrow" aria-hidden="true">↗</span>
            </a>

            {/* Mobile & Tablet Menu Toggle Button: Visible on mobile & tablet, hidden on desktop */}
            <button
              type="button"
              className={`mobile-menu-btn flex md:hidden flex-col items-center justify-center ${isOpen ? "is-open" : ""}`}
              onClick={() => setIsOpen((prev) => !prev)}
              aria-expanded={isOpen}
              aria-controls="mobile-nav-fullscreen"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <span className="hamburger-line line-1" />
              <span className="hamburger-line line-2" />
            </button>
          </div>
        </header>
      </div>

      {/* Full-Screen Mobile & Tablet Navigation Menu */}
      <div
        id="mobile-nav-fullscreen"
        className={`mobile-drawer-fullscreen md:hidden ${isOpen ? "drawer-open" : ""}`}
        aria-hidden={!isOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
      >
        {/* Full-Screen Header with Close Button */}
        <div className="mobile-drawer-header">
          <div className="section-wrap flex items-center justify-between w-full h-full">
            <Link
              className="wordmark inline-flex items-center gap-1.5 text-base sm:text-lg font-bold tracking-[0.18em]"
              href="/"
              onClick={handleLinkClick}
              aria-label={`${content.name} home`}
            >
              <span className="wordmark-name">ASHISH</span>
              <span className="wordmark-dot text-[11px]">✦</span>
            </Link>

            <div className="flex items-center gap-2 sm:gap-3">
              <ThemeToggle />
              <button
                type="button"
                className="mobile-menu-close-btn"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>
          </div>
        </div>

        {/* Full-Screen Menu Content */}
        <div className="mobile-drawer-body section-wrap flex flex-col justify-between">
          <div className="flex flex-col gap-5 sm:gap-6">
            <div className="mobile-drawer-top flex justify-between items-center pb-3">
              <span className="mobile-drawer-eyebrow">NAVIGATION</span>
              <span className="mobile-drawer-edition">EDITION 2026</span>
            </div>

            <nav className="mobile-nav-links flex flex-col gap-2.5" aria-label="Mobile navigation">
              {content.navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="mobile-nav-item flex items-center justify-between p-3.5 sm:p-4 rounded-xl"
                  onClick={handleLinkClick}
                >
                  <div className="mobile-nav-item-left flex items-center gap-3 sm:gap-4">
                    <span className="mobile-nav-num">{item.num}</span>
                    <span className="mobile-nav-label text-lg sm:text-xl">{item.label}</span>
                  </div>
                  <span className="mobile-nav-arrow text-base" aria-hidden="true">→</span>
                </a>
              ))}
            </nav>

            <div className="mobile-drawer-actions flex flex-col gap-3 mt-1">
              <a
                className="mobile-resume-btn w-full justify-center"
                href={content.resumeHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
              >
                <span>Download Résumé</span>
                <span className="btn-arrow" aria-hidden="true">↗</span>
              </a>

              <a
                className="mobile-availability-card p-3.5 sm:p-4 rounded-xl"
                href={`mailto:${content.email}`}
                onClick={handleLinkClick}
              >
                <div className="mobile-availability-header flex items-center gap-2">
                  <span className="availability-dot" />
                  <span className="mobile-availability-status">AVAILABLE FOR COMMISSIONS</span>
                </div>
                <span className="mobile-availability-email text-xs sm:text-sm mt-1">{content.email} ↗</span>
              </a>
            </div>
          </div>

          <div className="mobile-drawer-footer flex justify-between items-center text-[8px] sm:text-[9px] pt-4 mt-6">
            <span>FRONTEND ARCHITECT & UI DEVELOPER</span>
            <span className="mobile-drawer-location">HIMACHAL PRADESH · INDIA</span>
          </div>
        </div>
      </div>
    </>
  );
}
