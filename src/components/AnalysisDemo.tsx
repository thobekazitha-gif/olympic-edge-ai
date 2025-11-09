import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  CheckCircle2,
  Activity,
  Target,
  Zap
} from "lucide-react";

const AnalysisDemo = () => {
  return (
    <section className="py-24 bg-gradient-performance">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Real-Time Performance Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Watch how our AI analyzes every movement, predicting scores and preventing injuries
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Video Player Mockup */}
          <Card className="p-6 bg-card border-border shadow-card">
            <div className="aspect-video bg-secondary rounded-lg mb-4 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <Activity className="w-16 h-16 text-primary mx-auto opacity-50" />
                  <p className="text-sm text-muted-foreground">Video Analysis Area</p>
                </div>
              </div>
              
              {/* Skeleton overlay indicator */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-2 bg-background/90 backdrop-blur px-3 py-2 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                  <span className="text-xs font-medium text-foreground">AI Analysis Active</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Frame 247 / 580</span>
                <Badge variant="outline" className="border-primary text-primary">
                  Analyzing Landing
                </Badge>
              </div>
              <Progress value={42} className="h-2" />
            </div>
          </Card>

          {/* Analysis Results */}
          <div className="space-y-4">
            {/* Predicted Score */}
            <Card className="p-6 bg-card border-border shadow-card hover:border-primary/50 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Predicted Score</h3>
                  <p className="text-xs text-muted-foreground">Based on FIG criteria</p>
                </div>
                <Target className="w-5 h-5 text-primary" />
              </div>
              
              <div className="flex items-end gap-4 mb-4">
                <div className="text-5xl font-bold bg-gradient-gold bg-clip-text text-transparent">
                  14.8
                </div>
                <div className="pb-2 flex items-center gap-1 text-success">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-medium">+0.3</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-secondary rounded-lg">
                  <div className="text-xs text-muted-foreground mb-1">Difficulty</div>
                  <div className="text-2xl font-bold text-foreground">6.2</div>
                </div>
                <div className="p-3 bg-secondary rounded-lg">
                  <div className="text-xs text-muted-foreground mb-1">Execution</div>
                  <div className="text-2xl font-bold text-foreground">8.6</div>
                </div>
              </div>
            </Card>

            {/* Deductions */}
            <Card className="p-6 bg-card border-border shadow-card">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="w-5 h-5 text-warning" />
                <h3 className="font-semibold text-foreground">Detected Deductions</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
                  <TrendingDown className="w-4 h-4 text-destructive mt-0.5" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-foreground">Landing Instability</span>
                      <span className="text-sm font-bold text-destructive">-0.3</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Step on dismount, hip angle 138°</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-warning/10 border border-warning/20 rounded-lg">
                  <AlertTriangle className="w-4 h-4 text-warning mt-0.5" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-foreground">Form Break</span>
                      <span className="text-sm font-bold text-warning">-0.1</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Slight knee bend on element 4</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Strengths */}
            <Card className="p-6 bg-card border-border shadow-card border-success/30">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-5 h-5 text-success" />
                <h3 className="font-semibold text-foreground">Performance Highlights</h3>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-success" />
                  <span className="text-sm text-foreground">Perfect execution on aerial elements</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-success" />
                  <span className="text-sm text-foreground">Excellent body alignment throughout routine</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-success" />
                  <span className="text-sm text-foreground">Strong difficulty score potential</span>
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
