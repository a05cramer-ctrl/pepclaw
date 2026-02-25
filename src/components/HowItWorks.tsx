import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    number: '01',
    icon: 'LIQ',
    title: 'Liquidity Enters',
    desc: 'Liquidity enters the PEPCLAW ecosystem, feeding the Clawbot Engine with fuel for execution.',
    color: 'var(--neon-green)',
  },
  {
    number: '02',
    icon: 'SIG',
    title: 'Clawbot Scans',
    desc: 'The AI Clawbot scans market momentum signals — volatility, volume, trend shifts — in real time.',
    color: 'var(--electric-purple)',
  },
  {
    number: '03',
    icon: 'SYS',
    title: 'System Reallocates',
    desc: 'Based on algorithmic triggers, the system dynamically reallocates and positions for maximum momentum.',
    color: 'var(--neon-green)',
  },
  {
    number: '04',
    icon: 'CYC',
    title: 'Cycle Repeats',
    desc: 'The cycle repeats — continuously, relentlessly, without pause. The claw never stops grabbing.',
    color: 'var(--electric-purple)',
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      id="how-it-works"
      ref={ref}
      style={{
        padding: '100px 24px',
        background: 'rgba(10, 10, 18, 0.6)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '50%',
          right: '-5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(0,255,136,0.05) 0%, transparent 70%)',
          transform: 'translateY(-50%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <span
            className="font-mono"
            style={{
              display: 'inline-block',
              color: 'var(--neon-green)',
              fontSize: '0.75rem',
              letterSpacing: '4px',
              textTransform: 'uppercase',
              marginBottom: '16px',
              padding: '6px 16px',
              border: '1px solid rgba(0,255,136,0.3)',
              borderRadius: '4px',
              background: 'rgba(0,255,136,0.05)',
            }}
          >
            // HOW IT WORKS
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
            The Claw{' '}
            <span className="neon-green">Cycle</span>
          </h2>
          <p style={{ color: '#7070a0', marginTop: '16px', fontSize: '1rem', maxWidth: '500px', margin: '16px auto 0' }}>
            No hesitation. No emotions. Just claw logic.
          </p>
        </motion.div>

        {/* Steps */}
        <div style={{ position: 'relative' }}>
          {/* Connecting line */}
          <div
            style={{
              position: 'absolute',
              top: '60px',
              left: '12.5%',
              right: '12.5%',
              height: '2px',
              background: 'linear-gradient(90deg, var(--neon-green), var(--electric-purple), var(--neon-green), var(--electric-purple))',
              opacity: 0.3,
              zIndex: 0,
            }}
            className="connector-line"
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '24px',
              position: 'relative',
              zIndex: 1,
            }}
            className="steps-grid"
          >
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <div
                  style={{
                    background: 'var(--bg-card)',
                    border: `1px solid ${step.color}22`,
                    borderRadius: '16px',
                    padding: '32px 24px',
                    textAlign: 'center',
                    height: '100%',
                    transition: 'border-color 0.3s, transform 0.3s',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = `${step.color}55`;
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = `${step.color}22`;
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                  }}
                >
                  {/* Number */}
                  <div
                    className="font-mono"
                    style={{
                      fontSize: '0.7rem',
                      color: step.color,
                      letterSpacing: '3px',
                      marginBottom: '16px',
                      opacity: 0.7,
                    }}
                  >
                    {step.number}
                  </div>

                  {/* Icon bubble */}
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '12px',
                      background: `${step.color}12`,
                      border: `1px solid ${step.color}30`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px',
                      boxShadow: `0 0 20px ${step.color}20`,
                    }}
                  >
                    <span
                      className="font-mono"
                      style={{ fontSize: '0.7rem', fontWeight: 700, color: step.color, letterSpacing: '1px' }}
                    >
                      {step.icon}
                    </span>
                  </div>

                  <h3
                    className="font-orbitron"
                    style={{
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      color: step.color,
                      marginBottom: '12px',
                      letterSpacing: '0.5px',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ color: '#7070a0', fontSize: '0.85rem', lineHeight: 1.7 }}>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom motto */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            marginTop: '60px',
            display: 'flex',
            justifyContent: 'center',
            gap: '48px',
            flexWrap: 'wrap',
          }}
        >
          {['No hesitation.', 'No emotions.', 'Just claw logic.'].map((phrase, i) => (
            <span
              key={i}
              className="font-orbitron"
              style={{
                fontSize: '1rem',
                fontWeight: 700,
                color: i === 2 ? 'var(--neon-green)' : 'var(--text-muted)',
                letterSpacing: '1px',
              }}
            >
              {phrase}
            </span>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .steps-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .connector-line { display: none; }
        }
        @media (max-width: 500px) {
          .steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
