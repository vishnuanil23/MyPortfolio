import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faCode, faCubes, faUsers, faDatabase } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/Expertise.scss';

const skillGroups = [
  {
    icon: faMobileAlt,
    title: 'Mobile',
    color: '#7c3aed',
    skills: ['Flutter', 'Android', 'iOS', 'Dart', 'Kotlin', 'Swift'],
  },
  {
    icon: faCode,
    title: 'Backend',
    color: '#06b6d4',
    skills: ['.NET', 'ASP.NET Core', 'Laravel', 'PHP','REST APIs'],
  },
  {
    icon: faDatabase,
    title: 'Database',
    color: '#38bdf8',
    skills: ['PostgreSQL', 'SQL Server', 'MySQL'],
  },
  {
    icon: faCubes,
    title: 'Engineering',
    color: '#a78bfa',
    skills: ['Clean Architecture', 'MVVM', 'CI/CD', 'Performance Optimization', 'Jenkins', 'Jira'],
  },
  {
    icon: faUsers,
    title: 'Leadership',
    color: '#10b981',
    skills: ['Team Leadership', 'Mentoring', 'Release Management', 'Agile Methodologies'],
  },
];

function Expertise() {
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
    <div className="container" id="expertise" ref={ref}>
      <div className="skills-section">
        <div className="section-header reveal">
          <span className="section-label">Skills & Expertise</span>
          <h2 className="section-title">
            Technologies I work with,<br />
            <span className="gradient-text">tools I master</span>
          </h2>
          <p className="section-subtitle">
            Specializing in end-to-end mobile architectures, robust backend systems, and scalable cloud deployments.
          </p>
        </div>

        <div className="skills-group-grid">
          {skillGroups.map((group, i) => (
            <div
              key={i}
              className={`skill-group-card glass-card reveal reveal-delay-${i + 1}`}
            >
              <div className="skill-group-header">
                <div
                  className="skill-group-icon"
                  style={{ background: `${group.color}18`, border: `1px solid ${group.color}30` }}
                >
                  <FontAwesomeIcon icon={group.icon} style={{ color: group.color }} />
                </div>
                <h3 className="skill-group-title" style={{ color: group.color }}>{group.title}</h3>
              </div>
              <div className="skill-group-chips">
                {group.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="skill-chip-new"
                    style={{
                      '--chip-color': group.color,
                    } as React.CSSProperties}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Expertise;