"use client";

import React from 'react';
import { Briefcase, GraduationCap, ArrowRight } from 'lucide-react';

const cards = [
  {
    title: 'SDE Intern (Jan 2026 - Mar 2026)',
    company: 'Arize Digital Pvt. Ltd.',
    description: [
      'Built 13-layer video anti-piracy microservice blocking 35+ download managers via HLS + AES-128 encryption and HMAC-signed URLs.',
      'Developed 11-layer AI exam proctoring system using TensorFlow.js BlazeFace detecting 10 cheat behaviors.',
      'Shipped 2 full-stack security microservices with real-time admin dashboards using Node.js, Express, and Socket.IO.'
    ],
    icon: Briefcase,
    color: '#a855f7',
    gradient: 'linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(168, 85, 247, 0.05))',
    borderColor: 'rgba(168, 85, 247, 0.3)',
  },
  {
    title: 'SDE Intern (May 2025 - Jul 2025)',
    company: 'Arize Digital Pvt. Ltd.',
    description: [
      'Designed custom chatbot integration for 2 client websites, increasing user engagement by 30%.',
      'Developed a Dockerized FastAPI microservice for vacation home listings using MongoDB.',
      'Assisted in deployment using Docker and AWS services, learning CI/CD pipeline fundamentals.'
    ],
    icon: Briefcase,
    color: '#f97316',
    gradient: 'linear-gradient(135deg, rgba(249, 115, 22, 0.15), rgba(249, 115, 22, 0.05))',
    borderColor: 'rgba(249, 115, 22, 0.3)',
  },
  {
    title: 'Education (2022 - 2026)',
    company: 'Birla Institute of Technology, Mesra',
    description: [
      'Bachelor of Technology in Computer Science Engineering.',
      'Current CGPA: 7.7.',
      'Published Research Papers at MNIT-RACS 2024 and MNIT Jaipur Conference.'
    ],
    icon: GraduationCap,
    color: '#06b6d4',
    gradient: 'linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(6, 182, 212, 0.05))',
    borderColor: 'rgba(6, 182, 212, 0.3)',
  },
];

export default function Other() {
  return (
    <section id="experience" style={{ paddingBottom: '8rem', paddingTop: '2rem', paddingLeft: '1.5rem', paddingRight: '1.5rem', maxWidth: '1100px', margin: '0 auto', scrollMarginTop: '6rem' }}>
      
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h4 style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Career</h4>
        <h2 style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--foreground)', lineHeight: 1.1, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
          Work <span className="text-gradient">Experience</span>
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '1rem', maxWidth: '36rem', margin: '0 auto' }}>
          My professional journey and roles.
        </p>
      </div>

      {/* Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="other-grid">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.title}
              className="other-card glass-card"
              style={{
                borderRadius: '1.25rem',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                textDecoration: 'none',
                transition: 'transform 0.4s ease, box-shadow 0.4s ease, border-color 0.3s ease',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = `0 20px 40px rgba(0,0,0,0.3), 0 0 30px ${card.color}15`;
                e.currentTarget.style.borderColor = card.borderColor;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.borderColor = 'var(--card-border)';
              }}
            >
              {/* Gradient overlay on hover */}
              <div style={{
                position: 'absolute', inset: 0,
                background: card.gradient,
                opacity: 0,
                transition: 'opacity 0.4s ease',
                pointerEvents: 'none',
              }} className="card-gradient-overlay"></div>

              {/* Icon */}
              <div style={{
                width: '56px', height: '56px', borderRadius: '1rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backgroundColor: `${card.color}15`,
                border: `1px solid ${card.color}30`,
                position: 'relative', zIndex: 1,
              }}>
                <Icon size={24} color={card.color} />
              </div>

              {/* Content */}
              <div style={{ position: 'relative', zIndex: 1, flex: 1 }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--foreground)', marginBottom: '0.2rem' }}>{card.title}</h3>
                {card.company && <div style={{ fontSize: '0.85rem', fontWeight: 600, color: card.color, marginBottom: '1rem' }}>{card.company}</div>}
                {Array.isArray(card.description) ? (
                  <ul style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.6, margin: 0, paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {card.description.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                ) : (
                  <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.5 }}>{card.description}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .other-card:hover .card-gradient-overlay {
          opacity: 1 !important;
        }
        .other-card:hover svg:last-of-type {
          transform: translateX(4px);
        }
        @media (max-width: 768px) {
          .other-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}} />
    </section>
  );
}
