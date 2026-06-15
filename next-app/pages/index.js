import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Akíndé Precious | QA Engineer</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Inline converted JSX from index.html - classes retained as className */}
      <nav id="navbar">
        <div className="nav-inner">
          <span className="nav-logo">AP<span className="gold">.</span></span>
          <div className="nav-links" id="navLinks">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
            <a href="#contact" className="btn-hire">Hire Me</a>
          </div>
          <button className="hamburger" id="hamburger" aria-label="Toggle menu">
            <span></span><span></span><span></span>
          </button>
        </div>
        <div className="mobile-menu" id="mobileMenu">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
          <a href="#contact" className="btn-hire-mobile">Hire Me</a>
        </div>
      </nav>

      <main>
        <section id="home" className="hero">
          <div className="hero-grid"></div>
          <div className="hero-glow1"></div>
          <div className="hero-glow2"></div>
          <div className="hero-inner">
            <div className="hero-left">
              <div className="available-badge">
                <span className="badge-dot"></span>
                Available for Work
              </div>
              <h1>
                Hi, I'm<br />
                <span className="name-white">Akíndé</span><br />
                <span className="name-gold">Precious</span>
              </h1>
              <div className="typing-row">
                <span id="typedText"></span>
                <span className="cursor"></span>
              </div>
              <p className="hero-sub">
                I ensure software quality through comprehensive testing strategies and automation frameworks. Let's build robust and reliable applications together.
              </p>
              <div className="hero-btns">
                <a href="#contact" className="btn-primary">Get In Touch</a>
                <a href="#projects" className="btn-outline">View Projects</a>
              </div>
              <div className="hero-stats">
                <div><div className="stat-num">100+</div><div className="stat-label">Projects</div></div>
                <div><div className="stat-num">1000+</div><div className="stat-label">Test Cases</div></div>
                <div><div className="stat-num">95%</div><div className="stat-label">Quality Score</div></div>
                <div><div className="stat-num">2+</div><div className="stat-label">Years</div></div>
              </div>
            </div>
            <div className="hero-right">
              <div className="avatar-outer">
                <div className="avatar-mid">
                  <div className="avatar-inner">
                    <span className="avatar-initials">AP</span>
                  </div>
                </div>
              </div>
              <div className="location-badge">
                <div className="loc-label">Based in</div>
                <div className="loc-value">Lagos, Nigeria 🇳🇬</div>
              </div>
            </div>
          </div>
          <div className="scroll-indicator">
            <span>Scroll</span>
            <div className="scroll-line"></div>
          </div>
        </section>

        <section id="about" className="about section">
          <div className="container">
            <div className="about-grid">
              <div className="about-left">
                <p className="section-label">About Me</p>
                <h2>Precision-driven<br /><span className="dim">Quality Assurance Engineer</span></h2>
                <p className="about-text">I'm a dedicated QA Engineer with a passion for ensuring software quality and reliability. With expertise in test automation, manual testing, and quality assurance methodologies, I help teams deliver excellent products.</p>
                <p className="about-text">My approach combines technical expertise with meticulous attention to detail, ensuring that every application meets the highest quality standards. I believe in continuous learning and staying updated with the latest testing tools and frameworks.</p>
                <div className="about-btns">
                  <a href="mailto:akindeola700@gmail.com" className="btn-primary">Download CV</a>
                  <a href="https://www.linkedin.com/in/precious-akinde-b27b96416?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noreferrer" className="btn-outline">LinkedIn</a>
                </div>
              </div>
              <div className="about-cards">
                <div className="about-card">
                  <div className="card-icon">⚙️</div>
                  <div className="card-title">Test Automation</div>
                  <div className="card-desc">Building scalable test frameworks</div>
                </div>
                <div className="about-card">
                  <div className="card-icon">🔍</div>
                  <div className="card-title">Manual Testing</div>
                  <div className="card-desc">Exploratory &amp; regression testing</div>
                </div>
                <div className="about-card">
                  <div className="card-icon">🌐</div>
                  <div className="card-title">API Testing</div>
                  <div className="card-desc">Postman, REST &amp; GraphQL APIs</div>
                </div>
                <div className="about-card">
                  <div className="card-icon">📊</div>
                  <div className="card-title">Performance</div>
                  <div className="card-desc">Load &amp; stress testing</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="skills section alt-bg">
          <div className="container">
            <div className="section-header">
              <p className="section-label">Expertise</p>
              <h2>Skills &amp; Technologies</h2>
            </div>
            <div className="skills-grid">
              <div className="skill-categories">
                <div className="skill-group">
                  <h4 className="skill-cat-title">Test Automation</h4>
                  <div className="tags">
                    <span>Selenium</span><span>Cypress</span><span>Playwright</span>
                    <span>Appium</span><span>Jest</span><span>PyTest</span>
                  </div>
                </div>
                <div className="skill-group">
                  <h4 className="skill-cat-title">API &amp; Performance</h4>
                  <div className="tags">
                    <span>Postman</span><span>REST Assured</span><span>JMeter</span>
                    <span>k6</span><span>Newman</span><span>Swagger</span>
                  </div>
                </div>
                <div className="skill-group">
                  <h4 className="skill-cat-title">Languages</h4>
                  <div className="tags">
                    <span>JavaScript</span><span>Python</span><span>Java</span>
                    <span>TypeScript</span><span>Bash</span><span>SQL</span>
                  </div>
                </div>
                <div className="skill-group">
                  <h4 className="skill-cat-title">Tools &amp; Platforms</h4>
                  <div className="tags">
                    <span>Jira</span><span>Azure DevOps</span><span>GitHub Actions</span>
                    <span>Docker</span><span>Jenkins</span><span>TestRail</span>
                  </div>
                </div>
              </div>
              <div className="skill-bars">
                <div className="skill-bar-item">
                  <div className="skill-bar-label"><span>Test Automation</span><span className="gold">90%</span></div>
                  <div className="bar-track"><div className="bar-fill" data-width="90"></div></div>
                </div>
                <div className="skill-bar-item">
                  <div className="skill-bar-label"><span>Manual Testing</span><span className="gold">95%</span></div>
                  <div className="bar-track"><div className="bar-fill" data-width="95"></div></div>
                </div>
                <div className="skill-bar-item">
                  <div className="skill-bar-label"><span>API Testing</span><span className="gold">92%</span></div>
                  <div className="bar-track"><div className="bar-fill" data-width="88"></div></div>
                </div>
                <div className="skill-bar-item">
                  <div className="skill-bar-label"><span>Performance Testing</span><span className="gold">85%</span></div>
                  <div className="bar-track"><div className="bar-fill" data-width="75"></div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="experience section">
          <div className="container">
            <div className="section-header">
              <p className="section-label">My Journey</p>
              <h2>Experience</h2>
            </div>
            <div className="timeline">
              <div className="timeline-line"></div>
              <div className="timeline-item left">
                <div className="timeline-dot"></div>
                <div className="timeline-card">
                  <div className="tc-header">
                    <div>
                      <h3>Quality Assurance Engineer</h3>
                      <p className="gold">VOYATEK Group</p>
                    </div>
                    <div className="tc-meta">
                      <span className="tc-badge">Full-time</span>
                      <p className="tc-period">2024 – Present · 2+ Years</p>
                    </div>
                  </div>
                  <p className="tc-desc">Led comprehensive testing strategies and automated test frameworks, ensuring product quality across multiple projects using advanced QA methodologies.</p>
                </div>
              </div>
              <div className="timeline-item right">
                <div className="timeline-dot"></div>
                <div className="timeline-card">
                  <div className="tc-header">
                    <div>
                      <h3>QA Specialist-National Youth Service Corps (NYSC)</h3>
                      <p className="gold">Birdview Travels &amp; Tours</p>
                    </div>
                    <div className="tc-meta">
                      <span className="tc-badge">NYSC</span>
                      <p className="tc-period">2024 – 2025 · 1 Year</p>
                    </div>
                  </div>
                  <p className="tc-desc">Handled API testing, UI testing, and test automation using Postman and Microsoft Azure Board. Collaborated with cross-functional teams to deliver robust applications.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="projects section alt-bg">
          <div className="container">
            <div className="section-header">
              <p className="section-label">Portfolio</p>
              <h2>Featured Projects</h2>
              <p className="section-sub">A selection of real-world QA projects and testing frameworks I've built and led.</p>
            </div>
            <div className="projects-grid">
              <div className="project-card">
                <div className="pc-top"><span className="status-done">Completed</span><span className="gold metric">1000+ test cases</span></div>
                <h3>E-Commerce Test Suite</h3>
                <p>Built a comprehensive end-to-end automation framework for a large e-commerce platform covering 1000+ test cases across checkout, payments, and user flows.</p>
              </div>
              <div className="project-card">
                <div className="pc-top"><span className="status-done">Completed</span><span className="gold metric">2000+ endpoints</span></div>
                <h3>API Testing Framework</h3>
                <p>Designed and implemented a scalable API testing framework using Postman and Newman, integrated into the CI pipeline for automated regression testing.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="services section">
          <div className="container">
            <div className="section-header">
              <p className="section-label">What I Offer</p>
              <h2>Services</h2>
            </div>
            <div className="services-grid">
              <div className="service-card">
                <div className="svc-icon">🔍</div>
                <h3>Manual Testing</h3>
                <p>Comprehensive manual testing including functional, regression, and exploratory testing to catch what automation misses.</p>
              </div>
              <div className="service-card">
                <div className="svc-icon">⚙️</div>
                <h3>Test Automation</h3>
                <p>Building robust automated test frameworks using Cypress, Selenium, or Playwright for efficient, scalable testing.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="testimonials section alt-bg">
          <div className="container">
            <div className="section-header">
              <p className="section-label">Social Proof</p>
              <h2>What Clients Say</h2>
            </div>
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <div className="stars">★★★★★</div>
                <p className="testi-text">"Precious is an exceptional QA engineer. His attention to detail and automation skills helped us ship our product with zero critical bugs."</p>
                <div className="testi-author">
                  <div className="testi-avatar">AO</div>
                  <div>
                    <p className="testi-name">Adebayo Okonkwo</p>
                    <p className="testi-role">CTO, TechVentures Nigeria</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact section">
          <div className="container">
            <div className="section-header">
              <p className="section-label">Get In Touch</p>
              <h2>Let's Work Together</h2>
              <p className="section-sub">Have a project in mind? Let's discuss how I can help improve your software quality.</p>
            </div>
            <div className="contact-grid">
              <div className="contact-info">
                <h3>Contact Information</h3>
                <div className="contact-item">
                  <div className="contact-icon">✉️</div>
                  <div>
                    <p className="contact-label">Email</p>
                    <a href="mailto:akindeola700@gmail.com" className="contact-value">akindeola700@gmail.com</a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div>
                    <p className="contact-label">Phone</p>
                    <a href="tel:+2347055095306" className="contact-value">+234 705 509 5306</a>
                  </div>
                </div>
              </div>
              <div className="contact-form-card">
                <div id="formSuccess" className="form-success hidden">
                  <div className="success-icon">✓</div>
                  <h3>Message Sent!</h3>
                  <p>I'll get back to you within 24 hours.</p>
                  <button onClick={() => window.resetForm()}>Send another message</button>
                </div>
                <form id="contactForm" action="https://formspree.io/f/mbdwplzg" method="POST" onSubmit={(e) => window.handleContactSubmit(e)}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Name</label>
                      <input name="name" type="text" placeholder="Your name" required />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input name="email" type="email" placeholder="your@email.com" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Subject</label>
                    <input name="subject" type="text" placeholder="Project inquiry" required />
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea name="message" rows="5" placeholder="Tell me about your project..." required></textarea>
                  </div>
                  <button type="submit" id="submitBtn" className="btn-primary full">
                    <span id="submitText">✉ Send Message</span>
                    <span id="submitLoader" className="loader hidden"></span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container">
            <div className="footer-inner">
              <div>
                <div className="footer-logo">AP<span className="gold">.</span></div>
                <p className="footer-tagline">QA Engineer · Lagos, Nigeria</p>
              </div>
              <div className="footer-links">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#experience">Experience</a>
                <a href="#projects">Projects</a>
                <a href="#services">Services</a>
                <a href="#contact">Contact</a>
              </div>
              <p className="footer-copy">© <span id="year"></span> Akíndé Precious.<br />All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
