"use client";

import React, { useEffect, useState, useRef, useMemo } from 'react';

const techs = [
  { name: 'TypeScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
  { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'Tailwind', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Docker', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
  { name: 'Git', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
  { name: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'Flutter', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' },
  { name: 'AWS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', invertDark: true },
  { name: 'PostgreSQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
  { name: 'Spring Boot', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg' },
  { name: 'Java', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
  { name: 'MongoDB', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
  { name: 'Redis', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg' }
];

export default function Skills() {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const requestRef = useRef();

  useEffect(() => {
    if (containerRef.current) {
      setDimensions({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight
      });
    }

    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight
        });
      }
    };

    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const animate = () => {
      setRotation(prev => ({
        x: prev.x + 0.002,
        y: prev.y + 0.003
      }));
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  // Fibonacci sphere distribution
  const points = useMemo(() => {
    const n = techs.length;
    const pts = [];
    const phi = Math.PI * (3 - Math.sqrt(5)); // golden angle
    
    for (let i = 0; i < n; i++) {
      const y = 1 - (i / (n - 1)) * 2; // y goes from 1 to -1
      const radiusAtY = Math.sqrt(1 - y * y); // radius at y
      const theta = phi * i; // golden angle increment

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      pts.push({ x, y, z, tech: techs[i] });
    }
    return pts;
  }, []);

  const radius = Math.min(dimensions.width, dimensions.height) / 2.5;

  return (
    <section id="skills" style={{ paddingBottom: '8rem', paddingTop: '4rem', overflow: 'hidden' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '4rem' }}>
          <h4 style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Tech Stack</h4>
          <h2 style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--foreground)', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            My <span className="text-gradient">Skills</span>
          </h2>
        </div>

        {/* 3D Sphere Container */}
        <div 
          ref={containerRef}
          style={{ 
            position: 'relative', 
            width: '100%', 
            height: '500px', 
            margin: '0 auto',
            maxWidth: '900px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            perspective: '1000px'
          }}
        >
          {/* Wireframe background sphere (optional, gives that 3D grid look) */}
          <div style={{
            position: 'absolute',
            width: radius * 2.2,
            height: radius * 2.2,
            borderRadius: '50%',
            border: '1px solid var(--border-color)',
            opacity: 0.2,
            background: 'radial-gradient(circle, transparent 40%, rgba(168, 85, 247, 0.05) 100%)',
            pointerEvents: 'none'
          }}></div>

          {dimensions.width > 0 && points.map((point, i) => {
            // Apply rotations
            // Rotate around X axis
            let y1 = point.y * Math.cos(rotation.x) - point.z * Math.sin(rotation.x);
            let z1 = point.y * Math.sin(rotation.x) + point.z * Math.cos(rotation.x);
            let x1 = point.x;

            // Rotate around Y axis
            let x2 = x1 * Math.cos(rotation.y) + z1 * Math.sin(rotation.y);
            let y2 = y1;
            let z2 = -x1 * Math.sin(rotation.y) + z1 * Math.cos(rotation.y);

            // Calculate 2D position and scale based on Z
            const scale = (z2 + 2) / 3; // depth scale
            const opacity = (z2 + 1.5) / 2.5; // fade out elements in back
            const zIndex = Math.round(z2 * 100);

            const px = x2 * radius;
            const py = y2 * radius;

            return (
              <div
                key={point.tech.name}
                style={{
                  position: 'absolute',
                  transform: `translate3d(${px}px, ${py}px, 0) scale(${scale})`,
                  opacity: Math.max(0.2, opacity),
                  zIndex: zIndex + 1000,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'opacity 0.1s',
                  pointerEvents: z2 > 0 ? 'auto' : 'none', // only clickable if in front
                }}
              >
                <div style={{
                  width: '60px',
                  height: '60px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  filter: `drop-shadow(0 0 10px rgba(168, 85, 247, ${opacity * 0.5}))`
                }}>
                  <img 
                    src={point.tech.src} 
                    alt={point.tech.name} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'contain',
                      filter: point.tech.invertDark ? 'var(--invert-img, none)' : 'none'
                    }} 
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        [data-theme="dark"] {
          --invert-img: invert(1);
        }
      `}} />
    </section>
  );
}
