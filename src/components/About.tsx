import { Card, CardContent } from "@/components/ui/card";
import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const values = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code that stands the test of time",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Constantly exploring new technologies and creative solutions",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Building fast, optimized applications that deliver results",
  },
  {
    icon: Users,
    title: "User-Centric",
    description: "Designing experiences that users love and remember",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating digital solutions that make a difference
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card 
                key={index}
                className="border-border hover:shadow-card transition-all duration-300 hover:border-primary/50 group"
              >
                <CardContent className="pt-6 text-center space-y-3">
                  <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
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

        <div className="mt-16 max-w-3xl mx-auto">
          <Card className="border-border bg-card/50 backdrop-blur">
            <CardContent className="p-8 space-y-4">
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <p className="text-foreground/80 leading-relaxed">
                As a Full Stack Developer, I specialize in creating seamless web experiences that bridge 
                beautiful design with powerful functionality. My journey in tech has been driven by curiosity 
                and a passion for solving real-world problems through code.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                From frontend frameworks like React to backend technologies like Node.js and Python, 
                I bring a comprehensive approach to every project. I believe great software is built 
                at the intersection of technical excellence and user empathy.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me exploring the latest tech trends, contributing 
                to open-source projects, or seeking inspiration for my next big idea.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;