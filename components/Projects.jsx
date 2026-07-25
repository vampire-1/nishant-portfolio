"use client";

import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    id: "01",
    type: "WEB PLATFORM",
    title: "HireX",
    badge: "AI-Powered",
    bg: "linear-gradient(to bottom, #8b5cf6, #5b21b6)",
    desc: "AI-powered recruitment platform automating resume screening through NLP-based semantic search and ML-driven candidate ranking.",
    tech: ["NEXT.JS", "FASTAPI", "POSTGRESQL", "NLP", "FLUTTER"],
    url: "https://hire-x-frontend.vercel.app/"
  },
  {
    id: "02",
    type: "MACHINE LEARNING",
    title: "Lung Cancer Detection",
    bg: "linear-gradient(to bottom, #0ea5e9, #0369a1)",
    desc: "Multimodal system for lung cancer detection utilizing ResNet-18 and AdaBoost with extensive feature engineering and cross-validation.",
    tech: ["RESNET-18", "ADABOOST", "PYTHON", "ML"],
    url: "https://colab.research.google.com/drive/1-7R1XeNZX3S4W7nd5N5hiLYQPHv2qzKX?usp=sharing"
  },
  {
    id: "03",
    type: "HARDWARE & MOBILE",
    title: "Plant Health Monitor",
    bg: "linear-gradient(to bottom, #22c55e, #15803d)",
    desc: "Arduino plant health system with an Android app for real-time monitoring, alerts, and early stress detection.",
    tech: ["ARDUINO", "ANDROID", "BLUETOOTH", "IOT SENSORS"],
    url: "https://github.com/vampire-1/Plant-Health-Monitoring-System-Arduino-Android-HC-05-Bluetooth.git"
  }
];

export default function Projects() {
  return (
    <section id="projects" style={{ paddingBottom: '6rem', paddingLeft: '1.5rem', paddingRight: '1.5rem', maxWidth: '1100px', margin: '0 auto', scrollMarginTop: '6rem' }}>
      
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h4 style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Portfolio</h4>
        <h2 style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--foreground)', lineHeight: 1.1, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '1rem', maxWidth: '36rem', margin: '0 auto' }}>
          A curated selection of projects that made me confident in building software.
        </p>
      </div>

      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }} className="projects-grid">
        {projects.map((proj) => (
          <a key={proj.id} href={proj.url} target="_blank" rel="noopener noreferrer" className="project-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textDecoration: 'none' }}>
            
            {/* Top info */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem' }}>
                  <span style={{ fontSize: '0.7rem', color: 'var(--muted)', fontFamily: 'JetBrains Mono' }}>{proj.id}</span>
                  <div style={{ width: '2rem', height: '1px', backgroundColor: 'var(--border-color)' }}></div>
                  <span style={{ fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{proj.type}</span>
                </div>
                <h3 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--foreground)' }}>{proj.title}</h3>
              </div>
              {proj.badge && (
                <div style={{ padding: '0.25rem 0.75rem', backgroundColor: '#a855f7', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.25rem', marginBottom: '0.5rem' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'white' }}>{proj.badge}</span>
                </div>
              )}
            </div>

            {/* Card Mockup */}
            <div style={{ 
              width: '100%', height: '380px', borderRadius: '1.5rem', 
              background: proj.bg, position: 'relative', overflow: 'hidden',
              display: 'flex', flexDirection: 'column', padding: '2rem 2rem 0 2rem',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.1)',
              transition: 'transform 0.4s ease, box-shadow 0.4s ease',
              cursor: 'pointer'
            }}
              onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 30px 60px rgba(0,0,0,0.5)'; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.4)'; }}
            >
              <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', fontWeight: 500, lineHeight: 1.5, marginBottom: '2rem', zIndex: 10, maxWidth: '80%' }}>
                {proj.desc}
              </p>
              
              {/* Inner mock device */}
              <div style={{ 
                flex: 1, backgroundColor: '#0f0f11', borderTopLeftRadius: '0.75rem', borderTopRightRadius: '0.75rem', 
                border: '1px solid rgba(255,255,255,0.2)', borderBottom: 'none', position: 'relative',
                boxShadow: '0 -10px 30px rgba(0,0,0,0.5)', overflow: 'hidden'
              }}>
                <div style={{ padding: '0.75rem', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', gap: '0.25rem' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ef4444' }}></div>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#eab308' }}></div>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#22c55e' }}></div>
                </div>
                {/* Fake content */}
                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.3 }}>
                  <span style={{ fontSize: '2rem', fontWeight: 800, letterSpacing: '0.2em' }}>{proj.title.toUpperCase()}</span>
                </div>
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
              {proj.tech.map((t) => (
                <span key={t} style={{ fontSize: '0.55rem', fontWeight: 600, color: 'var(--muted)', border: '1px solid var(--card-border)', padding: '0.25rem 0.75rem', borderRadius: '9999px', backgroundColor: 'var(--card)', letterSpacing: '0.05em' }}>
                  {t}
                </span>
              ))}
            </div>

          </a>
        ))}
      </div>

      {/* GitHub Link */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}>
        <a 
          href="https://github.com/vampire-1" 
          target="_blank" 
          rel="noopener noreferrer"
          className="github-link"
          style={{ 
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            color: 'var(--muted)', fontSize: '0.9rem', fontWeight: 500,
            padding: '0.75rem 1.5rem', borderRadius: '9999px',
            border: '1px solid var(--card-border)',
            backgroundColor: 'var(--card)',
            transition: 'all 0.3s ease',
          }}
          onMouseOver={(e) => { e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.4)'; e.currentTarget.style.color = 'var(--foreground)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseOut={(e) => { e.currentTarget.style.borderColor = 'var(--card-border)'; e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.transform = 'translateY(0)'; }}
        >
          Explore all projects on GitHub
          <ExternalLink size={14} />
        </a>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}} />
    </section>
  );
}
