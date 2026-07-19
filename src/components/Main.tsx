import React, { useEffect, useRef } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import '../assets/styles/Main.scss';

function Main() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      heroRef.current.style.setProperty('--mouse-x', `${x}%`);
      heroRef.current.style.setProperty('--mouse-y', `${y}%`);
    };
    const el = heroRef.current;
    el?.addEventListener('mousemove', handleMouseMove);
    return () => el?.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="container">
      <div className="hero-section" ref={heroRef}>
        {/* Ambient orbs */}
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />

        <div className="hero-inner">
          {/* Avatar */}
          <div className="hero-avatar-wrap">
            <div className="hero-avatar">
              <div className="avatar-gradient">
                <span>VA</span>
              </div>
              <span className="avatar-badge">🚀</span>
            </div>
          </div>

          {/* Content */}
          <div className="hero-content">
            {/* Status badge */}
            <div className="status-badge">
              <span className="status-dot" />
              Available for new opportunities
            </div>

            <h1 className="hero-title">
              Hi, I'm{' '}
              <span className="gradient-text">Vishnu Anil</span>
            </h1>

            <p className="hero-role">
              Technical Lead · Flutter · Android · iOS
            </p>

            <p className="hero-tagline">
              I build scalable mobile applications, lead engineering teams, and
              deliver production-ready solutions — from idea to App Store & Play Store.
            </p>

            {/* CTAs */}
            <div className="hero-ctas">
              <button className="btn-primary" onClick={() => window.open('#', '_blank')}>
                <DownloadIcon fontSize="small" />
                Download Resume
              </button>
              <button className="btn-secondary" onClick={() => scrollToSection('projects')}>
                View Projects
                <ArrowForwardIcon fontSize="small" />
              </button>
              <button className="btn-secondary" onClick={() => scrollToSection('contact')}>
                Contact Me
              </button>
            </div>

            {/* Social */}
            <div className="hero-socials">
              <a href="https://github.com/vishnuanil" target="_blank" rel="noreferrer" aria-label="GitHub">
                <GitHubIcon />
              </a>
              <a href="https://linkedin.com/in/vishnu-anil" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
              <a href="mailto:vishnu@example.com" aria-label="Email">
                <EmailIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="scroll-hint">
          <div className="scroll-line" />
          <span>Scroll</span>
        </div>
      </div>
    </div>
  );
}

export default Main;