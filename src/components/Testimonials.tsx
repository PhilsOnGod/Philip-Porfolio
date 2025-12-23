import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star, Terminal, MessageSquare, ThumbsUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Startup Founder",
    company: "TechVentures",
    content: "Philip delivered exactly what we needed - a clean, functional sales tracking system. His attention to detail and communication throughout the project was excellent.",
    rating: 5,
    project: "Sales Tracker App",
  },
  {
    name: "Sarah Chen",
    role: "Business Owner",
    company: "Scent By Ella",
    content: "Working with Philip was a great experience. He understood our requirements quickly and built an e-commerce solution with payment integration that truly helps our perfume business.",
    rating: 5,
    project: "E-commerce Website",
  },
  {
    name: "Michael Obi",
    role: "Tech Lead",
    company: "Digital Solutions",
    content: "Philip's code quality is impressive. He writes clean, maintainable code and always meets deadlines. His Node.js and MySQL skills are solid. Would definitely work with him again.",
    rating: 5,
    project: "Web Application",
  },
];

const stats = [
  { icon: ThumbsUp, value: "100%", label: "Satisfaction Rate" },
  { icon: MessageSquare, value: "10+", label: "Projects Completed" },
  { icon: Star, value: "5.0", label: "Average Rating" },
];

const Testimonials = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  return (
    <section id="testimonials" className="py-12 md:py-24 px-4 relative overflow-hidden">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute inset-0 bg-gradient-mesh opacity-20 pointer-events-none" />
      <div className="absolute left-1/4 bottom-0 w-96 h-96 bg-primary/10 blur-[150px] rounded-full" />
      
      {/* Scan Line Effect */}
      <div className="scan-line" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div 
          ref={headerRef}
          className={`text-center space-y-2 md:space-y-4 mb-8 md:mb-12 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <Badge variant="outline" className="border-primary/50 text-primary px-3 py-0.5 text-xs md:text-sm animate-cyber-border">
            <Terminal className="w-3 h-3 mr-1 inline" />
            Testimonials
          </Badge>
          <h2 className="text-2xl md:text-5xl font-bold">
            What Clients <span className="text-gradient-secondary cyber-glow">Say</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto">
            Feedback from clients who have trusted me with their projects
          </p>
        </div>

        {/* Stats Section */}
        <div 
          ref={statsRef}
          className={`grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto mb-10 md:mb-16 transition-all duration-700 delay-100 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-4 tech-card rounded-xl animate-slide-in-bottom"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-primary mx-auto mb-2 animate-glow-pulse" />
              <p className="text-xl md:text-3xl font-bold text-foreground terminal-text">{stat.value}</p>
              <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <div 
          ref={cardsRef}
          className={`grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 transition-all duration-700 delay-200 ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="tech-card cyber-corner overflow-hidden group animate-slide-in-bottom hover:scale-[1.02] transition-transform duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-5 md:p-6 relative">
                <div className="absolute top-3 right-3 md:top-4 md:right-4 text-primary/30 group-hover:text-primary/50 transition-colors">
                  <Quote className="w-8 h-8 md:w-10 md:h-10" />
                </div>
                
                {/* Project Badge */}
                <Badge 
                  variant="secondary" 
                  className="mb-3 bg-secondary/10 text-secondary border border-secondary/30 text-xs"
                >
                  {testimonial.project}
                </Badge>
                
                <div className="flex gap-1 mb-3 md:mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-4 h-4 md:w-4 md:h-4 fill-primary text-primary animate-glow-pulse" 
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
                
                <p className="text-foreground/80 text-sm md:text-sm leading-relaxed mb-4 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-3 pt-3 border-t border-border/30">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm md:text-base animate-pulse-glow">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">{testimonial.name}</p>
                    <p className="text-muted-foreground text-xs terminal-text">{testimonial.role}</p>
                    <p className="text-primary/70 text-xs">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
