import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import pepclawImg from '../image-removebg-preview (1).png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'About', href: '#about' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Clawbot', href: '#clawbot' },
    { label: 'Roadmap', href: '#roadmap' },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '0 24px',
        height: '68px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled
          ? 'rgba(5, 5, 8, 0.92)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(0, 255, 136, 0.12)'
          : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Logo */}
      <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img
          src={pepclawImg}
          alt="PEPCLAW"
          style={{
            height: '36px',
            width: 'auto',
            filter: 'drop-shadow(0 0 8px rgba(0,255,136,0.5))',
          }}
        />
        <span
          className="font-orbitron neon-green"
          style={{ fontSize: '1.3rem', fontWeight: 900, letterSpacing: '2px' }}
        >
          PEPCLAW
        </span>
      </a>

      {/* Desktop links */}
      <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}
        className="desktop-nav">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            style={{
              textDecoration: 'none',
              color: '#7070a0',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--neon-green)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#7070a0')}
          >
            {l.label}
          </a>
        ))}
        <a
          href="#hero"
          style={{
            textDecoration: 'none',
            padding: '8px 20px',
            background: 'transparent',
            border: '1px solid var(--neon-green)',
            borderRadius: '6px',
            color: 'var(--neon-green)',
            fontSize: '0.8rem',
            fontWeight: 700,
            letterSpacing: '1px',
            textTransform: 'uppercase',
            transition: 'all 0.2s',
            fontFamily: 'Orbitron, sans-serif',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--neon-green)';
            e.currentTarget.style.color = '#050508';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = 'var(--neon-green)';
          }}
        >
          Enter Machine
        </a>
      </div>

      {/* Hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="hamburger"
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          display: 'none',
          flexDirection: 'column',
          gap: '5px',
          padding: '4px',
        }}
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            style={{
              display: 'block',
              width: '24px',
              height: '2px',
              background: 'var(--neon-green)',
              transition: 'all 0.3s',
              transform:
                menuOpen && i === 0
                  ? 'rotate(45deg) translate(5px, 5px)'
                  : menuOpen && i === 2
                  ? 'rotate(-45deg) translate(5px, -5px)'
                  : menuOpen && i === 1
                  ? 'opacity(0)'
                  : 'none',
              opacity: menuOpen && i === 1 ? 0 : 1,
            }}
          />
        ))}
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'absolute',
              top: '68px',
              left: 0,
              right: 0,
              background: 'rgba(5, 5, 8, 0.98)',
              borderBottom: '1px solid rgba(0, 255, 136, 0.15)',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  textDecoration: 'none',
                  color: 'var(--text-primary)',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  letterSpacing: '1px',
                }}
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </motion.nav>
  );
}
