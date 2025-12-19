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
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 pt-20">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-[120px] animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-accent/15 rounded-full blur-[80px] animate-float" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8 text-center md:text-left order-2 md:order-1">
              <div className="space-y-6 animate-fade-in">
                <Badge variant="outline" className="border-primary/50 text-primary animate-pulse-glow px-4 py-1.5">
                  Available for opportunities
                </Badge>
                
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
                  Okeke Philip
                  <span className="block text-gradient-primary">
                    Chidubem
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                  Full Stack Developer
                </p>
              </div>

              <p 
                className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-lg animate-fade-in"
                style={{ animationDelay: '0.2s' }}
              >
                I craft seamless digital experiences with modern technologies. 
                Passionate about clean code, intuitive design, and building products that make a difference.
              </p>

              <div 
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center pt-4 animate-fade-in"
                style={{ animationDelay: '0.4s' }}
              >
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection("projects")}
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group text-lg px-8 w-full sm:w-auto"
                >
                  View My Work
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-primary/50 hover:bg-primary/10 hover:border-primary text-lg px-8 w-full sm:w-auto"
                  asChild
                >
                  <a href="mailto:ongod7238@gmail.com">Get In Touch</a>
                </Button>
              </div>

              <div 
                className="flex justify-center md:justify-start gap-4 pt-6 animate-fade-in"
                style={{ animationDelay: '0.6s' }}
              >
                <a 
                  href="https://github.com/PhilsOnGod" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass glass-hover transition-all duration-300 hover:scale-110 hover:shadow-glow group"
                >
                  <Github className="w-6 h-6 group-hover:text-primary transition-colors" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/philip-okeke-947668358/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass glass-hover transition-all duration-300 hover:scale-110 hover:shadow-glow group"
                >
                  <Linkedin className="w-6 h-6 group-hover:text-primary transition-colors" />
                </a>
                <a 
                  href="https://x.com/eazi_king" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass glass-hover transition-all duration-300 hover:scale-110 hover:shadow-glow group"
                >
                  <Twitter className="w-6 h-6 group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>

            {/* Profile Photo */}
            <div 
              className="flex justify-center order-1 md:order-2 animate-fade-in-right"
              style={{ animationDelay: '0.3s' }}
            >
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-primary rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse-glow"></div>
                
                {/* Rotating border */}
                <div className="absolute -inset-1 bg-gradient-primary rounded-full opacity-75 animate-gradient"></div>
                
                {/* Image container */}
                <div className="relative p-1 rounded-full bg-background">
                  <img 
                    src={profilePhoto} 
                    alt="Okeke Philip Chidubem - Full Stack Developer"
                    className="relative rounded-full w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover"
                  />
                </div>
                
                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 p-3 rounded-xl glass animate-float">
                  <span className="text-2xl">🚀</span>
                </div>
                <div className="absolute -bottom-4 -left-4 p-3 rounded-xl glass animate-float-delayed">
                  <span className="text-2xl">💻</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-slide-up"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;