import React, { useEffect, useRef } from "react";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import '../assets/styles/Testimonials.scss';

const testimonials = [
  {
    quote:
      "Vishnu is one of the most technically sharp leads I've worked with. His ability to architect scalable Flutter solutions while keeping the team motivated is truly exceptional. He raised our code quality bar significantly.",
    name: 'Alex Johnson',
    title: 'Senior Product Manager',
    company: 'Tech Corp',
    avatar: 'AJ',
    color: '#7c3aed',
  },
  {
    quote:
      "As a client, we appreciated how Vishnu consistently translated our business requirements into elegant technical solutions. He communicated proactively, delivered on time, and the app exceeded our expectations.",
    name: 'Sarah Chen',
    title: 'Director of Operations',
    company: 'EventCo International',
    avatar: 'SC',
    color: '#06b6d4',
  },
  {
    quote:
      "I had the privilege of being mentored by Vishnu. He doesn't just teach you to code — he teaches you to think like an architect. My growth in the past year under his guidance has been remarkable.",
    name: 'Rahul Menon',
    title: 'Flutter Developer',
    company: 'Techversant',
    avatar: 'RM',
    color: '#10b981',
  },
  {
    quote:
      "Vishnu led our mobile app migration from native Android to Flutter flawlessly. Zero downtime for our users, 35% code reduction, and the team loved the new workflow. A true technical leader.",
    name: 'David Park',
    title: 'CTO',
    company: 'MobileSoft Solutions',
    avatar: 'DP',
    color: '#f59e0b',
  },
];

function Testimonials() {
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
    <div id="testimonials" ref={ref}>
      <div className="testimonials-section">
        <div className="section-header reveal">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">
            What people say<br />
            <span className="gradient-text">about working with me</span>
          </h2>
          <p className="section-subtitle">
            Honest words from colleagues, clients, and mentees I've had the privilege to work with.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`testimonial-card glass-card reveal reveal-delay-${(i % 4) + 1}`}
              style={{ '--t-color': t.color } as React.CSSProperties}
            >
              <div className="quote-icon" style={{ color: t.color }}>
                <FormatQuoteIcon />
              </div>
              <p className="testimonial-quote">{t.quote}</p>
              <div className="testimonial-author">
                <div
                  className="author-avatar"
                  style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}88)` }}
                >
                  {t.avatar}
                </div>
                <div className="author-info">
                  <div className="author-name">{t.name}</div>
                  <div className="author-title">{t.title} · {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
