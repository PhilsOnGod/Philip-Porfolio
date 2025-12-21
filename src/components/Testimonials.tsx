import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
<<<<<<< HEAD
    name: "Alex Osibanjo",
=======
    name: "Alex Johnson",
>>>>>>> 7226c008e56ef6555b4d5f4d02b9c06d21f5ec3f
    role: "Startup Founder",
    content: "Philip delivered exactly what we needed - a clean, functional sales tracking system. His attention to detail and communication throughout the project was excellent.",
    rating: 5,
  },
  {
<<<<<<< HEAD
    name: "Sarah Chukwuka",
=======
    name: "Sarah Chen",
>>>>>>> 7226c008e56ef6555b4d5f4d02b9c06d21f5ec3f
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
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  return (
    <section id="testimonials" className="py-12 md:py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-20 pointer-events-none" />
      <div className="absolute left-1/4 bottom-0 w-96 h-96 bg-primary/10 blur-[150px] rounded-full" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div 
          ref={headerRef}
          className={`text-center space-y-2 md:space-y-4 mb-8 md:mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <Badge variant="outline" className="border-primary/50 text-primary px-3 py-0.5 text-xs md:text-sm">
            Testimonials
          </Badge>
          <h2 className="text-2xl md:text-5xl font-bold">
            What People <span className="text-gradient-secondary">Say</span>
          </h2>
        </div>

        <div 
          ref={cardsRef}
          className={`flex md:grid md:grid-cols-3 gap-3 md:gap-6 overflow-x-auto pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 transition-all duration-700 delay-200 ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="flex-shrink-0 w-[260px] md:w-auto glass glass-hover overflow-hidden group animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-4 md:p-6 relative">
                <div className="absolute top-2 right-2 md:top-4 md:right-4 text-primary/20">
                  <Quote className="w-6 h-6 md:w-10 md:h-10" />
                </div>
                
                <div className="flex gap-0.5 mb-2 md:mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-foreground/80 text-xs md:text-sm leading-relaxed mb-4 italic line-clamp-4 md:line-clamp-none">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-xs md:text-base">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-xs md:text-sm">{testimonial.name}</p>
                    <p className="text-muted-foreground text-[10px] md:text-xs">{testimonial.role}</p>
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