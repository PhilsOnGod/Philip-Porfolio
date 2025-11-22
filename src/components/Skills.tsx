import { Badge } from "@/components/ui/badge";

const skills = {
  "Frontend": ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "HTML5/CSS3"],
  "Backend": ["Node.js", "Express", "Python", "Django", "REST APIs", "GraphQL"],
  "Database": ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Supabase"],
  "DevOps & Tools": ["Git", "Docker", "AWS", "Vercel", "CI/CD", "Linux"]
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Leveraging modern technologies to build robust, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div 
              key={category}
              className="bg-card border border-border rounded-2xl p-8 hover:shadow-card transition-all duration-300 hover:border-primary/50"
            >
              <h3 className="text-2xl font-bold mb-6 text-primary">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <Badge 
                    key={skill}
                    variant="secondary"
                    className="text-sm px-4 py-2 bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;