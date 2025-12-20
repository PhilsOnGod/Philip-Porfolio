import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-12 md:py-24 px-4 relative">
      <div className="absolute right-0 top-1/3 w-1/3 h-80 bg-accent/5 blur-[120px] rounded-full" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div 
          ref={headerRef}
          className={`text-center space-y-2 md:space-y-4 mb-8 md:mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <Badge variant="outline" className="border-accent/50 text-accent px-3 py-0.5 text-xs md:text-sm">
            My Journey
          </Badge>
          <h2 className="text-2xl md:text-5xl font-bold">
            Experience & <span className="text-gradient-primary">Education</span>
          </h2>
        </div>

        <div 
          ref={contentRef}
          className={`transition-all duration-700 delay-200 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="flex md:hidden gap-3 overflow-x-auto pb-4 -mx-4 px-4">
            {experiences.map((exp, index) => {
              const Icon = exp.type === "work" ? Briefcase : GraduationCap;
              return (
                <div 
                  key={index}
                  className="flex-shrink-0 w-[260px] glass glass-hover p-4 rounded-xl"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-lg bg-primary/10 text-primary">
                      <Icon className="w-4 h-4" />
                    </div>
                    {exp.current && (
                      <Badge className="bg-gradient-primary text-primary-foreground text-[10px] px-2 py-0">
                        Current
                      </Badge>
                    )}
                  </div>
                  <h3 className="text-sm font-bold mb-0.5">{exp.title}</h3>
                  <p className="text-primary text-xs font-medium mb-1">{exp.company}</p>
                  <div className="flex items-center gap-1 text-[10px] text-muted-foreground mb-2">
                    <Calendar className="w-3 h-3" />
                    {exp.period}
                  </div>
                  <p className="text-foreground/70 text-xs leading-relaxed line-clamp-3">
                    {exp.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Desktop Timeline */}
          <div className="hidden md:block relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent transform -translate-x-1/2" />
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              const Icon = exp.type === "work" ? Briefcase : GraduationCap;
              
              return (
                <div 
                  key={index}
                  className={`relative flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'} animate-fade-in`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="absolute left-1/2 w-4 h-4 rounded-full bg-gradient-primary transform -translate-x-1/2 z-10 animate-pulse-glow" />
                  <div className={`w-[calc(50%-2rem)] ${isLeft ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="glass glass-hover p-6 rounded-2xl group">
                      <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                        <div className={`p-2 rounded-lg bg-primary/10 text-primary ${isLeft ? 'order-2' : 'order-1'}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        {exp.current && (
                          <Badge className="bg-gradient-primary text-primary-foreground text-xs">Current</Badge>
                        )}
                      </div>
                      <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                      <p className="text-primary font-medium mb-2">{exp.company}</p>
                      <div className={`flex items-center gap-2 text-sm text-muted-foreground mb-3 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <p className="text-foreground/70 text-sm leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;