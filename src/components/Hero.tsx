import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Twitter, Download } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-[100svh] flex items-center justify-center relative overflow-hidden px-4 pt-16 pb-8">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
      
      {/* Floating orbs - smaller on mobile */}
      <div className="absolute top-1/4 right-1/4 w-32 md:w-64 h-32 md:h-64 bg-primary/20 rounded-full blur-[60px] md:blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-40 md:w-80 h-40 md:h-80 bg-secondary/20 rounded-full blur-[80px] md:blur-[120px] animate-float-delayed" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Mobile: Horizontal compact layout */}
          <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            
            {/* Profile Photo - Smaller on mobile, inline */}
            <div className="flex justify-center order-1 md:order-2 animate-fade-in">
              <div className="relative group">
                <div className="absolute -inset-2 md:-inset-4 bg-gradient-primary rounded-full blur-xl md:blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="absolute -inset-0.5 md:-inset-1 bg-gradient-primary rounded-full opacity-75"></div>
                <div className="relative p-0.5 md:p-1 rounded-full bg-background">
                  <img 
                    src={profilePhoto} 
                    alt="Okeke Philip Chidubem - Full Stack Developer"
                    className="relative rounded-full w-28 h-28 sm:w-36 sm:h-36 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Text Content - Compact on mobile */}
            <div className="space-y-4 md:space-y-8 text-center md:text-left order-2 md:order-1">
              <div className="space-y-3 md:space-y-6 animate-fade-in">
                <Badge variant="outline" className="border-primary/50 text-primary animate-pulse-glow px-3 py-1 text-xs md:text-sm">
                  Available for opportunities
                </Badge>
                
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                  Okeke Philip
                  <span className="block text-gradient-primary">Chidubem</span>
                </h1>
                
                <p className="text-lg md:text-2xl text-muted-foreground font-medium">
                  Full Stack Developer
                </p>
              </div>

              <p className="text-sm md:text-lg text-foreground/70 leading-relaxed max-w-lg mx-auto md:mx-0">
                I craft seamless digital experiences with modern technologies.
              </p>

              {/* Buttons - Horizontal on mobile */}
              <div className="flex flex-row gap-2 md:gap-4 justify-center md:justify-start items-center">
                <Button 
                  size="sm"
                  onClick={() => scrollToSection("projects")}
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group text-sm md:text-lg px-4 md:px-8"
                >
                  View Work
                  <ArrowRight className="ml-1 md:ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="sm"
                  variant="outline"
                  className="border-2 border-primary/50 hover:bg-primary/10 text-sm md:text-lg px-4 md:px-8"
                  asChild
                >
                  <a href="mailto:ongod7238@gmail.com">Contact</a>
                </Button>
              </div>

              {/* Social links - Horizontal compact */}
              <div className="flex justify-center md:justify-start gap-2 md:gap-4">
                <a 
                  href="https://github.com/PhilsOnGod" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 md:p-3 rounded-lg md:rounded-xl glass glass-hover transition-all duration-300 hover:scale-110 group"
                >
                  <Github className="w-5 h-5 md:w-6 md:h-6 group-hover:text-primary transition-colors" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/philip-okeke-947668358/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 md:p-3 rounded-lg md:rounded-xl glass glass-hover transition-all duration-300 hover:scale-110 group"
                >
                  <Linkedin className="w-5 h-5 md:w-6 md:h-6 group-hover:text-primary transition-colors" />
                </a>
                <a 
                  href="https://x.com/eazi_king" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 md:p-3 rounded-lg md:rounded-xl glass glass-hover transition-all duration-300 hover:scale-110 group"
                >
                  <Twitter className="w-5 h-5 md:w-6 md:h-6 group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-slide-up"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;