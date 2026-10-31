const content = {
  eyebrow: "The journey so far",
  titleFirst: "Experience",
  titleAccent: "that adds up.",
  introduction:
    "3+ years of experience engineering responsive, user-friendly, and high-performance web and mobile applications with React.js, Next.js, and modern frontend architecture.",
  resumeLabel: "Download résumé",
  resumeHref: "https://drive.google.com/file/d/1ACQCI881mI3fXn1RRVHKzr4h_xj0XJku/view?usp=sharing",
  stats: [
    { value: "03+", label: "YEARS EXPERIENCE" },
    { value: "10+", label: "PROJECTS DELIVERED" },
    { value: "03", label: "TECH COMPANIES" },
  ],
  timelineLabel: "WORK HISTORY",
  roles: [
    {
      period: "08/2025 — PRESENT",
      type: "FRONTEND DEVELOPER",
      title: "Frontend Developer",
      company: "WebHopers · Zirakpur, India",
      description:
        "Designing and developing intuitive, responsive, and high-performance web interfaces using React.js, Next.js, Redux, Context API, Tailwind CSS, and Git.",
      highlights: [
        "Implemented modular UI components, state management, and reusable layouts, improving user satisfaction and application performance.",
        "Optimised rendering, ensured cross-browser compatibility, and enhanced frontend scalability through clean architecture and coding best practices.",
        "Collaborated with UX designers and backend developers to deliver visually appealing, accessible, and high-impact digital products.",
      ],
      tools: ["React.js", "Next.js", "Redux", "Context API", "Tailwind CSS", "Git"],
    },
    {
      period: "1 YEAR 7 MONTHS",
      type: "SOFTWARE ENGINEER",
      title: "Software Engineer",
      company: "TechChefs · Delhi, India",
      description:
        "Designed and developed intuitive, responsive web interfaces using React.js, improving user satisfaction by 20%.",
      highlights: [
        "Designed and developed intuitive, responsive web interfaces using React.js, improving user satisfaction by 20%.",
        "Collaborated with UX designers and backend developers to deliver visually appealing and efficient web applications.",
        "Used Git for version control to streamline team collaboration and ensure code quality.",
        "Applied UI/UX best practices to enhance user interaction, visual hierarchy, and accessibility.",
      ],
      tools: ["React.js", "JavaScript", "HTML5", "CSS3", "Git", "UI/UX Best Practices"],
    },
    {
      period: "1 YEAR 2 MONTHS",
      type: "SOFTWARE DEVELOPER",
      title: "Software Developer",
      company: "LDT Technologies · Chandigarh, India",
      description:
        "Developed web and mobile application UIs for seamless user experiences and integrated RESTful APIs across client projects.",
      highlights: [
        "Contributed to cross-functional team efforts by building prototypes and implementing feature-rich applications.",
        "Improved web performance through optimised HTML5 and CSS practices.",
        "Integrated RESTful APIs with front-end frameworks, enabling seamless data exchange and enhanced application scalability.",
      ],
      tools: ["React Native", "JavaScript", "HTML5", "CSS3", "RESTful APIs", "Git"],
    },
  ],
  sideNoteLabel: "WHAT I BRING",
  strengths: [
    {
      number: "01",
      title: "Modular Architecture",
      description: "Clean, scalable component hierarchies with structured state management using Redux Toolkit and Context API.",
    },
    {
      number: "02",
      title: "Performance & UI/UX",
      description: "Fast rendering, accessibility, cross-browser compatibility, and responsive design across all screen sizes.",
    },
    {
      number: "03",
      title: "Cross-Functional Collaboration",
      description: "Effective partnership with UX designers, backend teams, and clients using Git workflows and Figma.",
    },
  ],
  educationLabel: "EDUCATION",
  education: [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Himachal Pradesh University, Shimla",
      year: "2018",
    },
    {
      degree: "Intermediate (10+2)",
      institution: "HPBOSE",
      year: "2015",
    },
  ],
  contactEyebrow: "GET IN TOUCH",
  contactTitle: "Let’s build what’s next.",
  contactLink: "Contact me",
  contactHref: "mailto:ak8393267@gmail.com?subject=Let%E2%80%99s%20work%20together",
};

