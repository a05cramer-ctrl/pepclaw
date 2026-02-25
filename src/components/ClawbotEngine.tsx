import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const features = [
  { icon: 'SIG', label: 'Monitors trend signals', color: 'var(--neon-green)' },
  { icon: 'VLT', label: 'Detects volatility shifts', color: 'var(--electric-purple)' },
  { icon: 'ROT', label: 'Rotates allocations dynamically', color: 'var(--neon-green)' },
  { icon: '24/7', label: 'Operates 24/7 without interruption', color: 'var(--electric-purple)' },
];

function TerminalLog() {
  const lines = [
    { text: '> CLAWBOT_ENGINE v2.4.1 initialized...', color: 'var(--neon-green)', delay: 0 },
    { text: '> Scanning momentum signals...', color: '#7070a0', delay: 0.4 },
    { text: '> SIGNAL DETECTED: +4.7σ volatility spike', color: 'var(--electric-purple)', delay: 0.8 },
    { text: '> Evaluating allocation triggers...', color: '#7070a0', delay: 1.2 },
    { text: '> CLAW ARM: Engaging...', color: 'var(--neon-green)', delay: 1.6 },
    { text: '> Reallocation cycle: COMPLETE ✓', color: 'var(--neon-green)', delay: 2.0 },
    { text: '> Next scan in: 0.3s', color: '#4040608', delay: 2.4 },
    { text: '> ██████████████ 100%', color: 'var(--neon-green)', delay: 2.8 },
    { text: '> CLAW NEVER SLEEPS.', color: 'var(--electric-purple)', delay: 3.2 },
  ];

  const [visible, setVisible] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const timers = lines.map((l, i) =>
      setTimeout(() => setVisible(i + 1), l.delay * 1000 + 300)
    );
    return () => timers.forEach(clearTimeout);
  }, [inView]);

  return (
    <div
      ref={ref}
      style={{
        background: '#050508',
        border: '1px solid rgba(0,255,136,0.2)',
        borderRadius: '12px',
        padding: '24px',
        fontFamily: 'Share Tech Mono, monospace',
        fontSize: '0.8rem',
        lineHeight: '1.9',
        minHeight: '260px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Terminal header */}
      <div style={{
        display: 'flex',
        gap: '6px',
        marginBottom: '16px',
        paddingBottom: '12px',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}>
        {['#ff5f57', '#febc2e', '#28c840'].map((c, i) => (
          <div key={i} style={{ width: '10px', height: '10px', borderRadius: '50%', background: c, opacity: 0.8 }} />
        ))}
        <span style={{ marginLeft: '8px', color: '#4040608', fontSize: '0.7rem', letterSpacing: '1px' }}>
          clawbot_engine.exe
        </span>
      </div>

      {lines.slice(0, visible).map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          style={{ color: line.color, display: 'flex', alignItems: 'center', gap: '8px' }}
        >
          {line.text}
          {i === visible - 1 && (
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              style={{ display: 'inline-block', width: '8px', height: '14px', background: 'var(--neon-green)' }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}

export default function ClawbotEngine() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      id="clawbot"
      ref={ref}
      style={{
        padding: '100px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* BG glow */}
      <div style={{
        position: 'absolute',
        bottom: '-100px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '400px',
        background: 'radial-gradient(ellipse, rgba(191,0,255,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '72px' }}
        >
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
            // THE ENGINE
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
            The{' '}
            <span className="neon-purple">Clawbot</span>{' '}
            Engine
          </h2>
          <p
            style={{
              color: '#7070a0',
              marginTop: '16px',
              fontSize: '1rem',
              maxWidth: '500px',
              margin: '16px auto 0',
            }}
          >
            PEPCLAW runs on an autonomous algorithm that never stops, never sleeps, never hesitates.
          </p>
        </motion.div>

        {/* Two-col layout */}
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}
          className="engine-grid"
        >
          {/* Left: features */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  padding: '20px 24px',
                  background: 'var(--bg-card)',
                  border: `1px solid ${f.color}18`,
                  borderRadius: '12px',
                  transition: 'border-color 0.3s, transform 0.3s',
                  cursor: 'default',
                }}
                whileHover={{ x: 6, borderColor: `${f.color}40` } as object}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '10px',
                    background: `${f.color}10`,
                    border: `1px solid ${f.color}25`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <span
                    className="font-mono"
                    style={{ fontSize: '0.65rem', fontWeight: 700, color: f.color, letterSpacing: '1px' }}
                  >
                    {f.icon}
                  </span>
                </div>
                <span
                  style={{
                    color: 'var(--text-primary)',
                    fontSize: '1rem',
                    fontWeight: 500,
                  }}
                >
                  {f.label}
                </span>
                <div style={{ marginLeft: 'auto', width: '6px', height: '6px', borderRadius: '50%', background: f.color, boxShadow: `0 0 8px ${f.color}` }} />
              </motion.div>
            ))}

            {/* The claw never sleeps */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="font-orbitron"
              style={{
                textAlign: 'center',
                padding: '20px',
                color: 'var(--neon-green)',
                fontSize: '1.1rem',
                fontWeight: 900,
                letterSpacing: '3px',
                textShadow: '0 0 20px rgba(0,255,136,0.5)',
                animation: 'flicker 4s infinite',
              }}
            >
              THE CLAW NEVER SLEEPS.
            </motion.div>
          </div>

          {/* Right: terminal */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TerminalLog />
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .engine-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
