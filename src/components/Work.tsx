"use client";

import { useState } from "react";

interface Project {
  number: string;
  name: string;
  category: string;
  tagCategory: "all" | "ecommerce" | "healthcare" | "mobile";
  year: string;
  url: string;
  theme: string;
  image: string;
  alt: string;
  label: string;
  description: string;
  tech: string[];
  metrics?: string;
}

const content = {
  eyebrow: "Selected Portfolio",
  title: "Distinguished Works",
  aside: "Bespoke digital platforms, high-performance web systems,",
  asideSecondLine: "and commercial applications engineered to perfection.",
  projectTag: "CURATED",
  closingPrompt: "Seeking bespoke digital craftsmanship for your enterprise?",
  closingLink: "Initiate dialogue",
  closingHref: "#contact",
  filterTabs: [
    { id: "all", label: "All Collections" },
    { id: "ecommerce", label: "E-Commerce" },
    { id: "healthcare", label: "Healthcare & Pharma" },
    { id: "mobile", label: "Mobile Apps" },
  ],
  projects: [
    {
      number: "01",
      name: "Kartizen",
      category: "E-Commerce Platform · Web Application",
      tagCategory: "ecommerce",
      year: "Live Site",
      url: "https://kartizen.whdev.in/",
      theme: "project-kartizen",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=85",
      alt: "Kartizen e-commerce shopping platform interface",
      label: "INTUITIVE\nCOMMERCE,\nREFINED UX.",
      description:
        "Modern luxury e-commerce platform built for a frictionless acquisition journey with instantaneous multi-facet search, responsive mobile layouts, and streamlined checkout.",
      tech: ["Next.js", "React.js", "Redux", "Tailwind CSS"],
      metrics: "Sub-second load times & seamless catalog filtering",
    },
    {
      number: "02",
      name: "Shaandaar Events",
      category: "High-End Event Management · Web Platform",
      tagCategory: "ecommerce",
      year: "Live Site",
      url: "https://shaandaarevents.com/",
      theme: "project-shaandaar",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
      alt: "Shaandaar Events luxury wedding and event management website",
      label: "MEMORABLE\nEVENTS,\nELEGANT UI.",
      description:
        "Premier luxury wedding and event management platform featuring immersive visual storytelling, fluid responsive layouts across all viewports, and an upscale service showcase.",
      tech: ["Next.js", "React.js", "Tailwind CSS", "UI/UX Architecture"],
      metrics: "Cross-device responsive visual showcase",
    },
    {
      number: "03",
      name: "Ckomic HealthCity Pharma",
      category: "Healthcare Marketing & Patient Scheduling",
      tagCategory: "healthcare",
      year: "Next.js",
      url: "",
      theme: "project-ckomic",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=85",
      alt: "Hospital marketing website with appointment scheduling",
      label: "HEALTHCARE,\nAPPOINTMENTS\n& CARE.",
      description:
        "Responsive medical marketing web application enabling patients to book consultations dynamically with real-time state handling via Redux and Context API.",
      tech: ["Next.js", "Redux", "Tailwind CSS", "Context API"],
      metrics: "Real-time appointment validation forms",
    },
    {
      number: "04",
      name: "bioBox Pharma",
      category: "Biopharmaceutical Platform & Product Hub",
      tagCategory: "healthcare",
      year: "React.js",
      url: "",
      theme: "project-biobox",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=85",
      alt: "Biopharmaceutical product management platform",
      label: "BIOPHARMA\nCATALOG &\nDISCOVERY.",
      description:
        "Scalable enterprise frontend interface for managing and presenting biopharmaceutical product catalogs with multi-level filtering, search, and category taxonomies.",
      tech: ["React.js", "Next.js", "Redux", "Tailwind CSS"],
      metrics: "Optimized component rendering & state management",
    },
    {
      number: "05",
      name: "Innovexia",
      category: "Pharmaceutical Catalogue & Enterprise Platform",
      tagCategory: "healthcare",
      year: "Next.js",
      url: "",
      theme: "project-innovexia",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=85",
      alt: "Interactive pharmaceutical product catalogue interface",
      label: "SCALABLE\nPRODUCT\nCATALOGUE.",
      description:
        "Scalable pharmaceutical product information engine featuring search, multi-tiered hierarchy filtering, and optimized cross-browser reliability.",
      tech: ["Next.js", "Redux Toolkit", "REST APIs", "Tailwind CSS"],
      metrics: "Clean modular architecture & fast query responses",
    },
    {
      number: "06",
      name: "Obras (Mobile App)",
      category: "Construction Management Platform · Mobile",
      tagCategory: "mobile",
      year: "React Native",
      url: "",
      theme: "project-obras",
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=85",
      alt: "Construction management and task coordination mobile application",
      label: "CONSTRUCTION\nMANAGEMENT\nMOBILE APP.",
      description:
        "Cross-platform mobile application engineered for field managers to control administrative permissions, track milestone progress, coordinate crews, and sync data in real time.",
      tech: ["React Native", "Mobile UI", "REST APIs", "Git Workflow"],
      metrics: "Streamlined field administration on iOS & Android",
    },
  ] as Project[],
  notableProjects: [
    {
      name: "LTD Platform",
      domain: "Legal Tech & Information Sharing",
      description:
        "Built a research and information-sharing platform for legal professionals, featuring real-time collaboration that enables secure cross-organisation knowledge exchange.",
      tags: ["React.js", "Knowledge Base", "REST APIs", "Security"],
    },
    {
      name: "Learning Hub",
      domain: "EdTech · School & College Management",
      description:
        "Built a digital learning hub for educational institutions with automated attendance tracking, dynamic scheduling, and real-time grade management.",
      tags: ["React.js", "Scheduling", "Attendance Tracking", "Context API"],
    },
    {
      name: "COVID-19 Awareness Template",
      domain: "Public Health & Data Visualization",
      description:
        "Built an interactive informational web template integrated with live health data dashboards to disseminate verified updates and graphical analytics.",
      tags: ["JavaScript", "Live Dashboards", "Charts", "Responsive UI"],
    },
    {
      name: "Yoga Center",
      domain: "Wellness & Lifestyle Platform",
      description:
        "Built a responsive marketing website showcasing wellness philosophy, instructor profiles, and dynamic interactive class schedules.",
      tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    },
  ],
};

