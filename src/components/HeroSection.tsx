import { Upload, Sparkles, Shield, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Powered by Olympic-Grade AI</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Train Like a
            <span className="block bg-gradient-elite bg-clip-text text-transparent">
              Champion
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            AI-powered video analysis that transforms every routine into Olympic-level performance. 
            Real-time scoring, injury prevention, and personalized coaching feedback.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2 bg-gradient-elite hover:opacity-90 shadow-glow text-lg h-14 px-8">
              <Upload className="w-5 h-5" />
              Upload Routine
            </Button>
            <Button size="lg" variant="outline" className="gap-2 text-lg h-14 px-8 border-border hover:bg-secondary">
              View Demo Analysis
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
            <Card className="p-6 bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">AI Scoring Engine</h3>
              <p className="text-sm text-muted-foreground">
                Predict execution scores with Olympic-standard precision before competition
              </p>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur border-border hover:border-success/50 transition-all group">
              <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center mb-4 group-hover:bg-success/20 transition-colors">
                <Shield className="w-6 h-6 text-success" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Injury Prevention</h3>
              <p className="text-sm text-muted-foreground">
                Real-time biomechanical analysis detects dangerous patterns before injury occurs
              </p>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur border-border hover:border-accent/50 transition-all group">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Sparkles className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Form Analysis</h3>
              <p className="text-sm text-muted-foreground">
                Frame-by-frame technique comparison with elite athlete benchmarks
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
