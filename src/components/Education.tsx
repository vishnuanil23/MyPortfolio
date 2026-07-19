import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Education.scss';

function Education() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const techChips = [
    'Computer Science',
    'Software Engineering',
    'Algorithms',
    'Database Systems',
    'Programming'
  ];

  return (
    <div id="education" ref={ref}>
      <div className="education-section">
        <div className="section-header reveal" style={{ padding: '0 10%' }}>
          <span className="section-label">Education</span>
          <h2 className="section-title">
            Academic<br />
            <span className="gradient-text">Foundation</span>
          </h2>
        </div>

        <VerticalTimeline lineColor="rgba(124, 58, 237, 0.2)">
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{
              background: 'rgba(255,255,255,0.04)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '16px',
              color: 'var(--color-text)',
              boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
            }}
            contentArrowStyle={{
              borderRight: '7px solid rgba(255,255,255,0.08)',
            }}
            date="2010 – 2014"
            iconStyle={{
              background: 'linear-gradient(135deg, #7c3aed, #5b21b6)',
              color: 'white',
              boxShadow: '0 0 20px rgba(124,58,237,0.5)',
              border: '2px solid rgba(124,58,237,0.3)',
            }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="timeline-title">Bachelor of Technology (B.Tech)</h3>
            <h4 className="timeline-company">
              Anna University
              <span className="timeline-location">· Tamil Nadu, India</span>
            </h4>
            <h5 className="timeline-branch" style={{ color: '#a78bfa', margin: '0.4rem 0 0.8rem', fontWeight: 600, fontSize: '0.95rem' }}>
              Computer Science & Engineering
            </h5>
            <p style={{ fontSize: '0.88rem', lineHeight: '1.6', color: 'var(--color-text-muted)', margin: '0 0 1.2rem' }}>
              Built a strong academic foundation in software engineering, computer programming, algorithms, database systems, networking, operating systems, and software design principles, which continues to support my work in enterprise software development and technical leadership.
            </p>

            <div className="timeline-tech-chips">
              {techChips.map((chip, index) => (
                <span className="timeline-chip" key={index}>{chip}</span>
              ))}
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Education;
