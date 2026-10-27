import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDownRight, ArrowRight, Github, Linkedin, Mail, ExternalLink,
  Code2, Layers3, Database, Terminal, Sparkles, Menu
} from "lucide-react";
import "./styles.css";

const skills = [
  { name: "Frontend", items: ["HTML", "CSS", "JavaScript", "React"] },
  { name: "Backend", items: ["Python", "FastAPI", "REST APIs"] },
  { name: "Database", items: ["MySQL", "SQL"] },
  { name: "Tools", items: ["Git", "GitHub", "VS Code", "Vite"] },
];

const projects = [
  {
    number: "01",
    name: "DHIVARA",
    type: "Smart Queue Prediction System",
    description:
      "A queue-management project designed to help users join a service queue and check live queue information. The backend uses FastAPI and MySQL, with queue details such as the current token, people waiting, and estimated wait time.",
    tags: ["React", "FastAPI", "Python", "MySQL"],
    status: "Featured project",
    link: "",
  },
];

function App() {
  const email = "your.email@example.com";
  const github = "https://github.com/your-github-username";
  const linkedin = "https://www.linkedin.com/in/your-linkedin-username/";

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#home" aria-label="DHIVAKAR home">
          <span className="brand-mark">D<span>.</span></span>
          <span className="brand-name">DHIVAKAR<span> B</span></span>
        </a>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-cta" href="#contact">Let’s talk <ArrowRight size={15} /></a>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES</div>
            <p className="hero-kicker">HELLO, I'M</p>
            <h1>DHIVAKAR <span>B.</span></h1>
            <h2>Full Stack <span>Developer</span></h2>
            <p className="hero-description">
              I build thoughtful digital experiences by combining clean interfaces,
              reliable backend systems, and practical problem-solving.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={17} /></a>
              <a className="button button-ghost" href="#contact">Get in touch <ArrowRight size={16} /></a>
            </div>
            <div className="hero-socials">
              <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
              <a href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href={`mailto:${email}`} aria-label="Email"><Mail size={18} /></a>
              <span className="social-line" />
              <span className="social-caption">LET'S BUILD SOMETHING</span>
            </div>
          </div>
          <div className="hero-art" aria-label="Decorative developer code illustration">
            <div className="art-grid" />
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="code-card">
              <div className="code-card-top"><div className="window-dots"><i/><i/><i/></div><span>developer.js</span><span className="code-live">● LIVE</span></div>
              <div className="code-lines">
                <p><span className="line-no">01</span><span className="syntax-purple">const</span> developer = {'{'}</p>
                <p><span className="line-no">02</span>&nbsp;&nbsp;name: <span className="syntax-green">'Dhivakar'</span>,</p>
                <p><span className="line-no">03</span>&nbsp;&nbsp;role: <span className="syntax-green">'Full Stack'</span>,</p>
                <p><span className="line-no">04</span>&nbsp;&nbsp;curious: <span className="syntax-orange">true</span>,</p>
                <p><span className="line-no">05</span>&nbsp;&nbsp;build: <span className="syntax-blue">() =&gt;</span> <span className="syntax-green">'Ideas'</span></p>
                <p><span className="line-no">06</span>{'}'};</p>
                <p className="code-spacer"><span className="line-no">07</span></p>
                <p><span className="line-no">08</span><span className="syntax-purple">while</span> (learning) {'{'}</p>
                <p><span className="line-no">09</span>&nbsp;&nbsp;buildSomethingGreat();</p>
                <p><span className="line-no">10</span>{'}'} <span className="cursor">▋</span></p>
              </div>
            </div>
            <div className="floating-chip chip-top"><Code2 size={16} /> Clean code</div>
            <div className="floating-chip chip-bottom"><Sparkles size={16} /> Always learning</div>
            <div className="hero-index">01 <span>/ 04</span></div>
          </div>
          <a className="scroll-cue" href="#about"><span /> SCROLL TO DISCOVER</a>
        </section>

        <section className="section-wrap about-section" id="about">
          <div className="section-label"><span>01</span> ABOUT ME</div>
          <div className="about-grid">
            <div><h3>Curious mind.<br/><span>Builder's mindset.</span></h3></div>
            <div className="about-text">
              <p className="lead">I'm an aspiring full stack developer who enjoys turning ideas into useful, working applications.</p>
              <p>I like exploring how the pieces of a web application fit together — from responsive user interfaces to APIs and database-backed features. My current featured project is <strong>DHIVARA</strong>, a smart queue prediction and management system.</p>
              <div className="about-stats">
                <div><strong>01</strong><span>Featured project</span></div>
                <div><strong>4+</strong><span>Core tech areas</span></div>
                <div><strong>∞</strong><span>Things to learn</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-wrap skills-section" id="skills">
          <div className="section-heading">
            <div><div className="section-label"><span>02</span> MY TOOLKIT</div><h3>Skills that bring<br/><span>ideas to life.</span></h3></div>
            <p>A growing toolkit for building complete web applications — from the first UI component to data flowing through an API.</p>
          </div>
          <div className="skill-grid">
            {skills.map((group, index) => {
              const Icon = [Layers3, Code2, Database, Terminal][index];
              return <article className="skill-card" key={group.name}>
                <div className="skill-icon"><Icon size={21} /></div>
                <span className="skill-index">0{index + 1}</span>
                <h4>{group.name}</h4>
                <div className="skill-tags">{group.items.map(item => <span key={item}>{item}</span>)}</div>
              </article>;
            })}
          </div>
        </section>

        <section className="section-wrap projects-section" id="projects">
          <div className="section-heading project-heading">
            <div><div className="section-label"><span>03</span> SELECTED WORK</div><h3>Projects with<br/><span>a purpose.</span></h3></div>
            <p>Here’s a look at what I’m building. More projects can be added as they’re ready to share.</p>
          </div>
          {projects.map(project => <article className="project-card" key={project.number}>
            <div className="project-visual">
              <div className="project-visual-top"><span>DHIVARA / SYSTEM PREVIEW</span><span className="visual-status"><i/> SYSTEM CONCEPT</span></div>
              <div className="dashboard-mock">
                <div className="mock-sidebar"><div className="mock-logo">D<span>.</span></div><div className="mock-side-active"/><i/><i/><i/><i/></div>
                <div className="mock-main">
                  <div className="mock-title"><span>Queue overview</span><span className="mock-pill">LIVE QUEUE</span></div>
                  <div className="mock-metrics"><div><small>Current token</small><b>A001</b><span>Now serving</span></div><div><small>People waiting</small><b>08</b><span>In the queue</span></div></div>
                  <div className="mock-chart"><div className="chart-label">Queue activity <span>Today</span></div><div className="chart-bars">{[30,48,39,66,52,78,59,90,70,48,64,83].map((height, i)=><i key={i} style={{height: `${height}%`}} />)}</div></div>
                </div>
              </div>
              <div className="visual-glow"/>
            </div>
            <div className="project-info">
              <div className="project-meta"><span>{project.number} / {project.status}</span><span>WEB APPLICATION</span></div>
              <h4>{project.name}</h4><h5>{project.type}</h5>
              <p>{project.description}</p>
              <div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              <div className="project-links">
                {project.link ? <a href={project.link} target="_blank" rel="noreferrer">View project <ExternalLink size={15}/></a> : <span className="edit-note">Add your GitHub/demo URL in src/main.jsx</span>}
              </div>
            </div>
          </article>)}
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <div className="section-label"><span>04</span> GET IN TOUCH</div>
            <h3>Have an idea?<br/><span>Let's make it real.</span></h3>
            <p>I'm open to opportunities, collaborations, and conversations about building useful things.</p>
            <a className="button button-primary contact-button" href={`mailto:${email}?subject=Hello%20Dhivakar`}>Say hello <ArrowRight size={17}/></a>
            <div className="contact-links">
              <a href={`mailto:${email}`}><Mail size={17}/> {email}</a>
              <a href={linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ExternalLink size={13}/></a>
              <a href={github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ExternalLink size={13}/></a>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">D<span>.</span></span><span className="brand-name">DHIVAKAR<span> B</span></span></a><p>Designed & built with curiosity.</p><span>© {new Date().getFullYear()} DHIVAKAR B</span></footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);