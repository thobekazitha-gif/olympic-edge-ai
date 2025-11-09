import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Award, Target, Calendar } from "lucide-react";

const Progress = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <Badge className="mb-6 px-6 py-3 bg-success/10 border-success/30 text-success font-semibold">
            <TrendingUp className="w-4 h-4 mr-2" />
            Progress Tracking
          </Badge>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-4">
            Your
            <span className="block mt-2 bg-gradient-elite bg-clip-text text-transparent">Journey</span>
          </h1>
          <p className="text-xl text-muted-foreground font-light">Track your improvement over time</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2 p-8 glass-strong border-border/50">
            <h3 className="font-display font-bold text-foreground text-xl mb-6">Score Progression</h3>
            <div className="h-64 flex items-end justify-between gap-4">
              {[13.2, 13.8, 14.1, 13.9, 14.5, 14.8, 15.0].map((score, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                  <div 
                    className="w-full bg-gradient-elite rounded-t-lg transition-all hover:opacity-80 cursor-pointer"
                    style={{ height: `${(score / 15) * 100}%` }}
                  />
                  <span className="text-xs text-muted-foreground font-medium">{score}</span>
                </div>
              ))}
            </div>
          </Card>

          <div className="space-y-6">
            <Card className="p-6 glass-strong border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-display font-bold text-foreground">Best Score</h3>
              </div>
              <div className="text-4xl font-display font-bold bg-gradient-gold bg-clip-text text-transparent mb-2">15.0</div>
              <p className="text-sm text-muted-foreground">Floor Exercise</p>
            </Card>

            <Card className="p-6 glass-strong border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-bold text-foreground">Goal</h3>
              </div>
              <div className="text-4xl font-display font-bold text-foreground mb-2">15.5</div>
              <p className="text-sm text-muted-foreground">Target for Nationals</p>
            </Card>

            <Card className="p-6 glass-strong border-success/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-success" />
                </div>
                <h3 className="font-display font-bold text-foreground">Streak</h3>
              </div>
              <div className="text-4xl font-display font-bold text-foreground mb-2">12</div>
              <p className="text-sm text-muted-foreground">Days training</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
