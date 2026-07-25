"use client";

import React, { useEffect, useState } from 'react';
import { useTheme } from './ThemeContext';

export default function Background() {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const { theme } = useTheme();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const isDark = theme === 'dark';

  return (
    <>
      {/* Base Background Color */}
      <div 
        style={{ 
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: -2, pointerEvents: 'none',
          backgroundColor: isDark ? 'rgb(22, 15, 40)' : 'rgb(226, 215, 230)',
          transition: 'background-color 0.5s ease'
        }}
      />

      {/* Dim Silver Dots (Always Visible) */}
      <div 
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1, pointerEvents: 'none',
          backgroundImage: isDark 
            ? 'radial-gradient(rgba(150, 150, 150, 0.15) 0.5px, transparent 0.5px)'
            : 'radial-gradient(rgba(0, 0, 0, 0.5) 0.5px, transparent 0.5px)',
          backgroundSize: '40px 40px',
          transition: 'opacity 0.5s ease',
        }}
      />

      {/* Glowing Dots (Revealed on Hover) */}
      <div 
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, pointerEvents: 'none',
          transition: 'opacity 0.3s ease',
          backgroundImage: isDark
            ? 'radial-gradient(rgba(210, 210, 215, 0.8) 1px, transparent 1px)'
            : 'radial-gradient(rgba(120, 120, 130, 0.8) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          WebkitMaskImage: `radial-gradient(circle 450px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
          maskImage: `radial-gradient(circle 450px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
        }}
      />

      {/* Soft Ambient Glow around cursor */}
      <div 
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1, pointerEvents: 'none',
          background: isDark
            ? `radial-gradient(circle 700px at ${mousePosition.x}px ${mousePosition.y}px, rgba(210, 210, 215, 0.05), transparent)`
            : `radial-gradient(circle 700px at ${mousePosition.x}px ${mousePosition.y}px, rgba(120, 120, 130, 0.08), transparent)`,
        }}
      />
    </>
  );
}
