import React, { useEffect, useRef } from 'react';

export default function AmbientCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates for subtle parallax
    let mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    // Check reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Particle pool: warm orange, amber, soft blue
    const particleCount = window.innerWidth < 768 ? 24 : 45;
    const particles = [];

    const colors = [
      'rgba(240, 136, 62, ',  // warm orange
      'rgba(255, 171, 100, ', // warm amber
      'rgba(56, 139, 253, ',  // soft blue
      'rgba(240, 246, 252, '  // subtle white mote
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.8 + 0.6,
        baseColor: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.35 + 0.1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: -Math.random() * 0.4 - 0.1,
        pulseSpeed: Math.random() * 0.02 + 0.008,
        pulseVal: Math.random() * Math.PI
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      const parallaxOffsetX = (mouse.x - width / 2) * 0.015;
      const parallaxOffsetY = (mouse.y - height / 2) * 0.015;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          p.x += p.speedX;
          p.y += p.speedY;
          p.pulseVal += p.pulseSpeed;

          // Wrap around edges
          if (p.y < -10) {
            p.y = height + 10;
            p.x = Math.random() * width;
          }
          if (p.x < -10) p.x = width + 10;
          if (p.x > width + 10) p.x = -10;
        }

        const dynamicAlpha = Math.max(0.05, p.alpha + Math.sin(p.pulseVal) * 0.12);

        ctx.beginPath();
        ctx.arc(p.x + parallaxOffsetX, p.y + parallaxOffsetY, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.baseColor}${dynamicAlpha})`;
        ctx.shadowBlur = p.radius * 3;
        ctx.shadowColor = `${p.baseColor}${dynamicAlpha * 0.8})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div className="ambient-glow-layer" aria-hidden="true">
        <div className="glow-orb-orange" />
        <div className="glow-orb-blue" />
      </div>
      <canvas ref={canvasRef} className="ambient-canvas" aria-hidden="true" />
    </>
  );
}
