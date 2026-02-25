import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <footer
      ref={ref}
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(0,255,136,0.1)',
      }}
    >
      {/* Disclaimer banner */}
      {/* Main footer content */}
      <div style={{ background: '#050508', padding: '60px 24px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '48px', marginBottom: '48px' }}
            className="footer-grid"
          >
            {/* Brand col */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div
                className="font-orbitron neon-green"
                style={{ fontSize: '1.5rem', fontWeight: 900, letterSpacing: '2px', marginBottom: '16px' }}
              >
                PEPCLAW
              </div>
              <p style={{ fontSize: '0.85rem', lineHeight: 1.7, maxWidth: '280px', color: '#707090' }}>
                The meme that grabs the market. AI-powered. Algorithm-backed. Meme-fueled.
              </p>
              {/* Social links */}
              <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
                {[
                  { icon: 'X', label: 'Twitter', href: 'https://x.com/PepClaw' },
                  { icon: 'TG', label: 'Telegram' },
                  { icon: 'DC', label: 'Discord' },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={'href' in s ? s.href : undefined}
                    title={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      background: 'rgba(0,255,136,0.05)',
                      border: '1px solid rgba(0,255,136,0.15)',
                      color: 'var(--neon-green)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.2s',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(0,255,136,0.12)';
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(0,255,136,0.4)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(0,255,136,0.05)';
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(0,255,136,0.15)';
                    }}
                  >
                    <span className="font-mono" style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '1px' }}>
                      {s.icon}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Quick links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4
                className="font-orbitron"
                style={{ fontSize: '0.75rem', color: 'var(--neon-green)', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '20px' }}
              >
                Navigate
              </h4>
              <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['About', 'How It Works', 'Clawbot Engine', 'Tokenomics', 'Roadmap'].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase().replace(/ /g, '-')}`}
                    style={{
                      color: '#7070a0',
                      textDecoration: 'none',
                      fontSize: '0.85rem',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--neon-green)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#7070a0')}
                  >
                    {link}
                  </a>
                ))}
              </nav>
            </motion.div>

            {/* Status col */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4
                className="font-orbitron"
                style={{ fontSize: '0.75rem', color: 'var(--electric-purple)', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '20px' }}
              >
                System Status
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { label: 'Clawbot Engine', status: 'ONLINE' },
                  { label: 'Signal Scanner', status: 'ACTIVE' },
                  { label: 'Momentum Feed', status: 'LIVE' },
                  { label: 'Meme Protocol', status: 'VIRAL' },
                ].map((item) => (
                  <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: '#7070a0', fontSize: '0.8rem' }}>{item.label}</span>
                    <span
                      className="font-mono"
                      style={{
                        fontSize: '0.65rem',
                        color: 'var(--neon-green)',
                        letterSpacing: '1px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                      }}
                    >
                      <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--neon-green)', display: 'inline-block', animation: 'flicker 2s infinite' }} />
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom bar */}
          <div
            style={{
              paddingTop: '24px',
              borderTop: '1px solid rgba(255,255,255,0.05)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <span className="font-mono" style={{ fontSize: '0.7rem', color: '#404060' }}>
              © 2025 PEPCLAW. All rights reserved.
            </span>
            <span
              className="font-orbitron neon-green"
              style={{ fontSize: '0.65rem', letterSpacing: '3px', opacity: 0.6 }}
            >
              THE CLAW NEVER SLEEPS
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
