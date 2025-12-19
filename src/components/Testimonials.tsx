import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Startup Founder",
    content: "Philip delivered exactly what we needed - a clean, functional sales tracking system. His attention to detail and communication throughout the project was excellent.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "Business Owner",
    content: "Working with Philip was a great experience. He understood our requirements quickly and built a solution that truly helps our business track sales effectively.",
    rating: 5,
  },
  {
    name: "Michael Obi",
    role: "Tech Lead",
    content: "Philip's code quality is impressive. He writes clean, maintainable code and always meets deadlines. Would definitely work with him again.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-20 pointer-events-none" />
      <div className="absolute left-1/4 bottom-0 w-96 h-96 bg-primary/10 blur-[150px] rounded-full" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="border-primary/50 text-primary px-4 py-1 mb-4">
            Testimonials
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold">
            What People <span className="text-gradient-secondary">Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Feedback from clients and collaborators I've worked with
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="glass glass-hover overflow-hidden group animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-6 relative">
                {/* Quote icon */}
                <div className="absolute top-4 right-4 text-primary/20 group-hover:text-primary/40 transition-colors">
                  <Quote className="w-10 h-10" />
                </div>
                
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-foreground/80 text-sm leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-muted-foreground text-xs">{testimonial.role}</p>
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