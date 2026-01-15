import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Menu,
  X
} from 'lucide-react';
import './App.css';

// --- Types ---
interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  links: {
    demo: string;
    code: string;
  };
}

// --- Data ---
const portfolioData = {
  name: "Andrei Hamor",
  role: "Aspiring Game Developer",
  bio: "Track your vitals and wellness easily using Raspberry pi",
  projects: [
    {
      id: 1,
      title: "Health Monitoring App",
      description: "A comprehensive analytics dashboard for online retailers with real-time data visualization.",
      tags: ["Python", "Hardware"],
      links: { demo: "#", code: "#" }
    },
  
  ] as Project[]
};

// --- Animations ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo">AH.</div>
          
          <div className="desktop-menu">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="mobile-menu">
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header id="about" className="hero">
        <motion.div 
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <span className="greeting">Hi, my name is</span>
          <h1 className="name">{portfolioData.name}</h1>
          <h2 className="role">{portfolioData.role}</h2>
          <p className="bio">{portfolioData.bio}</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">Check out my work</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </motion.div>
      </header>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <motion.div
          className="container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h3 variants={fadeInUp} className="section-title">
            Some Things I've Built
          </motion.h3>
          
          <div className="projects-grid">
            {portfolioData.projects.map((project) => (
              <motion.div key={project.id} variants={fadeInUp} className="project-card">
                <div className="card-top">
                  <Code2 size={40} className="folder-icon" />
                  <div className="card-links">
                    <a href={project.links.code} aria-label="GitHub Link"><Github size={20} /></a>
                    <a href={project.links.demo} aria-label="External Link"><ExternalLink size={20} /></a>
                  </div>
                </div>
                <h4 className="project-title">{project.title}</h4>
                <p className="project-desc">{project.description}</p>
                <ul className="project-tags">
                  {project.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <motion.div 
          className="contact-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h3 className="section-title">Get In Touch</h3>
          <p>
            I’m currently looking for new opportunities. Whether you have a question 
            or just want to say hi, my inbox is always open!
          </p>
          <a href="mailto:hello@andreihamor.com" className="btn btn-primary btn-large">
            <Mail className="btn-icon" /> Say Hello
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="social-links">
          <a href="https://github.com/A-n-d-r-e-i-H-a-m-o-r"><Github /></a>
          <a href="#"><Linkedin /></a>
        </div>
        <p>Designed & Built by {portfolioData.name}</p>
      </footer>
    </div>
  );
};

export default App;