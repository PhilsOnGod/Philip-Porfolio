import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Clock, Send, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 relative">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      <div className="absolute left-1/2 bottom-0 w-[600px] h-[600px] bg-primary/10 blur-[200px] rounded-full -translate-x-1/2" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="border-secondary/50 text-secondary px-4 py-1 mb-4">
            Get in Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold">
            Let's Build <span className="text-gradient-primary">Something Great</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <Card className="glass overflow-hidden animate-fade-in">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 mb-10">
              <div className="text-center space-y-3 group">
                <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg">Email</h3>
                <a 
                  href="mailto:ongod7238@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors block text-sm"
                >
                  ongod7238@gmail.com
                </a>
              </div>

              <div className="text-center space-y-3 group">
                <div className="inline-flex p-4 rounded-2xl bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-300 group-hover:scale-110">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg">Location</h3>
                <p className="text-muted-foreground text-sm">
                  Available Worldwide
                </p>
              </div>

              <div className="text-center space-y-3 group">
                <div className="inline-flex p-4 rounded-2xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 group-hover:scale-110">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg">Availability</h3>
                <p className="text-muted-foreground text-sm">
                  Open to Opportunities
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-8">
              <Button 
                size="lg"
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-12 group"
                asChild
              >
                <a href="mailto:ongod7238@gmail.com">
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Start a Conversation
                </a>
              </Button>

              {/* Social links */}
              <div className="flex gap-4">
                <a 
                  href="https://github.com/PhilsOnGod" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass glass-hover transition-all duration-300 hover:scale-110 hover:shadow-glow group"
                >
                  <Github className="w-5 h-5 group-hover:text-primary transition-colors" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/philip-okeke-947668358/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass glass-hover transition-all duration-300 hover:scale-110 hover:shadow-glow group"
                >
                  <Linkedin className="w-5 h-5 group-hover:text-primary transition-colors" />
                </a>
                <a 
                  href="https://x.com/eazi_king" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass glass-hover transition-all duration-300 hover:scale-110 hover:shadow-glow group"
                >
                  <Twitter className="w-5 h-5 group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-16 space-y-4">
          <div className="flex justify-center gap-6 text-sm">
            <a href="#hero" className="text-muted-foreground hover:text-primary transition-colors">Home</a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</a>
            <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2024 Okeke Philip Chidubem. Crafted with passion and precision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;