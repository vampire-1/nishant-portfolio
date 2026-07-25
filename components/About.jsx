"use client";

import React, { useState, useEffect } from 'react';

export default function About() {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

  return (
    <section id="about" style={{ paddingBottom: '6rem', paddingLeft: '1rem', paddingRight: '1rem', maxWidth: '1100px', margin: '0 auto', scrollMarginTop: '6rem' }}>
      
      {/* Bento Grid Container */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(3, 1fr)', 
        gridTemplateRows: 'minmax(220px, auto) minmax(340px, auto) minmax(160px, auto)', 
        gap: '1.5rem',
      }} className="bento-grid">
        
        {/* Box 1: Large Name */}
        <div className="glass-card" style={{ 
          gridColumn: '1 / span 1', gridRow: '1 / span 1', minWidth: 0,
          borderRadius: '1.25rem', padding: '2rem',
          display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center',
        }}>
            <h2 style={{ fontSize: '2.8rem', fontWeight: 900, letterSpacing: '0.05em', lineHeight: 1, color: 'var(--foreground)', opacity: 0.85, textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>NISHANT</h2>
            <h2 style={{ fontSize: '2.8rem', fontWeight: 900, letterSpacing: '0.05em', lineHeight: 1, color: 'var(--foreground)', opacity: 0.85, textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>YADAV</h2>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', marginTop: '0.5rem' }}>
            <div style={{ height: '1px', width: '4rem', backgroundColor: 'rgba(168, 85, 247, 0.5)' }}></div>
            <span style={{ fontSize: '0.75rem', fontFamily: 'JetBrains Mono, monospace', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.3em' }}>Fullstack Developer</span>
          </div>
        </div>

        {/* Box 2: Hover Cards container */}
        <div 
          className="glass-card" 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => { setIsHovered(false); setHoveredCardIndex(null); }}
          style={{ 
            gridColumn: '2 / span 2', gridRow: '1 / span 1', minWidth: 0,
            borderRadius: '1.25rem', position: 'relative', overflow: 'hidden',
            display: 'flex', flexDirection: 'column', cursor: 'default'
          }}
        >
          {/* Hover Pill (fades out on hover) */}
          <div style={{ 
            position: 'absolute', top: '1.5rem', left: '0', right: '0', 
            display: 'flex', justifyContent: 'center', zIndex: 30,
            opacity: isHovered ? 0 : 1, transition: 'opacity 0.3s ease'
          }}>
            <span style={{ fontSize: '0.55rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--accent)', fontWeight: 600, backgroundColor: 'var(--card-bg-solid)', padding: '0.35rem 1rem', borderRadius: '9999px', border: '1px solid var(--card-border)', backdropFilter: 'blur(4px)' }}>Hover to read more</span>
          </div>

          {/* Cards container - slides up on hover */}
          <div style={{ 
            position: 'absolute', width: '100%', padding: '0 1rem', display: 'flex', gap: '1rem',
            top: isHovered ? '50%' : '50%', 
            transform: isHovered ? 'translateY(-50%)' : 'translateY(20px)',
            transition: 'all 0.5s cubic-bezier(0.25,0.8,0.25,1)',
            zIndex: 10
          }}>
            {/* Card 0 */}
            <div 
              onMouseEnter={() => setHoveredCardIndex(0)}
              onMouseLeave={() => setHoveredCardIndex(null)}
              style={{ 
                flex: 1, backgroundColor: 'var(--project-mockup-bg)', 
                border: hoveredCardIndex === 0 ? '1px solid var(--accent)' : '1px solid var(--border-color)', 
                borderRadius: '0.75rem', padding: '1.25rem', display: 'flex', flexDirection: 'column', height: '180px', 
                transform: hoveredCardIndex === 0 ? 'translateY(-15px) translateX(-5px) rotate(-4deg)' : 'translateY(0)',
                boxShadow: hoveredCardIndex === 0 ? '0 15px 35px rgba(168, 85, 247, 0.25)' : 'none',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
              }}
            >
              <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--foreground)', textTransform: 'uppercase' }}>Hackathons</span>
              <span style={{ fontSize: '0.65rem', color: 'var(--muted)', marginTop: '0.75rem', opacity: 0.8, lineHeight: 1.5 }}>Secured top 10 place in BIT internal hackathon by building an innovative Ed-Tech platform prototype.</span>
            </div>
            {/* Card 1 */}
            <div 
              onMouseEnter={() => setHoveredCardIndex(1)}
              onMouseLeave={() => setHoveredCardIndex(null)}
              style={{ 
                flex: 1, backgroundColor: 'var(--project-mockup-bg)', 
                border: hoveredCardIndex === 1 ? '1px solid var(--accent)' : '1px solid var(--border-color)', 
                borderRadius: '0.75rem', padding: '1.25rem', display: 'flex', flexDirection: 'column', height: '180px', 
                transform: hoveredCardIndex === 1 ? 'translateY(-15px)' : 'translateY(12px)',
                boxShadow: hoveredCardIndex === 1 ? '0 15px 35px rgba(168, 85, 247, 0.25)' : 'none',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
              }}
            >
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--foreground)', textTransform: 'uppercase', textAlign: 'center' }}>University</span>
              <span style={{ fontSize: '0.65rem', color: 'var(--muted)', marginTop: '0.75rem', opacity: 0.8, lineHeight: 1.5, textAlign: 'center' }}>Pursuing B.Tech in Computer Science Engineering at Birla Institute of Technology, Mesra. CGPA: 7.7.</span>
            </div>
            {/* Card 2 */}
            <div 
              onMouseEnter={() => setHoveredCardIndex(2)}
              onMouseLeave={() => setHoveredCardIndex(null)}
              style={{ 
                flex: 1, backgroundColor: 'var(--project-mockup-bg)', 
                border: hoveredCardIndex === 2 ? '1px solid var(--accent)' : '1px solid var(--border-color)', 
                borderRadius: '0.75rem', padding: '1.25rem', display: 'flex', flexDirection: 'column', height: '180px', alignItems: 'flex-end', textAlign: 'right', 
                transform: hoveredCardIndex === 2 ? 'translateY(-15px) translateX(5px) rotate(4deg)' : 'translateY(0)',
                boxShadow: hoveredCardIndex === 2 ? '0 15px 35px rgba(168, 85, 247, 0.25)' : 'none',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
              }}
            >
              <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--foreground)', textTransform: 'uppercase' }}>Research</span>
              <span style={{ fontSize: '0.65rem', color: 'var(--muted)', marginTop: '0.75rem', opacity: 0.8, lineHeight: 1.5 }}>Published papers on 'Reusable Rockets' (MNIT-RACS 2024) and 'Hand Gesture Recognition' (MNIT Jaipur).</span>
            </div>
          </div>
          
          {/* Gradient overlay to fade bottom when not hovered */}
          <div style={{ 
            position: 'absolute', bottom: 0, left: 0, right: 0, height: '6rem', 
            background: 'linear-gradient(to top, var(--background), transparent)', 
            zIndex: 20, pointerEvents: 'none',
            opacity: isHovered ? 0 : 1, transition: 'opacity 0.5s ease'
          }}></div>
        </div>

        {/* Box 3: Mindset */}
        <div className="glass-card" style={{ 
          gridColumn: '1 / span 1', gridRow: '2 / span 2', minWidth: 0,
          borderRadius: '1.25rem', padding: '2rem', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden'
        }}>
          <h3 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--foreground)', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>Mindset</h3>
          
          <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '2rem' }}>
            <strong style={{ color: 'var(--foreground)' }}>Building more than software.</strong> My passions provide the <strong style={{ color: 'var(--foreground)' }}>discipline and focus</strong> I need to grow.
          </p>
          
          {/* Mindset Tags */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1.25rem', justifyContent: 'center' }}>
            {['Fitness', 'Travelling', 'Curiosity'].map((item, i) => (
              <div 
                key={item} 
                style={{ 
                  display: 'flex', alignItems: 'center', gap: '1.25rem', 
                  backgroundColor: 'var(--card)', border: '1px solid var(--card-border)',
                  padding: '1.25rem 2rem', borderRadius: '1.5rem',
                  transform: `translateX(${i * 12}px)`,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  cursor: 'default'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = `translateX(${i * 12 + 10}px) scale(1.05)`;
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(168, 85, 247, 0.2)';
                  e.currentTarget.style.borderColor = 'var(--accent)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = `translateX(${i * 12}px) scale(1)`;
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
                  e.currentTarget.style.borderColor = 'var(--card-border)';
                }}
              >
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'var(--accent)', boxShadow: '0 0 15px var(--accent)' }}></div>
                <span style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--foreground)', letterSpacing: '0.05em' }}>{item}</span>
              </div>
            ))}
          </div>

          <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.6, marginTop: '2rem' }}>
            Exploring the world and challenging myself keeps my perspective <strong style={{ color: 'var(--foreground)' }}>fresh and focused</strong>.
          </p>
        </div>

        {/* Box 4: Portrait Image */}
        <div className="glass-card" style={{ 
          gridColumn: '2 / span 1', gridRow: '2 / span 1', minWidth: 0,
          borderRadius: '1.25rem', overflow: 'hidden', position: 'relative',
        }}>
          <img 
            src="/portrait.png" 
            alt="Portrait"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>

        {/* Box 5: Craft */}
        <div className="glass-card" style={{ 
          gridColumn: '3 / span 1', gridRow: '2 / span 1', minWidth: 0, overflow: 'hidden',
          borderRadius: '1.25rem', padding: '2rem', display: 'flex', flexDirection: 'column'
        }}>
          <h3 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--foreground)', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>Craft</h3>
          
          <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
            Building scalable <strong style={{ color: 'var(--foreground)' }}>apps, websites, and automations</strong>.
          </p>
          <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.6, opacity: 0.9, flex: 1 }}>
            I understand what advantages modern tech can provide, helping me advise on the solutions a business actually needs.
          </p>
          
          {/* Tech stack scrolling pills */}
          <div style={{ marginTop: '2rem', marginBottom: '2rem', overflow: 'hidden', position: 'relative', maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
            <div className="animate-scroll" style={{ display: 'flex', gap: '1.25rem', width: 'max-content' }}>
              {['JAVA', 'JS/TS', 'PYTHON', 'REACT', 'NEXT.JS', 'NODE', 'SPRING BOOT', 'AWS', 'DOCKER', 'POSTGRESQL', 'JAVA', 'JS/TS', 'PYTHON', 'REACT', 'NEXT.JS', 'NODE', 'SPRING BOOT', 'AWS', 'DOCKER', 'POSTGRESQL'].map((tech, i) => {
                const colors = { 'JAVA': '#f89820', 'JS/TS': '#f7df1e', 'PYTHON': '#3776ab', 'REACT': '#61DAFB', 'NEXT.JS': '#ffffff', 'NODE': '#339933', 'SPRING BOOT': '#6db33f', 'AWS': '#ff9900', 'DOCKER': '#2496ed', 'POSTGRESQL': '#336791' };
                return (
                  <span key={`${tech}-${i}`} style={{ fontSize: '0.65rem', color: colors[tech] || 'var(--muted)', fontFamily: 'JetBrains Mono, monospace', textTransform: 'uppercase', letterSpacing: '0.05em', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 600 }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: colors[tech] || 'var(--muted)', display: 'inline-block' }}></span>
                    {tech}
                  </span>
                );
              })}
            </div>
          </div>

          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.6 }}>
            Software Engineer Intern with experience in full-stack development. Feel free to invite me to collaborate.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#22c55e', boxShadow: '0 0 10px rgba(34, 197, 94, 0.5)' }}></div>
            <span style={{ fontSize: '0.7rem', color: 'var(--muted)', fontWeight: 500 }}>Open to collaboration & freelance</span>
          </div>
        </div>

        {/* Box 6: Cracow, Poland */}
        <div className="glass-card" style={{ 
          gridColumn: '2 / span 1', gridRow: '3 / span 1', minWidth: 0,
          borderRadius: '1.25rem', padding: '1.5rem', position: 'relative', overflow: 'hidden',
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
          backgroundImage: 'linear-gradient(var(--card-bg-solid), var(--card-bg-solid)), url("https://www.transparenttextures.com/patterns/cubes.png")'
        }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--foreground)', letterSpacing: '0.05em' }}>JAIPUR, INDIA</h3>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--muted)', fontFamily: 'JetBrains Mono, monospace' }}>26.9124° N, 75.7873° E</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--accent)', fontFamily: 'JetBrains Mono, monospace', fontWeight: 600 }}>+ GMT+5:30</span>
          </div>
        </div>

        {/* Box 7: Let's work together */}
        <div className="glass-card" style={{ 
          gridColumn: '3 / span 1', gridRow: '3 / span 1', minWidth: 0,
          borderRadius: '1.25rem', padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ 
            position: 'absolute', inset: 0, opacity: 0.04,
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h20v20H0V0zm10 10h10v10H10V10zM0 10h10v10H0V10z\' fill=\'%23a855f7\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
            backgroundSize: '20px 20px'
          }}></div>
          <span style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🤝</span>
          <span style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--foreground)' }}>Let's work together</span>
          <span style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '0.25rem' }}>Always open to new ideas</span>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .hover-card { 
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease; 
        }
        .hover-card:hover { 
          transform: translateY(-10px) scale(1.02) !important; 
          box-shadow: 0 10px 30px rgba(168, 85, 247, 0.2) !important;
          z-index: 50;
        }
        
        @media (max-width: 900px) {
          .bento-grid {
            display: flex !important;
            flex-direction: column !important;
          }
        }
      `}} />

    </section>
  );
}
