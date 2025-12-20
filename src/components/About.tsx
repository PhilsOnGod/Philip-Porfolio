import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const values = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code that stands the test of time",
    color: "primary",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Constantly exploring new technologies and creative solutions",
    color: "secondary",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Building fast, optimized applications that deliver results",
    color: "accent",
  },
  {
    icon: Users,
    title: "User-Centric",
    description: "Designing experiences that users love and remember",
    color: "primary",
  },
];

const About = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation();
  const { ref: journeyRef, isVisible: journeyVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-12 md:py-24 px-4 relative">
      <div className="absolute right-0 top-0 w-1/2 h-96 bg-secondary/5 blur-[150px] rounded-full" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div 
          ref={headerRef}
          className={`text-center space-y-2 md:space-y-4 mb-8 md:mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <Badge variant="outline" className="border-primary/50 text-primary px-3 py-0.5 text-xs md:text-sm">
            About Me
          </Badge>
          <h2 className="text-2xl md:text-5xl font-bold">
            Driven by <span className="text-gradient-primary">Passion</span>
          </h2>
        </div>

        <div 
          ref={valuesRef}
          className={`flex md:grid md:grid-cols-4 gap-3 md:gap-6 mb-8 md:mb-16 overflow-x-auto pb-2 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 transition-all duration-700 delay-200 ${valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card 
                key={index}
                className="flex-shrink-0 w-[140px] md:w-auto glass glass-hover group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-4 pb-3 md:pt-8 md:pb-6 text-center space-y-2 md:space-y-4">
                  <div className={`inline-flex p-2 md:p-4 rounded-xl md:rounded-2xl bg-${value.color}/10 text-${value.color} group-hover:scale-110 transition-all duration-300`}>
                    <Icon className="w-5 h-5 md:w-8 md:h-8" />
                  </div>
                  <h3 className="text-sm md:text-xl font-bold">{value.title}</h3>
                  <p className="text-muted-foreground text-[10px] md:text-sm leading-relaxed hidden md:block">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div 
          ref={journeyRef}
          className={`max-w-4xl mx-auto transition-all duration-700 delay-300 ${journeyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <Card className="glass overflow-hidden animate-fade-in">
            <CardContent className="p-4 md:p-12 space-y-3 md:space-y-6">
              <h3 className="text-xl md:text-3xl font-bold">
                My <span className="text-gradient-secondary">Journey</span>
              </h3>
              <div className="space-y-3 text-foreground/80 text-sm md:text-base leading-relaxed">
                <p>
                  As a Full Stack Developer, I specialize in creating seamless web experiences that bridge 
                  beautiful design with powerful functionality.
                </p>
                <p className="hidden md:block">
                  From frontend frameworks like React and TypeScript to backend technologies like Node.js and Python, 
                  I bring a comprehensive approach to every project.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;