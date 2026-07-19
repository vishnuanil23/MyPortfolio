import React, { useEffect, useRef } from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';
import { yearsOfExperience } from '../utils/experience';

const experiences = [
  {
    title: 'Technical Lead',
    company: 'Techversant',
    location: 'Kochi, India',
    date: '2022 — Present',
    type: 'current',
    responsibilities: [
      'Led a cross-functional team of 15+ developers across multiple projects',
      'Drove architectural decisions including Flutter migration from native Android',
      'Conducted sprint planning, code reviews, and technical interviews',
      'Managed client discussions, requirement gathering, and stakeholder communication',
      'Oversaw release management for Play Store and App Store deployments',
      'Mentored junior and mid-level engineers, improving team code quality by 40%',
    ],
  },
  {
    title: 'Associate Lead',
    company: 'Techversant',
    location: 'Kochi, India',
    date: '2020 — 2022',
    type: 'past',
    responsibilities: [
      'Assisted in team management and sprint planning activities',
      'Led the implementation of Clean Architecture across Flutter projects',
      'Coordinated with QA and design teams for seamless delivery',
      'Developed core modules for enterprise mobile applications',
    ],
  },
  {
    title: 'Senior Software Engineer',
    company: 'Techversant',
    location: 'Kochi, India',
    date: '2018 — 2020',
    type: 'past',
    responsibilities: [
      'Built high-performance Flutter and Android applications',
      'Integrated complex third-party APIs including payment gateways and BLE',
      'Implemented offline-first architecture with local database sync',
      'Conducted code reviews and participated in architectural planning',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Techversant',
    location: 'Kochi, India',
    date: '2016 — 2018',
    type: 'past',
    responsibilities: [
      'Developed Android applications using Java and Kotlin',
      'Built REST API integrations and data models',
      'Worked with senior engineers to implement features and fix bugs',
      'Participated in agile ceremonies and sprint cycles',
    ],
  },
];

function Timeline() {
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
    <div id="history" ref={ref}>
      <div className="timeline-section">
        <div className="section-header reveal" style={{ padding: '0 10%' }}>
          <span className="section-label">Experience</span>
          <h2 className="section-title">
            Career Journey at<br />
            <span className="gradient-text">Techversant</span>
          </h2>
          <p className="section-subtitle">
            {yearsOfExperience}+ years of growth from engineer to technical leader, building impactful mobile solutions.
          </p>
        </div>

        <VerticalTimeline lineColor="rgba(124, 58, 237, 0.2)">
          {experiences.map((exp, i) => (
            <VerticalTimelineElement
              key={i}
              className={`vertical-timeline-element--work ${exp.type === 'current' ? 'vt-current' : ''}`}
              contentStyle={{
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '16px',
                color: 'var(--color-text)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
              }}
              contentArrowStyle={{
                borderRight: exp.type === 'current'
                  ? '7px solid rgba(124,58,237,0.4)'
                  : '7px solid rgba(255,255,255,0.08)',
              }}
              date={exp.date}
              iconStyle={{
                background: exp.type === 'current'
                  ? 'linear-gradient(135deg, #7c3aed, #5b21b6)'
                  : '#1a1830',
                color: 'white',
                boxShadow: exp.type === 'current'
                  ? '0 0 20px rgba(124,58,237,0.5)'
                  : '0 0 10px rgba(0,0,0,0.5)',
                border: '2px solid rgba(124,58,237,0.3)',
              }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
              {exp.type === 'current' && (
                <span className="timeline-badge">Current</span>
              )}
              <h3 className="timeline-title">{exp.title}</h3>
              <h4 className="timeline-company">
                {exp.company}
                <span className="timeline-location">· {exp.location}</span>
              </h4>
              <ul className="timeline-list">
                {exp.responsibilities.map((r, j) => (
                  <li key={j}>{r}</li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;