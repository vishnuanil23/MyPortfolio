import React, { useEffect, useRef } from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../assets/styles/Project.scss';

const projects = [
  {
    title: 'Evento',
    subtitle: 'Event Management Platform',
    image: mock01,
    role: 'Technical Lead',
    description:
      'Enterprise-grade event management platform with full offline support, QR-based check-in, payment integration, and real-time analytics. Published on both Play Store and App Store.',
    tech: ['Flutter', 'Clean Architecture', 'BLoC', 'REST API', 'SQLite', 'Stripe'],
    highlights: ['Offline-first sync', 'QR Registration', 'Payment Integration', 'Multi-event support'],
    playStore: '#',
    appStore: '#',
    github: null,
    accent: '#7c3aed',
  },
  {
    title: 'iClair',
    subtitle: 'Cleaning Management Platform',
    image: mock02,
    role: 'Technical Lead',
    description:
      'Field service management app for cleaning teams. Features include tenant management, task assignment, offline database sync, image upload with compression, and detailed reporting.',
    tech: ['Flutter', 'Provider', 'Firebase', 'REST API', 'Image Compression'],
    highlights: ['Tenant Management', 'Offline Mode', 'Image Upload', 'Reports'],
    playStore: '#',
    appStore: '#',
    github: null,
    accent: '#06b6d4',
  },
  {
    title: 'Show App',
    subtitle: 'Conference Management',
    image: mock03,
    role: 'Technical Lead',
    description:
      'Full-featured conference companion app with exhibitor discovery, session scheduling, speaker profiles, offline database, dynamic UI components, and QR-based login.',
    tech: ['Flutter', 'SQLite', 'QR Integration', 'Dynamic UI', 'BLoC'],
    highlights: ['Exhibitors & Speakers', 'Offline Database', 'QR Login', 'Dynamic Layouts'],
    playStore: '#',
    appStore: '#',
    github: null,
    accent: '#a78bfa',
  },
  {
    title: 'GS1 Scanner',
    subtitle: 'AI Product Recognition',
    image: mock04,
    role: 'Senior Developer',
    description:
      'AI-powered product identification platform integrating barcode scanning, GS1 standard lookup, real-time product recognition, and inventory verification.',
    tech: ['Flutter', 'ML Kit', 'Barcode Scanning', 'GS1 API', 'REST API'],
    highlights: ['AI Integration', 'Barcode Scanning', 'Product Lookup', 'Real-time Recognition'],
    playStore: null,
    appStore: null,
    github: null,
    accent: '#f59e0b',
  },
  {
    title: 'Pension Verify',
    subtitle: 'Government Verification App',
    image: mock05,
    role: 'Technical Lead',
    description:
      'Secure government-grade identity verification and pension management system. Includes biometric authentication, encrypted offline mode, and compliance with government security standards.',
    tech: ['Flutter', 'Biometric Auth', 'Encrypted Storage', 'REST API', 'SSL Pinning'],
    highlights: ['Identity Verification', 'Secure Auth', 'Offline Mode', 'Government Grade'],
    playStore: null,
    appStore: null,
    github: null,
    accent: '#10b981',
  },
];

function Project() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="projects-section" id="projects" ref={ref}>
      <div className="section-header reveal">
        <span className="section-label">Featured Projects</span>
        <h2 className="section-title">
          Apps I've built &<br />
          <span className="gradient-text">shipped to production</span>
        </h2>
        <p className="section-subtitle">
          Enterprise-grade mobile applications delivered across events, finance, government, and service industries.
        </p>
      </div>

      <div className="projects-list">
        {projects.map((project, i) => (
          <div
            key={i}
            className={`project-card glass-card reveal ${i % 2 === 0 ? 'project-card-normal' : 'project-card-reverse'}`}
            style={{ '--project-accent': project.accent } as React.CSSProperties}
          >
            {/* Image */}
            <div className="project-image-wrap">
              <div className="project-image-inner">
                <img src={project.image} alt={project.title} />
                <div className="project-image-overlay" />
              </div>
            </div>

            {/* Content */}
            <div className="project-content">
              <div className="project-role-badge">
                <span>{project.role}</span>
              </div>

              <h2 className="project-title">{project.title}</h2>
              <p className="project-subtitle">{project.subtitle}</p>
              <p className="project-description">{project.description}</p>

              {/* Highlights */}
              <div className="project-highlights">
                {project.highlights.map((h, j) => (
                  <span key={j} className="highlight-chip">✦ {h}</span>
                ))}
              </div>

              {/* Tech stack */}
              <div className="project-tech">
                {project.tech.map((t, j) => (
                  <span key={j} className="tech-chip">{t}</span>
                ))}
              </div>

              {/* Links */}
              <div className="project-links">
                {project.playStore && (
                  <a href={project.playStore} target="_blank" rel="noreferrer" className="btn-ghost project-link-btn">
                    <AndroidIcon fontSize="small" />
                    Play Store
                  </a>
                )}
                {project.appStore && (
                  <a href={project.appStore} target="_blank" rel="noreferrer" className="btn-ghost project-link-btn">
                    <AppleIcon fontSize="small" />
                    App Store
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn-ghost project-link-btn">
                    <GitHubIcon fontSize="small" />
                    GitHub
                  </a>
                )}
                {!project.playStore && !project.appStore && !project.github && (
                  <span className="project-private">
                    <OpenInNewIcon fontSize="small" />
                    Private / Enterprise
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;