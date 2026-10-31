import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const content = {
  name: "Ashish Kumar",
  monogram: "AK",
  email: "ak8393267@gmail.com",
  availability: "Available for commissions & roles",
  navigation: [
    { label: "Selected Work", href: "#work" },
    { label: "Experience", href: "#experience" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
};

export function Header() {
  return (
    <div className="site-header-container">
      <header className="site-header section-wrap">
        <Link className="wordmark" href="/" aria-label={`${content.name} home`}>
          <span className="wordmark-name">ASHISH</span>
          <span className="wordmark-dot">✦</span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          {content.navigation.map((item) => (
            <a key={item.label} href={item.href} className="nav-item">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <a className="availability" href={`mailto:${content.email}`}>
            <span className="availability-dot" />
            <span className="availability-text">{content.availability}</span>
            <span className="availability-arrow" aria-hidden="true">↗</span>
          </a>
        </div>
      </header>
    </div>
  );
}
