import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Clock, Send, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-12 md:py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      <div className="absolute left-1/2 bottom-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-primary/10 blur-[150px] md:blur-[200px] rounded-full -translate-x-1/2" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center space-y-2 md:space-y-4 mb-8 md:mb-16">
          <Badge variant="outline" className="border-secondary/50 text-secondary px-3 py-0.5 text-xs md:text-sm">
            Get in Touch
          </Badge>
          <h2 className="text-2xl md:text-5xl font-bold">
            Let's Build <span className="text-gradient-primary">Something Great</span>
          </h2>
        </div>

        <Card className="glass overflow-hidden animate-fade-in">
          <CardContent className="p-4 md:p-12">
            {/* Contact info - horizontal scroll on mobile */}
            <div className="flex md:grid md:grid-cols-3 gap-3 md:gap-8 mb-6 md:mb-10 overflow-x-auto pb-2 md:pb-0 -mx-2 px-2 md:mx-0 md:px-0">
              <div className="flex-shrink-0 text-center space-y-2 md:space-y-3 min-w-[100px] md:min-w-0">
                <div className="inline-flex p-2 md:p-4 rounded-xl md:rounded-2xl bg-primary/10 text-primary">
                  <Mail className="w-4 h-4 md:w-6 md:h-6" />
                </div>
                <h3 className="font-semibold text-sm md:text-lg">Email</h3>
                <a 
                  href="mailto:ongod7238@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors block text-[10px] md:text-sm"
                >
                  ongod7238@gmail.com
                </a>
              </div>

              <div className="flex-shrink-0 text-center space-y-2 md:space-y-3 min-w-[100px] md:min-w-0">
                <div className="inline-flex p-2 md:p-4 rounded-xl md:rounded-2xl bg-secondary/10 text-secondary">
                  <MapPin className="w-4 h-4 md:w-6 md:h-6" />
                </div>
                <h3 className="font-semibold text-sm md:text-lg">Location</h3>
                <p className="text-muted-foreground text-[10px] md:text-sm">Worldwide</p>
              </div>

              <div className="flex-shrink-0 text-center space-y-2 md:space-y-3 min-w-[100px] md:min-w-0">
                <div className="inline-flex p-2 md:p-4 rounded-xl md:rounded-2xl bg-accent/10 text-accent">
                  <Clock className="w-4 h-4 md:w-6 md:h-6" />
                </div>
                <h3 className="font-semibold text-sm md:text-lg">Availability</h3>
                <p className="text-muted-foreground text-[10px] md:text-sm">Open</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 md:gap-8">
              <Button 
                size="sm"
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-sm md:text-lg px-6 md:px-12 group"
                asChild
              >
                <a href="mailto:ongod7238@gmail.com">
                  <Send className="w-4 h-4 mr-2" />
                  Start a Conversation
                </a>
              </Button>

              <div className="flex gap-3">
                <a 
                  href="https://github.com/PhilsOnGod" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 md:p-3 rounded-lg md:rounded-xl glass glass-hover transition-all duration-300 hover:scale-110"
                >
                  <Github className="w-4 h-4 md:w-5 md:h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/philip-okeke-947668358/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 md:p-3 rounded-lg md:rounded-xl glass glass-hover transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                </a>
                <a 
                  href="https://x.com/eazi_king" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 md:p-3 rounded-lg md:rounded-xl glass glass-hover transition-all duration-300 hover:scale-110"
                >
                  <Twitter className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer - compact on mobile */}
        <div className="text-center mt-8 md:mt-16 space-y-3 md:space-y-4">
          <div className="flex justify-center gap-4 md:gap-6 text-xs md:text-sm">
            <a href="#hero" className="text-muted-foreground hover:text-primary transition-colors">Home</a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
          </div>
          <p className="text-muted-foreground text-[10px] md:text-sm">
            © 2024 Okeke Philip Chidubem
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;