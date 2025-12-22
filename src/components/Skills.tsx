import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skills = {
  "Frontend": ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "HTML5/CSS3"],
  "Backend": ["Node.js", "Express", "Python", "Django", "REST APIs", "GraphQL"],
  "Database": ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Supabase"],
  "DevOps & Tools": ["Git", "Docker", "AWS", "Vercel", "CI/CD", "Linux"]
};

const Skills = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();
  return (
    <section id="skills" className="py-12 md:py-24 px-4 relative">
      <div className="absolute left-0 top-1/2 w-1/3 h-96 bg-primary/5 blur-[150px] rounded-full -translate-y-1/2" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div 
          ref={headerRef}
          className={`text-center space-y-2 md:space-y-4 mb-8 md:mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <Badge variant="outline" className="border-secondary/50 text-secondary px-3 py-0.5 text-xs md:text-sm">
            What I Do
          </Badge>
          <h2 className="text-2xl md:text-5xl font-bold">
            Technical <span className="text-gradient-secondary">Expertise</span>
          </h2>
        </div>

        <div 
          ref={gridRef}
          className={`grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6 transition-all duration-700 delay-200 ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <div 
              key={category}
              className="glass glass-hover rounded-xl md:rounded-2xl p-4 md:p-8 animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="text-base md:text-2xl font-bold mb-3 md:mb-6">
                <span className={categoryIndex % 2 === 0 ? 'text-gradient-primary' : 'text-gradient-secondary'}>
                  {category}
                </span>
              </h3>
              <div className="flex flex-wrap gap-1.5 md:gap-3">
                {items.map((skill, skillIndex) => (
                  <Badge 
                    key={skill}
                    variant="secondary"
                    className="text-xs md:text-sm px-2.5 py-1 md:px-4 md:py-2 bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300 animate-fade-in font-medium"
                    style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div 
          ref={statsRef}
          className={`mt-8 md:mt-16 flex md:grid md:grid-cols-4 gap-3 md:gap-6 overflow-x-auto pb-2 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 transition-all duration-700 delay-300 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {[
            { number: "2+", label: "Years Exp" },
            { number: "10+", label: "Projects" },
            { number: "5+", label: "Clients" },
            { number: "100%", label: "Satisfaction" },
          ].map((stat, index) => (
            <div 
              key={index}
              className="flex-shrink-0 text-center p-3 md:p-6 glass rounded-lg md:rounded-xl min-w-[80px] md:min-w-0"
            >
              <div className="text-xl md:text-4xl font-bold text-gradient-primary mb-1">
                {stat.number}
              </div>
              <div className="text-[10px] md:text-sm text-muted-foreground whitespace-nowrap">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;