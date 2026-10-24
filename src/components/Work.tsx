const content = {
  eyebrow: "Selected work",
  title: "Featured projects",
  aside: "Real-world web applications, production systems,",
  asideSecondLine: "and digital products that shipped.",
  projectTag: "FEATURED",
  closingPrompt: "Have a project or opportunity in mind?",
  closingLink: "Let’s talk",
  closingHref: "#contact",
  projects: [
    {
      number: "01",
      name: "Kartizen",
      category: "E-Commerce Platform · Web Application",
      year: "Live Demo",
      url: "https://kartizen.whdev.in/",
      theme: "project-kartizen",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=85",
      alt: "Kartizen e-commerce shopping platform interface",
      label: "INTUITIVE\nSHOPPING,\nE-COMMERCE.",
      description:
        "Modern e-commerce platform built for a smooth shopping journey with category-based navigation, instant multi-filter search, and responsive mobile-first layouts.",
      tech: ["Next.js", "React.js", "Redux", "Tailwind CSS"],
    },
    {
      number: "02",
      name: "Shaandaar Events",
      category: "Event & Wedding Services · Web Platform",
      year: "Live Demo",
      url: "https://shaandaarevents.com/",
      theme: "project-shaandaar",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
      alt: "Shaandaar Events wedding and event management website",
      label: "MEMORABLE\nEVENTS,\nELEGANT UI.",
      description:
        "High-converting event management website featuring rich visual storytelling, fluid layouts across all devices, and an intuitive service showcase.",
      tech: ["Next.js", "React.js", "Tailwind CSS", "UI/UX"],
    },
    {
      number: "03",
      name: "Ckomic HealthCity Pharma",
      category: "Hospital Marketing & Healthcare Platform",
      year: "Next.js",
      url: "",
      theme: "project-ckomic",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=85",
      alt: "Hospital marketing website with appointment scheduling",
      label: "HEALTHCARE,\nAPPOINTMENTS\n& CARE.",
      description:
        "Responsive hospital marketing website enabling patients to book appointments in real time, explore specialized healthcare services, and consult doctors.",
      tech: ["Next.js", "Redux", "Tailwind CSS", "Context API"],
    },
    {
      number: "04",
      name: "bioBox Pharma",
      category: "Biopharmaceutical Platform & Product Hub",
      year: "React.js",
      url: "",
      theme: "project-biobox",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=85",
      alt: "Biopharmaceutical product management platform",
      label: "BIOPHARMA\nCATALOG &\nDISCOVERY.",
      description:
        "Scalable platform for managing and displaying biopharmaceutical product information with interactive catalog pages, multi-level search, and fast load times.",
      tech: ["React.js", "Next.js", "Redux", "Tailwind CSS"],
    },
    {
      number: "05",
      name: "Innovexia",
      category: "Pharmaceutical Product Catalogue & Management",
      year: "Next.js",
      url: "",
      theme: "project-innovexia",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=85",
      alt: "Interactive pharmaceutical product catalogue interface",
      label: "SCALABLE\nPRODUCT\nCATALOGUE.",
      description:
        "Scalable pharmaceutical frontend with interactive product catalogue, multi-level category navigation, and optimized cross-browser performance.",
      tech: ["Next.js", "Redux Toolkit", "REST APIs", "Tailwind CSS"],
    },
    {
      number: "06",
      name: "Obras (Mobile App)",
      category: "Construction Management Platform · Mobile",
      year: "Mobile App",
      url: "",
      theme: "project-obras",
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=85",
      alt: "Construction management and task coordination mobile application",
      label: "CONSTRUCTION\nMANAGEMENT\nMOBILE APP.",
      description:
        "Cross-platform mobile application enabling project administrators to manage user access, assign team roles, track construction milestones, and coordinate tasks.",
      tech: ["React Native", "Mobile UI", "REST APIs", "Git"],
    },
  ],
  notableProjects: [
    {
      name: "LTD Platform",
      domain: "Legal Tech & Knowledge Exchange",
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
        "Built an interactive informational web template integrated with live health data dashboards to disseminate verified COVID-19 updates and analytics.",
      tags: ["JavaScript", "Live Dashboards", "Charts", "Responsive UI"],
    },
    {
      name: "Yoga Center",
      domain: "Wellness & Fitness Marketing",
      description:
        "Built a responsive marketing website showcasing yoga benefits, instructor profiles, and dynamic interactive class schedules.",
      tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    },
  ],
};

export function Work() {
  return (
    <section className="work-section section-wrap" id="work" aria-labelledby="work-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow"><span className="eyebrow-line" /> {content.eyebrow}</p>
          <h2 id="work-title">{content.title}<span className="accent-period">.</span></h2>
        </div>
        <p className="section-aside">{content.aside}<br />{content.asideSecondLine}</p>
      </div>

      <div className="project-grid">
        {content.projects.map((project) => {
          const href = project.url || `mailto:ak8393267@gmail.com?subject=Inquiry%20regarding%20${encodeURIComponent(project.name)}`;
          const isExternal = Boolean(project.url);

          return (
            <article className={`project-card ${project.theme}`} key={project.number}>
              <a
                className="project-image"
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
                aria-label={isExternal ? `Visit ${project.name} live website` : `Inquire about ${project.name}`}
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
                  {isExternal ? "↗" : "→"}
                </span>
                <span className="project-number">{project.number} / {content.projectTag}</span>
              </a>

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
                      Live Demo ↗
                    </a>
                  ) : (
                    <span className="project-live-tag" style={{ background: "transparent", borderColor: "var(--line)" }}>
                      {project.year}
                    </span>
                  )}
                </div>
                <p className="project-category">{project.category}</p>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech-pills">
                  {project.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="more-projects-section">
        <div className="more-projects-header">
          <p className="eyebrow"><span className="eyebrow-line" /> ARCHIVE & NOTABLE BUILDS</p>
          <h3>More things that shipped<span className="accent-period">.</span></h3>
        </div>
        <div className="more-projects-grid">
          {content.notableProjects.map((item) => (
            <article className="more-project-card" key={item.name}>
              <h4>{item.name}</h4>
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
        {content.closingPrompt} <span>{content.closingLink} <b aria-hidden="true">↓</b></span>
      </a>
    </section>
  );
}
