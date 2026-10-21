import { existsSync } from "node:fs";
import { join } from "node:path";
import Navigation from "./navigation";

const githubUrl = "https://github.com/Yash-Parmar-2707";
const resumeAvailable = existsSync(join(process.cwd(), "public", "resume.pdf"));

const projects = [
  {
    number: "01",
    name: "Medicine Inventory System",
    description:
      "An online medicine ordering website where customers can order through the site or email, use discounts, and have orders managed through an admin panel.",
    category: "MEDICINE INVENTORY",
  },
  {
    number: "02",
    name: "HRixio",
    description:
      "An HRMS for employee attendance, leave, pay, assets, and holidays, with payroll tools for HR and configurable multi-organization administration.",
    href: "https://hrixio.com/",
    category: "HUMAN RESOURCES",
  },
];

const skills = [
  ["01", "Mobile development", "Flutter"],
  ["02", "Web development", "MERN stack"],
  ["03", "Development workflow", "AI-assisted development"],
];

function SectionIndex({ number, children }) {
  return (
    <div className="section-index">
      <span>{number}</span>
      <span className="index-rule" />
      <span>{children}</span>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="portfolio-frame">
        <Navigation />

        <main id="main">
        <section className="hero section-shell" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-line" /> DEVELOPER PORTFOLIO <span className="eyebrow-divider">//</span> MOBILE &amp; WEB
              <span className="eyebrow-year">2026</span>
            </p>
            <h1 id="hero-title">
              Yash
              <br />
              <span>Parmar</span>
            </h1>
            <p className="hero-intro">
              Developer building across mobile, web, and AI-assisted workflows.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore projects <span aria-hidden="true">↘</span>
              </a>
              <a className="text-link" href={githubUrl} target="_blank" rel="noreferrer">
                Visit GitHub <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <aside className="hero-aside" aria-label="Development toolkit">
            <div className="profile-panel">
              <div className="profile-panel-top">
                <span className="panel-indicator" aria-hidden="true" />
                <p className="mono-label">DEVELOPMENT TOOLKIT</p>
                <span className="panel-index">01—03</span>
              </div>
              <div className="orbit-visual" aria-hidden="true">
                <span className="orbit orbit-one" />
                <span className="orbit orbit-two" />
                <span className="orbit orbit-three" />
                <span className="orbit-core">YP</span>
                <span className="orbit-node node-one" />
                <span className="orbit-node node-two" />
              </div>
              <div className="toolkit-list">
                <div><span>01</span> Flutter <span className="toolkit-type">MOBILE</span></div>
                <div><span>02</span> MERN stack <span className="toolkit-type">WEB</span></div>
                <div><span>03</span> AI-assisted development</div>
              </div>
            </div>
          </aside>
          <a className="scroll-cue" href="#about">
            <span className="scroll-line" /> SCROLL TO EXPLORE
          </a>
        </section>

        <section className="content-section section-shell" id="about" aria-labelledby="about-title">
          <SectionIndex number="01">ABOUT</SectionIndex>
          <div className="section-content about-grid">
            <h2 id="about-title">
              Curious by nature.
              <br />
              <span>Developer by practice.</span>
            </h2>
            <div className="about-detail">
              <p className="body-copy">
                I’m Yash, a developer interested in building useful digital experiences across
                mobile and web.
              </p>
              <div className="education-block">
                <p className="mono-label">EDUCATION</p>
                <p>
                  BCA &amp; MCA <span className="detail-separator">/</span> Silver Oak University
                </p>
              </div>
              <aside className="resume-card" aria-label="Résumé">
                <div className="resume-card-copy">
                  <p className="mono-label">RÉSUMÉ</p>
                  <h3>Want the full overview?</h3>
                  <p>
                    {resumeAvailable
                      ? "Download my résumé for a summary of my experience and skills."
                      : "Add your PDF as public/resume.pdf to make it available here."}
                  </p>
                </div>
                {resumeAvailable ? (
                  <a className="resume-download" href="/resume.pdf" download>
                    Download PDF <span aria-hidden="true">↓</span>
                  </a>
                ) : (
                  <span className="resume-download is-unavailable" aria-disabled="true">
                    PDF coming soon
                  </span>
                )}
              </aside>
            </div>
          </div>
        </section>

        <section className="content-section section-shell" id="projects" aria-labelledby="projects-title">
          <SectionIndex number="02">SELECTED WORK</SectionIndex>
          <div className="section-content">
            <div className="section-heading-row">
              <h2 id="projects-title">
                Projects<span className="title-period">.</span>
              </h2>
              <p className="section-note">A few things I’ve worked on.</p>
            </div>
            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.number}>
                  <div className="project-topline">
                    <span className="mono-label">{project.category}</span>
                    {project.href ? (
                      <a
                        className="project-arrow"
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${project.name} website`}
                      >
                        ↗
                      </a>
                    ) : null}
                  </div>
                  <div className="project-body">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                  </div>
                  <div className="project-bottom">
                    {project.href ? (
                      <a className="tech-tag project-link-tag" href={project.href} target="_blank" rel="noreferrer">
                        VISIT HRIXIO <span aria-hidden="true">↗</span>
                      </a>
                    ) : (
                      <span className="tech-tag">INTERNSHIP PROJECT</span>
                    )}
                    <span className="project-number">{project.number} / 02</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section section-shell" id="skills" aria-labelledby="skills-title">
          <SectionIndex number="03">CAPABILITIES</SectionIndex>
          <div className="section-content">
            <div className="section-heading-row">
              <h2 id="skills-title">
                Skills<span className="title-period">.</span>
              </h2>
              <p className="section-note">Tools and approaches I work with.</p>
            </div>
            <div className="capability-grid">
              {skills.map(([number, category, skill]) => (
                <article className="capability-card" key={number}>
                  <span className="skill-count">{number} <span aria-hidden="true">/</span> CAPABILITY</span>
                  <h3>{category}</h3>
                  <span className="skill-value">{skill}</span>
                  <span className="capability-corner" aria-hidden="true">↗</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="content-section section-shell"
          id="experience"
          aria-labelledby="experience-title"
        >
          <SectionIndex number="04">EXPERIENCE</SectionIndex>
          <div className="section-content experience-row">
            <h2 id="experience-title">
              Experience<span className="title-period">.</span>
            </h2>
            <div className="experience-detail">
              <p className="mono-label">SOFTWARE DEVELOPMENT INTERN</p>
              <h3>iBharat.tech</h3>
              <p className="experience-summary">
                Worked on two web products: an online medicine ordering platform and an
                HRMS for employees, organization administrators, and super administrators.
              </p>
              <div className="experience-projects">
                <article className="experience-project">
                  <span className="experience-project-number">01</span>
                  <div>
                    <h4>Medicine Inventory System</h4>
                    <p>
                      Built a website where customers can place medicine orders online or
                      by email, use discounts, and access an admin panel for inventory and
                      order management.
                    </p>
                  </div>
                </article>
                <article className="experience-project">
                  <span className="experience-project-number">02</span>
                  <div>
                    <h4>HRixio</h4>
                    <p>
                      Contributed to an HRMS where employees manage attendance, leave,
                      pay, assets, and holidays. HR teams assign leave and create payroll.
                      Super administrators manage multiple organizations, while each
                      organization administrator configures the modules their organization
                      needs.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section section-shell" id="contact" aria-labelledby="contact-title">
          <SectionIndex number="05">CONTACT</SectionIndex>
          <div className="contact-content">
            <p className="mono-label">HAVE A PROJECT IN MIND?</p>
            <h2 id="contact-title">
              Let’s connect<span className="title-period">.</span>
            </h2>
            <p className="contact-copy">The best way to reach me is through GitHub.</p>
            <a className="contact-link" href={githubUrl} target="_blank" rel="noreferrer">
              Contact me on GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
        </main>

        <footer className="site-footer section-shell">
          <a className="wordmark" href="#home" aria-label="Back to top">
            YP<span>.</span>
          </a>
          <p>© 2026 Yash Parmar</p>
          <a className="footer-link" href={githubUrl} target="_blank" rel="noreferrer">
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </footer>
      </div>
    </>
  );
}
