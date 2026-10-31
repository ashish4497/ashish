"use client";

import { useState } from "react";

const content = {
  eyebrow: "Philosophy & Capabilities",
  headlineFirst: "Exceptional design",
  headlineSecond: "demands",
  headlineAccent: "master craftsmanship.",
  lead: "Greetings, I’m Ashish Kumar — a Frontend Developer and UI Architect dedicated to engineering refined, resilient, and visually opulent digital products.",
  description:
    "With 3+ years of dedicated frontend engineering experience, I specialize in translating ambitious visions into intuitive, responsive, and high-performance applications. Proficient in React.js, Next.js, Redux, Redux Toolkit, Context API, and modern CSS architecture, I partner seamlessly with design ateliers and backend engineers to construct digital interfaces with meticulous attention to clean architecture, performance optimization, and accessibility.",
  capabilitiesLabel: "TECHNICAL DOMAINS & EXPERTISE",
  skillGroups: [
    {
      id: "frontend",
      category: "Frontend Core",
      skills: ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3 / SCSS", "Tailwind CSS"],
    },
    {
      id: "state",
      category: "State & Architecture",
      skills: ["Redux", "Redux Toolkit", "Context API", "Component Systems", "Modular Architecture", "Clean Code"],
    },
    {
      id: "mobile",
      category: "Mobile & APIs",
      skills: ["React Native", "RESTful API Integration", "Headless CMS (Strapi)", "JSON APIs"],
    },
    {
      id: "design",
      category: "Design & Quality",
      skills: ["UI/UX Best Practices", "Responsive Layouts", "Cross-Browser Testing", "Performance Tuning", "Git & GitHub", "Figma"],
    },
  ],
  stampTop: "CRAFTED WITH",
  stampBottom: "INTENTION",
};

export function About() {
  const [selectedDomain, setSelectedDomain] = useState<string>("all");
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const totalSkills = content.skillGroups.reduce((acc, g) => acc + g.skills.length, 0);

  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="about-inner section-wrap">
        <div className="about-intro">
          <p className="eyebrow">
            <span className="eyebrow-line" /> {content.eyebrow}
          </p>
          <h2 id="about-title">
            {content.headlineFirst}
            <br />
            {content.headlineSecond} <span className="type-accent">{content.headlineAccent}</span>
          </h2>

          <div className="about-stats-panel grid grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-10">
            <div className="about-stat-item">
              <span className="about-stat-num">03+</span>
              <span className="about-stat-text">YEARS HONING THE CRAFT</span>
            </div>
            <div className="about-stat-item">
              <span className="about-stat-num">{totalSkills}</span>
              <span className="about-stat-text">MASTERED TECHNOLOGIES</span>
            </div>
          </div>
        </div>

        <div className="about-details">
          <p className="about-lead">{content.lead}</p>
          <p className="about-body">{content.description}</p>

          <div className="capabilities">
            <div className="capabilities-header flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
              <span className="capabilities-label">{content.capabilitiesLabel}</span>
              <div className="domain-filters" role="tablist">
                <button
                  type="button"
                  className={`domain-tab ${selectedDomain === "all" ? "domain-tab-active" : ""}`}
                  onClick={() => setSelectedDomain("all")}
                >
                  All
                </button>
                {content.skillGroups.map((g) => (
                  <button
                    key={g.id}
                    type="button"
                    className={`domain-tab ${selectedDomain === g.id ? "domain-tab-active" : ""}`}
                    onClick={() => setSelectedDomain(selectedDomain === g.id ? "all" : g.id)}
                  >
                    {g.category}
                  </button>
                ))}
              </div>
            </div>

            <div className="skill-groups-container">
              {content.skillGroups
                .filter((g) => selectedDomain === "all" || selectedDomain === g.id)
                .map((group) => (
                  <div key={group.category} className="skill-group-block">
                    <p className="skill-group-title">
                      <span>✦</span> {group.category}
                    </p>
                    <div className="capability-list">
                      {group.skills.map((skill) => {
                        const isSelected = activeSkill === skill;
                        return (
                          <button
                            key={skill}
                            type="button"
                            className={`skill-pill ${isSelected ? "skill-pill-active" : ""}`}
                            onClick={() => setActiveSkill(isSelected ? null : skill)}
                            aria-pressed={isSelected}
                          >
                            <span>{skill}</span>
                            {isSelected && <span className="skill-pill-check">✦</span>}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="about-stamp" aria-hidden="true">
          <div className="about-stamp-ring" />
          <span>{content.stampTop}</span>
          <strong>✦</strong>
          <span>{content.stampBottom}</span>
        </div>
      </div>
    </section>
  );
}
