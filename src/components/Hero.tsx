import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import pepclawImg from '../image-removebg-preview (1).png';

function GlitchText({ text }: { text: string }) {
  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      <span
        aria-hidden
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          color: 'var(--electric-purple)',
          animation: 'glitch 3s infinite',
          opacity: 0.6,
        }}
      >
        {text}
      </span>
      <span
        aria-hidden
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          color: 'var(--neon-green)',
          animation: 'glitch-2 3.5s infinite',
          opacity: 0.5,
        }}
      >
        {text}
      </span>
      <span style={{ position: 'relative', zIndex: 1 }}>{text}</span>
    </span>
  );
}



export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; vx: number; vy: number; size: number; color: string; alpha: number }[] = [];
    const colors = ['#00ff88', '#bf00ff', '#00ffcc', '#ff00ff'];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    let animId: number;
    function draw() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
      });

      // Draw lines between nearby particles
      ctx.globalAlpha = 1;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.strokeStyle = '#00ff88';
            ctx.globalAlpha = (1 - dist / 100) * 0.08;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    }

    draw();

    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Grid overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(0,255,136,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,136,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          animation: 'bg-grid-move 8s linear infinite',
          zIndex: 0,
        }}
      />

      {/* Radial glow */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(0,255,136,0.06) 0%, rgba(191,0,255,0.04) 40%, transparent 70%)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Main hero content */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '120px 24px 60px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            width: '100%',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left: Text */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 16px',
                border: '1px solid rgba(0,255,136,0.3)',
                borderRadius: '100px',
                marginBottom: '28px',
                background: 'rgba(0,255,136,0.05)',
              }}
            >
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--neon-green)', animation: 'flicker 3s infinite', display: 'inline-block' }} />
              <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--neon-green)', letterSpacing: '2px' }}>
                CLAWBOT ENGINE: ACTIVE
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-orbitron"
              style={{
                fontSize: 'clamp(2.8rem, 6vw, 5rem)',
                fontWeight: 900,
                lineHeight: 1.05,
                marginBottom: '12px',
                letterSpacing: '-1px',
              }}
            >
              <GlitchText text="PEPCLAW" />
            </motion.h1>


            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{
                fontSize: '1.1rem',
                color: '#a0a0c0',
                lineHeight: 1.7,
                marginBottom: '16px',
              }}
            >
              An AI-powered clawbot fueled by pure meme energy.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              style={{
                fontSize: '0.95rem',
                color: '#7070a0',
                lineHeight: 1.7,
                marginBottom: '40px',
                maxWidth: '480px',
              }}
            >
              PEPCLAW combines viral internet culture with an autonomous clawbot algorithm designed to "grab" opportunity and recycle momentum.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
            >
              <CTAButton primary href="#about">Copy CA</CTAButton>
              <CTAButton purple href="#roadmap">X</CTAButton>
            </motion.div>

          </div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <img
              src={pepclawImg}
              alt="PEPCLAW"
              style={{
                width: '100%',
                maxWidth: '460px',
                height: 'auto',
                filter: 'drop-shadow(0 0 40px rgba(0,255,136,0.35)) drop-shadow(0 0 80px rgba(191,0,255,0.2))',
              }}
            />
          </motion.div>

        </div>
      </div>


      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-grid img {
            max-width: 280px !important;
          }
        }
      `}</style>
    </section>
  );
}

function CTAButton({
  children,
  href,
  primary,
  purple,
}: {
  children: React.ReactNode;
  href: string;
  primary?: boolean;
  purple?: boolean;
}) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className="font-orbitron"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '14px 28px',
        borderRadius: '8px',
        textDecoration: 'none',
        fontSize: '0.8rem',
        fontWeight: 700,
        letterSpacing: '1.5px',
        textTransform: 'uppercase',
        cursor: 'pointer',
        transition: 'all 0.2s',
        ...(primary
          ? {
              background: 'var(--neon-green)',
              color: '#050508',
              boxShadow: '0 0 30px rgba(0,255,136,0.4)',
              animation: 'pulse-glow 2s ease-in-out infinite',
            }
          : purple
          ? {
              background: 'transparent',
              color: 'var(--electric-purple)',
              border: '1px solid var(--electric-purple)',
              boxShadow: '0 0 20px rgba(191,0,255,0.2)',
            }
          : {
              background: 'transparent',
              color: 'var(--text-primary)',
              border: '1px solid rgba(255,255,255,0.15)',
            }),
      }}
    >
      {children}
    </motion.a>
  );
}
