import { Upload, Sparkles, Shield, Target, ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/98 to-background" />
        <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-elite/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 py-32">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <Badge className="px-6 py-3 bg-primary/10 border-primary/20 hover:bg-primary/20 transition-elite">
              <Sparkles className="w-4 h-4 mr-2 text-primary" />
              <span className="text-sm font-semibold bg-gradient-elite bg-clip-text text-transparent">
                Powered by Olympic-Grade AI Technology
              </span>
            </Badge>
          </div>
          
          {/* Main Headline */}
          <div className="text-center space-y-8 mb-12">
            <h1 className="text-6xl md:text-8xl font-display font-bold text-foreground leading-[0.95] tracking-tight animate-slide-up">
              Train Like a
              <span className="block mt-2 bg-gradient-elite bg-clip-text text-transparent">
                Champion
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Elite AI-powered video analysis that transforms every routine into Olympic-level performance. 
              Real-time scoring, biomechanical insights, and injury prevention used by champions worldwide.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="group relative gap-3 bg-gradient-elite hover:opacity-90 shadow-glow-elite text-lg h-16 px-10 font-semibold transition-elite overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-elite opacity-0 group-hover:opacity-100 transition-opacity" />
              <Upload className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Upload Your Routine</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="gap-3 glass-strong hover:bg-secondary/60 text-lg h-16 px-10 font-semibold border-border/50 hover:border-primary/50 transition-elite group"
            >
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Watch Demo Analysis
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <Card className="group p-8 glass-strong border-border/50 hover:border-primary/50 transition-elite hover:shadow-glow cursor-pointer">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Target className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">AI Scoring Engine</h3>
              <p className="text-muted-foreground leading-relaxed">
                Olympic-standard precision scoring that predicts execution scores with 95% accuracy before competition
              </p>
            </Card>

            <Card className="group p-8 glass-strong border-border/50 hover:border-success/50 transition-elite hover:shadow-float cursor-pointer">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-success/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-success/20 to-success/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-success" />
                </div>
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Injury Prevention</h3>
              <p className="text-muted-foreground leading-relaxed">
                Real-time biomechanical analysis detects dangerous movement patterns before injuries occur
              </p>
            </Card>

            <Card className="group p-8 glass-strong border-border/50 hover:border-accent/50 transition-elite hover:shadow-gold cursor-pointer">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Sparkles className="w-8 h-8 text-accent" />
                </div>
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Elite Benchmarks</h3>
              <p className="text-muted-foreground leading-relaxed">
                Compare performance against Olympic champions with frame-by-frame technique analysis
              </p>
            </Card>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-success" />
              <span className="font-medium">Trusted by 500+ Elite Athletes</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-success" />
              <span className="font-medium">95% Scoring Accuracy</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-success" />
              <span className="font-medium">Real-Time Analysis</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
