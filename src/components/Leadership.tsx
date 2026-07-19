import React, { useEffect, useRef } from "react";
import GroupsIcon from '@mui/icons-material/Groups';
import SchoolIcon from '@mui/icons-material/School';
import RateReviewIcon from '@mui/icons-material/RateReview';
import CalendarViewWeekIcon from '@mui/icons-material/CalendarViewWeek';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import AssignmentIcon from '@mui/icons-material/Assignment';
import '../assets/styles/Leadership.scss';

const leadershipCards = [
  {
    icon: <GroupsIcon />,
    color: '#7c3aed',
    title: 'Engineering Leadership',
    description:
      'Led cross-functional engineering teams across Flutter, Android, iOS, and backend technologies. Fostered ownership, collaboration, quality, and continuous improvement while delivering production-ready software.',
  },
  {
    icon: <SchoolIcon />,
    color: '#06b6d4',
    title: 'Technical Mentorship',
    description:
      'Mentored developers through architecture discussions, code quality improvements, debugging strategies, design patterns, and career development while encouraging engineering best practices.',
  },
  {
    icon: <RateReviewIcon />,
    color: '#a78bfa',
    title: 'Engineering Quality',
    description:
      'Established engineering standards through code reviews, testing strategies, CI/CD practices, and clean coding principles to improve maintainability and release confidence.',
  },
  {
    icon: <CalendarViewWeekIcon />,
    color: '#f59e0b',
    title: 'Agile Delivery',
    description:
      'Led sprint planning, backlog refinement, estimation, retrospectives, and cross-team coordination to ensure predictable and high-quality software delivery.',
  },
  {
    icon: <AccountTreeIcon />,
    color: '#10b981',
    title: 'Technical Decision Making',
    description:
      'Guided technology selection, framework adoption, system design discussions, migration strategies, and engineering trade-offs based on long-term maintainability and business needs.',
  },
  {
    icon: <RocketLaunchIcon />,
    color: '#ec4899',
    title: 'Product Delivery',
    description:
      'Owned end-to-end software delivery—from planning and development to testing, release management, production deployments, monitoring, and post-release support.',
  },
  {
    icon: <RecordVoiceOverIcon />,
    color: '#06b6d4',
    title: 'Client & Stakeholder Collaboration',
    description:
      'Worked directly with clients, business stakeholders, QA teams, designers, and backend engineers to translate business requirements into scalable software solutions.',
  },
  {
    icon: <AssignmentIcon />,
    color: '#7c3aed',
    title: 'Solution Discovery',
    description:
      'Conducted requirement workshops, effort estimation, technical feasibility analysis, solution planning, and implementation roadmaps before project execution.',
  },
];

function Leadership() {
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
    <div id="leadership" ref={ref}>
      <div className="leadership-section">
        <div className="section-header reveal">
          <span className="section-label">Leadership</span>
          <h2 className="section-title">
            More than just code —<br />
            <span className="gradient-text">Building products, teams & engineering excellence</span>
          </h2>
          <p className="section-subtitle">
            Technical leadership is about enabling people, making sound engineering decisions, and delivering software that creates business value.
          </p>
        </div>

        {/* Optional Small Badges Above Grid */}
        <div className="leadership-badges reveal reveal-delay-2">
          <span>✓ 15+ Engineers Mentored</span>
          <span>✓ 30+ Applications Delivered</span>
          <span>✓ 11+ Years Experience</span>
          <span>✓ Multiple Industry Domains</span>
          <span>✓ End-to-End Product Delivery</span>
        </div>

        <div className="leadership-grid">
          {leadershipCards.map((card, i) => (
            <div
              key={i}
              className={`leadership-card glass-card reveal reveal-delay-${(i % 4) + 1}`}
              style={{ '--card-color': card.color } as React.CSSProperties}
            >
              <div
                className="leadership-icon"
                style={{
                  background: `${card.color}15`,
                  border: `1px solid ${card.color}30`,
                  color: card.color,
                }}
              >
                {card.icon}
              </div>
              <h3 className="leadership-title">{card.title}</h3>
              <p className="leadership-desc">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Leadership;
