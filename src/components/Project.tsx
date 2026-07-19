import React, { useEffect, useRef } from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';
import GitHubIcon from '@mui/icons-material/GitHub';
import LockIcon from '@mui/icons-material/Lock';
import '../assets/styles/Project.scss';

const projects = [
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
    title: 'GS1 Canada',
    subtitle: 'AI-Powered Product Content Management Platform',
    image: mock04,
    role: 'Team Lead',
    description:
      'Developed an enterprise AI-powered product content management platform for GS1 Canada that enables businesses to upload product packaging images and automatically generate structured product information. The platform uses AI to identify product details, generate nutrition facts, create multiple product asset variations, allow manual review and editing, and publish validated GS1-compliant barcode information through a secure approval workflow.',
    tech: ['Flutter', 'Dart', 'OpenAI', 'REST APIs', 'GS1 APIs', 'Cloud Storage'],
    highlights: ['AI Product Recognition', 'Nutrition Facts Generation', 'Product Asset Generation', 'Approval Workflow'],
    playStore: null,
    appStore: null,
    github: null,
    privateLabel: 'GS1 Canada',
    accent: '#f59e0b',
  },
  {
    title: 'Aviation Training & CRM',
    subtitle: 'Aviation · Training · CRM · Aamro Freight',
    image: mock03,
    role: 'Senior Developer · Mobile Lead',
    description:
      'Developed an enterprise aviation training and Crew Resource Management (CRM) platform that streamlines flight operations, student training, instructor management, aircraft maintenance tracking, and mandatory pre-flight safety inspections using biometric authorization.',
    tech: ['Android', 'Java', 'MVC', 'REST APIs', 'JWT Authentication', 'Firebase', 'Google APIs', 'ZXing', 'Volley', 'Azure Boards', 'SVN'],
    highlights: ['Aviation CRM', 'Biometric Security', 'Pre-flight Checks', 'Crew Management', 'Push Notifications', 'REST APIs'],
    playStore: null,
    appStore: null,
    github: null,
    accent: '#a78bfa',
  },
  {
    title: 'MFI Collection Platform',
    subtitle: 'Microfinance & Financial Services · Safe Software',
    image: mock05,
    role: 'Mobile Engineer',
    description:
      'A centralized digital collection platform for leading Microfinance Institutions (MFIs), enabling field agents to perform collections, customer onboarding, credit checks, and verification. Replaced manual paperwork with a secure, real-time location-aware workflow.',
    tech: ['Android', 'Java', 'ASP.NET', 'REST APIs', 'Microsoft SQL Server', 'Google Maps API', 'Bluetooth', 'JSON', 'IIS', 'Windows Server'],
    highlights: ['Microfinance', 'Offline-first Sync', 'Geo-fencing', 'Bluetooth Printing', 'Secure Authentication', 'ASP.NET APIs', 'Microsoft SQL Server'],
    playStore: null,
    appStore: null,
    github: null,
    privateLabel: 'Maxvalue · BRD · SML Microfinance',
    accent: '#10b981',
  },
  {
    title: 'Smart Passbook',
    subtitle: 'Digital Banking & FinTech · Safe Software',
    image: mock01,
    role: 'Mobile Engineer',
    description:
      'A secure enterprise digital banking application developed for multiple Cooperative Banks in India and Africa. Supports savings, loans, shares, QR payments, and IMPS/NEFT transfers. Engineered with device binding, SSL pinning, and data encryption.',
    tech: ['Android', 'Java', 'MVC', 'ASP.NET', 'REST APIs', 'Microsoft SQL Server', 'JSON', 'XML', 'Volley', 'KSOAP', 'IMPS', 'NEFT'],
    highlights: ['Digital Banking', 'QR Payments', 'Enterprise Security', 'ASP.NET APIs', 'Microsoft SQL Server', 'India & Africa', 'App Store & Google Play'],
    playStore: 'https://play.google.com/store/apps/details?id=com.safesoftware.passbook.perumannascb',
    appStore: 'https://apps.apple.com/in/app/pscb-perumanna/id6761455945',
    github: null,
    accent: '#7c3aed',
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
                  <div className="project-private-container">
                    <LockIcon className="private-lock-icon" />
                    <div className="private-text-wrap">
                      <span className="private-title">
                        {project.privateLabel || 'Private Enterprise Solution'}
                      </span>
                      <span className="private-subtitle">
                        Not available on Play Store or App Store
                      </span>
                    </div>
                  </div>
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