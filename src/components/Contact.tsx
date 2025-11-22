import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Let&apos;s Build <span className="bg-gradient-primary bg-clip-text text-transparent">Something Great</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Available for freelance opportunities and collaborations. Let&apos;s create something amazing together.
          </p>
        </div>

        <Card className="border-border bg-card/50 backdrop-blur">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center space-y-2">
                <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary mb-3">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg">Email</h3>
                <a 
                  href="mailto:ongod7238@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors block"
                >
                  ongod7238@gmail.com
                </a>
              </div>

              <div className="text-center space-y-2">
                <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary mb-3">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg">Location</h3>
                <p className="text-muted-foreground">
                  Available Worldwide
                </p>
              </div>

              <div className="text-center space-y-2">
                <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary mb-3">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg">Status</h3>
                <p className="text-muted-foreground">
                  Open to Opportunities
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <Button 
                size="lg"
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-12"
                asChild
              >
                <a href="mailto:ongod7238@gmail.com">
                  Start a Conversation
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-12 text-muted-foreground">
          <p>© 2024 Okeke Philip Chidubem. Built with passion and precision.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;