export function Experience() {
  return (
    <main className="experience-page">
      <section className="experience-hero section-wrap" id="top" aria-labelledby="experience-title">
        <div className="experience-heading">
          <p className="eyebrow"><span className="eyebrow-line" /> {content.eyebrow}</p>
          <h1 id="experience-title">{content.titleFirst}<br /><span className="type-accent">{content.titleAccent}</span></h1>
          <div className="experience-intro-row">
            <p>{content.introduction}</p>
            <a
              className="experience-resume"
              href={content.resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Ashish Kumar's résumé (opens in Google Drive)"
            >
              {content.resumeLabel}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div className="experience-orbit" aria-hidden="true"><span>✳</span><small>FRONTEND<br />· REACT<br />· NEXT.JS</small></div>
        <div className="experience-stats">
          {content.stats.map((stat) => (
            <div className="experience-stat" key={stat.label}>
              <strong>{stat.value}</strong><span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="experience-timeline-section" aria-labelledby="timeline-title">
        <div className="experience-layout section-wrap">
          <div className="experience-timeline">
            <div className="experience-section-title">
              <p className="eyebrow"><span className="eyebrow-line" /> {content.timelineLabel}</p>
              <h2 id="timeline-title">Where I’ve been<span className="accent-period">.</span></h2>
            </div>
            <div className="timeline-list">
              {content.roles.map((role) => (
                <article className="timeline-entry" key={role.period}>
                  <div className="timeline-marker" aria-hidden="true"><span /></div>
                  <div className="timeline-period">{role.period}</div>
                  <div className="timeline-card">
                    <div className="timeline-card-top"><span>{role.type}</span><span className="timeline-arrow" aria-hidden="true">↗</span></div>
                    <h3>{role.title}</h3>
                    <p className="timeline-company">{role.company}</p>
                    <p className="timeline-description">{role.description}</p>
                    <ul className="timeline-highlights">
                      {role.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                    </ul>
                    <div className="timeline-tools">
                      {role.tools.map((tool) => <span key={tool}>{tool}</span>)}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <aside className="experience-aside" aria-label="What I bring to a team">
            <p className="eyebrow"><span className="eyebrow-line" /> {content.sideNoteLabel}</p>
            <div className="strength-list">
              {content.strengths.map((strength) => (
                <article className="strength-item" key={strength.number}>
                  <span>{strength.number}</span>
                  <div><h3>{strength.title}</h3><p>{strength.description}</p></div>
                </article>
              ))}
            </div>

            <div style={{ marginTop: "28px", paddingTop: "20px", borderTop: "1px solid rgba(23, 33, 29, 0.14)" }}>
              <p className="eyebrow"><span className="eyebrow-line" /> {content.educationLabel}</p>
              <div style={{ marginTop: "14px", display: "grid", gap: "14px" }}>
                {content.education.map((edu) => (
                  <div key={edu.degree}>
                    <h3 style={{ margin: "0 0 3px", fontSize: "13px", fontWeight: 600 }}>{edu.degree}</h3>
                    <p style={{ margin: 0, fontSize: "10px", color: "var(--muted)" }}>{edu.institution} · {edu.year}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="aside-note"><span aria-hidden="true">✳</span><p>Clean code.<br />Better experiences.</p></div>
          </aside>
        </div>
      </section>

      <section className="experience-next section-wrap" id="contact" aria-labelledby="next-title">
        <p className="eyebrow"><span className="eyebrow-line" /> {content.contactEyebrow}</p>
        <div className="experience-next-row">
          <h2 id="next-title">{content.contactTitle}</h2>
          <a className="contact-button" href={content.contactHref}>{content.contactLink}<span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </main>
  );
}
