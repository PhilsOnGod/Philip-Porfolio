import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ExternalLink, Github, TrendingUp, BarChart3, ShoppingBag, Globe, Terminal, CheckCircle, Layers, Zap, Users, Code } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projects = [
  {
    title: "Naja Sales Tracker",
    shortDesc: "A comprehensive sales tracking application for businesses",
    description: "A full-featured sales and inventory management system designed to help businesses monitor revenue, manage inventory, and analyze sales performance in real-time.",
    tech: ["TypeScript", "React", "Tailwind CSS", "Supabase", "Chart.js"],
    icon: TrendingUp,
    github: "https://github.com/PhilsOnGod/sales-tracker-10",
    liveDemo: "https://naja-sales-tracker.lovable.app",
    color: "primary" as const,
    features: [
      "Real-time dashboard analytics",
      "Product & inventory management",
      "Sales reporting & export",
      "User authentication & roles",
      "Mobile-responsive design"
    ],
    challenges: "Building a performant dashboard that handles large datasets while maintaining smooth animations and real-time updates.",
    solution: "Implemented data pagination, optimistic UI updates, and efficient caching strategies with React Query.",
    results: "Increased client sales tracking efficiency by 40% and reduced manual data entry errors.",
    screenshots: [
      { title: "Dashboard Overview", desc: "Main analytics dashboard with real-time metrics" },
      { title: "Sales Reports", desc: "Detailed sales breakdown with charts" },
      { title: "Inventory Management", desc: "Product listing and stock management" }
    ]
  },
  {
    title: "NaijaSalesTracker",
    shortDesc: "Specialized sales solution for Nigerian businesses",
    description: "A specialized sales tracking solution designed specifically for Nigerian businesses. Supports local currency, Nigerian business workflows, and provides insights tailored for the local market.",
    tech: ["TypeScript", "React", "Tailwind CSS", "PostgreSQL", "REST API"],
    icon: BarChart3,
    github: "https://github.com/PhilsOnGod/NaijaSalesTracker",
    liveDemo: "https://naija-sales-tracker.lovable.app",
    color: "secondary" as const,
    features: [
      "Naira currency support",
      "Nigerian business workflows",
      "Local market insights",
      "Multi-branch support",
      "Offline-first architecture"
    ],
    challenges: "Adapting the system for Nigerian market needs including currency formatting, local payment methods, and unreliable internet connectivity.",
    solution: "Built an offline-first PWA with local storage sync and integrated local payment gateways.",
    results: "Successfully deployed to 5+ Nigerian small businesses with positive feedback on usability.",
    screenshots: [
      { title: "Local Dashboard", desc: "Dashboard with Naira currency display" },
      { title: "Branch Management", desc: "Multi-location business support" },
      { title: "Reports", desc: "Nigerian market-specific analytics" }
    ]
  },
  {
    title: "Scent By Ella",
    shortDesc: "E-commerce platform for perfume business",
    description: "A modern e-commerce platform built for a perfume business, featuring product catalog, shopping cart, secure checkout, and order management.",
    tech: ["React", "Node.js", "Stripe", "Tailwind CSS", "MySQL"],
    icon: ShoppingBag,
    github: "https://github.com/PhilsOnGod",
    liveDemo: "https://scent-by-ella.lovable.app",
    color: "accent" as const,
    features: [
      "Product catalog with filtering",
      "Shopping cart & wishlist",
      "Secure Stripe payments",
      "Order tracking system",
      "Admin product management"
    ],
    challenges: "Creating an elegant shopping experience that showcases luxury products while maintaining fast load times.",
    solution: "Used lazy loading for images, skeleton loaders, and optimized product image delivery.",
    results: "Helped the business launch online sales with a 25% increase in monthly revenue.",
    screenshots: [
      { title: "Product Catalog", desc: "Browse perfumes with elegant cards" },
      { title: "Product Details", desc: "Detailed product view with variants" },
      { title: "Checkout", desc: "Seamless payment integration" }
    ]
  },
  {
    title: "Portfolio Website",
    shortDesc: "Personal portfolio with tech-themed design",
    description: "A modern, interactive portfolio website featuring cyber/tech aesthetics, custom animations, particle backgrounds, and smooth transitions.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
    icon: Globe,
    github: "https://github.com/PhilsOnGod",
    liveDemo: "/",
    color: "primary" as const,
    features: [
      "Custom cursor effects",
      "Particle background animation",
      "Section transition effects",
      "Dark/light theme toggle",
      "Responsive design"
    ],
    challenges: "Creating immersive animations without impacting performance on lower-end devices.",
    solution: "Implemented performance-aware animations with reduced motion support and canvas optimization.",
    results: "Achieved 95+ Lighthouse performance score while maintaining rich visual effects.",
    screenshots: [
      { title: "Hero Section", desc: "Animated intro with particle effects" },
      { title: "Projects", desc: "Interactive project showcase" },
      { title: "Contact", desc: "Functional contact form" }
    ]
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();

  const getColorClasses = (color: string) => {
    switch (color) {
      case "secondary":
        return { bg: "bg-secondary/10", text: "text-secondary", border: "border-secondary/30", gradient: "bg-gradient-secondary" };
      case "accent":
        return { bg: "bg-accent/10", text: "text-accent", border: "border-accent/30", gradient: "bg-gradient-to-r from-accent to-primary" };
      default:
        return { bg: "bg-primary/10", text: "text-primary", border: "border-primary/30", gradient: "bg-gradient-primary" };
    }
  };

  return (
    <section id="projects" className="py-12 md:py-24 px-4 relative overflow-hidden">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute inset-0 bg-gradient-mesh opacity-20 pointer-events-none" />
      
      {/* Scan Line Effect */}
      <div className="scan-line" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div 
          ref={headerRef}
          className={`text-center space-y-2 md:space-y-4 mb-8 md:mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <Badge variant="outline" className="border-primary/50 text-primary px-3 py-0.5 text-xs md:text-sm animate-cyber-border">
            <Terminal className="w-3 h-3 mr-1 inline" />
            Portfolio
          </Badge>
          <h2 className="text-2xl md:text-5xl font-bold">
            Featured <span className="text-gradient-primary cyber-glow">Projects</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto">
            Click on any project to view detailed case study with features, challenges, and results
          </p>
        </div>

        {/* Mobile Horizontal Scroll */}
        <div 
          ref={gridRef}
          className={`md:hidden overflow-x-auto scrollbar-hide -mx-4 px-4 transition-all duration-700 delay-200 ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="flex gap-4 min-w-max pb-4">
            {projects.map((project, index) => {
              const Icon = project.icon;
              const colors = getColorClasses(project.color);
              
              return (
                <Card 
                  key={index}
                  className="tech-card cyber-corner overflow-hidden group cursor-pointer w-72 flex-shrink-0 animate-slide-in-bottom"
                  style={{ animationDelay: `${index * 0.15}s` }}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className={`p-4 ${colors.bg} border-b border-border/50 relative`}>
                    <div className="flex items-center gap-2 relative z-10">
                      <div className={`p-2 rounded-xl ${colors.bg} ${colors.text} border ${colors.border}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-bold text-foreground truncate">{project.title}</h3>
                        <p className="text-xs text-muted-foreground truncate">{project.shortDesc}</p>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-destructive/60" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                      <div className="w-2 h-2 rounded-full bg-green-500/60" />
                    </div>
                  </div>
                  
                  <CardContent className="p-4 space-y-3">
                    <div className="flex flex-wrap gap-1">
                      {project.tech.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className={`text-[10px] px-1.5 py-0 ${colors.border} ${colors.text}`}>
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button 
                        size="sm"
                        className={`flex-1 ${colors.gradient} text-primary-foreground text-[10px] h-7`}
                        onClick={(e) => { e.stopPropagation(); setSelectedProject(project); }}
                      >
                        <Layers className="w-3 h-3 mr-1" />
                        Details
                      </Button>
                      <Button 
                        size="sm"
                        variant="outline"
                        className={`${colors.border} text-[10px] h-7`}
                        onClick={(e) => { e.stopPropagation(); window.open(project.liveDemo, '_blank'); }}
                      >
                        <ExternalLink className="w-3 h-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Desktop Grid */}
        <div 
          className={`hidden md:grid gap-6 md:grid-cols-2 transition-all duration-700 delay-200 ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {projects.map((project, index) => {
            const Icon = project.icon;
            const colors = getColorClasses(project.color);
            
            return (
              <Card 
                key={index}
                className="tech-card cyber-corner overflow-hidden group cursor-pointer hover:scale-[1.02] transition-all duration-300 animate-slide-in-bottom"
                style={{ animationDelay: `${index * 0.15}s` }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Preview Image Area */}
                <div className={`p-4 md:p-6 ${colors.bg} border-b border-border/50 relative overflow-hidden`}>
                  <div className="flex items-center gap-3 relative z-10">
                    <div className={`p-2 md:p-3 rounded-xl ${colors.bg} ${colors.text} border ${colors.border} animate-pulse-glow`}>
                      <Icon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-bold text-foreground terminal-text">{project.title}</h3>
                      <p className="text-sm text-muted-foreground">{project.shortDesc}</p>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-2 right-2 flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  </div>
                </div>
                
                <CardContent className="p-4 md:p-6 space-y-4">
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 5).map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className={`text-[10px] md:text-xs px-2 py-0.5 ${colors.border} ${colors.text}`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Quick Features */}
                  <div className="space-y-1.5">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-foreground/70">
                        <CheckCircle className={`w-3 h-3 ${colors.text}`} />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    <Button 
                      size="sm"
                      className={`flex-1 ${colors.gradient} text-primary-foreground text-xs`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                    >
                      <Layers className="w-3 h-3 mr-1" />
                      Case Study
                    </Button>
                    <Button 
                      size="sm"
                      variant="outline"
                      className={`${colors.border} text-xs`}
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.liveDemo, '_blank');
                      }}
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Demo
                    </Button>
                    <Button 
                      size="sm"
                      variant="ghost"
                      className="text-xs"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.github, '_blank');
                      }}
                    >
                      <Github className="w-3 h-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-8 md:mt-12 text-center">
          <Button 
            variant="outline" 
            size="sm"
            className="border-primary/50 hover:bg-primary/10 animate-cyber-border"
            asChild
          >
            <a href="https://github.com/PhilsOnGod" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              View All on GitHub
            </a>
          </Button>
        </div>
      </div>

      {/* Project Detail Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-background border-primary/30">
          {selectedProject && (
            <>
              <DialogHeader className="border-b border-primary/20 pb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-xl ${getColorClasses(selectedProject.color).bg} ${getColorClasses(selectedProject.color).text}`}>
                    <selectedProject.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <DialogTitle className="text-2xl font-bold text-foreground">{selectedProject.title}</DialogTitle>
                    <DialogDescription className="text-muted-foreground">{selectedProject.shortDesc}</DialogDescription>
                  </div>
                </div>
              </DialogHeader>
              
              <div className="space-y-6 py-4">
                {/* Project Overview */}
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2 flex items-center gap-2">
                    <Globe className="w-5 h-5" /> Project Overview
                  </h4>
                  <p className="text-foreground/80 leading-relaxed">{selectedProject.description}</p>
                </div>

                {/* Screenshots Preview */}
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                    <Layers className="w-5 h-5" /> Screenshots
                  </h4>
                  <div className="grid grid-cols-3 gap-3">
                    {selectedProject.screenshots.map((screenshot, i) => (
                      <div 
                        key={i}
                        className="aspect-video bg-muted/30 rounded-lg border border-border/30 flex flex-col items-center justify-center p-3 hover:border-primary/30 transition-colors"
                      >
                        <div className={`w-8 h-8 rounded-lg ${getColorClasses(selectedProject.color).bg} ${getColorClasses(selectedProject.color).text} flex items-center justify-center mb-2`}>
                          <Code className="w-4 h-4" />
                        </div>
                        <p className="text-xs font-medium text-foreground text-center">{screenshot.title}</p>
                        <p className="text-[10px] text-muted-foreground text-center">{screenshot.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                    <Zap className="w-5 h-5" /> Key Features
                  </h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {selectedProject.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 p-2 bg-muted/20 rounded-lg border border-border/20">
                        <CheckCircle className={`w-4 h-4 ${getColorClasses(selectedProject.color).text}`} />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                    <Terminal className="w-5 h-5" /> Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, i) => (
                      <Badge 
                        key={i}
                        variant="outline" 
                        className={`${getColorClasses(selectedProject.color).border} text-foreground bg-primary/5`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Challenges & Solution */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-destructive/5 rounded-xl border border-destructive/20">
                    <h4 className="font-semibold text-destructive mb-2">Challenge</h4>
                    <p className="text-sm text-foreground/70">{selectedProject.challenges}</p>
                  </div>
                  <div className="p-4 bg-green-500/5 rounded-xl border border-green-500/20">
                    <h4 className="font-semibold text-green-500 mb-2">Solution</h4>
                    <p className="text-sm text-foreground/70">{selectedProject.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="p-4 bg-primary/5 rounded-xl border border-primary/20">
                  <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4" /> Results & Impact
                  </h4>
                  <p className="text-foreground/80">{selectedProject.results}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4 border-t border-primary/20">
                <Button 
                  className={`flex-1 ${getColorClasses(selectedProject.color).gradient} text-primary-foreground`}
                  onClick={() => window.open(selectedProject.liveDemo, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
                <Button 
                  variant="outline"
                  className="border-primary/30 hover:bg-primary/10"
                  onClick={() => window.open(selectedProject.github, '_blank')}
                >
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </Button>
                <Button 
                  variant="ghost"
                  onClick={() => setSelectedProject(null)}
                >
                  Close
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;