import React, { useEffect, useRef, useState } from "react";
import '../assets/styles/Achievements.scss';
import { yearsOfExperience } from '../utils/experience';

const achievements = [
  { value: yearsOfExperience, suffix: '+', label: 'Years of Experience', description: 'Delivering production mobile applications since July 2015' },
  { value: 12, suffix: '+', label: 'Engineers Led', description: 'In cross-functional development teams' },
  { value: 15, suffix: '+', label: 'Apps Delivered', description: 'Published to Play Store & App Store' },
  { value: 4, suffix: '', label: 'Countries Deployed', description: 'Across events, fintech, and government sectors' },
];

const milestones = [
  `${yearsOfExperience}+ years of mobile development across Android, iOS, and Flutter (since July 2015)`,
  'Led teams of 12+ engineers across multiple concurrent projects',
  'Successfully delivered multiple production apps to Google Play and Apple App Store',
  'Implemented Clean Architecture in enterprise-grade mobile applications',
  'Built offline-first mobile solutions with real-time sync capabilities',
  'Integrated payment gateways, BLE, QR scanning, push notifications, and REST APIs',
  'Drove native Android to Flutter migration — reducing codebase by ~35%',
  'Established CI/CD pipelines for automated testing and store deployment',
];

function useCounter(target: number, duration: number = 2000, active: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const start = 0;
    const step = target / (duration / 16);
    let current = start;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);

  return count;
}

function StatCounter({ value, suffix, label, description, active }: any) {
  const count = useCounter(value, 1800, active);
  return (
    <div className="achievement-stat glass-card">
      <div className="stat-value">
        <span className="gradient-text">{count}</span>
        <span className="stat-suffix gradient-text">{suffix}</span>
      </div>
      <div className="stat-label-main">{label}</div>
      <div className="stat-desc">{description}</div>
    </div>
  );
}

function Achievements() {
  const ref = useRef<HTMLDivElement>(null);
  const [statsActive, setStatsActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            if (e.target.classList.contains('stats-trigger')) {
              setStatsActive(true);
            }
          }
        });
      },
      { threshold: 0.1 }
    );
    const el = ref.current;
    if (el) {
      el.querySelectorAll('.reveal').forEach((item) => observer.observe(item));
      const trigger = el.querySelector('.stats-trigger');
      if (trigger) observer.observe(trigger);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div id="achievements" ref={ref}>
      <div className="achievements-section">
        <div className="section-header reveal">
          <span className="section-label">Achievements</span>
          <h2 className="section-title">
            Numbers that tell<br />
            <span className="gradient-text">the story</span>
          </h2>
        </div>

        {/* Stats */}
        <div className="achievements-stats stats-trigger reveal">
          {achievements.map((a, i) => (
            <StatCounter key={i} {...a} active={statsActive} />
          ))}
        </div>

        {/* Milestones */}
        <div className="achievements-milestones">
          <h3 className="milestones-title reveal">Key Milestones</h3>
          <ul className="milestones-list">
            {milestones.map((m, i) => (
              <li key={i} className={`milestone-item reveal reveal-delay-${(i % 5) + 1}`}>
                <span className="milestone-dot" />
                {m}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Achievements;
