import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const phases = [
  {
    phase: 'Phase 1',
    title: 'Meme Ignition',
    icon: 'IGN',
    color: 'var(--neon-green)',
    status: 'COMPLETE',
    items: [
      'Token launch & liquidity seeding',
      'Community building & meme propagation',
      'Initial exchange listings',
      'Viral social campaign activation',
    ],
  },
  {
    phase: 'Phase 2',
    title: 'Clawbot Activation',
    icon: 'BOT',
    color: 'var(--electric-purple)',
    status: 'ACTIVE',
    items: [
      'Clawbot Engine v1.0 deployment',
      'Signal monitoring infrastructure',
      'Algorithm stress testing',
      'Dashboard beta release',
    ],
  },
  {
    phase: 'Phase 3',
    title: 'Algorithm Expansion',
    icon: 'ALG',
    color: '#00ccff',
    status: 'UPCOMING',
    items: [
      'Multi-chain support integration',
      'Advanced volatility models',
      'Community governance module',
      'API access for power users',
    ],
  },
  {
    phase: 'Phase 4',
    title: 'Autonomous Meme Domination',
    icon: 'DOM',
    color: '#ff6b6b',
    status: 'HORIZON',
    items: [
      'Fully autonomous Clawbot v3.0',
      'Cross-chain meme liquidity routing',
      'AI-generated meme propagation',
      'Global market domination protocol',
    ],
  },
];

const statusColors: Record<string, string> = {
  COMPLETE: 'var(--neon-green)',
  ACTIVE: 'var(--electric-purple)',
  UPCOMING: '#00ccff',
  HORIZON: '#ff6b6b',
};

export default function Roadmap() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      id="roadmap"
      ref={ref}
      style={{ padding: '100px 24px', position: 'relative', overflow: 'hidden' }}
    >
      {/* BG glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        right: '-10%',
        width: '500px',
        height: '600px',
        background: 'radial-gradient(ellipse, rgba(0,255,136,0.04) 0%, transparent 70%)',
        transform: 'translateY(-50%)',
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
            // ROADMAP
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
            The Path to{' '}
            <span className="neon-purple">Domination</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '2px',
              background: 'linear-gradient(180deg, var(--neon-green), var(--electric-purple), #00ccff, #ff6b6b)',
              opacity: 0.2,
              transform: 'translateX(-50%)',
            }}
            className="timeline-line"
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {phases.map((phase, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr auto 1fr',
                    gap: '24px',
                    alignItems: 'center',
                  }}
                  className="timeline-row"
                >
                  {/* Left content or empty */}
                  <div style={{ gridColumn: isLeft ? 1 : 3 }}>
                    {isLeft && <PhaseCard phase={phase} />}
                  </div>

                  {/* Center dot */}
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: `${phase.color}15`,
                      border: `2px solid ${phase.color}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: `0 0 20px ${phase.color}40`,
                      position: 'relative',
                      zIndex: 1,
                    }}
                    className="center-dot"
                  >
                    <span
                      className="font-mono"
                      style={{ fontSize: '0.6rem', fontWeight: 700, color: phase.color, letterSpacing: '1px' }}
                    >
                      {phase.icon}
                    </span>
                  </div>

                  {/* Right content or empty */}
                  <div style={{ gridColumn: isLeft ? 3 : 1 }}>
                    {!isLeft && <PhaseCard phase={phase} />}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline-line { left: 24px !important; transform: none !important; }
          .timeline-row {
            grid-template-columns: auto 1fr !important;
            gap: 16px !important;
          }
          .center-dot { width: 36px !important; height: 36px !important; font-size: 0.9rem !important; }
        }
      `}</style>
    </section>
  );
}

function PhaseCard({ phase }: { phase: typeof phases[0] }) {
  return (
    <div
      style={{
        background: 'var(--bg-card)',
        border: `1px solid ${phase.color}20`,
        borderRadius: '16px',
        padding: '28px',
        transition: 'border-color 0.3s, transform 0.3s',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = `${phase.color}45`;
        (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.02)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = `${phase.color}20`;
        (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)';
      }}
    >
      {/* Phase header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <span
          className="font-mono"
          style={{ fontSize: '0.7rem', color: '#7070a0', letterSpacing: '2px' }}
        >
          {phase.phase}
        </span>
        <span
          className="font-mono"
          style={{
            fontSize: '0.65rem',
            color: statusColors[phase.status],
            letterSpacing: '2px',
            padding: '3px 10px',
            border: `1px solid ${statusColors[phase.status]}30`,
            borderRadius: '100px',
            background: `${statusColors[phase.status]}0a`,
          }}
        >
          {phase.status}
        </span>
      </div>

      <h3
        className="font-orbitron"
        style={{
          fontSize: '1.15rem',
          fontWeight: 800,
          color: phase.color,
          marginBottom: '16px',
          letterSpacing: '0.5px',
        }}
      >
        {phase.title}
      </h3>

      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {phase.items.map((item, j) => (
          <li
            key={j}
            style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', color: '#8080a8' }}
          >
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: phase.color, flexShrink: 0, opacity: 0.7 }} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
