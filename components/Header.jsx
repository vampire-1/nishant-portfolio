"use client";

import React, { useState, useEffect } from 'react';
import { Moon, Sun, Link2, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from './ThemeContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section based on scroll position
      const sections = ['other', 'skills', 'projects', 'about', 'home'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{ padding: '1.5rem 0', transition: 'all 0.3s ease' }}>
      <nav className="container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }} className="desktop-nav">
          
          {/* Theme Toggle */}
          <div style={{ position: 'absolute', left: 0 }}>
            <button 
              onClick={toggleTheme}
              className="glass-strong" 
              style={{ 
                width: '56px', height: '56px', borderRadius: '9999px', 
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', transition: 'transform 0.3s, background 0.3s',
              }} 
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Moon size={20} color="var(--muted)" />
              ) : (
                <Sun size={20} color="var(--foreground)" />
              )}
            </button>
          </div>

          {/* Navigation Links */}
          <div className="glass-strong nav-pills" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', borderRadius: '9999px', height: '56px', padding: '0 32px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <Link 
                  key={link.name} 
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  style={{ 
                    padding: '10px 24px', 
                    fontSize: '0.875rem', 
                    fontWeight: 600, 
                    borderRadius: '9999px', 
                    color: isActive ? 'var(--foreground)' : 'var(--muted)',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    transition: 'color 0.3s'
                  }}
                >
                  {isActive && (
                    <span style={{ position: 'absolute', inset: 0, borderRadius: '9999px', background: 'var(--accent)', border: '1px solid var(--accent)', opacity: 0.1 }}></span>
                  )}
                  <span style={{ position: 'relative', zIndex: 10 }}>{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Connect Button */}
          <div style={{ position: 'absolute', right: 0 }} className="book-call-btn">
            <a 
              href="https://www.linkedin.com/in/nishant-yadav-8701bb24a/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="glass-strong" 
              style={{ height: '56px', padding: '0 24px', borderRadius: '9999px', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--foreground)', fontSize: '0.875rem', fontWeight: 600, transition: 'transform 0.3s', cursor: 'pointer', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)', textDecoration: 'none' }} 
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} 
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Link2 size={16} />
              <span>Connect</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn glass-strong"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ 
              position: 'absolute', right: 0,
              width: '56px', height: '56px', borderRadius: '9999px', 
              display: 'none', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            {mobileMenuOpen ? <X size={20} color="var(--foreground)" /> : <Menu size={20} color="var(--foreground)" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="glass-card" style={{ 
            marginTop: '1rem', borderRadius: '1.25rem', padding: '1rem',
            display: 'flex', flexDirection: 'column', gap: '0.25rem'
          }}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <Link 
                  key={link.name} 
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  style={{ 
                    padding: '12px 20px', 
                    fontSize: '0.9rem', 
                    fontWeight: 600, 
                    borderRadius: '0.75rem', 
                    color: isActive ? 'var(--foreground)' : 'var(--muted)',
                    backgroundColor: isActive ? 'var(--nav-active-bg)' : 'transparent',
                    transition: 'all 0.2s'
                  }}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        )}
      </nav>

      {/* Mobile nav CSS */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 1024px) {
          .nav-pills { display: none !important; }
          .book-call-btn { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        @media (min-width: 1025px) {
          .mobile-menu-btn { display: none !important; }
        }
      `}} />
    </header>
  );
}
