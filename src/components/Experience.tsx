"use client";

import { useState } from "react";

const content = {
  eyebrow: "Professional Pedigree",
  titleFirst: "Career History",
  titleAccent: "& Milestones",
  introduction:
    "Over 3+ years of dedicated experience engineering responsive, high-performance web and mobile platforms with React.js, Next.js, and scalable frontend architectures.",
  resumeLabel: "Download Complete Résumé",
  resumeHref: "https://drive.google.com/file/d/1ACQCI881mI3fXn1RRVHKzr4h_xj0XJku/view?usp=sharing",
  stats: [
    { value: "03+", label: "YEARS EXPERIENCE" },
    { value: "10+", label: "ENTERPRISE BUILDS" },
    { value: "03", label: "COMPANIES SERVED" },
  ],
  timelineLabel: "CURATED CHRONOLOGY",
  roles: [
    {
      id: "webhopers",
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
      tools: ["React.js", "Next.js", "Redux", "Context API", "Tailwind CSS", "Git Workflow"],
    },
    {
      id: "techchefs",
      period: "1 YEAR 7 MONTHS",
      type: "SOFTWARE ENGINEER",
      title: "Software Engineer",
      company: "TechChefs · Delhi, India",
      description:
        "Designed and developed intuitive, responsive web interfaces using React.js, boosting user satisfaction metrics by 20%.",
      highlights: [
        "Designed and developed intuitive, responsive web interfaces using React.js, improving user satisfaction by 20%.",
        "Collaborated with UX designers and backend developers to deliver visually appealing and efficient web applications.",
        "Used Git for version control to streamline team collaboration and ensure code quality.",
        "Applied UI/UX best practices to enhance user interaction, visual hierarchy, and accessibility.",
      ],
      tools: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Git", "UI/UX Best Practices"],
    },
    {
      id: "ldt",
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
  sideNoteLabel: "CORE COMPETENCIES",
  strengths: [
    {
      number: "01",
      title: "Modular UI Architecture",
      description: "Scalable component hierarchies with predictable state management using Redux Toolkit and Context API.",
    },
    {
      number: "02",
      title: "Performance & Responsive Fidelity",
      description: "Pixel-perfect visual rhythm, sub-second rendering, cross-browser compatibility, and accessible WCAG standards.",
    },
    {
      number: "03",
      title: "Agile Team Synergy",
      description: "Direct partnership with product designers, clients, and backend teams utilizing Git and Figma.",
    },
  ],
  educationLabel: "ACADEMIC FOUNDATION",
  education: [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Himachal Pradesh University, Shimla",
      year: "Graduated 2018",
    },
    {
      degree: "Higher Secondary Examination (10+2)",
      institution: "HPBOSE",
      year: "Completed 2015",
    },
  ],
};

export function Experience() {
  const [activeRoleId, setActiveRoleId] = useState<string>("webhopers");

  return (
    <section className="experience-section" id="experience" aria-labelledby="experience-title">
      <div className="experience-hero section-wrap">
        <div className="experience-heading">
          <p className="eyebrow">
            <span className="eyebrow-line" /> {content.eyebrow}
          </p>
          <h2 id="experience-title">
            {content.titleFirst}{" "}
            <span className="type-accent">
              {content.titleAccent}
              <span className="accent-period">.</span>
            </span>
          </h2>
          <div className="experience-intro-row flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
            <p className="max-w-xl">{content.introduction}</p>
            <a
              className="experience-resume w-full sm:w-auto justify-center"
              href={content.resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Ashish Kumar's complete résumé (opens in Google Drive)"
            >
              <span>{content.resumeLabel}</span>
              <span className="resume-icon" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="experience-orbit" aria-hidden="true">
          <span className="orbit-star">✦</span>
          <small>
            CRAFT
            <br />
            · ARCHITECTURE
            <br />
            · PRECISION
          </small>
        </div>

        <div className="experience-stats">
          {content.stats.map((stat) => (
            <div className="experience-stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="experience-timeline-section">
        <div className="experience-layout section-wrap">
          <div className="experience-timeline">
            <div className="experience-section-title">
              <p className="eyebrow">
                <span className="eyebrow-line" /> {content.timelineLabel}
              </p>
              <h3>
                Career Progression
                <span className="accent-period">.</span>
              </h3>
            </div>

            <div className="timeline-list">
              {content.roles.map((role) => {
                const isActive = activeRoleId === role.id;
                return (
                  <article
                    className={`timeline-entry ${isActive ? "timeline-entry-active" : ""}`}
                    key={role.id}
                    onClick={() => setActiveRoleId(role.id)}
                  >
                    <div className="timeline-marker" aria-hidden="true">
                      <span />
                    </div>
                    <div className="timeline-period">{role.period}</div>
                    <div className="timeline-card">
                      <div className="timeline-card-top">
                        <span className="timeline-type">{role.type}</span>
                        <span className="timeline-arrow" aria-hidden="true">
                          {isActive ? "✦" : "↗"}
                        </span>
                      </div>
                      <h3>{role.title}</h3>
                      <p className="timeline-company">{role.company}</p>
                      <p className="timeline-description">{role.description}</p>
                      <ul className="timeline-highlights">
                        {role.highlights.map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                      <div className="timeline-tools">
                        {role.tools.map((tool) => (
                          <span key={tool}>{tool}</span>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <aside className="experience-aside" aria-label="Core Competencies & Academic Background">
            <p className="eyebrow">
              <span className="eyebrow-line" /> {content.sideNoteLabel}
            </p>
            <div className="strength-list">
              {content.strengths.map((strength) => (
                <article className="strength-item" key={strength.number}>
                  <span>{strength.number}</span>
                  <div>
                    <h3>{strength.title}</h3>
                    <p>{strength.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="aside-education-block">
              <p className="eyebrow">
                <span className="eyebrow-line" /> {content.educationLabel}
              </p>
              <div className="education-list">
                {content.education.map((edu) => (
                  <div key={edu.degree} className="education-item">
                    <h3>{edu.degree}</h3>
                    <p>
                      {edu.institution} · <span className="edu-year">{edu.year}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="aside-note">
              <span aria-hidden="true">✦</span>
              <p>
                Uncompromising code.
                <br />
                Distinguished products.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
