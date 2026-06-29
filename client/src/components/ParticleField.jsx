import { useEffect, useRef } from "react";

export default function ParticleField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext("2d");
    let raf = 0;
    let w = 0;
    let h = 0;
    const mouse = { x: -9999, y: -9999 };
    const particles = [];
    const bursts = [];
    const count = 165;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    const seed = () => {
      particles.length = 0;
      for (let i = 0; i < count; i += 1) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.75,
          vy: (Math.random() - 0.5) * 0.75,
          r: Math.random() * 2.2 + 0.6,
          hue: Math.random() * 80 + 160,
          trail: [],
        });
      }
    };

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (Math.random() > 0.7) {
        bursts.push({
          x: e.clientX + (Math.random() - 0.5) * 20,
          y: e.clientY + (Math.random() - 0.5) * 20,
          life: 1,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          hue: 185 + Math.random() * 40,
        });
      }
    };

    const onClick = (e) => {
      for (let i = 0; i < 24; i += 1) {
        const angle = (Math.PI * 2 * i) / 24;
        bursts.push({
          x: e.clientX,
          y: e.clientY,
          life: 1,
          vx: Math.cos(angle) * (2 + Math.random() * 3),
          vy: Math.sin(angle) * (2 + Math.random() * 3),
          hue: 170 + Math.random() * 60,
        });
      }
    };

    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const draw = () => {
      ctx.fillStyle = "rgba(5, 8, 20, 0.18)";
      ctx.fillRect(0, 0, w, h);

      for (let b = bursts.length - 1; b >= 0; b -= 1) {
        const burst = bursts[b];
        burst.x += burst.vx;
        burst.y += burst.vy;
        burst.life -= 0.025;
        if (burst.life <= 0) {
          bursts.splice(b, 1);
          continue;
        }
        ctx.beginPath();
        ctx.arc(burst.x, burst.y, 2 * burst.life, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${burst.hue}, 90%, 65%, ${burst.life})`;
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];

        p.trail.push({ x: p.x, y: p.y });
        if (p.trail.length > 6) p.trail.shift();

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 160 && dist > 0) {
          const force = (160 - dist) / 160;
          p.vx -= (dx / dist) * force * 0.1;
          p.vy -= (dy / dist) * force * 0.1;
        }

        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.992;
        p.vy *= 0.992;

        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        for (let t = 0; t < p.trail.length; t += 1) {
          const tr = p.trail[t];
          ctx.beginPath();
          ctx.arc(tr.x, tr.y, p.r * (t / p.trail.length) * 0.5, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${p.hue}, 80%, 60%, ${0.08 * (t / p.trail.length)})`;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 90%, 65%, 0.9)`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j += 1) {
          const q = particles[j];
          const cd = Math.hypot(p.x - q.x, p.y - q.y);
          if (cd < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `hsla(195, 85%, 58%, ${0.28 * (1 - cd / 130)})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      if (mouse.x > 0) {
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 110, 0, Math.PI * 2);
        const g = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 110);
        g.addColorStop(0, "rgba(34, 211, 238, 0.16)");
        g.addColorStop(0.5, "rgba(168, 85, 247, 0.08)");
        g.addColorStop(1, "transparent");
        ctx.fillStyle = g;
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    seed();
    draw();

    const onResize = () => {
      resize();
      seed();
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("click", onClick);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" aria-hidden />;
}
