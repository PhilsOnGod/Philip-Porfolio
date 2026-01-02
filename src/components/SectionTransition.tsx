import { useEffect, useRef, useState, ReactNode } from "react";
import { useLoadingState } from "@/pages/Index";

interface SectionTransitionProps {
  children: ReactNode;
  className?: string;
}

const SectionTransition = ({ children, className = "" }: SectionTransitionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasGlitched, setHasGlitched] = useState(false);
  const isLoading = useLoadingState();

  useEffect(() => {
    // Don't run observers while loading
    if (isLoading) return;
    
    const element = sectionRef.current;
    if (!element) return;

    // Check if already in view immediately
    const rect = element.getBoundingClientRect();
    const isInView = rect.top < window.innerHeight && rect.bottom > 0;
    if (isInView && !isVisible) {
      setIsVisible(true);
      setHasGlitched(true);
      setTimeout(() => setHasGlitched(false), 500);
    }

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
    return () => observer.disconnect();
  }, [isLoading, isVisible, hasGlitched]);

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