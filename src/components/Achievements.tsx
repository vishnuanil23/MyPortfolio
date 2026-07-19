import React, { useEffect, useRef, useState } from "react";
import '../assets/styles/Achievements.scss';
import { yearsOfExperience } from '../utils/experience';

const achievements = [
  { value: yearsOfExperience, suffix: '+', label: 'Years of Experience', description: 'Designing and delivering software solutions since July 2015' },
  { value: 15, suffix: '+', label: 'Engineers Led & Mentored', description: 'Mentoring developers and guiding engineering teams' },
  { value: 30, suffix: '+', label: 'Apps Delivered', description: 'End-to-end production software systems deployed' },
  { value: 8, suffix: '+', label: 'Business Domains', description: 'Fintech, logistics, events, retail, and food ordering' },
];

const milestones = [
  'Led cross-functional engineering teams and managed complex software delivery cycles',
  'Designed and implemented scalable application architectures across mobile, backend, and databases',
  'Spearheaded key technical decision-making and migration strategies for legacy platforms',
  'Delivered secure mobile banking applications for Canara Bank, ESAF, and cooperative banks',
  'Built warehouse mobility and logistics tracking systems with POS hardware integrations',
  'Architected barcode registration and AI categorization workflows for GS1 Canada',
  'Delivered high-performance event management platforms with QR-based lead capture systems',
  'Designed robust REST APIs and database-driven solutions using .NET, PHP, and SQL databases',
  'Fostered engineering quality through code reviews, standard guidelines, and CI/CD automation',
  'Mentored junior and mid-level software engineers to accelerate team performance and growth',
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
            Engineering impact<br />
            <span className="gradient-text">at a glance</span>
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
