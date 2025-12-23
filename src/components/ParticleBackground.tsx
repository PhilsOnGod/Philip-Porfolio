import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  text: string;
  color: string;
}

const codeSnippets = [
  "const", "function", "return", "import", "export", "async", "await",
  "React", "useState", "=>", "{}", "[]", "()", "</>", "npm", "git",
  "class", "interface", "type", "let", "var", "if", "else", "for",
  "map", "filter", "reduce", "fetch", "API", "JSON", "true", "false",
  "null", "undefined", "console", ".log", "props", "state", "hooks",
  "0", "1", "01", "10", "11", "00", "&&", "||", "===", "!==",
];

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particles: Particle[] = [];
      // Increased particle count for more visibility
      const particleCount = Math.floor((window.innerWidth * window.innerHeight) / 8000);

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          // Larger text size for better visibility
          size: Math.random() * 18 + 12,
          speedX: (Math.random() - 0.5) * 0.8,
          speedY: Math.random() * 0.5 + 0.2,
          // Higher base opacity for visibility
          opacity: Math.random() * 0.6 + 0.2,
          text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
          color: Math.random() > 0.5 ? "primary" : Math.random() > 0.5 ? "secondary" : "accent",
        });
      }
      particlesRef.current = particles;
    };

    const getColor = (colorName: string, opacity: number) => {
      const colors = {
        primary: `hsla(265, 83%, 57%, ${opacity})`,
        secondary: `hsla(195, 100%, 50%, ${opacity})`,
        accent: `hsla(330, 85%, 60%, ${opacity})`,
      };
      return colors[colorName as keyof typeof colors] || colors.primary;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Mouse interaction - subtle attraction
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Larger mouse interaction radius
        if (distance < 200) {
          particle.x += dx * 0.003;
          particle.y += dy * 0.003;
          particle.opacity = Math.min(0.95, particle.opacity + 0.02);
        } else {
          particle.opacity = Math.max(0.15, particle.opacity - 0.003);
        }

        // Wrap around screen
        if (particle.y > canvas.height + 20) {
          particle.y = -20;
          particle.x = Math.random() * canvas.width;
        }
        if (particle.x < -50) particle.x = canvas.width + 50;
        if (particle.x > canvas.width + 50) particle.x = -50;

        // Draw particle
        ctx.font = `${particle.size}px "Courier New", monospace`;
        ctx.fillStyle = getColor(particle.color, particle.opacity);
        ctx.fillText(particle.text, particle.x, particle.y);
      });

      // Draw connecting lines between nearby particles - increased range and visibility
      particlesRef.current.forEach((p1, i) => {
        particlesRef.current.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Increased connection distance
          if (distance < 180) {
            ctx.beginPath();
            // More visible lines
            ctx.strokeStyle = `hsla(265, 83%, 57%, ${0.25 * (1 - distance / 180)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    resizeCanvas();
    createParticles();
    animate();

    window.addEventListener("resize", () => {
      resizeCanvas();
      createParticles();
    });
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.85 }}
    />
  );
};

export default ParticleBackground;
