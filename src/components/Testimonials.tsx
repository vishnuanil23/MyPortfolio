import React, { useEffect, useRef } from "react";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import '../assets/styles/Testimonials.scss';

const testimonials = [
  {
    quote:
      "Vishnu played a key role in delivering several banking and microfinance applications for clients including Canara Bank, ESAF Bank, and multiple Cooperative Banks across Kerala and Karnataka. His ability to understand business requirements, deliver high-quality solutions within demanding timelines, and respond quickly to customer feedback was highly appreciated by both our team and our clients.",
    name: 'Praveen Krishnan',
    title: 'Managing Director & CEO',
    company: 'Safe Software and Integrated Solutions Pvt. Ltd.',
    avatar: 'PK',
    color: '#7c3aed',
  },
  {
    quote:
      "One of Vishnu's biggest contributions was successfully integrating POS hardware into our freight and warehouse management platform under a very challenging delivery schedule. Despite the tight timeline, he delivered a stable solution that streamlined warehouse scanning and shipment processing without compromising quality.",
    name: 'Madhu Menon',
    title: 'Project Manager',
    company: 'Aamro Freight and Shipping Services LLC',
    avatar: 'MM',
    color: '#06b6d4',
  },
  {
    quote:
      "I've had the opportunity to see Vishnu grow from a strong Android engineer into a dependable Flutter Technical Lead. He successfully led our transition from native Android development to Flutter, built a high-performing mobile engineering team, and consistently delivered enterprise solutions for global organizations such as GS1. His technical leadership, ownership, and ability to guide teams through complex engineering challenges have been invaluable.",
    name: 'Arun Antony',
    title: 'Solution Architect',
    company: 'Techversant Infotech',
    avatar: 'AA',
    color: '#10b981',
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
