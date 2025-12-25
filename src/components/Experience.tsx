import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Calendar, Terminal, MapPin, Code } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const experiences = [
  {
    type: "work",
    title: "Web Development Intern",
    company: "Femish IT Solutions Limited",
    location: "Ikeja, Lagos",
    period: "Jan 2022 – Dec 2023",
    description: "Developed responsive websites using HTML, CSS, JavaScript, and React. Collaborated with designers to improve user interface and experience. Implemented back-end functionality using Node.js and MySQL.",
    skills: ["React", "Node.js", "MySQL", "JavaScript"],
    current: false,
  },
  {
    type: "education",
    title: "B.Sc. Computer Science",
    company: "Achievers University",
    location: "Nigeria",
    period: "2020 – 2024",
    description: "Graduated Second Class Upper Division. Developed skills in web development and database management through coursework and hands-on projects.",
    skills: ["Web Development", "Database Management", "Programming"],
    current: false,
  },
  {
    type: "work",
    title: "National Youth Service Corps (NYSC)",
    company: "Community Development Service",
    location: "Ogun State",
    period: "2025 – Present",
    description: "Engaged in community development and ICT-related tasks. Applying technical skills to support local organizations and community initiatives.",
    skills: ["Community Development", "ICT", "Teaching"],
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
          <p className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto">
            From academic foundations to real-world development experience
          </p>
        </div>

        <div 
          ref={contentRef}
          className={`transition-all duration-700 delay-200 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Mobile Horizontal Scroll */}
          <div className="md:hidden overflow-x-auto scrollbar-hide -mx-4 px-4">
            <div className="flex gap-4 min-w-max pb-4">
              {experiences.map((exp, index) => {
                const Icon = exp.type === "work" ? Briefcase : GraduationCap;
                return (
                  <div 
                    key={index}
                    className="tech-card cyber-corner p-4 rounded-xl animate-slide-in-bottom w-72 flex-shrink-0"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1.5 rounded-lg bg-primary/20 text-primary animate-pulse-glow">
                        <Icon className="w-4 h-4" />
                      </div>
                      {exp.current && (
                        <Badge className="bg-gradient-primary text-primary-foreground text-[10px] px-2 py-0.5 animate-glow-pulse">
                          Current
                        </Badge>
                      )}
                    </div>
                    <h3 className="text-sm font-bold mb-0.5 text-foreground line-clamp-1">{exp.title}</h3>
                    <p className="text-primary text-xs font-medium mb-1 terminal-text line-clamp-1">{exp.company}</p>
                    
                    <div className="flex items-center gap-3 text-[10px] text-muted-foreground mb-2">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-2.5 h-2.5" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-2.5 h-2.5" />
                        {exp.period}
                      </span>
                    </div>
                    
                    <p className="text-foreground/70 text-xs leading-relaxed mb-2 line-clamp-2">
                      {exp.description}
                    </p>
                    
                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-1">
                      {exp.skills.slice(0, 3).map((skill, i) => (
                        <span 
                          key={i}
                          className="text-[10px] px-1.5 py-0.5 bg-primary/10 text-primary rounded-full border border-primary/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
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
                        <p className="text-primary font-medium mb-1 terminal-text">{exp.company}</p>
                        
                        {/* Location */}
                        <div className={`flex items-center gap-2 text-sm text-muted-foreground mb-2 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                        
                        <div className={`flex items-center gap-2 text-sm text-muted-foreground mb-3 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <p className="text-foreground/70 text-sm leading-relaxed mb-4">{exp.description}</p>
                        
                        {/* Skills Tags */}
                        <div className={`flex flex-wrap gap-2 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                          {exp.skills.map((skill, i) => (
                            <span 
                              key={i}
                              className="text-xs px-2.5 py-1 bg-primary/10 text-primary rounded-full border border-primary/20 flex items-center gap-1"
                            >
                              <Code className="w-3 h-3" />
                              {skill}
                            </span>
                          ))}
                        </div>
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
