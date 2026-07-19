import React, { useEffect, useRef } from "react";
import '../assets/styles/About.scss';
import { yearsOfExperience } from '../utils/experience';

const skills = [
  'Flutter', 'Android', 'iOS', 'React Native',
  'Team Leadership', 'Architecture', 'Code Review',
  'Agile', 'CI/CD', 'Dart', 'Swift', 'Kotlin',
  'Clean Architecture', 'BLoC', 'Firebase',
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
              Building the future,<br />
              <span className="gradient-text">one app at a time</span>
            </h2>
            <p className="about-description reveal reveal-delay-2">
              I am a <strong>Technical Lead</strong> with <strong>{yearsOfExperience}+ years of experience</strong> building
              high-quality mobile applications using Flutter, Android, and iOS technologies.
              I have successfully led cross-functional teams, designed scalable architectures,
              conducted code reviews, mentored developers, and delivered enterprise-grade
              applications across multiple domains.
            </p>
            <p className="about-description reveal reveal-delay-3">
              From event management platforms and cleaning solutions to government-grade
              identity verification systems — I bring the same level of precision, performance,
              and polish to every project I touch.
            </p>

            {/* Stats row */}
            <div className="about-stats reveal reveal-delay-4">
              <div className="stat-item">
                <span className="stat-number gradient-text">{yearsOfExperience}+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <span className="stat-number gradient-text">12+</span>
                <span className="stat-label">Engineers Led</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <span className="stat-number gradient-text">15+</span>
                <span className="stat-label">Apps Delivered</span>
              </div>
            </div>
          </div>

          {/* Right: Skills cloud */}
          <div className="about-skills reveal reveal-delay-2">
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
  );
}

export default About;
