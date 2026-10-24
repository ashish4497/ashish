import Link from "next/link";

const content = {
  name: "Ashish Kumar",
  logo: "ashish",
  email: "ak8393267@gmail.com",
  availability: "Available for opportunities",
  navigation: [
    { label: "Work", href: "/#work" },
    { label: "Experience", href: "/experience" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
  ],
};

export function Header() {
  return (
    <div className="site-header-container">
      <header className="site-header section-wrap">
        <Link className="wordmark" href="/" aria-label={`${content.name} home`}>
          {content.logo}<span className="wordmark-dot">.</span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          {content.navigation.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="availability" href={`mailto:${content.email}`}>
          <span className="availability-dot" /> {content.availability}
          <span className="availability-arrow" aria-hidden="true">↗</span>
        </a>
      </header>
    </div>
  );
}
