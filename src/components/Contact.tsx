import React, { useState, useEffect, useRef } from 'react';
import '../assets/styles/Contact.scss';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const contactLinks = [
  {
    id: 'email',
    icon: <EmailIcon />,
    label: 'Email',
    value: 'vi*****@gmail.com',
    href: 'mailto:vi*****@gmail.com',
    color: '#7c3aed',
  },
  {
    id: 'linkedin',
    icon: <LinkedInIcon />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/vi*****',
    href: 'https://www.linkedin.com/in/vi*****',
    color: '#0077b5',
  },
  {
    id: 'github',
    icon: <GitHubIcon />,
    label: 'GitHub',
    value: 'github.com/vi*****',
    href: 'https://github.com/vi*****',
    color: '#a78bfa',
  },
  {
    id: 'location',
    icon: <LocationOnIcon />,
    label: 'Location',
    value: 'Dubai, UAE',
    href: '#',
    color: '#f59e0b',
  },
];

function Contact() {
  const [copied, setCopied] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('vi*****@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id="contact" ref={ref}>
      <div className="contact-section">
        <div className="contact-info reveal">
          <span className="section-label">Contact</span>
          <h2 className="section-title">
            Let's build something<br />
            <span className="gradient-text">amazing together</span>
          </h2>
          <p className="contact-tagline">
            Whether you have a project in mind, want to discuss a collaboration,
            or just want to say hi — my inbox is always open.
          </p>

          <div className="contact-links">
            {contactLinks.map((link, i) => {
              const isEmail = link.id === 'email';
              return (
                <a
                  key={i}
                  href={isEmail ? '#' : link.href}
                  onClick={isEmail ? handleEmailClick : undefined}
                  target={!isEmail && link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="contact-link-item"
                  style={{ '--link-color': link.color } as React.CSSProperties}
                >
                  <div
                    className="contact-link-icon"
                    style={{ background: `${link.color}15`, color: link.color }}
                  >
                    {link.icon}
                  </div>
                  <div className="contact-link-text">
                    <span className="contact-link-label">{link.label}</span>
                    <span className="contact-link-value">
                      {isEmail && copied ? 'Copied to clipboard!' : link.value}
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;