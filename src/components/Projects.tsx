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
    <section id="projects" className="py-12 md:py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-mesh opacity-30 pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-2 md:space-y-4 mb-8 md:mb-16">
          <Badge variant="outline" className="border-primary/50 text-primary px-3 py-0.5 text-xs md:text-sm">
            Portfolio
          </Badge>
          <h2 className="text-2xl md:text-5xl font-bold">
            Featured <span className="text-gradient-primary">Projects</span>
          </h2>
        </div>

        {/* Projects - Stack on mobile */}
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const isSecondary = project.color === "secondary";
            
            return (
              <Card 
                key={index}
                className="glass glass-hover overflow-hidden group relative animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Icon header - compact on mobile */}
                <div className={`p-3 md:p-6 ${isSecondary ? 'bg-secondary/10' : 'bg-primary/10'} border-b border-border/50`}>
                  <div className="flex items-center gap-3">
                    <div className={`p-2 md:p-4 rounded-lg md:rounded-xl ${isSecondary ? 'bg-secondary/20 text-secondary' : 'bg-primary/20 text-primary'}`}>
                      <Icon className="w-5 h-5 md:w-8 md:h-8" />
                    </div>
                    <CardTitle className="text-base md:text-2xl">{project.title}</CardTitle>
                  </div>
                </div>
                
                <CardContent className="p-3 md:p-6 space-y-3 md:space-y-6">
                  <p className="text-xs md:text-base text-foreground/70 leading-relaxed line-clamp-2 md:line-clamp-none">
                    {project.description}
                  </p>
                  
                  {/* Tech badges - smaller on mobile */}
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    {project.tech.slice(0, 4).map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className={`text-[10px] md:text-sm px-2 py-0 md:px-3 md:py-0.5 ${isSecondary ? 'border-secondary/30' : 'border-primary/30'}`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Buttons - horizontal compact */}
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      className={`${isSecondary ? 'bg-gradient-secondary' : 'bg-gradient-primary'} text-xs md:text-sm px-3 md:px-4`}
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                        View
                      </a>
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-border text-xs md:text-sm px-3 md:px-4"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA - smaller on mobile */}
        <div className="mt-8 md:mt-16 text-center">
          <Button 
            variant="outline" 
            size="sm"
            className="border-primary/50 hover:bg-primary/10 text-sm md:text-base"
            asChild
          >
            <a href="https://github.com/PhilsOnGod" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              View All on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;