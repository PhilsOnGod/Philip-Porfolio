import { Button } from "@/components/ui/button";
import { Download, FileText, Briefcase, GraduationCap, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Resume = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation();

  const handleDownload = () => {
    // Create a link to download the resume PDF
    // Replace '/resume.pdf' with your actual resume file path
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    
    link.download = 'Philip_Okeke_Resume.pdf';

    link.click();
  };

  const highlights = [
    { icon: Briefcase, label: "3+ Years Experience", description: "Web Development" },
    { icon: GraduationCap, label: "Computer Science", description: "Background" },
    { icon: Award, label: "10+ Projects", description: "Completed" },
  ];

  return (
    <section id="resume" className="py-12 md:py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div 
          ref={headerRef}
          className={`text-center mb-8 md:mb-12 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Resume
            </span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
            Download my resume to learn more about my experience and qualifications
          </p>
        </div>

        <div 
          ref={cardRef}
          className={`max-w-2xl mx-auto transition-all duration-700 delay-200 ${cardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8 shadow-elegant">
            {/* Document Preview */}
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border/50">
              <div className="w-16 h-20 md:w-20 md:h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center border border-primary/30">
                <FileText className="w-8 h-10 md:w-10 md:h-12 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground text-lg md:text-xl">Philip Obaji</h3>
                <p className="text-muted-foreground text-sm">Full Stack Developer</p>
                <p className="text-xs text-muted-foreground/70 mt-1">PDF • Updated Dec 2024</p>
              </div>
            </div>

            {/* Highlights - Horizontal scroll on mobile */}
            <div className="mb-6 overflow-x-auto scrollbar-hide -mx-2 px-2">
              <div className="flex gap-3 min-w-max md:min-w-0 md:grid md:grid-cols-3">
                {highlights.map((item, index) => (
                  <div 
                    key={index}
                    className="flex-shrink-0 w-32 md:w-auto text-center p-3 md:p-4 bg-muted/30 rounded-xl border border-border/30"
                  >
                    <item.icon className="w-5 h-5 md:w-6 md:h-6 text-primary mx-auto mb-2" />
                    <p className="font-medium text-foreground text-xs md:text-sm">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Download Button */}
            <Button 
              onClick={handleDownload}
              className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground font-medium py-6 rounded-xl shadow-glow transition-all duration-300 hover:shadow-primary/40"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>

            <p className="text-center text-xs text-muted-foreground mt-4">
              Click to download my complete resume in PDF format
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
