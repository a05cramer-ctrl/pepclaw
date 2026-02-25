import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const tokenData = [
  { label: 'Liquidity Pool', pct: 40, color: 'var(--neon-green)', icon: 'LIQ' },
  { label: 'Meme Reserve', pct: 25, color: 'var(--electric-purple)', icon: 'MEM' },
  { label: 'Community Rewards', pct: 20, color: '#00ccff', icon: 'COM' },
  { label: 'Development', pct: 15, color: '#ff6b6b', icon: 'DEV' },
];

function DonutChart({ inView }: { inView: boolean }) {
  const size = 240;
  const strokeWidth = 28;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  let offset = 0;
  const segments = tokenData.map((d) => {
    const dash = (d.pct / 100) * circumference;
    const gap = circumference - dash;
    const currentOffset = offset;
    offset += dash;
    return { ...d, dash, gap, offset: currentOffset };
  });

  return (
    <div style={{ position: 'relative', width: size, height: size, margin: '0 auto' }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.04)"
          strokeWidth={strokeWidth}
        />
        {segments.map((seg, i) => (
          <motion.circle
            key={i}
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={seg.color}
            strokeWidth={strokeWidth}
            strokeDasharray={`${seg.dash} ${seg.gap}`}
            strokeDashoffset={-seg.offset}
            strokeLinecap="round"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            style={{ filter: `drop-shadow(0 0 6px ${seg.color}60)` }}
          />
        ))}
      </svg>
      {/* Center label */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div className="font-orbitron neon-green" style={{ fontSize: '1.8rem', fontWeight: 900 }}>
          1B
        </div>
        <div className="font-mono" style={{ fontSize: '0.65rem', color: '#7070a0', letterSpacing: '2px', marginTop: '4px' }}>
          TOTAL SUPPLY
        </div>
      </div>
    </div>
  );
}

export default function Tokenomics() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      id="tokenomics"
      ref={ref}
      style={{
        padding: '100px 24px',
        background: 'rgba(10, 10, 18, 0.6)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute',
        top: '30%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '700px',
        height: '400px',
        background: 'radial-gradient(ellipse, rgba(0,255,136,0.04) 0%, transparent 70%)',
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
            // TOKENOMICS
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
            Token{' '}
            <span className="neon-green">Distribution</span>
          </h2>
        </motion.div>

        {/* Main content */}
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '60px', alignItems: 'center' }}
          className="tokenomics-grid"
        >
          {/* Donut chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7 }}
          >
            <DonutChart inView={inView} />
          </motion.div>

          {/* Bars + legend */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {tokenData.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  background: 'var(--bg-card)',
                  border: `1px solid ${item.color}18`,
                  borderRadius: '12px',
                  padding: '20px 24px',
                }}
              >
                {/* Row header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span
                      className="font-mono"
                      style={{
                        fontSize: '0.6rem', fontWeight: 700, color: item.color,
                        letterSpacing: '1px', padding: '2px 6px',
                        border: `1px solid ${item.color}30`,
                        borderRadius: '4px', background: `${item.color}0a`,
                      }}
                    >
                      {item.icon}
                    </span>
                    <span style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                      {item.label}
                    </span>
                  </div>
                  <span
                    className="font-orbitron"
                    style={{ color: item.color, fontWeight: 700, fontSize: '1rem' }}
                  >
                    {item.pct}%
                  </span>
                </div>

                {/* Progress bar */}
                <div
                  style={{
                    height: '4px',
                    background: 'rgba(255,255,255,0.06)',
                    borderRadius: '2px',
                    overflow: 'hidden',
                  }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${item.pct}%` } : {}}
                    transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
                    style={{
                      height: '100%',
                      background: `linear-gradient(90deg, ${item.color}, ${item.color}88)`,
                      borderRadius: '2px',
                      boxShadow: `0 0 8px ${item.color}60`,
                    }}
                  />
                </div>
              </motion.div>
            ))}

            {/* Mechanic note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              style={{
                padding: '16px 20px',
                background: 'rgba(0,255,136,0.04)',
                border: '1px solid rgba(0,255,136,0.15)',
                borderRadius: '10px',
                display: 'flex',
                gap: '12px',
                alignItems: 'flex-start',
              }}
            >
              <span
                className="font-mono neon-green"
                style={{ fontSize: '0.7rem', fontWeight: 700, flexShrink: 0, letterSpacing: '1px' }}
              >
                PWR
              </span>
              <p className="font-mono" style={{ color: '#7070a0', fontSize: '0.78rem', lineHeight: 1.6 }}>
                A percentage of every activity cycle feeds the Claw Engine,{' '}
                <span style={{ color: 'var(--neon-green)' }}>reinforcing the momentum loop</span>.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .tokenomics-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
