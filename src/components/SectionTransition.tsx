import { useEffect, useRef, useState, ReactNode } from "react";

interface SectionTransitionProps {
  children: ReactNode;
  className?: string;
}

const SectionTransition = ({ children, className = "" }: SectionTransitionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasGlitched, setHasGlitched] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // Trigger glitch effect
          if (!hasGlitched) {
            setHasGlitched(true);
            setTimeout(() => setHasGlitched(false), 500);
          }
        }
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible, hasGlitched]);

  return (
    <div
      ref={sectionRef}
      className={`
        relative
        transition-all duration-700 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
        ${hasGlitched ? 'animate-glitch' : ''}
        ${className}
      `}
    >
      {/* Glitch overlay effect */}
      {hasGlitched && (
        <>
          <div 
            className="absolute inset-0 pointer-events-none z-50"
            style={{
              background: 'linear-gradient(transparent 0%, hsl(265 83% 57% / 0.03) 50%, transparent 100%)',
              animation: 'glitch-overlay 0.3s ease-out',
            }}
          />
          {/* Scan line during transition */}
          <div 
            className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent pointer-events-none z-50"
            style={{
              animation: 'scan-fast 0.5s ease-out',
            }}
          />
        </>
      )}
      {children}
    </div>
  );
};

export default SectionTransition;
