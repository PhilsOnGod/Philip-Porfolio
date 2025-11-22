import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 pt-20">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-700" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8 animate-fade-in text-center md:text-left order-2 md:order-1">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                  Okeke Philip
                  <span className="block bg-gradient-primary bg-clip-text text-transparent">
                    Chidubem
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                  Full Stack Developer
                </p>
              </div>

              <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                I love turning ideas into smooth, user-friendly websites and exploring the latest tech trends. 
                When I&apos;m not coding, I&apos;m always on the hunt for inspiration for my next project.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center pt-4">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection("projects")}
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group text-lg px-8"
                >
                  View My Work
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-primary/50 hover:bg-primary/10 hover:border-primary text-lg px-8"
                  asChild
                >
                  <a href="mailto:ongod7238@gmail.com">Get In Touch</a>
                </Button>
              </div>

              <div className="flex justify-center md:justify-start gap-6 pt-8">
                <a 
                  href="https://github.com/PhilsOnGod" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:shadow-glow"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/philip-okeke-947668358/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:shadow-glow"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href="https://x.com/eazi_king" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:shadow-glow"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Profile Photo */}
            <div className="flex justify-center order-1 md:order-2 animate-fade-in">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-primary rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500 animate-pulse"></div>
                <div className="relative">
                  <img 
                    src={profilePhoto} 
                    alt="Okeke Philip Chidubem - Full Stack Developer"
                    className="relative rounded-3xl w-80 h-80 md:w-96 md:h-96 object-cover shadow-card border-4 border-background"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;