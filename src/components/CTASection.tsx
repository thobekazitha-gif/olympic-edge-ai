import { Button } from "@/components/ui/button";
import { ArrowRight, Medal } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-performance relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-elite shadow-glow mb-4">
            <Medal className="w-10 h-10 text-white" />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-foreground">
            Ready to Train Like an
            <span className="block bg-gradient-gold bg-clip-text text-transparent">
              Olympic Champion?
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join elite athletes worldwide using AI-powered video analysis to reach peak performance. 
            Upload your first routine and discover what Olympic-level coaching feels like.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              className="gap-2 bg-gradient-elite hover:opacity-90 shadow-glow text-lg h-14 px-8"
            >
              Start Free Analysis
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="gap-2 text-lg h-14 px-8 border-border hover:bg-secondary"
            >
              Schedule Demo
            </Button>
          </div>

          <div className="pt-8 flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-success" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-success" />
              <span>Olympic-grade accuracy</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-success" />
              <span>Instant results</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
