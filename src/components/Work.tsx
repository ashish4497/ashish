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
    <section className="work-section section-wrap py-14 sm:py-20 lg:py-28" id="work" aria-labelledby="work-title">
      <div className="section-heading flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-8 mb-8 sm:mb-12 pb-5 sm:pb-7 border-b border-[var(--line)]">
        <div>
          <p className="eyebrow flex items-center gap-2.5 text-[10px] sm:text-xs">
            <span className="eyebrow-line w-5 sm:w-7" /> {content.eyebrow}
          </p>
          <h2 id="work-title" className="text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight tracking-tight mt-2 sm:mt-3">
            {content.title}
            <span className="accent-period">.</span>
          </h2>
        </div>
        <p className="section-aside text-xs sm:text-sm text-[var(--foreground-muted)] text-left md:text-right max-w-full md:max-w-md leading-relaxed">
          {content.aside}
          <br className="hidden sm:inline" />{" "}
          {content.asideSecondLine}
        </p>
      </div>

      {/* Interactive Toolbar: Filter Bar + Layout View Switcher */}
      <div className="work-toolbar flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
        <div className="work-filter-bar flex flex-wrap items-center gap-2 sm:gap-2.5 w-full md:w-auto" role="tablist" aria-label="Project category filter">
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
                className={`work-filter-btn text-[9px] sm:text-[10px] px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full flex items-center gap-2 transition-all ${
                  isActive ? "work-filter-btn-active" : ""
                }`}
                onClick={() => setSelectedCategory(tab.id)}
              >
                <span>{tab.label}</span>
                <span className="filter-count text-[8px] sm:text-[9px] px-1.5 py-0.5 rounded-full">{count}</span>
              </button>
            );
          })}
        </div>

        <div className="view-mode-switcher flex items-center p-1 rounded-full w-full sm:w-auto justify-stretch sm:justify-start" role="radiogroup" aria-label="Project presentation layout">
          <button
            type="button"
            className={`view-mode-btn flex-1 sm:flex-initial justify-center text-[9px] sm:text-[10px] px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full flex items-center gap-1.5 transition-all ${
              viewMode === "showcase" ? "active" : ""
            }`}
            onClick={() => setViewMode("showcase")}
            aria-label="Editorial Showcase view"
            title="Editorial Showcase (Alternating Spreads)"
          >
            <span className="view-mode-icon text-xs sm:text-sm" aria-hidden="true">☷</span>
            <span>Showcase</span>
          </button>
          <button
            type="button"
            className={`view-mode-btn flex-1 sm:flex-initial justify-center text-[9px] sm:text-[10px] px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full flex items-center gap-1.5 transition-all ${
              viewMode === "grid" ? "active" : ""
            }`}
            onClick={() => setViewMode("grid")}
            aria-label="Gallery Grid view"
            title="Gallery Grid"
          >
            <span className="view-mode-icon text-xs sm:text-sm" aria-hidden="true">▦</span>
            <span>Grid</span>
          </button>
          <button
            type="button"
            className={`view-mode-btn flex-1 sm:flex-initial justify-center text-[9px] sm:text-[10px] px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full flex items-center gap-1.5 transition-all ${
              viewMode === "ledger" ? "active" : ""
            }`}
            onClick={() => setViewMode("ledger")}
            aria-label="Atelier Ledger view"
            title="Atelier Ledger (Index Table)"
          >
            <span className="view-mode-icon text-xs sm:text-sm" aria-hidden="true">☰</span>
            <span>Ledger</span>
          </button>
        </div>
      </div>

      {/* 1. Editorial Showcase View (Default) */}
      {viewMode === "showcase" && (
        <div className="project-showcase-list flex flex-col gap-6 sm:gap-10 lg:gap-16" aria-label="Selected project showcase">
          {filteredProjects.map((project, idx) => {
            const href =
              project.url ||
              `mailto:ak8393267@gmail.com?subject=Inquiry%20regarding%20${encodeURIComponent(project.name)}`;
            const isExternal = Boolean(project.url);

            return (
              <article
                className="project-spread grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-5 sm:gap-8 lg:gap-12 items-center p-4 sm:p-7 lg:p-9 rounded-xl sm:rounded-2xl transition-all"
                key={project.number}
              >
                <div className="spread-visual-container relative rounded-lg sm:rounded-xl overflow-hidden w-full">
                  <a
                    className="spread-visual-link relative block overflow-hidden aspect-[16/10] w-full"
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
                      className="spread-visual-bg absolute inset-0 bg-cover bg-center transition-transform duration-700"
                      style={{ backgroundImage: `url("${project.image}")` }}
                      role="img"
                      aria-label={project.alt}
                    />
                    <div className="spread-visual-scrim absolute inset-0" />
                    <div className="spread-visual-badge absolute top-2.5 left-2.5 sm:top-4 sm:left-4 z-10 inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-[8.5px] sm:text-[9.5px]">
                      <span className="spread-edition-num font-mono">EDITION {project.number}</span>
                      <span className="spread-edition-label">· {content.projectTag}</span>
                    </div>
                    <div className="spread-overlay-type absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-4 sm:left-4 sm:right-4 z-10 flex flex-col text-sm sm:text-base lg:text-xl font-medium leading-tight text-white drop-shadow">
                      {project.label.split("\n").map((line) => (
                        <span key={line}>{line}</span>
                      ))}
                    </div>
                    <span className="spread-open-icon absolute top-2.5 right-2.5 sm:top-4 sm:right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 text-xs sm:text-sm rounded-full grid place-items-center" aria-hidden="true">
                      {isExternal ? "↗" : "✦"}
                    </span>
                  </a>
                </div>

                <div className="spread-dossier flex flex-col gap-3.5 sm:gap-4 w-full">
                  <div className="spread-dossier-top flex items-center justify-between pb-2.5 border-b border-[var(--line)]">
                    <span className="spread-kicker inline-flex items-center gap-1.5 text-[9px] sm:text-[10px] font-bold tracking-wider uppercase text-[var(--gold)]">
                      <span className="spread-kicker-dot w-1.5 h-1.5 rounded-full bg-[var(--gold)]" /> {project.category}
                    </span>
                    <span className="spread-roman-index text-sm sm:text-base font-serif italic text-[var(--muted)]">№ 0{idx + 1}</span>
                  </div>

                  <h3 className="spread-title text-xl sm:text-2xl lg:text-3xl font-normal leading-snug tracking-tight text-[var(--foreground)]">{project.name}</h3>

                  {project.metrics && (
                    <div className="spread-metric-badge inline-flex items-center gap-2 p-2 sm:px-3 sm:py-2 rounded text-xs sm:text-[12.5px]">
                      <span className="metric-badge-icon text-[10px]">✦</span>
                      <span className="metric-badge-text">{project.metrics}</span>
                    </div>
                  )}

                  <p className="spread-desc text-xs sm:text-sm leading-relaxed text-[var(--foreground-muted)]">{project.description}</p>

                  <div className="spread-tech-stack flex flex-col gap-2 pt-2 border-t border-[var(--line)]">
                    <span className="tech-stack-label text-[8.5px] sm:text-[9px] font-bold tracking-widest text-[var(--muted)] uppercase">ARCHITECTURE &amp; FRAMEWORK:</span>
                    <div className="spread-tech-pills flex flex-wrap gap-1.5 sm:gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="text-[8.5px] sm:text-[9.5px] px-2.5 py-1 rounded-full">{t}</span>
                      ))}
                    </div>
                  </div>

                  <div className="spread-actions flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto pt-1">
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="hero-primary-btn w-full sm:w-auto justify-center text-xs py-2.5 sm:py-3 px-5 sm:px-6"
                      >
                        <span>Visit Live Platform</span>
                        <span className="btn-arrow" aria-hidden="true">↗</span>
                      </a>
                    ) : (
                      <a
                        href={`mailto:ak8393267@gmail.com?subject=Inquiry%20regarding%20${encodeURIComponent(project.name)}`}
                        className="hero-primary-btn w-full sm:w-auto justify-center text-xs py-2.5 sm:py-3 px-5 sm:px-6"
                      >
                        <span>Inquire Specs</span>
                        <span className="btn-arrow" aria-hidden="true">↗</span>
                      </a>
                    )}
                    <button
                      type="button"
                      className="hero-secondary-btn w-full sm:w-auto justify-center text-xs py-2.5 sm:py-3 px-4 sm:px-5"
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
        <div className="project-grid grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {filteredProjects.map((project) => {
            const href =
              project.url ||
              `mailto:ak8393267@gmail.com?subject=Inquiry%20regarding%20${encodeURIComponent(project.name)}`;
            const isExternal = Boolean(project.url);

            return (
              <article className={`project-card flex flex-col w-full ${project.theme}`} key={project.number}>
                <div className="project-image-container relative rounded-lg overflow-hidden w-full">
                  <a
                    className="project-image relative block overflow-hidden aspect-[1.25] w-full"
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
                      className="project-image-bg absolute inset-0 bg-cover bg-center transition-transform duration-700"
                      style={{ backgroundImage: `url("${project.image}")` }}
                      role="img"
                      aria-label={project.alt}
                    />
                    <div className="project-overlay-type absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-10 flex flex-col text-sm sm:text-base font-medium leading-tight text-white drop-shadow">
                      {project.label.split("\n").map((line) => (
                        <span key={line}>{line}</span>
                      ))}
                    </div>
                    <span className="project-open absolute top-2.5 right-2.5 sm:top-3.5 sm:right-3.5 z-10 w-8 h-8 sm:w-9 sm:h-9 text-xs rounded-full grid place-items-center" aria-hidden="true">
                      {isExternal ? "↗" : "✦"}
                    </span>
                    <span className="project-number absolute top-2.5 left-2.5 sm:top-3.5 sm:left-3.5 z-10 text-[9px] px-2 py-0.5 rounded-full font-mono">
                      {project.number} / {content.projectTag}
                    </span>
                  </a>
                </div>

                <div className="project-meta flex flex-col gap-2 pt-3 sm:pt-4">
                  <div className="project-meta-top flex items-center justify-between gap-2">
                    <h3 className="text-lg sm:text-xl font-normal leading-snug">{project.name}</h3>
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="project-live-tag inline-flex items-center gap-1.5 text-[9px] sm:text-[10px] px-2.5 py-1 rounded-full whitespace-nowrap"
                        aria-label={`Open live demo of ${project.name}`}
                      >
                        <span className="live-dot w-1.5 h-1.5 rounded-full" /> Live Platform ↗
                      </a>
                    ) : (
                      <span className="project-live-tag project-year-tag text-[9px] sm:text-[10px] px-2.5 py-1 rounded-full whitespace-nowrap">
                        {project.year}
                      </span>
                    )}
                  </div>
                  <p className="project-category text-xs text-[var(--gold)]">{project.category}</p>
                  <p className="project-desc text-xs sm:text-sm leading-relaxed text-[var(--foreground-muted)] line-clamp-3">{project.description}</p>
                  
                  <div className="project-tech-row flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 pt-2">
                    <div className="project-tech-pills flex flex-wrap gap-1">
                      {project.tech.slice(0, 3).map((t) => (
                        <span key={t} className="text-[8.5px] px-2 py-0.5 rounded-full">{t}</span>
                      ))}
                    </div>
                    <button
                      type="button"
                      className="project-inspect-btn text-[10px] px-3 py-1 rounded-full whitespace-nowrap"
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
        <div className="project-ledger-container w-full overflow-x-auto rounded-xl border border-[var(--line)] bg-[var(--card-bg)] backdrop-blur scrollbar-thin">
          <table className="project-ledger-table w-full min-w-[620px] text-left border-collapse" aria-label="Curated project ledger">
            <thead>
              <tr className="border-b border-[var(--line)]">
                <th className="p-3 sm:p-4 text-[9px] sm:text-[10px] font-bold text-[var(--gold)] uppercase font-mono tracking-widest">№</th>
                <th className="p-3 sm:p-4 text-[9px] sm:text-[10px] font-bold text-[var(--gold)] uppercase tracking-wider">EDITION &amp; CLIENT</th>
                <th className="p-3 sm:p-4 text-[9px] sm:text-[10px] font-bold text-[var(--gold)] uppercase tracking-wider">DOMAIN &amp; ARCHITECTURE</th>
                <th className="p-3 sm:p-4 text-[9px] sm:text-[10px] font-bold text-[var(--gold)] uppercase tracking-wider">CORE IMPACT</th>
                <th className="p-3 sm:p-4 text-[9px] sm:text-[10px] font-bold text-[var(--gold)] uppercase tracking-wider text-right">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {filteredProjects.map((project) => {
                const isExternal = Boolean(project.url);
                const href =
                  project.url ||
                  `mailto:ak8393267@gmail.com?subject=Inquiry%20regarding%20${encodeURIComponent(project.name)}`;

                return (
                  <tr key={project.number} className="ledger-row border-b border-[var(--line)] hover:bg-[var(--chip-bg)] transition-colors">
                    <td className="ledger-cell-num p-3 sm:p-4 font-mono text-xs sm:text-sm text-[var(--gold)]">{project.number}</td>
                    <td className="ledger-cell-title p-3 sm:p-4">
                      <div className="ledger-title-wrap flex items-center gap-2">
                        <strong className="text-sm sm:text-base font-normal">{project.name}</strong>
                        {isExternal && (
                          <span className="ledger-live-indicator text-[8px] px-1.5 py-0.5 rounded-full inline-flex items-center gap-1 font-mono text-[var(--gold)] bg-[var(--gold-glow)]" title="Live Platform">
                            <span className="live-dot w-1.5 h-1.5 rounded-full bg-[var(--gold)]" /> LIVE
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="ledger-cell-domain p-3 sm:p-4">
                      <span className="ledger-category block text-xs text-[var(--foreground-muted)]">{project.category}</span>
                      <div className="ledger-stack-tags flex flex-wrap gap-1 mt-1">
                        {project.tech.slice(0, 3).map((t) => (
                          <span key={t} className="text-[8px] sm:text-[9px] px-1.5 py-0.5 rounded bg-[var(--chip-bg)] border border-[var(--line)]">{t}</span>
                        ))}
                        {project.tech.length > 3 && <span className="text-[8px] opacity-75">+{project.tech.length - 3}</span>}
                      </div>
                    </td>
                    <td className="ledger-cell-metrics p-3 sm:p-4 text-xs text-[var(--foreground-muted)] max-w-xs">
                      {project.metrics || project.description.slice(0, 75) + "..."}
                    </td>
                    <td className="ledger-cell-actions p-3 sm:p-4 text-right">
                      <div className="ledger-action-btns inline-flex items-center gap-2">
                        <a
                          href={href}
                          target={isExternal ? "_blank" : undefined}
                          rel={isExternal ? "noreferrer" : undefined}
                          className="ledger-action-link text-[10px] sm:text-xs px-2.5 py-1 rounded-full border border-[var(--line-strong)] hover:border-[var(--gold)] whitespace-nowrap"
                          aria-label={`Visit ${project.name}`}
                        >
                          {isExternal ? "Visit ↗" : "Inquire ↗"}
                        </a>
                        <button
                          type="button"
                          className="ledger-inspect-btn w-6 h-6 rounded-full border border-[var(--line)] hover:border-[var(--gold)] inline-grid place-items-center text-xs"
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
          className="luxury-modal-backdrop fixed inset-0 z-[200] grid place-items-center p-3.5 sm:p-6 bg-[var(--modal-overlay)] backdrop-blur-md"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="luxury-modal-card w-full max-w-xl max-h-[90dvh] overflow-y-auto p-5 sm:p-8 rounded-xl sm:rounded-2xl border border-[var(--line-strong)] bg-[var(--modal-bg)] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header flex items-start justify-between pb-3.5 sm:pb-4 border-b border-[var(--line)] mb-4">
              <div>
                <span className="modal-eyebrow text-[9.5px] sm:text-[10px] uppercase font-bold tracking-widest text-[var(--gold)]">{selectedProject.category}</span>
                <h3 className="modal-title text-xl sm:text-2xl lg:text-3xl font-serif font-normal text-[var(--foreground)] mt-1">{selectedProject.name}</h3>
              </div>
              <button
                type="button"
                className="modal-close-btn w-8 h-8 rounded-full border border-[var(--line-strong)] text-[var(--gold)] hover:border-[var(--gold)] grid place-items-center transition-transform hover:rotate-90 text-sm"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project modal"
              >
                ✕
              </button>
            </div>

            <div className="modal-body flex flex-col gap-4 text-xs sm:text-sm">
              <p className="modal-desc leading-relaxed text-[var(--foreground-muted)]">{selectedProject.description}</p>
              {selectedProject.metrics && (
                <div className="modal-metric-box p-3 rounded-lg bg-[var(--gold-glow)] border-l-2 border-[var(--gold)] flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                  <span className="metric-label font-bold text-[var(--gold)] text-[10px] uppercase tracking-wider">Key Achievement:</span>
                  <span className="metric-val text-[var(--foreground)]">{selectedProject.metrics}</span>
                </div>
              )}

              <div className="modal-tech-section flex flex-col gap-2 pt-2 border-t border-[var(--line)]">
                <span className="modal-tech-label text-[9.5px] uppercase font-bold tracking-wider text-[var(--muted)]">Architecture & Stack:</span>
                <div className="modal-tech-pills flex flex-wrap gap-1.5">
                  {selectedProject.tech.map((t) => (
                    <span key={t} className="text-[9px] sm:text-[10px] px-2.5 py-1 rounded-full bg-[var(--chip-bg)] border border-[var(--line)] text-[var(--foreground)]">{t}</span>
                  ))}
                </div>
              </div>

              <div className="modal-actions flex flex-col sm:flex-row gap-2.5 pt-3 border-t border-[var(--line)]">
                {selectedProject.url ? (
                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noreferrer"
                    className="hero-primary-btn w-full sm:w-auto justify-center text-xs py-2.5 px-5"
                  >
                    Visit Live Site ↗
                  </a>
                ) : (
                  <a
                    href={`mailto:ak8393267@gmail.com?subject=Inquiry%20regarding%20${encodeURIComponent(selectedProject.name)}`}
                    className="hero-primary-btn w-full sm:w-auto justify-center text-xs py-2.5 px-5"
                  >
                    Request Details ↗
                  </a>
                )}
                <button
                  type="button"
                  className="hero-secondary-btn w-full sm:w-auto justify-center text-xs py-2.5 px-5"
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
      <div className="more-projects-section mt-14 sm:mt-20 lg:mt-24 pt-8 sm:pt-12 border-t border-[var(--line)]">
        <div className="more-projects-header mb-6 sm:mb-8">
          <p className="eyebrow flex items-center gap-2 text-[9.5px] sm:text-[10px] uppercase tracking-widest text-[var(--gold)]">
            <span className="eyebrow-line w-5 sm:w-7" /> ARCHIVAL EDITIONS & SPECIALIZED BUILDS
          </p>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-normal text-[var(--foreground)] mt-2">
            Additional Systems & Platforms
            <span className="accent-period">.</span>
          </h3>
        </div>
        <div className="more-projects-grid grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {content.notableProjects.map((item) => (
            <article className="more-project-card p-4 sm:p-6 rounded-xl border border-[var(--line)] bg-[var(--card-bg)] hover:border-[var(--gold)] transition-all flex flex-col justify-between" key={item.name}>
              <div>
                <div className="more-project-top flex items-center justify-between pb-2 border-b border-[var(--line)] mb-2">
                  <h4 className="text-base sm:text-lg font-serif font-normal text-[var(--foreground)]">{item.name}</h4>
                  <span className="more-project-icon text-[var(--gold)] text-xs" aria-hidden="true">✦</span>
                </div>
                <p className="more-project-domain text-[10px] sm:text-xs font-mono text-[var(--gold)] uppercase mb-2">{item.domain}</p>
                <p className="more-project-desc text-xs sm:text-sm text-[var(--foreground-muted)] leading-relaxed">{item.description}</p>
              </div>
              <div className="more-project-tags flex flex-wrap gap-1.5 pt-4 mt-3 border-t border-[var(--line)]">
                {item.tags.map((tag) => (
                  <span key={tag} className="text-[8.5px] px-2 py-0.5 rounded-full bg-[var(--chip-bg)] border border-[var(--line)] text-[var(--foreground-muted)]">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      <a className="all-work-link block text-center mt-10 sm:mt-14 p-4 sm:p-6 rounded-xl border border-[var(--line)] bg-[var(--card-bg)] hover:border-[var(--gold)] transition-all text-xs sm:text-sm text-[var(--foreground-muted)]" href={content.closingHref}>
        {content.closingPrompt}{" "}
        <span className="text-[var(--gold)] font-bold inline-flex items-center gap-1">
          {content.closingLink} <b aria-hidden="true">↓</b>
        </span>
      </a>
    </section>
  );
}
