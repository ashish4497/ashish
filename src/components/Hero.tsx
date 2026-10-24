import Link from "next/link";

const content = {
  role: "Frontend Developer",
  location: "Himachal Pradesh, India",
  headlineStart: "I build modern",
  headlineSecond: "web apps with",
  headlineAccent: "precision",
  introduction:
    "Frontend Developer with 3+ years of experience designing and building user-friendly, responsive, and visually appealing web applications in React.js, Next.js, and modern frontend ecosystems.",
  workLink: "Explore selected work",
  experienceLink: "View experience",
  portraitName: "Ashish Kumar",
  portraitAlt: "Ashish Kumar — Hand-drawn sketch illustration",
  photoCaption: "SKETCH EDITION · DEV",
  established: "3+ YEARS EXP",
  stickerTop: "FRONTEND",
  stickerCenter: "DEV",
  stickerBottom: "REACT · NEXT.JS",
  projectCount: "01 — 06",
  scrollLabel: "SCROLL TO EXPLORE",
  techHighlights: ["React.js", "Next.js", "Redux", "Tailwind CSS", "React Native"],
};

export function Hero() {
  return (
    <section className="hero section-wrap" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="eyebrow-line" /> {content.role}{" "}
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
              {content.workLink} <span aria-hidden="true">↓</span>
            </a>
            <Link className="hero-secondary-btn" href="/experience">
              {content.experienceLink} <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="hero-quick-tags" aria-label="Core technologies">
            {content.techHighlights.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="hero-art" aria-label={`Portrait of ${content.portraitName}`}>
        <div className="hero-photo" role="img" aria-label={content.portraitAlt} />
        <div className="photo-label">
          <span>{content.photoCaption}</span>
          <span>{content.established}</span>
        </div>
        <div className="orbit orbit-one" aria-hidden="true">✳</div>
        <div className="orbit orbit-two" aria-hidden="true">✳</div>
        <div className="hero-sticker" aria-hidden="true">
          <span>{content.stickerTop}</span>
          <strong>{content.stickerCenter}</strong>
          <span>{content.stickerBottom}</span>
        </div>
      </div>
      <div className="hero-index">
        <span>{content.projectCount}</span>
        <span>{content.scrollLabel} ↓</span>
      </div>
    </section>
  );
}
