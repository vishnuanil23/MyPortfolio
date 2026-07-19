import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Footer.scss';

function Footer() {
  const year = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      {/* Top: gradient separator */}
      <div className="footer-separator" />

      <div className="footer-inner">
        {/* Brand */}
        <div className="footer-brand">
          <span className="footer-logo">Vishnu M A</span>
          <p className="footer-tagline">
            Technical Lead · Mobile · Backend · Architecture · Cloud<br />
            Architecting software systems that scale.
          </p>
          <div className="footer-socials">
            <a href="https://github.com/vi*****" target="_blank" rel="noreferrer" aria-label="GitHub">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/vi*****" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href="mailto:vi*****@gmail.com" aria-label="Email">
              <EmailIcon />
            </a>
          </div>
        </div>

        {/* Nav links */}
        <div className="footer-links">
          <div className="footer-links-group">
            <h4>Navigation</h4>
            {[['About', 'about'], ['Skills', 'expertise'], ['Experience', 'history'], ['Projects', 'projects']].map(([label, id]) => (
              <button key={id} onClick={() => scrollToSection(id)}>{label}</button>
            ))}
          </div>
          <div className="footer-links-group">
            <h4>More</h4>
            {[['Leadership', 'leadership'], ['Achievements', 'achievements'], ['Certifications', 'certifications'], ['Contact', 'contact']].map(([label, id]) => (
              <button key={id} onClick={() => scrollToSection(id)}>{label}</button>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} Vishnu M A. Crafted with 💜 using React & TypeScript.</p>
        <button
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          ↑ Back to top
        </button>
      </div>
    </footer>
  );
}

export default Footer;