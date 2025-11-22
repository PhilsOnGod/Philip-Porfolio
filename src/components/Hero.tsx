import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-700" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
              Okeke Philip
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Chidubem
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground font-medium">
              Full Stack Developer
            </p>
          </div>

          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Crafting exceptional digital experiences through innovative full-stack solutions. 
            Passionate about transforming complex problems into elegant, scalable applications 
            that drive business value and delight users.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
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

          <div className="flex justify-center gap-6 pt-8">
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
      </div>
    </section>
  );
};

export default Hero;