import { useEffect, useRef, useState } from "react";

interface CursorTrail {
  x: number;
  y: number;
  opacity: number;
}

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailsRef = useRef<CursorTrail[]>([]);
  const [isHovering, setIsHovering] = useState(false);
  const animationRef = useRef<number>();
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      
      // Add trail point
      trailsRef.current.push({
        x: e.clientX,
        y: e.clientY,
        opacity: 1,
      });

      // Keep only last 15 trail points
      if (trailsRef.current.length > 15) {
        trailsRef.current.shift();
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        !!target.closest('button') ||
        !!target.closest('a') ||
        target.style.cursor === 'pointer' ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsHovering(isClickable);
    };

    // Animation loop
    const animate = () => {
      const cursor = cursorRef.current;
      if (cursor) {
        cursor.style.transform = `translate(${mousePos.current.x - 12}px, ${mousePos.current.y - 12}px)`;
      }

      // Fade out trails
      trailsRef.current.forEach((trail) => {
        trail.opacity *= 0.9;
      });

      // Remove faded trails
      trailsRef.current = trailsRef.current.filter(trail => trail.opacity > 0.05);

      animationRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
    <>
      {/* Trail SVG */}
      <svg 
        className="fixed inset-0 pointer-events-none z-[9998]"
        style={{ width: '100vw', height: '100vh' }}
      >
        <defs>
          <linearGradient id="trailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(265, 83%, 57%)" />
            <stop offset="50%" stopColor="hsl(195, 100%, 50%)" />
            <stop offset="100%" stopColor="hsl(330, 85%, 60%)" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {trailsRef.current.map((trail, i) => (
          <circle
            key={i}
            cx={trail.x}
            cy={trail.y}
            r={4 - (i * 0.2)}
            fill="url(#trailGradient)"
            opacity={trail.opacity * 0.6}
            filter="url(#glow)"
          />
        ))}
      </svg>

      {/* Main cursor */}
      <div
        ref={cursorRef}
        className={`
          fixed top-0 left-0 pointer-events-none z-[9999]
          w-6 h-6 
          transition-transform duration-75
          hidden md:block
          ${isHovering ? 'scale-150' : 'scale-100'}
        `}
        style={{ mixBlendMode: 'difference' }}
      >
        {/* Outer ring */}
        <div className={`
          absolute inset-0 rounded-full border-2 
          ${isHovering ? 'border-secondary animate-pulse' : 'border-primary'}
          transition-all duration-200
        `} />
        
        {/* Inner dot */}
        <div className={`
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-1.5 h-1.5 rounded-full
          ${isHovering ? 'bg-secondary' : 'bg-primary'}
          transition-all duration-200
        `} />
        
        {/* Cyber corners */}
        <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-primary/50" />
        <div className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-secondary/50" />
        <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-secondary/50" />
        <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-primary/50" />
      </div>

      {/* Hide default cursor */}
      <style>{`
        @media (pointer: fine) {
          * {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
