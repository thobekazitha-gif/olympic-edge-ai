import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  CheckCircle2,
  Activity,
  Target,
  Zap,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Maximize2
} from "lucide-react";

const AnalysisDemo = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <Badge className="mb-6 px-6 py-3 bg-elite/10 border-elite/30 text-elite font-semibold">
            <Activity className="w-4 h-4 mr-2" />
            Live Demo
          </Badge>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
            Real-Time Performance
            <span className="block mt-2 bg-gradient-gold bg-clip-text text-transparent">Insights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
            Watch how our AI analyzes every movement with millisecond precision, predicting scores and preventing injuries
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Video Player */}
          <div className="lg:col-span-3 space-y-6">
            <Card className="p-6 glass-strong border-border/50 shadow-brutal group hover:border-primary/30 transition-elite">
              <div className="aspect-video bg-gradient-to-br from-secondary via-secondary/80 to-secondary rounded-xl mb-6 relative overflow-hidden group-hover:shadow-glow transition-all">
                <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl" />
                      <Activity className="w-24 h-24 text-primary mx-auto opacity-60 relative animate-pulse" />
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">AI Analysis Ready</p>
                    <Button className="bg-gradient-elite hover:opacity-90 shadow-glow font-semibold">
                      <Play className="w-4 h-4 mr-2" />
                      Start Analysis
                    </Button>
                  </div>
                </div>
                
                {/* AI Overlay Indicators */}
                <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                  <Badge className="glass-strong border-success/50 text-success font-semibold shadow-lg">
                    <div className="w-2 h-2 rounded-full bg-success animate-pulse mr-2" />
                    AI Tracking Active
                  </Badge>
                  <Badge className="glass-strong border-primary/50 text-primary font-semibold shadow-lg">
                    <Target className="w-3 h-3 mr-1" />
                    23 Points Detected
                  </Badge>
                </div>

                {/* Bottom Info Bar */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="glass-strong px-4 py-3 rounded-lg shadow-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-muted-foreground">Frame 247 / 580</span>
                      <Badge variant="outline" className="border-elite text-elite text-xs font-bold">
                        Analyzing Landing Phase
                      </Badge>
                    </div>
                    <Progress value={42} className="h-1.5 bg-secondary/50" />
                  </div>
                </div>
              </div>

              {/* Video Controls */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button size="icon" variant="ghost" className="hover:bg-secondary/60">
                    <SkipBack className="w-4 h-4" />
                  </Button>
                  <Button size="icon" className="bg-gradient-elite shadow-glow">
                    <Pause className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="ghost" className="hover:bg-secondary/60">
                    <SkipForward className="w-4 h-4" />
                  </Button>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground font-medium">1.0x</span>
                  <Button size="icon" variant="ghost" className="hover:bg-secondary/60">
                    <Maximize2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>

            {/* Pose Skeleton Info */}
            <Card className="p-6 glass-strong border-border/50">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-bold text-foreground">Biomechanical Analysis</h3>
                <Badge variant="outline" className="border-success text-success">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  Optimal
                </Badge>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-lg bg-secondary/50">
                  <div className="text-2xl font-display font-bold text-foreground mb-1">142°</div>
                  <div className="text-xs text-muted-foreground font-medium">Knee Angle</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-secondary/50">
                  <div className="text-2xl font-display font-bold text-foreground mb-1">98%</div>
                  <div className="text-xs text-muted-foreground font-medium">Form Score</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-secondary/50">
                  <div className="text-2xl font-display font-bold text-foreground mb-1">1.2s</div>
                  <div className="text-xs text-muted-foreground font-medium">Air Time</div>
                </div>
              </div>
            </Card>
          </div>

          {/* Analysis Results */}
          <div className="lg:col-span-2 space-y-6">
            {/* Predicted Score */}
            <Card className="p-8 glass-strong border-border/50 hover:border-primary/50 transition-elite shadow-float group">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-display font-bold text-foreground text-lg mb-1">Predicted Score</h3>
                  <p className="text-xs text-muted-foreground font-medium">FIG Criteria Standard</p>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-lg blur-xl group-hover:blur-2xl transition-all" />
                  <Target className="w-6 h-6 text-primary relative" />
                </div>
              </div>
              
              <div className="flex items-end gap-4 mb-8">
                <div className="text-6xl font-display font-bold bg-gradient-gold bg-clip-text text-transparent">
                  14.8
                </div>
                <div className="pb-3 flex items-center gap-2 px-3 py-1 rounded-lg bg-success/10 border border-success/20">
                  <TrendingUp className="w-5 h-5 text-success" />
                  <span className="text-lg font-bold text-success">+0.3</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 bg-gradient-to-br from-secondary/80 to-secondary/40 rounded-xl border border-border/30">
                  <div className="text-xs text-muted-foreground mb-2 font-semibold">Difficulty</div>
                  <div className="text-3xl font-display font-bold text-foreground">6.2</div>
                </div>
                <div className="p-5 bg-gradient-to-br from-secondary/80 to-secondary/40 rounded-xl border border-border/30">
                  <div className="text-xs text-muted-foreground mb-2 font-semibold">Execution</div>
                  <div className="text-3xl font-display font-bold text-foreground">8.6</div>
                </div>
              </div>
            </Card>

            {/* Deductions */}
            <Card className="p-6 glass-strong border-border/50">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-warning" />
                </div>
                <h3 className="font-display font-bold text-foreground">Detected Issues</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-4 bg-destructive/5 border border-destructive/20 rounded-lg hover:bg-destructive/10 transition-colors">
                  <TrendingDown className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-foreground">Landing Instability</span>
                      <span className="text-sm font-bold text-destructive">-0.3</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">Step detected on dismount. Hip angle 138° indicates compensation pattern.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-warning/5 border border-warning/20 rounded-lg hover:bg-warning/10 transition-colors">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-foreground">Form Break</span>
                      <span className="text-sm font-bold text-warning">-0.1</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">Minor knee bend detected on element 4. Recommend strength training.</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Strengths */}
            <Card className="p-6 glass-strong border-success/30">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                </div>
                <h3 className="font-display font-bold text-foreground">Highlights</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-success/5 transition-colors">
                  <Zap className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-sm text-foreground font-medium">Perfect execution on aerial elements</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-success/5 transition-colors">
                  <Zap className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-sm text-foreground font-medium">Excellent body alignment throughout</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-success/5 transition-colors">
                  <Zap className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-sm text-foreground font-medium">Strong difficulty score potential</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalysisDemo;
