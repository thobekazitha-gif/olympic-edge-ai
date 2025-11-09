import { useState, useEffect } from "react";
import CoachChat from "@/components/CoachChat";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Maximize2,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle2,
  Activity,
  Target,
  Zap,
  Download,
  Share2
} from "lucide-react";

const Analysis = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(42);
  const [analysis, setAnalysis] = useState<any>(null);
  const [videoFileName, setVideoFileName] = useState('');

  useEffect(() => {
    // Load analysis from sessionStorage
    const storedAnalysis = sessionStorage.getItem('currentAnalysis');
    const storedFileName = sessionStorage.getItem('videoFileName');
    
    if (storedAnalysis) {
      setAnalysis(JSON.parse(storedAnalysis));
    }
    if (storedFileName) {
      setVideoFileName(storedFileName);
    }
  }, []);

  // Use analysis data or fallback to demo data
  const displayData = analysis || {
    sportType: "Floor Exercise - Female Artistic Gymnastics",
    difficulty: 6.2,
    execution: 8.6,
    totalScore: 14.8,
    deductions: [
      {
        type: "Landing Instability",
        severity: "moderate",
        points: -0.3,
        description: "Step detected on dismount. Hip angle 138° indicates compensation pattern.",
        timestamp: "5.4s"
      },
      {
        type: "Form Break",
        severity: "minor",
        points: -0.1,
        description: "Minor knee bend detected on element 4. Recommend strength training.",
        timestamp: "3.2s"
      }
    ],
    strengths: [
      "Perfect execution on aerial elements",
      "Excellent body alignment throughout routine",
      "Strong difficulty score potential",
      "Consistent landing technique"
    ],
    biomechanics: {
      kneeAngle: "142°",
      formScore: "98%",
      airTime: "1.2s",
      hipExtension: "178°"
    }
  };

  return (
    <>
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-12">
          <div>
            <Badge className="mb-4 px-6 py-3 bg-success/10 border-success/30 text-success font-semibold">
              <Activity className="w-4 h-4 mr-2" />
              Analysis Complete
            </Badge>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-4">
              Routine
              <span className="block mt-2 bg-gradient-gold bg-clip-text text-transparent">Analysis</span>
            </h1>
            <p className="text-xl text-muted-foreground font-light">{displayData.sportType}</p>
            {videoFileName && (
              <Badge variant="outline" className="mt-2">
                {videoFileName}
              </Badge>
            )}
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="gap-2 glass-strong">
              <Share2 className="w-4 h-4" />
              Share
            </Button>
            <Button className="gap-2 bg-gradient-elite shadow-glow">
              <Download className="w-4 h-4" />
              Export Report
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Video Player */}
          <div className="lg:col-span-3 space-y-6">
            <Card className="p-6 glass-strong border-border/50 shadow-brutal">
              <div className="aspect-video bg-gradient-to-br from-secondary via-secondary/80 to-secondary rounded-xl mb-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
                
                {/* Skeleton Overlay Visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl" />
                      <Activity className="w-24 h-24 text-primary mx-auto opacity-60 relative animate-pulse" />
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">Pose Detection Active</p>
                  </div>
                </div>
                
                {/* AI Overlay */}
                <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                  <Badge className="glass-strong border-success/50 text-success font-semibold shadow-lg">
                    <div className="w-2 h-2 rounded-full bg-success animate-pulse mr-2" />
                    23 Keypoints Tracked
                  </Badge>
                  <Badge className="glass-strong border-primary/50 text-primary font-semibold shadow-lg">
                    <Target className="w-3 h-3 mr-1" />
                    Landing Phase
                  </Badge>
                </div>

                {/* Progress Bar */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="glass-strong px-4 py-3 rounded-lg shadow-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-muted-foreground">Frame 247 / 580</span>
                      <span className="text-xs font-semibold text-primary">2.4s / 5.8s</span>
                    </div>
                    <Progress value={progress} className="h-1.5 bg-secondary/50" />
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button size="icon" variant="ghost" className="hover:bg-secondary/60">
                    <SkipBack className="w-4 h-4" />
                  </Button>
                  <Button 
                    size="icon" 
                    className="bg-gradient-elite shadow-glow"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </Button>
                  <Button size="icon" variant="ghost" className="hover:bg-secondary/60">
                    <SkipForward className="w-4 h-4" />
                  </Button>
                </div>

                <div className="flex items-center gap-4">
                  <select className="text-xs bg-secondary/60 border border-border/50 rounded-lg px-3 py-2 font-medium">
                    <option>0.25x</option>
                    <option>0.5x</option>
                    <option selected>1.0x</option>
                    <option>1.5x</option>
                    <option>2.0x</option>
                  </select>
                  <Button size="icon" variant="ghost" className="hover:bg-secondary/60">
                    <Maximize2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>

            {/* Biomechanics */}
            <Card className="p-6 glass-strong border-border/50">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display font-bold text-foreground text-lg">Biomechanical Metrics</h3>
                <Badge variant="outline" className="border-success text-success">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  Optimal Range
                </Badge>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-5 rounded-xl glass border border-border/30">
                  <div className="text-3xl font-display font-bold text-foreground mb-1">{displayData.biomechanics.kneeAngle}</div>
                  <div className="text-xs text-muted-foreground font-medium">Knee Angle</div>
                </div>
                <div className="text-center p-5 rounded-xl glass border border-border/30">
                  <div className="text-3xl font-display font-bold text-foreground mb-1">{displayData.biomechanics.formScore}</div>
                  <div className="text-xs text-muted-foreground font-medium">Form Score</div>
                </div>
                <div className="text-center p-5 rounded-xl glass border border-border/30">
                  <div className="text-3xl font-display font-bold text-foreground mb-1">{displayData.biomechanics.airTime}</div>
                  <div className="text-xs text-muted-foreground font-medium">Air Time</div>
                </div>
                <div className="text-center p-5 rounded-xl glass border border-border/30">
                  <div className="text-3xl font-display font-bold text-foreground mb-1">{displayData.biomechanics.hipExtension}</div>
                  <div className="text-xs text-muted-foreground font-medium">Hip Ext.</div>
                </div>
              </div>
            </Card>
          </div>

          {/* Analysis Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Score Card */}
            <Card className="p-8 glass-strong border-border/50 hover:border-primary/50 transition-elite shadow-float">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-display font-bold text-foreground text-lg mb-1">Predicted Score</h3>
                  <p className="text-xs text-muted-foreground font-medium">FIG Criteria Standard</p>
                </div>
                <Target className="w-6 h-6 text-primary" />
              </div>
              
              <div className="flex items-end gap-4 mb-8">
                <div className="text-7xl font-display font-bold bg-gradient-gold bg-clip-text text-transparent">
                  {displayData.totalScore.toFixed(1)}
                </div>
                <div className="pb-3 flex items-center gap-2 px-4 py-2 rounded-lg bg-success/10 border border-success/20">
                  <TrendingUp className="w-5 h-5 text-success" />
                  <span className="text-lg font-bold text-success">+0.3</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 bg-gradient-to-br from-secondary/80 to-secondary/40 rounded-xl border border-border/30">
                  <div className="text-xs text-muted-foreground mb-2 font-semibold uppercase tracking-wide">Difficulty</div>
                  <div className="text-4xl font-display font-bold text-foreground">{displayData.difficulty.toFixed(1)}</div>
                </div>
                <div className="p-5 bg-gradient-to-br from-secondary/80 to-secondary/40 rounded-xl border border-border/30">
                  <div className="text-xs text-muted-foreground mb-2 font-semibold uppercase tracking-wide">Execution</div>
                  <div className="text-4xl font-display font-bold text-foreground">{displayData.execution.toFixed(1)}</div>
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
                {displayData.deductions.map((deduction: any, index: number) => (
                  <div 
                    key={index}
                    className={`p-4 ${
                      deduction.severity === 'major' ? 'bg-destructive/5 border-destructive/20' :
                      deduction.severity === 'moderate' ? 'bg-destructive/5 border-destructive/20' :
                      'bg-warning/5 border-warning/20'
                    } border rounded-lg hover:bg-opacity-80 transition-colors cursor-pointer`}
                  >
                    <div className="flex items-start gap-3">
                      {deduction.severity === 'major' || deduction.severity === 'moderate' ? (
                        <TrendingDown className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                      ) : (
                        <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                      )}
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-semibold text-foreground">{deduction.type}</span>
                          <span className={`text-sm font-bold ${
                            deduction.severity === 'major' || deduction.severity === 'moderate' ? 'text-destructive' : 'text-warning'
                          }`}>
                            {deduction.points}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">{deduction.description}</p>
                        {deduction.timestamp && (
                          <Badge variant="outline" className="mt-2 text-xs">
                            @ {deduction.timestamp}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Strengths */}
            <Card className="p-6 glass-strong border-success/30">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                </div>
                <h3 className="font-display font-bold text-foreground">Performance Highlights</h3>
              </div>
              
              <div className="space-y-3">
                {displayData.strengths.map((strength: string, index: number) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-success/5 transition-colors">
                    <Zap className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-sm text-foreground font-medium">{strength}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
    <CoachChat analysisContext={displayData} />
    </>
  );
};

export default Analysis;
