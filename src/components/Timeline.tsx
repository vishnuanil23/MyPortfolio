import React, { useEffect, useRef, useState } from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

const experiences = [
  {
    title: 'Technical Lead',
    company: 'Techversant',
    location: 'Thiruvananthapuram, Kerala',
    date: 'July 2023 – Present',
    type: 'current',
    responsibilities: [
      'Led cross-functional engineering teams delivering enterprise software across Mobile, Backend, APIs, and Cloud.',
      'Built workforce management solutions supporting Amazon operations and workforce automation.',
      'Developed AI-powered product management applications for GS1 Canada, enabling barcode registration, product categorization, and approval workflows.',
      'Delivered event management and exhibition platforms featuring QR-based lead generation, attendee engagement, exhibitor management, and offline capabilities.',
      'Built cloud kitchen food ordering applications for UAE businesses with scalable backend integrations.'
    ],
    tech: ['Flutter', 'Android', 'iOS', '.NET', 'ASP.NET Core', 'REST APIs', 'PostgreSQL', 'SQL Server', 'SQLite', 'Laravel', 'PHP', 'Firebase', 'Git', 'GitHub', 'CI/CD', 'Azure DevOps', 'Clean Architecture', 'MVVM', 'Team Leadership']
  },
  {
    title: 'Technical Consultant',
    company: 'Techversant',
    location: 'Thiruvananthapuram, Kerala',
    date: 'Aug 2022 – Sep 2023',
    type: 'past',
    responsibilities: [
      'Designed and implemented enterprise application modules across Flutter, Android, and iOS platforms.',
      'Collaborated with multiple engineering teams to improve application architecture, performance, and maintainability.',
      'Assisted backend integration, API design discussions, debugging, and production support.',
      'Mentored developers and contributed to engineering best practices.'
    ],
    tech: ['Flutter', 'Android', 'iOS', 'REST APIs', 'Firebase', 'Clean Architecture', 'MVVM', 'Git']
  },
  {
    title: 'Senior Mobile Engineer',
    company: 'Aamro Freight & Shipping Services LLC',
    location: 'Dubai, UAE',
    date: 'Nov 2020 – Aug 2022',
    type: 'past',
    responsibilities: [
      'Developed logistics and freight management applications for warehouse operations.',
      'Integrated POS scanning devices for shipment identification, tracking, and dispatch workflows.',
      'Built warehouse mobility solutions supporting freight movement and operational efficiency.',
      'Worked closely with backend teams on API integrations and production deployments.'
    ],
    tech: ['Xamarin', 'Android', 'iOS', 'REST APIs', 'SQLite', 'Java', 'Kotlin', 'Git', 'Firebase']
  },
  {
    title: 'Mobile Engineer',
    company: 'Holiday Souq Travel LLC',
    location: 'Dubai, UAE',
    date: 'Mar 2019 – Nov 2020',
    type: 'past',
    responsibilities: [
      'Developed travel and tourism applications for UAE customers.',
      'Built food ordering applications for in-house restaurants and hospitality businesses.',
      'Integrated booking workflows, backend APIs, and customer engagement features.',
      'Improved application performance and user experience across multiple products.'
    ],
    tech: ['Android', 'Java', 'Kotlin', 'REST APIs','PHP', 'SQLite', 'MVC', 'Git']
  },
  {
    title: 'Team Lead',
    company: 'Safe Software & Integrated Solutions',
    location: 'Kozhikode, Kerala',
    date: 'Dec 2018 – Feb 2019',
    type: 'past',
    responsibilities: [
      'Led mobile development projects for banking and enterprise clients.',
      'Coordinated engineering teams, code reviews, sprint planning, and client communication.',
      'Ensured successful project delivery across multiple banking applications.'
    ],
    tech: ['Android', 'Java', 'SQLite', 'REST APIs', 'Leadership', 'Git', 'Agile']
  },
  {
    title: 'Mobile Engineer',
    company: 'Safe Software & Integrated Solutions',
    location: 'Kozhikode, Kerala',
    date: 'Jul 2015 – Dec 2018',
    type: 'past',
    responsibilities: [
      'Developed end-to-end mobile banking applications for Canara Bank, ESAF Bank, and multiple Cooperative Banks across Kerala and Karnataka.',
      'Built secure banking modules including authentication, account services, and financial workflows.',
      'Worked directly with banking clients throughout development, testing, deployment, and maintenance.',
      'Implemented MVVM architecture and backend API integrations for enterprise banking solutions.'
    ],
    tech: ['Android', 'Java','SQLite', 'REST APIs', 'MVVM', 'Git', 'JSON']
  },
  {
    title: 'Android Intern',
    company: 'Cerebtec Labs',
    location: 'Kochi, Kerala',
    date: 'Sep 2014 – May 2015',
    type: 'past',
    responsibilities: [
      'Learned Android application development through live client projects.',
      'Built reusable UI components and integrated REST APIs.',
      'Gained practical experience with software development lifecycle and version control.'
    ],
    tech: ['Android', 'Java', 'SQLite', 'REST APIs']
  }
];

function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const [showAll, setShowAll] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const visibleExperiences = showAll ? experiences : experiences.slice(0, 3);

  return (
    <div id="history" ref={ref}>
      <div className="timeline-section">
        <div className="section-header reveal" style={{ padding: '0 10%' }}>
          <span className="section-label">Experience</span>
          <h2 className="section-title">
            Engineering<br />
            <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle">
            11+ years of building software solutions across mobile, backend, APIs, databases, and cloud technologies while growing from Android Developer to Technical Lead.
          </p>
        </div>

        <VerticalTimeline lineColor="rgba(124, 58, 237, 0.2)">
          {visibleExperiences.map((exp, i) => (
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
                <span className="timeline-badge">Current Role</span>
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

              {/* Rounded tech chips */}
              <div className="timeline-tech-chips">
                {exp.tech.map((t, j) => (
                  <span className="timeline-chip" key={j}>{t}</span>
                ))}
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>

        {/* View More / Less toggle button */}
        <div className="timeline-more-btn-container reveal">
          <button className="btn-more" onClick={() => setShowAll(!showAll)}>
            {showAll ? 'Show Less Experience ↑' : 'View More Experience ↓'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Timeline;