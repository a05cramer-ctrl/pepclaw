import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" style={{ padding: '100px 24px', position: 'relative', overflow: 'hidden' }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '-10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(191,0,255,0.06) 0%, transparent 70%)',
        transform: 'translateY(-50%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section label */}
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span
              className="font-mono"
              style={{
                display: 'inline-block',
                color: 'var(--electric-purple)',
                fontSize: '0.75rem',
                letterSpacing: '4px',
                textTransform: 'uppercase',
                marginBottom: '16px',
                padding: '6px 16px',
                border: '1px solid rgba(191,0,255,0.3)',
                borderRadius: '4px',
                background: 'rgba(191,0,255,0.05)',
              }}
            >
              // ABOUT PEPCLAW
            </span>
            <h2
              className="font-orbitron"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 900,
                letterSpacing: '-0.5px',
                lineHeight: 1.1,
              }}
            >
              Where{' '}
              <span className="neon-green">Meme Culture</span>
              <br />
              Meets Automated{' '}
              <span className="neon-purple">Precision</span>
            </h2>
          </div>
        </FadeIn>

        {/* Two-column layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px',
            alignItems: 'start',
          }}
          className="about-grid"
        >
          {/* Left card */}
          <FadeIn delay={0.1}>
            <div
              style={{
                background: 'var(--bg-card)',
                border: '1px solid rgba(0,255,136,0.15)',
                borderRadius: '16px',
                padding: '40px',
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Corner accent */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '80px',
                height: '80px',
                background: 'linear-gradient(225deg, rgba(0,255,136,0.12) 0%, transparent 70%)',
                borderRadius: '0 16px 0 0',
              }} />

              <div style={{
                width: '52px', height: '52px', borderRadius: '10px',
                background: 'rgba(0,255,136,0.1)', border: '1px solid rgba(0,255,136,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '20px',
              }}>
                <span className="font-orbitron neon-green" style={{ fontSize: '1.1rem', fontWeight: 900 }}>F</span>
              </div>
              <h3
                className="font-orbitron neon-green"
                style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '16px', letterSpacing: '1px' }}
              >
                The Frog Fuels the Hype
              </h3>
              <p style={{ color: '#8080a8', lineHeight: 1.8, fontSize: '0.95rem' }}>
                PEPCLAW taps into the raw, unstoppable energy of internet meme culture. The frog is the symbol.
                The chaos is the signal. The community is the engine.
              </p>
            </div>
          </FadeIn>

          {/* Right card */}
          <FadeIn delay={0.2}>
            <div
              style={{
                background: 'var(--bg-card)',
                border: '1px solid rgba(191,0,255,0.15)',
                borderRadius: '16px',
                padding: '40px',
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '80px',
                height: '80px',
                background: 'linear-gradient(225deg, rgba(191,0,255,0.12) 0%, transparent 70%)',
                borderRadius: '0 16px 0 0',
              }} />

              <div style={{
                width: '52px', height: '52px', borderRadius: '10px',
                background: 'rgba(191,0,255,0.1)', border: '1px solid rgba(191,0,255,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '20px',
              }}>
                <span className="font-orbitron neon-purple" style={{ fontSize: '1.1rem', fontWeight: 900 }}>AI</span>
              </div>
              <h3
                className="font-orbitron neon-purple"
                style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '16px', letterSpacing: '1px' }}
              >
                The Claw Executes the Strategy
              </h3>
              <p style={{ color: '#8080a8', lineHeight: 1.8, fontSize: '0.95rem' }}>
                Behind the chaos runs the Clawbot Engine — a continuously operating algorithm scanning signals,
                detecting momentum shifts, and cycling through market opportunities with mechanical precision.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Bottom banner */}
        <FadeIn delay={0.3}>
          <div
            style={{
              marginTop: '40px',
              padding: '40px',
              background: 'linear-gradient(135deg, rgba(0,255,136,0.05) 0%, rgba(191,0,255,0.05) 100%)',
              border: '1px solid rgba(0,255,136,0.12)',
              borderRadius: '16px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Scan line effect */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '1px',
              background: 'linear-gradient(90deg, transparent, var(--neon-green), transparent)',
              animation: 'ticker 3s linear infinite',
            }} />

            <p
              className="font-orbitron"
              style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                lineHeight: 1.5,
              }}
            >
              Behind the chaos runs a{' '}
              <span className="neon-green">continuously operating algorithm</span>
              {' '}—{' '}
              <span className="neon-purple">the Clawbot Engine</span>
            </p>
          </div>
        </FadeIn>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
