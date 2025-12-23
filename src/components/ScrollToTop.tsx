import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        fixed bottom-6 right-6 z-50 
        w-14 h-14 
        flex items-center justify-center
        transition-all duration-500 ease-out
        ${isVisible 
          ? "opacity-100 translate-y-0 pointer-events-auto" 
          : "opacity-0 translate-y-16 pointer-events-none"
        }
      `}
      aria-label="Scroll to top"
    >
      {/* Cyber frame */}
      <div className="absolute inset-0">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-xl rounded-lg border border-primary/30" />
        
        {/* Animated border glow */}
        <div className={`
          absolute inset-0 rounded-lg 
          transition-all duration-300
          ${isHovered ? "animate-cyber-border" : ""}
        `} />
        
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary rounded-tl" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-secondary rounded-tr" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-secondary rounded-bl" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary rounded-br" />
        
        {/* Scan line effect */}
        {isHovered && (
          <div className="absolute inset-0 overflow-hidden rounded-lg">
            <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-scan-line" />
          </div>
        )}
      </div>
      
      {/* Icon */}
      <ChevronUp 
        className={`
          relative z-10 w-6 h-6 
          text-primary
          transition-all duration-300
          ${isHovered ? "animate-glow-pulse -translate-y-1" : ""}
        `}
      />
      
      {/* Glow effect on hover */}
      <div className={`
        absolute inset-0 rounded-lg
        bg-primary/20 blur-xl
        transition-opacity duration-300
        ${isHovered ? "opacity-100" : "opacity-0"}
      `} />
    </button>
  );
};

export default ScrollToTop;
