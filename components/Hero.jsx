"use client";

import React, { useRef, useEffect, useState } from 'react';
import { useChat } from '@ai-sdk/react';

export default function Hero() {
  const { messages, sendMessage, isLoading } = useChat();
  const [input, setInput] = useState('');
  
  const handleInputChange = (e) => setInput(e.target.value);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    sendMessage({ text: input });
    setInput('');
  };
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleQuickQuestion = (question) => {
    sendMessage({ text: question });
  };

  return (
    <section id="home" className="relative flex flex-col items-center justify-center px-4" style={{ minHeight: '100vh', paddingTop: '10rem', paddingBottom: '8rem' }}>
      
      <div className="relative z-10 w-full" style={{ maxWidth: '44rem', margin: '0 auto' }}>
        
        {/* Avatar */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <div style={{ 
            width: '160px', height: '160px',
            animation: 'float 6s ease-in-out infinite',
          }}>
            <img 
              src="/avatar.png" 
              alt="Nishant Yadav Avatar" 
              style={{ 
                width: '100%', height: '100%', objectFit: 'contain',
                filter: 'drop-shadow(0 20px 40px rgba(168, 85, 247, 0.4))'
              }}
            />
          </div>
        </div>

        {/* Title Area */}
        <div className="text-center" style={{ marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '4rem', fontWeight: 800, letterSpacing: '-0.04em', color: 'var(--foreground)', lineHeight: 1.15 }}>
            Hi, I'm <span className="text-gradient">Nishant Yadav</span>
          </h1>
        </div>

        {/* Chat UI Box */}
        <div className="glass-card" style={{ borderRadius: '1.25rem', overflow: 'hidden', backdropFilter: 'blur(32px)', WebkitBackdropFilter: 'blur(32px)' }}>
          
          {/* Chat History Area (empty initially) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', height: '16rem', padding: '16px', overflowY: 'auto' }} className="scrollbar-hide">
            {messages.length === 0 ? (
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <p style={{ fontSize: '0.875rem', textAlign: 'center', color: 'var(--muted)', opacity: 0.7 }}>Ask me anything about Nishant...</p>
              </div>
            ) : (
              messages.map(m => (
                <div key={m.id} style={{ alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start', maxWidth: '80%', backgroundColor: m.role === 'user' ? 'rgba(168, 85, 247, 0.2)' : 'rgba(255, 255, 255, 0.05)', padding: '0.75rem 1rem', borderRadius: '1rem', borderBottomRightRadius: m.role === 'user' ? 0 : '1rem', borderBottomLeftRadius: m.role === 'assistant' ? 0 : '1rem', border: '1px solid var(--border-color)' }}>
                  <p style={{ fontSize: '0.875rem', color: 'var(--foreground)', lineHeight: 1.5, margin: 0, whiteSpace: 'pre-wrap' }}>
                    {m.content || (m.parts ? m.parts.filter(p => p.type === 'text').map(p => p.text).join('') : '')}
                  </p>
                </div>
              ))
            )}
            {isLoading && messages[messages.length - 1]?.role === 'user' && (
              <div style={{ alignSelf: 'flex-start', maxWidth: '80%', backgroundColor: 'rgba(255, 255, 255, 0.05)', padding: '0.75rem 1rem', borderRadius: '1rem', borderBottomLeftRadius: 0, border: '1px solid var(--border-color)' }}>
                <p style={{ fontSize: '0.875rem', color: 'var(--muted)', margin: 0 }}>Thinking...</p>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div style={{ height: '1px', backgroundColor: 'var(--border-color)' }}></div>

          {/* Input Area */}
          <div style={{ padding: '16px 20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center', marginBottom: '1rem' }}>
                {[
                  { label: 'Work', q: 'Tell me about your work experience.' }, 
                  { label: 'About me', q: 'Who are you and what do you do?' }, 
                  { label: 'Skills', q: 'What are your technical skills?' }, 
                  { label: 'Contact', q: 'How can I contact you?' }
                ].map((btn) => (
                  <button key={btn.label} type="button" onClick={() => handleQuickQuestion(btn.q)} disabled={isLoading} style={{ fontSize: '0.75rem', borderRadius: '9999px', border: '1px solid var(--card-border)', padding: '0.3rem 0.8rem', transition: 'all 0.2s', backgroundColor: 'rgba(255,255,255,0.02)', color: 'var(--muted)', fontWeight: 500, cursor: isLoading ? 'not-allowed' : 'pointer' }} onMouseOver={(e) => { e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.4)'; e.currentTarget.style.color = 'var(--foreground)'; }} onMouseOut={(e) => { e.currentTarget.style.borderColor = 'var(--card-border)'; e.currentTarget.style.color = 'var(--muted)'; }}>
                    {btn.label}
                  </button>
                ))}
              </div>

              <form className="relative" onSubmit={handleSubmit}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', borderRadius: '9999px', border: '1px solid var(--border-color)', padding: '0.5rem 1rem', backgroundColor: 'var(--input-bg)' }}>
                  <input type="text" value={input} onChange={handleInputChange} placeholder="Ask anything about Nishant..." disabled={isLoading} style={{ flex: 1, backgroundColor: 'transparent', fontSize: '0.875rem', outline: 'none', border: 'none', color: 'var(--foreground)', padding: '0.25rem 0' }} />
                  <button type="submit" disabled={isLoading || !(input || '').trim()} style={{ background: 'transparent', border: 'none', color: (isLoading || !(input || '').trim()) ? 'var(--muted)' : 'var(--accent)', cursor: (isLoading || !(input || '').trim()) ? 'default' : 'pointer', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', color: 'var(--muted)', opacity: 0.5 }}>
            <span style={{ fontSize: '0.75rem' }}>Scroll to explore</span>
            <svg style={{ width: '1.25rem', height: '1.25rem', animation: 'float 3s ease-in-out infinite' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}
