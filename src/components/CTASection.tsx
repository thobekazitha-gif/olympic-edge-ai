import { Button } from "@/components/ui/button";
import { ArrowRight, Medal, Sparkles, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const CTASection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/10 via-elite/10 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <Card className="max-w-5xl mx-auto p-12 md:p-16 glass-strong border-border/50 shadow-brutal">
          <div className="text-center space-y-10">
            <div className="inline-flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-elite rounded-3xl blur-2xl animate-glow" />
                <div className="relative w-24 h-24 rounded-3xl bg-gradient-elite shadow-glow-elite flex items-center justify-center">
                  <Medal className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-5xl md:text-7xl font-display font-bold text-foreground leading-tight">
                Ready to Train Like an
                <span className="block mt-3 bg-gradient-gold bg-clip-text text-transparent">
                  Olympic Champion?
                </span>
              </h2>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
                Join elite athletes worldwide using AI-powered video analysis to reach peak performance. 
                Upload your first routine and discover what Olympic-level coaching feels like.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 justify-center pt-6">
              <Button 
                size="lg" 
                className="group gap-3 bg-gradient-elite hover:opacity-90 shadow-glow-elite text-lg h-16 px-12 font-bold transition-elite"
              >
                <Sparkles className="w-5 h-5" />
                Start Free Analysis
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="gap-3 glass-strong hover:bg-secondary/60 text-lg h-16 px-12 font-bold border-border/50 hover:border-primary/50 transition-elite"
              >
                Schedule Pro Demo
              </Button>
            </div>

            <div className="pt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl glass border-border/30">
                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                <span className="text-sm font-semibold text-foreground">No credit card required</span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl glass border-border/30">
                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                <span className="text-sm font-semibold text-foreground">Olympic-grade accuracy</span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl glass border-border/30">
                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                <span className="text-sm font-semibold text-foreground">Instant AI results</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;