export function Work() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [viewMode, setViewMode] = useState<"showcase" | "grid" | "ledger">("showcase");

  const filteredProjects =
    selectedCategory === "all"
      ? content.projects
      : content.projects.filter((p) => p.tagCategory === selectedCategory);

  return (
    <section className="work-section section-wrap" id="work" aria-labelledby="work-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">
            <span className="eyebrow-line" /> {content.eyebrow}
          </p>
          <h2 id="work-title">
            {content.title}
            <span className="accent-period">.</span>
          </h2>
        </div>
        <p className="section-aside">
          {content.aside}
          <br />
          {content.asideSecondLine}
        </p>
      </div>

      {/* Interactive Toolbar: Filter Bar + Layout View Switcher */}
      <div className="work-toolbar">
        <div className="work-filter-bar" role="tablist" aria-label="Project category filter">
          {content.filterTabs.map((tab) => {
            const count =
              tab.id === "all"
                ? content.projects.length
                : content.projects.filter((p) => p.tagCategory === tab.id).length;
            const isActive = selectedCategory === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`work-filter-btn ${isActive ? "work-filter-btn-active" : ""}`}
                onClick={() => setSelectedCategory(tab.id)}
              >
                <span>{tab.label}</span>
                <span className="filter-count">{count}</span>
              </button>
            );
          })}
        </div>

        <div className="view-mode-switcher" role="radiogroup" aria-label="Project presentation layout">
          <button
            type="button"
            className={`view-mode-btn ${viewMode === "showcase" ? "active" : ""}`}
            onClick={() => setViewMode("showcase")}
            aria-label="Editorial Showcase view"
            title="Editorial Showcase (Alternating Spreads)"
          >
            <span className="view-mode-icon" aria-hidden="true">☷</span>
            <span>Showcase</span>
          </button>
          <button
            type="button"
            className={`view-mode-btn ${viewMode === "grid" ? "active" : ""}`}
            onClick={() => setViewMode("grid")}
            aria-label="Gallery Grid view"
            title="Gallery Grid"
          >
            <span className="view-mode-icon" aria-hidden="true">▦</span>
            <span>Grid</span>
          </button>
          <button
            type="button"
            className={`view-mode-btn ${viewMode === "ledger" ? "active" : ""}`}
            onClick={() => setViewMode("ledger")}
            aria-label="Atelier Ledger view"
            title="Atelier Ledger (Index Table)"
          >
            <span className="view-mode-icon" aria-hidden="true">☰</span>
            <span>Ledger</span>
          </button>
        </div>
      </div>

      {/* 1. Editorial Showcase View (Default) */}
      {viewMode === "showcase" && (
        <div className="project-showcase-list" aria-label="Selected project showcase">
          {filteredProjects.map((project, idx) => {
            const href =
              project.url ||
              `mailto:ak8393267@gmail.com?subject=Inquiry%20regarding%20${encodeURIComponent(project.name)}`;
            const isExternal = Boolean(project.url);

            return (
              <article className="project-spread" key={project.number}>
                <div className="spread-visual-container">
                  <a
                    className="spread-visual-link"
                    href={href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                    aria-label={
                      isExternal
                        ? `Visit ${project.name} live platform`
                        : `Inquire about ${project.name}`
                    }
                  >
                    <div
                      className="spread-visual-bg"
                      style={{ backgroundImage: `url("${project.image}")` }}
                      role="img"
                      aria-label={project.alt}
                    />
                    <div className="spread-visual-scrim" />
                    <div className="spread-visual-badge">
                      <span className="spread-edition-num">EDITION {project.number}</span>
                      <span className="spread-edition-label">· {content.projectTag}</span>
                    </div>
                    <div className="spread-overlay-type">
                      {project.label.split("\n").map((line) => (
                        <span key={line}>{line}</span>
                      ))}
                    </div>
                    <span className="spread-open-icon" aria-hidden="true">
                      {isExternal ? "↗" : "✦"}
                    </span>
                  </a>
                </div>

                <div className="spread-dossier">
                  <div className="spread-dossier-top">
                    <span className="spread-kicker">
                      <span className="spread-kicker-dot" /> {project.category}
                    </span>
                    <span className="spread-roman-index">№ 0{idx + 1}</span>
                  </div>

                  <h3 className="spread-title">{project.name}</h3>

                  {project.metrics && (
                    <div className="spread-metric-badge">
                      <span className="metric-badge-icon">✦</span>
                      <span className="metric-badge-text">{project.metrics}</span>
                    </div>
                  )}

                  <p className="spread-desc">{project.description}</p>

                  <div className="spread-tech-stack">
                    <span className="tech-stack-label">ARCHITECTURE &amp; FRAMEWORK:</span>
                    <div className="spread-tech-pills">
                      {project.tech.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                  </div>

                  <div className="spread-actions">
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="hero-primary-btn"
                      >
                        <span>Visit Live Platform</span>
                        <span className="btn-arrow" aria-hidden="true">↗</span>
                      </a>
                    ) : (
                      <a
                        href={`mailto:ak8393267@gmail.com?subject=Inquiry%20regarding%20${encodeURIComponent(project.name)}`}
                        className="hero-primary-btn"
                      >
                        <span>Inquire Specs</span>
                        <span className="btn-arrow" aria-hidden="true">↗</span>
                      </a>
                    )}
                    <button
                      type="button"
                      className="hero-secondary-btn"
                      onClick={() => setSelectedProject(project)}
                      aria-label={`Inspect overview for ${project.name}`}
                    >
                      <span>Inspect Dossier</span>
                      <span className="btn-arrow" aria-hidden="true">✦</span>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}

      {/* 2. Classic Luxury Gallery Grid View */}
      {viewMode === "grid" && (
        <div className="project-grid">
          {filteredProjects.map((project) => {
            const href =
              project.url ||
              `mailto:ak8393267@gmail.com?subject=Inquiry%20regarding%20${encodeURIComponent(project.name)}`;
            const isExternal = Boolean(project.url);

            return (
              <article className={`project-card ${project.theme}`} key={project.number}>
                <div className="project-image-container">
                  <a
                    className="project-image"
                    href={href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                    aria-label={
                      isExternal
                        ? `Visit ${project.name} live platform`
                        : `Inquire about ${project.name}`
                    }
                  >
                    <div
                      className="project-image-bg"
                      style={{ backgroundImage: `url("${project.image}")` }}
                      role="img"
                      aria-label={project.alt}
                    />
                    <div className="project-overlay-type">
                      {project.label.split("\n").map((line) => (
                        <span key={line}>{line}</span>
                      ))}
                    </div>
                    <span className="project-open" aria-hidden="true">
                      {isExternal ? "↗" : "✦"}
                    </span>
                    <span className="project-number">
                      {project.number} / {content.projectTag}
                    </span>
                  </a>
                </div>

                <div className="project-meta">
                  <div className="project-meta-top">
                    <h3>{project.name}</h3>
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="project-live-tag"
                        aria-label={`Open live demo of ${project.name}`}
                      >
                        <span className="live-dot" /> Live Platform ↗
                      </a>
                    ) : (
                      <span className="project-live-tag project-year-tag">
                        {project.year}
                      </span>
                    )}
                  </div>
                  <p className="project-category">{project.category}</p>
                  <p className="project-desc">{project.description}</p>
                  
                  <div className="project-tech-row">
                    <div className="project-tech-pills">
                      {project.tech.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                    <button
                      type="button"
                      className="project-inspect-btn"
                      onClick={() => setSelectedProject(project)}
                      aria-label={`Inspect overview for ${project.name}`}
                    >
                      Inspect ✦
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}

      {/* 3. Atelier Ledger Table View */}
      {viewMode === "ledger" && (
        <div className="project-ledger-container">
          <table className="project-ledger-table" aria-label="Curated project ledger">
            <thead>
              <tr>
                <th>№</th>
                <th>EDITION &amp; CLIENT</th>
                <th>DOMAIN &amp; ARCHITECTURE</th>
                <th>CORE IMPACT</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {filteredProjects.map((project) => {
                const isExternal = Boolean(project.url);
                const href =
                  project.url ||
                  `mailto:ak8393267@gmail.com?subject=Inquiry%20regarding%20${encodeURIComponent(project.name)}`;

                return (
                  <tr key={project.number} className="ledger-row">
                    <td className="ledger-cell-num">{project.number}</td>
                    <td className="ledger-cell-title">
                      <div className="ledger-title-wrap">
                        <strong>{project.name}</strong>
                        {isExternal && (
                          <span className="ledger-live-indicator" title="Live Platform">
                            <span className="live-dot" /> LIVE
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="ledger-cell-domain">
                      <span className="ledger-category">{project.category}</span>
                      <div className="ledger-stack-tags">
                        {project.tech.slice(0, 3).map((t) => (
                          <span key={t}>{t}</span>
                        ))}
                        {project.tech.length > 3 && <span>+{project.tech.length - 3}</span>}
                      </div>
                    </td>
                    <td className="ledger-cell-metrics">
                      {project.metrics || project.description.slice(0, 75) + "..."}
                    </td>
                    <td className="ledger-cell-actions">
                      <div className="ledger-action-btns">
                        <a
                          href={href}
                          target={isExternal ? "_blank" : undefined}
                          rel={isExternal ? "noreferrer" : undefined}
                          className="ledger-action-link"
                          aria-label={`Visit ${project.name}`}
                        >
                          {isExternal ? "Visit ↗" : "Inquire ↗"}
                        </a>
                        <button
                          type="button"
                          className="ledger-inspect-btn"
                          onClick={() => setSelectedProject(project)}
                          aria-label={`Inspect ${project.name}`}
                        >
                          ✦
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* Interactive Project Inspector Modal */}
      {selectedProject && (
        <div
          className="luxury-modal-backdrop"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="luxury-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <div>
                <span className="modal-eyebrow">{selectedProject.category}</span>
                <h3 className="modal-title">{selectedProject.name}</h3>
              </div>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project modal"
              >
                ✕
              </button>
            </div>

            <div className="modal-body">
              <p className="modal-desc">{selectedProject.description}</p>
              {selectedProject.metrics && (
                <div className="modal-metric-box">
                  <span className="metric-label">Key Achievement:</span>
                  <span className="metric-val">{selectedProject.metrics}</span>
                </div>
              )}

              <div className="modal-tech-section">
                <span className="modal-tech-label">Architecture & Stack:</span>
                <div className="modal-tech-pills">
                  {selectedProject.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>

              <div className="modal-actions">
                {selectedProject.url ? (
                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noreferrer"
                    className="hero-primary-btn"
                  >
                    Visit Live Site ↗
                  </a>
                ) : (
                  <a
                    href={`mailto:ak8393267@gmail.com?subject=Inquiry%20regarding%20${encodeURIComponent(selectedProject.name)}`}
                    className="hero-primary-btn"
                  >
                    Request Details ↗
                  </a>
                )}
                <button
                  type="button"
                  className="hero-secondary-btn"
                  onClick={() => setSelectedProject(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Notable Archive Section */}
      <div className="more-projects-section">
        <div className="more-projects-header">
          <p className="eyebrow">
            <span className="eyebrow-line" /> ARCHIVAL EDITIONS & SPECIALIZED BUILDS
          </p>
          <h3>
            Additional Systems & Platforms
            <span className="accent-period">.</span>
          </h3>
        </div>
        <div className="more-projects-grid">
          {content.notableProjects.map((item) => (
            <article className="more-project-card" key={item.name}>
              <div className="more-project-top">
                <h4>{item.name}</h4>
                <span className="more-project-icon" aria-hidden="true">✦</span>
              </div>
              <p className="more-project-domain">{item.domain}</p>
              <p className="more-project-desc">{item.description}</p>
              <div className="more-project-tags">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      <a className="all-work-link" href={content.closingHref}>
        {content.closingPrompt}{" "}
        <span>
          {content.closingLink} <b aria-hidden="true">↓</b>
        </span>
      </a>
    </section>
  );
}
