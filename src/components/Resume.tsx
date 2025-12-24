import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Download, FileText, Briefcase, GraduationCap, Award, MapPin, Phone, Mail, Linkedin, Code, Globe, Terminal, X, ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Resume = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation();

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Okeke_Philip_Chidubem_Resume.pdf';
    link.click();
  };

  const handleOpenPreview = () => {
    setIsPreviewOpen(true);
  };

  const highlights = [
    { icon: Briefcase, label: "2+ Years", description: "Web Development" },
    { icon: GraduationCap, label: "B.Sc. CS", description: "Second Class Upper" },
    { icon: Award, label: "Certified", description: "Web Design" },
  ];

  const skills = [
    "HTML", "CSS", "JavaScript", "React", "Node.js", "MySQL"
  ];

  const projects = [
    { name: "Naja Sales Tracker", desc: "Sales & inventory management" },
    { name: "Scent By Ella", desc: "E-commerce with payments" },
    { name: "Portfolio Website", desc: "Personal portfolio" },
  ];

  return (
    <section id="resume" className="py-12 md:py-24 px-4 relative overflow-hidden">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div 
          ref={headerRef}
          className={`text-center space-y-2 md:space-y-4 mb-8 md:mb-12 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <Badge variant="outline" className="border-primary/50 text-primary px-3 py-0.5 text-xs md:text-sm animate-cyber-border">
            <Terminal className="w-3 h-3 mr-1 inline" />
            Resume
          </Badge>
          <h2 className="text-2xl md:text-5xl font-bold">
            Download My <span className="text-gradient-primary cyber-glow">Resume</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto">
            Get a detailed overview of my skills, experience, and qualifications
          </p>
        </div>

        <div 
          ref={cardRef}
          className={`transition-all duration-700 delay-200 ${cardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="tech-card cyber-corner rounded-2xl p-6 md:p-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6 pb-6 border-b border-primary/20">
              <div className="w-16 h-20 md:w-20 md:h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center border border-primary/30 animate-pulse-glow">
                <FileText className="w-8 h-10 md:w-10 md:h-12 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-xl md:text-2xl text-foreground terminal-text">OKEKE PHILIP CHIDUBEM</h3>
                <p className="text-primary font-medium">Full Stack Web Developer</p>
                <div className="flex flex-wrap gap-3 mt-2 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> Lagos, Nigeria
                  </span>
                  <span className="flex items-center gap-1">
                    <Phone className="w-3 h-3" /> 09075927689
                  </span>
                  <span className="flex items-center gap-1">
                    <Mail className="w-3 h-3" /> Ongod7238@gmail.com
                  </span>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-primary mb-2 flex items-center gap-2">
                <Globe className="w-4 h-4" /> Professional Summary
              </h4>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Motivated Computer Science graduate with expertise in web development, front-end and back-end programming, 
                and data management. Passionate about delivering user-friendly digital solutions.
              </p>
            </div>

            {/* Skills */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-primary mb-3 flex items-center gap-2">
                <Code className="w-4 h-4" /> Technical Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <Badge 
                    key={i}
                    variant="outline" 
                    className="border-primary/30 text-foreground bg-primary/5 hover:bg-primary/10 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="mb-6 overflow-x-auto scrollbar-hide -mx-2 px-2">
              <div className="flex gap-3 min-w-max md:min-w-0 md:grid md:grid-cols-3">
                {highlights.map((item, index) => (
                  <div 
                    key={index}
                    className="flex-shrink-0 w-32 md:w-auto text-center p-4 bg-muted/30 rounded-xl border border-border/30 hover:border-primary/30 transition-colors"
                  >
                    <item.icon className="w-5 h-5 md:w-6 md:h-6 text-primary mx-auto mb-2 animate-glow-pulse" />
                    <p className="font-medium text-foreground text-sm">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects Preview */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-primary mb-3 flex items-center gap-2">
                <Briefcase className="w-4 h-4" /> Featured Projects
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {projects.map((project, i) => (
                  <div 
                    key={i}
                    className="p-3 bg-card/50 rounded-lg border border-border/30 hover:border-primary/30 transition-colors"
                  >
                    <p className="font-medium text-sm text-foreground">{project.name}</p>
                    <p className="text-xs text-muted-foreground">{project.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Download Button */}
            <Button 
              onClick={handleOpenPreview}
              className="w-full bg-gradient-to-r from-primary via-accent to-secondary hover:opacity-90 text-primary-foreground font-medium py-6 rounded-xl shadow-glow transition-all duration-300 hover:shadow-primary/40 animate-cyber-border"
            >
              <FileText className="w-5 h-5 mr-2" />
              View Full Resume
            </Button>

            <p className="text-center text-xs text-muted-foreground mt-4">
              Click to preview • PDF download available
            </p>
          </div>
        </div>

        {/* Resume Preview Dialog */}
        <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-background border-primary/30">
            <DialogHeader className="border-b border-primary/20 pb-4">
              <DialogTitle className="text-2xl font-bold text-gradient-primary">Resume Preview</DialogTitle>
              <DialogDescription className="text-muted-foreground">
                Full resume of Okeke Philip Chidubem
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-6 py-4">
              {/* Header Section */}
              <div className="text-center border-b border-primary/20 pb-4">
                <h2 className="text-2xl font-bold text-foreground">OKEKE PHILIP CHIDUBEM</h2>
                <p className="text-primary font-medium mt-1">Full Stack Web Developer</p>
                <div className="flex flex-wrap justify-center gap-4 mt-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Lagos, Nigeria</span>
                  <span className="flex items-center gap-1"><Phone className="w-4 h-4" /> 09075927689</span>
                  <span className="flex items-center gap-1"><Mail className="w-4 h-4" /> Ongod7238@gmail.com</span>
                </div>
              </div>

              {/* Summary */}
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2 flex items-center gap-2">
                  <Globe className="w-5 h-5" /> Professional Summary
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Motivated Computer Science graduate with expertise in web development, front-end and back-end programming, 
                  and data management. Passionate about delivering user-friendly digital solutions with strong problem-solving 
                  skills and attention to detail.
                </p>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" /> Education
                </h3>
                <div className="space-y-2">
                  <div className="p-3 bg-muted/30 rounded-lg border border-border/30">
                    <p className="font-medium text-foreground">Tansian University, Umunya Anambra</p>
                    <p className="text-sm text-muted-foreground">Bachelor of Science in Computer Science</p>
                    <p className="text-sm text-primary">Second Class Upper Division • 2018 - 2023</p>
                  </div>
                  <div className="p-3 bg-muted/30 rounded-lg border border-border/30">
                    <p className="font-medium text-foreground">Information Technology Training Centre (ITC)</p>
                    <p className="text-sm text-muted-foreground">Web Design Certificate • 2024</p>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2 flex items-center gap-2">
                  <Briefcase className="w-5 h-5" /> Experience
                </h3>
                <div className="space-y-3">
                  <div className="p-3 bg-muted/30 rounded-lg border border-border/30">
                    <p className="font-medium text-foreground">Web Developer (Freelance)</p>
                    <p className="text-sm text-primary">2023 - Present</p>
                    <ul className="text-sm text-muted-foreground mt-2 list-disc list-inside space-y-1">
                      <li>Developed responsive, user-focused websites for clients</li>
                      <li>Built Naja Sales Tracker and Scent By Ella e-commerce platform</li>
                      <li>Improved site speed and SEO through optimization</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-muted/30 rounded-lg border border-border/30">
                    <p className="font-medium text-foreground">IT Technician - G&M Enterprises Ikeja</p>
                    <p className="text-sm text-primary">July 2024 - October 2024</p>
                    <ul className="text-sm text-muted-foreground mt-2 list-disc list-inside space-y-1">
                      <li>Maintained company systems and provided tech support</li>
                      <li>Assisted in basic website content updates</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2 flex items-center gap-2">
                  <Code className="w-5 h-5" /> Technical Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["HTML", "CSS", "JavaScript", "React", "TypeScript", "Node.js", "MySQL", "PHP", "WordPress", "Git", "Tailwind CSS", "Bootstrap"].map((skill, i) => (
                    <Badge key={i} variant="outline" className="border-primary/30 text-foreground bg-primary/5">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Projects */}
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2 flex items-center gap-2">
                  <Terminal className="w-5 h-5" /> Featured Projects
                </h3>
                <div className="grid gap-3">
                  <div className="p-3 bg-muted/30 rounded-lg border border-border/30">
                    <p className="font-medium text-foreground">Naja Sales Tracker</p>
                    <p className="text-sm text-muted-foreground">A sales and inventory management system with reporting features</p>
                  </div>
                  <div className="p-3 bg-muted/30 rounded-lg border border-border/30">
                    <p className="font-medium text-foreground">Scent By Ella</p>
                    <p className="text-sm text-muted-foreground">E-commerce platform with secure payment integration</p>
                  </div>
                  <div className="p-3 bg-muted/30 rounded-lg border border-border/30">
                    <p className="font-medium text-foreground">Portfolio Website</p>
                    <p className="text-sm text-muted-foreground">Personal portfolio with tech-themed design and animations</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Download Actions */}
            <div className="flex gap-3 pt-4 border-t border-primary/20">
              <Button 
                onClick={handleDownload}
                className="flex-1 bg-gradient-to-r from-primary via-accent to-secondary hover:opacity-90 text-primary-foreground"
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
              <Button 
                variant="outline"
                onClick={() => setIsPreviewOpen(false)}
                className="border-primary/30 hover:bg-primary/10"
              >
                Close
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Resume;
