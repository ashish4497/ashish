"use client";

import { useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  if (typeof window === "undefined" || typeof MutationObserver === "undefined") {
    return () => {};
  }

  const observer = new MutationObserver((mutations) => {
    for (const m of mutations) {
      if (m.type === "attributes" && m.attributeName === "data-theme") {
        callback();
      }
    }
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });

  return () => {
    observer.disconnect();
  };
}

function getSnapshot(): "dark" | "light" {
  if (typeof document === "undefined") {
    return "dark";
  }
  const current = document.documentElement.getAttribute("data-theme");
  return current === "light" ? "light" : "dark";
}

function getServerSnapshot(): "dark" | "light" {
  return "dark";
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme);
    try {
      localStorage.setItem("portfolio-theme", nextTheme);
    } catch {
      // Ignore storage errors
    }
  };

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      title={`Current mode: ${theme === "dark" ? "Noir (Dark)" : "Parchment (Light)"}. Click to toggle.`}
    >
      <span className="theme-toggle-track" aria-hidden="true">
        <span className={`theme-toggle-thumb ${theme === "light" ? "is-light" : "is-dark"}`}>
          {theme === "light" ? (
            <svg
              className="theme-icon sun"
              viewBox="0 0 24 24"
              width="13"
              height="13"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="4" fill="currentColor" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>
          ) : (
            <svg
              className="theme-icon moon"
              viewBox="0 0 24 24"
              width="13"
              height="13"
              fill="currentColor"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </span>
      </span>
      <span className="theme-toggle-label">
        {theme === "dark" ? "NOIR" : "LIGHT"}
      </span>
    </button>
  );
}
