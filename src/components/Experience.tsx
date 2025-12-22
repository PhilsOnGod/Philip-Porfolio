import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Calendar, Terminal } from "lucide-react";
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
    <section id="experience" className="py-12 md:py-24 px-4 relative overflow-hidden">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute right-0 top-1/3 w-1/3 h-80 bg-accent/5 blur-[120px] rounded-full" />
      
      {/* Scan Line Effect */}
      <div className="scan-line" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div 
          ref={headerRef}
          className={`text-center space-y-2 md:space-y-4 mb-8 md:mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <Badge variant="outline" className="border-accent/50 text-accent px-3 py-0.5 text-xs md:text-sm animate-cyber-border">
            <Terminal className="w-3 h-3 mr-1 inline" />
            My Journey
          </Badge>
          <h2 className="text-2xl md:text-5xl font-bold">
            Experience & <span className="text-gradient-primary cyber-glow">Education</span>
          </h2>
        </div>

        <div 
          ref={contentRef}
          className={`transition-all duration-700 delay-200 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Mobile Cards */}
          <div className="grid grid-cols-1 md:hidden gap-4">
            {experiences.map((exp, index) => {
              const Icon = exp.type === "work" ? Briefcase : GraduationCap;
              return (
                <div 
                  key={index}
                  className="tech-card cyber-corner p-5 rounded-xl animate-slide-in-bottom"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-primary/20 text-primary animate-pulse-glow">
                      <Icon className="w-5 h-5" />
                    </div>
                    {exp.current && (
                      <Badge className="bg-gradient-primary text-primary-foreground text-xs px-2.5 py-0.5 animate-glow-pulse">
                        Current
                      </Badge>
                    )}
                  </div>
                  <h3 className="text-base font-bold mb-1 text-foreground">{exp.title}</h3>
                  <p className="text-primary text-sm font-medium mb-2 terminal-text">{exp.company}</p>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </div>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Desktop Timeline */}
          <div className="hidden md:block relative">
            {/* Glowing Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px transform -translate-x-1/2">
              <div className="w-full h-full bg-gradient-to-b from-primary via-secondary to-accent animate-pulse-glow" />
            </div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => {
                const isLeft = index % 2 === 0;
                const Icon = exp.type === "work" ? Briefcase : GraduationCap;
                
                return (
                  <div 
                    key={index}
                    className={`relative flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'} animate-slide-in-bottom`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 w-4 h-4 rounded-full bg-gradient-primary transform -translate-x-1/2 z-10 animate-pulse-glow" />
                    
                    <div className={`w-[calc(50%-2rem)] ${isLeft ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="tech-card cyber-corner p-6 rounded-2xl group hover:scale-[1.02] transition-transform duration-300">
                        <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                          <div className={`p-2 rounded-lg bg-primary/20 text-primary group-hover:animate-pulse-glow ${isLeft ? 'order-2' : 'order-1'}`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          {exp.current && (
                            <Badge className="bg-gradient-primary text-primary-foreground text-xs animate-glow-pulse">
                              Current
                            </Badge>
                          )}
                        </div>
                        <h3 className="text-xl font-bold mb-1 text-foreground">{exp.title}</h3>
                        <p className="text-primary font-medium mb-2 terminal-text">{exp.company}</p>
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
