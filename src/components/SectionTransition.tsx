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
    const element = sectionRef.current;
    if (!element) return;

    // Small delay to ensure loading screen has finished
    const timeoutId = setTimeout(() => {
      const rect = element.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom > 0;
      if (isInView) {
        setIsVisible(true);
        setHasGlitched(true);
        setTimeout(() => setHasGlitched(false), 500);
        return;
      }
    }, 100);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          if (!hasGlitched) {
            setHasGlitched(true);
            setTimeout(() => setHasGlitched(false), 500);
          }
        }
      },
      { threshold: 0.05, rootMargin: "50px" }
    );

    observer.observe(element);
    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

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
