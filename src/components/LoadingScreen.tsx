import { useState, useEffect } from "react";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [glitchText, setGlitchText] = useState("INITIALIZING");
  const [isExiting, setIsExiting] = useState(false);

  const statusMessages = [
    "INITIALIZING...",
    "LOADING MODULES...",
    "ESTABLISHING CONNECTION...",
    "COMPILING ASSETS...",
    "RENDERING INTERFACE...",
    "SYSTEM READY",
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 200);

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    const messageIndex = Math.min(
      Math.floor(progress / 20),
      statusMessages.length - 1
    );
    setGlitchText(statusMessages[messageIndex]);
  }, [progress]);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        setIsExiting(true);
        setTimeout(onComplete, 800);
      }, 500);
    }
  }, [progress, onComplete]);

  return (
    <div
      className={`
        fixed inset-0 z-[100] 
        bg-background
        flex flex-col items-center justify-center
        transition-all duration-800 ease-out
        ${isExiting ? "opacity-0 scale-110" : "opacity-100 scale-100"}
      `}
    >
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "0.5s" }} />
      </div>

      {/* Scan lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-scan-line" />
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent animate-scan-line" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center space-y-8 px-4">
        {/* Logo/Brand */}
        <div className="relative">
          <h1 className="text-4xl md:text-6xl font-bold tracking-wider">
            <span className="text-gradient-primary animate-glow-pulse">
              {"<DEV/>"}
            </span>
          </h1>
          
          {/* Glitch effect layers */}
          <h1 
            className="absolute inset-0 text-4xl md:text-6xl font-bold tracking-wider text-primary/50 animate-glitch"
            style={{ clipPath: "inset(20% 0 30% 0)" }}
            aria-hidden="true"
          >
            {"<DEV/>"}
          </h1>
        </div>

        {/* Status text */}
        <div className="font-mono text-sm md:text-base text-primary/80">
          <span className="inline-block min-w-[200px]">
            {glitchText}
            <span className="animate-blink border-r-2 border-primary ml-1">&nbsp;</span>
          </span>
        </div>

        {/* Progress bar container */}
        <div className="w-64 md:w-80 mx-auto">
          {/* Outer frame with cyber corners */}
          <div className="relative p-1 cyber-corner">
            <div className="h-2 bg-card/50 backdrop-blur-sm rounded overflow-hidden border border-primary/20">
              {/* Progress fill */}
              <div
                className="h-full bg-gradient-to-r from-primary via-secondary to-primary transition-all duration-300 ease-out relative"
                style={{ width: `${Math.min(progress, 100)}%` }}
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
              </div>
            </div>
          </div>
          
          {/* Progress percentage */}
          <div className="mt-3 font-mono text-xs text-muted-foreground">
            [{Math.min(Math.round(progress), 100)}%] LOADING
          </div>
        </div>

        {/* Binary rain decoration */}
        <div className="flex justify-center gap-8 text-xs font-mono text-primary/30">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="animate-fade-in"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              {Math.random() > 0.5 ? "01" : "10"}
            </div>
          ))}
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-primary/30" />
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-secondary/30" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-secondary/30" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-primary/30" />
    </div>
  );
};

export default LoadingScreen;
