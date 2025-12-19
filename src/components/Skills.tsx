import { Badge } from "@/components/ui/badge";

const skills = {
  "Frontend": ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "HTML5/CSS3"],
  "Backend": ["Node.js", "Express", "Python", "Django", "REST APIs", "GraphQL"],
  "Database": ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Supabase"],
  "DevOps & Tools": ["Git", "Docker", "AWS", "Vercel", "CI/CD", "Linux"]
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 relative">
      {/* Background decoration */}
      <div className="absolute left-0 top-1/2 w-1/3 h-96 bg-primary/5 blur-[150px] rounded-full -translate-y-1/2" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="border-secondary/50 text-secondary px-4 py-1 mb-4">
            What I Do
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold">
            Technical <span className="text-gradient-secondary">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Modern technologies I use to build scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <div 
              key={category}
              className="glass glass-hover rounded-2xl p-8 animate-fade-in group"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="text-2xl font-bold mb-6">
                <span className={categoryIndex % 2 === 0 ? 'text-gradient-primary' : 'text-gradient-secondary'}>
                  {category}
                </span>
              </h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill, index) => (
                  <Badge 
                    key={skill}
                    variant="secondary"
                    className="text-sm px-4 py-2 bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default group-hover:animate-fade-in"
                    style={{ animationDelay: `${(categoryIndex * items.length + index) * 0.05}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "2+", label: "Years Experience" },
            { number: "10+", label: "Projects Completed" },
            { number: "5+", label: "Happy Clients" },
            { number: "100%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 glass rounded-xl animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;