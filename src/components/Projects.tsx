import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, TrendingUp, BarChart3 } from "lucide-react";

const projects = [
  {
    title: "Sales Tracker Pro",
    description: "A comprehensive sales tracking application built for businesses to monitor revenue, manage inventory, and analyze sales performance in real-time. Features include dashboard analytics, product management, and sales reporting.",
    tech: ["TypeScript", "React", "Tailwind CSS", "Supabase", "Chart.js"],
    icon: TrendingUp,
    github: "https://github.com/PhilsOnGod/sales-tracker-10",
    color: "primary" as const,
  },
  {
    title: "NaijaSalesTracker",
    description: "A specialized sales tracking solution designed for Nigerian businesses. Supports local currency, Nigerian business workflows, and provides insights tailored for the local market with intuitive dashboards.",
    tech: ["TypeScript", "React", "Tailwind CSS", "PostgreSQL", "REST API"],
    icon: BarChart3,
    github: "https://github.com/PhilsOnGod/NaijaSalesTracker",
    color: "secondary" as const,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30 pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="border-primary/50 text-primary px-4 py-1 mb-4">
            Portfolio
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="text-gradient-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world applications I've built to solve business problems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const isSecondary = project.color === "secondary";
            
            return (
              <Card 
                key={index}
                className="glass glass-hover overflow-hidden group relative animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Gradient border effect */}
                <div className={`absolute inset-0 bg-gradient-${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg`} />
                
                {/* Icon header */}
                <div className={`p-6 ${isSecondary ? 'bg-secondary/10' : 'bg-primary/10'} border-b border-border/50`}>
                  <div className="flex items-center gap-4">
                    <div className={`p-4 rounded-xl ${isSecondary ? 'bg-secondary/20 text-secondary' : 'bg-primary/20 text-primary'} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                    </div>
                  </div>
                </div>
                
                <CardHeader className="pb-2">
                  <CardDescription className="text-base text-foreground/70 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className={`${isSecondary ? 'border-secondary/30 hover:bg-secondary/10' : 'border-primary/30 hover:bg-primary/10'} transition-colors`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-2">
                    <Button 
                      size="sm" 
                      className={`${isSecondary ? 'bg-gradient-secondary' : 'bg-gradient-primary'} hover:shadow-glow transition-all duration-300`}
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Project
                      </a>
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-border hover:border-primary hover:bg-primary/10"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">Want to see more of my work?</p>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/50 hover:bg-primary/10 hover:border-primary group"
            asChild
          >
            <a href="https://github.com/PhilsOnGod" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;