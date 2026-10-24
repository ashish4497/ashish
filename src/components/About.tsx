const content = {
  eyebrow: "A little about me",
  headlineFirst: "Good design",
  headlineSecond: "deserves",
  headlineAccent: "great code.",
  lead: "Hey, I’m Ashish Kumar — a Frontend Developer with 3+ years of experience based in Himachal Pradesh, India.",
  description:
    "I specialize in crafting intuitive, responsive, and visually appealing web applications. Proficient in React.js, Next.js, Redux, Redux Toolkit, Context API, Tailwind CSS, and JavaScript, I collaborate seamlessly with cross-functional teams including UX designers and backend engineers to build high-performance digital products with a relentless focus on clean code, UI/UX best practices, and frontend scalability.",
  capabilitiesLabel: "TECHNICAL SKILLS & COMPETENCIES",
  skillGroups: [
    {
      category: "Frontend Core",
      skills: ["React.js", "Next.js", "JavaScript (ES6+)", "HTML5", "CSS3 / SCSS", "Tailwind CSS"],
    },
    {
      category: "State & Architecture",
      skills: ["Redux", "Redux Toolkit", "Context API", "Component Architecture", "Clean Code"],
    },
    {
      category: "Mobile & APIs",
      skills: ["React Native", "RESTful API Integration", "Strapi Headless CMS"],
    },
    {
      category: "Design & Quality",
      skills: ["UI/UX Best Practices", "Responsive Design", "Cross-Browser Compatibility", "Performance Tuning", "Git & GitHub", "Figma"],
    },
  ],
  stampTop: "BUILT WITH",
  stampBottom: "INTENTION",
};

export function About() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="about-inner section-wrap">
        <div className="about-intro">
          <p className="eyebrow"><span className="eyebrow-line" /> {content.eyebrow}</p>
          <h2 id="about-title">
            {content.headlineFirst}
            <br />
            {content.headlineSecond} <span className="type-accent">{content.headlineAccent}</span>
          </h2>
        </div>

        <div className="about-details">
          <p className="about-lead">{content.lead}</p>
          <p className="about-body">{content.description}</p>

          <div className="capabilities">
            <span className="capabilities-label">{content.capabilitiesLabel}</span>
            <div style={{ display: "grid", gap: "16px", marginTop: "18px" }}>
              {content.skillGroups.map((group) => (
                <div key={group.category}>
                  <p style={{ margin: "0 0 8px", fontSize: "11px", fontWeight: 700, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.06em", fontFamily: "var(--font-mono)" }}>
                    {group.category}
                  </p>
                  <div className="capability-list" style={{ marginTop: 0 }}>
                    {group.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="about-stamp" aria-hidden="true">
          <span>{content.stampTop}</span>
          <strong>♥</strong>
          <span>{content.stampBottom}</span>
        </div>
      </div>
    </section>
  );
}
