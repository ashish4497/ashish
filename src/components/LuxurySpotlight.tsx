"use client";

import { useEffect, useState } from "react";

export function LuxurySpotlight() {
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let animationFrameId: number;
    const handleMouseMove = (e: MouseEvent) => {
      animationFrameId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 400);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {position && (
        <div
          className="luxury-spotlight"
          style={{
            transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          }}
          aria-hidden="true"
        />
      )}

      {scrolled && (
        <button
          type="button"
          onClick={scrollToTop}
          className="luxury-back-to-top"
          aria-label="Scroll back to top"
        >
          <span className="back-to-top-arrow">↑</span>
          <span className="back-to-top-text">TOP</span>
        </button>
      )}
    </>
  );
}

