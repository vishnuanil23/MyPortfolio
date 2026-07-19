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
    title: 'Team Management',
    description:
      'Led and managed cross-functional teams of 12+ developers, designers, and QA engineers. Fostered a culture of ownership, accountability, and continuous improvement.',
  },
  {
    icon: <SchoolIcon />,
    color: '#06b6d4',
    title: 'Mentoring Developers',
    description:
      'Guided junior and mid-level engineers through technical challenges, career growth, and best practices — from architecture design to clean code principles.',
  },
  {
    icon: <RateReviewIcon />,
    color: '#a78bfa',
    title: 'Code Reviews',
    description:
      'Established rigorous code review standards to ensure quality, security, and maintainability. Reduced production bugs by enforcing patterns and testing protocols.',
  },
  {
    icon: <CalendarViewWeekIcon />,
    color: '#f59e0b',
    title: 'Sprint Planning',
    description:
      'Facilitated sprint planning, backlog grooming, and retrospectives in Agile/Scrum environments. Ensured timely delivery across multiple parallel projects.',
  },
  {
    icon: <AccountTreeIcon />,
    color: '#10b981',
    title: 'Technical Decisions',
    description:
      'Drove key architectural decisions — from choosing Clean Architecture with BLoC to migrating legacy Android apps to Flutter — with measurable business impact.',
  },
  {
    icon: <RocketLaunchIcon />,
    color: '#ec4899',
    title: 'Production Releases',
    description:
      'Owned end-to-end release management including Play Store and App Store deployments, staged rollouts, monitoring, and hotfix response processes.',
  },
  {
    icon: <RecordVoiceOverIcon />,
    color: '#06b6d4',
    title: 'Client Communication',
    description:
      'Served as the primary technical liaison between engineering teams and clients. Translated business requirements into technical solutions, managing expectations effectively.',
  },
  {
    icon: <AssignmentIcon />,
    color: '#7c3aed',
    title: 'Requirement Gathering',
    description:
      'Led discovery sessions with stakeholders to gather, analyze, and document requirements. Created detailed project estimations and technical roadmaps.',
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
            <span className="gradient-text">building great teams</span>
          </h2>
          <p className="section-subtitle">
            Technical excellence multiplied by empowering the people around you. That's what leadership means to me.
          </p>
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
