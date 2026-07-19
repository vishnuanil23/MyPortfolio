import React, { useEffect, useRef } from "react";
import VerifiedIcon from '@mui/icons-material/Verified';
import '../assets/styles/Certifications.scss';

const certifications = [
  {
    title: 'Flutter Development',
    issuer: 'Google',
    date: '2023',
    description: 'Comprehensive Flutter & Dart development certification covering state management, performance optimization, and app deployment.',
    color: '#7c3aed',
    icon: '🐦',
    badge: 'Google',
  },
  {
    title: 'Android Developer',
    issuer: 'Google',
    date: '2021',
    description: 'Professional Android development certification covering Kotlin, Jetpack Compose, and modern Android architecture patterns.',
    color: '#10b981',
    icon: '🤖',
    badge: 'Google',
  },
  {
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2022',
    description: 'Foundation-level AWS certification demonstrating knowledge of cloud concepts, security, and core AWS services.',
    color: '#f59e0b',
    icon: '☁️',
    badge: 'AWS',
  },
  {
    title: 'Google Associate Cloud Engineer',
    issuer: 'Google Cloud',
    date: '2023',
    description: 'Certification demonstrating ability to deploy applications, monitor operations, and manage enterprise cloud solutions on GCP.',
    color: '#06b6d4',
    icon: '🌐',
    badge: 'GCP',
  },
];

function Certifications() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div id="certifications" ref={ref}>
      <div className="certifications-section">
        <div className="section-header reveal">
          <span className="section-label">Certifications</span>
          <h2 className="section-title">
            Credentials &<br />
            <span className="gradient-text">recognitions</span>
          </h2>
          <p className="section-subtitle">
            Formal certifications that validate my expertise in mobile development and cloud infrastructure.
          </p>
        </div>

        <div className="certifications-grid">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className={`cert-card glass-card reveal reveal-delay-${i + 1}`}
              style={{ '--cert-color': cert.color } as React.CSSProperties}
            >
              <div className="cert-top">
                <div
                  className="cert-icon"
                  style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}25` }}
                >
                  <span>{cert.icon}</span>
                </div>
                <div className="cert-badge">
                  <VerifiedIcon style={{ color: cert.color, fontSize: '1rem' }} />
                  <span style={{ color: cert.color }}>{cert.badge}</span>
                </div>
              </div>

              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer} · {cert.date}</p>
              <p className="cert-description">{cert.description}</p>

              <div
                className="cert-footer"
                style={{ borderTop: `1px solid ${cert.color}20` }}
              >
                <span className="cert-status">
                  <span className="cert-dot" style={{ background: cert.color }} />
                  Certified
                </span>
                <a href="#" className="cert-view">View Certificate →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certifications;
