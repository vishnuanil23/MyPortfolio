import React, { useEffect, useRef } from "react";
import '../assets/styles/About.scss';
import { yearsOfExperience } from '../utils/experience';

const skills = [
  'Flutter', '.NET', 'Android', 'iOS',
  'REST APIs', 'SQL', 'PostgreSQL',
  'Clean Architecture', 'MVVM', 'CI/CD',
  'AWS', 'Technical Leadership',
  'Release Management', 'Performance Optimization',
  'System Design'
];

function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );
    const el = ref.current;
    if (el) {
      el.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div id="about" ref={ref}>
      <div className="about-section-new">
        <div className="about-grid">
          {/* Left: Text */}
          <div className="about-text">
            <span className="section-label reveal">About Me</span>
            <h2 className="section-title reveal reveal-delay-1">
              Engineering software<br />
              <span className="gradient-text">that scales</span>
            </h2>
            <p className="about-description reveal reveal-delay-2" style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Technical Lead with <strong>{yearsOfExperience}+ years of experience</strong> designing and delivering enterprise software solutions across mobile, backend, APIs, and cloud platforms. Experienced in leading cross-functional engineering teams, designing scalable applications, and building reliable systems using Flutter, .NET, Android, iOS, REST APIs, SQL databases, and modern engineering practices.
            </p>
            <ul className="about-bullets reveal reveal-delay-3">
              <li>Delivered enterprise software across multiple industries</li>
              <li>Designed scalable backend APIs & business services</li>
              <li>Led engineering teams from concept to production</li>
              <li>Built end-to-end software solutions with long-term maintainability</li>
            </ul>

            {/* Left column now just has Text + Bullets */}
          </div>

          {/* Right Column: Stats Grid + Core Technologies */}
          <div className="about-right reveal reveal-delay-2">
            {/* Quick Stats Grid */}
            <div className="about-stats-grid">
              <div className="about-stat-box glass-card">
                <span className="stat-num gradient-text">{yearsOfExperience}+</span>
                <span className="stat-lbl">Years Experience</span>
              </div>
              <div className="about-stat-box glass-card">
                <span className="stat-num gradient-text">30+</span>
                <span className="stat-lbl">Apps Delivered</span>
              </div>
              <div className="about-stat-box glass-card">
                <span className="stat-num gradient-text">15+</span>
                <span className="stat-lbl">Team Size (Engineers)</span>
              </div>
              <div className="about-stat-box glass-card">
                <span className="stat-num gradient-text">8+</span>
                <span className="stat-lbl">Industry Domains</span>
              </div>
            </div>

            {/* Core Technologies */}
            <div className="about-skills-new">
              <div className="skills-cloud-label">Core Technologies</div>
              <div className="skills-cloud">
                {skills.map((skill, i) => (
                  <span
                    key={i}
                    className="skill-tag"
                    style={{ animationDelay: `${i * 0.05}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
