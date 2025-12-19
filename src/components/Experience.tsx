import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Full Stack Developer",
    company: "Freelance",
    period: "2023 - Present",
    description: "Building custom web applications and business solutions for clients worldwide. Specializing in React, TypeScript, and modern backend technologies.",
    current: true,
  },
  {
    type: "work",
    title: "Frontend Developer",
    company: "Tech Projects",
    period: "2022 - 2023",
    description: "Developed responsive web interfaces and collaborated with teams to deliver high-quality user experiences.",
    current: false,
  },
  {
    type: "education",
    title: "Computer Science",
    company: "Self-Taught & Online Courses",
    period: "2021 - Present",
    description: "Continuous learning through platforms like freeCodeCamp, Udemy, and hands-on project development.",
    current: true,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/3 w-1/3 h-80 bg-accent/5 blur-[120px] rounded-full" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="border-accent/50 text-accent px-4 py-1 mb-4">
            My Journey
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold">
            Experience & <span className="text-gradient-primary">Education</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A timeline of my professional growth and learning
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              const Icon = exp.type === "work" ? Briefcase : GraduationCap;
              
              return (
                <div 
                  key={index}
                  className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} animate-fade-in`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-gradient-primary transform -translate-x-1/2 z-10 animate-pulse-glow">
                    <div className="absolute inset-0 rounded-full bg-primary/50 animate-ping" />
                  </div>

                  {/* Content card */}
                  <div className={`ml-20 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
                    <div className="glass glass-hover p-6 rounded-2xl group">
                      <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                        <div className={`p-2 rounded-lg bg-primary/10 text-primary ${isLeft ? 'md:order-2' : 'md:order-1'}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        {exp.current && (
                          <Badge className="bg-gradient-primary text-primary-foreground text-xs">
                            Current
                          </Badge>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-primary font-medium mb-2">{exp.company}</p>
                      
                      <div className={`flex items-center gap-2 text-sm text-muted-foreground mb-3 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      
                      <p className="text-foreground/70 text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;