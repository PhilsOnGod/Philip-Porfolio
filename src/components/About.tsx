import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

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
  return (
    <section id="about" className="py-24 px-4 relative">
      {/* Background decoration */}
      <div className="absolute right-0 top-0 w-1/2 h-96 bg-secondary/5 blur-[150px] rounded-full" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="border-primary/50 text-primary px-4 py-1 mb-4">
            About Me
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold">
            Driven by <span className="text-gradient-primary">Passion</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building digital solutions that make a real difference
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card 
                key={index}
                className="glass glass-hover group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-8 pb-6 text-center space-y-4">
                  <div className={`inline-flex p-4 rounded-2xl bg-${value.color}/10 text-${value.color} group-hover:bg-${value.color} group-hover:text-${value.color === 'primary' ? 'primary' : value.color}-foreground transition-all duration-300 group-hover:scale-110`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="glass overflow-hidden animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <CardContent className="p-8 md:p-12 space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                My <span className="text-gradient-secondary">Journey</span>
              </h3>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  As a Full Stack Developer, I specialize in creating seamless web experiences that bridge 
                  beautiful design with powerful functionality. My journey in tech has been driven by curiosity 
                  and a passion for solving real-world problems through code.
                </p>
                <p>
                  From frontend frameworks like React and TypeScript to backend technologies like Node.js and Python, 
                  I bring a comprehensive approach to every project. I believe great software is built 
                  at the intersection of technical excellence and user empathy.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring the latest tech trends, contributing 
                  to open-source projects, or seeking inspiration for my next big idea. I'm always 
                  looking for new challenges and opportunities to grow.
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