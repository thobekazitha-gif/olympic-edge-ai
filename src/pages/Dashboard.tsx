import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Award, 
  Video, 
  Calendar,
  Target,
  Zap,
  Activity,
  Home,
  Upload as UploadIcon
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  
  // Load recent analyses from localStorage
  const getRecentAnalyses = () => {
    const historyJson = localStorage.getItem('analysisHistory');
    if (historyJson) {
      const history = JSON.parse(historyJson);
      return history.slice(0, 3); // Get last 3
    }
    return [
      { id: '1', fileName: "Floor Exercise", date: "2 hours ago", score: 14.8, trend: "+0.3" },
      { id: '2', fileName: "Vault - Practice", date: "1 day ago", score: 15.2, trend: "+0.5" },
      { id: '3', fileName: "Beam Routine", date: "3 days ago", score: 14.1, trend: "-0.2" },
    ];
  };

  const recentAnalyses = getRecentAnalyses();

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Navigation */}
        <div className="flex justify-end gap-2 mb-8">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate('/')}
            className="gap-2"
          >
            <Home className="w-4 h-4" />
            Home
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate('/upload')}
            className="gap-2"
          >
            <UploadIcon className="w-4 h-4" />
            Upload
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate('/progress')}
            className="gap-2"
          >
            <TrendingUp className="w-4 h-4" />
            Progress
          </Button>
        </div>

        {/* Header */}
        <div className="mb-12">
          <Badge className="mb-6 px-6 py-3 bg-primary/10 border-primary/30 text-primary font-semibold">
            <Activity className="w-4 h-4 mr-2" />
            Performance Dashboard
          </Badge>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-4">
            Your
            <span className="block mt-2 bg-gradient-elite bg-clip-text text-transparent">Performance</span>
          </h1>
          <p className="text-xl text-muted-foreground font-light">Track your progress and analyze your routines</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 glass-strong border-border/50 hover:border-primary/50 transition-elite">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Video className="w-6 h-6 text-primary" />
              </div>
              <TrendingUp className="w-5 h-5 text-success" />
            </div>
            <div className="text-3xl font-display font-bold text-foreground mb-1">24</div>
            <div className="text-sm text-muted-foreground font-medium">Total Analyses</div>
          </Card>

          <Card className="p-6 glass-strong border-border/50 hover:border-success/50 transition-elite">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
                <Award className="w-6 h-6 text-success" />
              </div>
              <TrendingUp className="w-5 h-5 text-success" />
            </div>
            <div className="text-3xl font-display font-bold text-foreground mb-1">14.8</div>
            <div className="text-sm text-muted-foreground font-medium">Average Score</div>
          </Card>

          <Card className="p-6 glass-strong border-border/50 hover:border-accent/50 transition-elite">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <TrendingUp className="w-5 h-5 text-success" />
            </div>
            <div className="text-3xl font-display font-bold text-foreground mb-1">95%</div>
            <div className="text-sm text-muted-foreground font-medium">Accuracy</div>
          </Card>

          <Card className="p-6 glass-strong border-border/50 hover:border-elite/50 transition-elite">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-elite/10 flex items-center justify-center">
                <Zap className="w-6 h-6 text-elite" />
              </div>
              <TrendingUp className="w-5 h-5 text-success" />
            </div>
            <div className="text-3xl font-display font-bold text-foreground mb-1">+0.4</div>
            <div className="text-sm text-muted-foreground font-medium">This Month</div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Analyses */}
          <div className="lg:col-span-2">
            <Card className="p-6 glass-strong border-border/50">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display font-bold text-foreground text-xl">Recent Analyses</h3>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="glass"
                  onClick={() => navigate('/all-analyses')}
                >
                  View All
                </Button>
              </div>
              
              <div className="space-y-4">
                {recentAnalyses.map((analysis) => (
                  <div 
                    key={analysis.id}
                    className="flex items-center justify-between p-5 rounded-xl glass border border-border/30 hover:border-primary/50 transition-elite cursor-pointer group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Video className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{analysis.fileName || analysis.title}</h4>
                        <p className="text-xs text-muted-foreground flex items-center gap-2">
                          <Calendar className="w-3 h-3" />
                          {analysis.date}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-display font-bold bg-gradient-gold bg-clip-text text-transparent">
                        {analysis.score}
                      </div>
                      <div className={`text-sm font-semibold ${
                        analysis.trend.startsWith('+') ? 'text-success' : 'text-destructive'
                      }`}>
                        {analysis.trend}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <Card className="p-6 glass-strong border-border/50">
              <h3 className="font-display font-bold text-foreground text-xl mb-6">Quick Actions</h3>
              <div className="space-y-3">
                <Button 
                  onClick={() => navigate('/upload')}
                  className="w-full justify-start gap-3 bg-gradient-elite shadow-glow h-12"
                >
                  <Video className="w-5 h-5" />
                  Upload New Routine
                </Button>
                <Button 
                  onClick={() => navigate('/progress')}
                  variant="outline" 
                  className="w-full justify-start gap-3 glass h-12"
                >
                  <TrendingUp className="w-5 h-5" />
                  View Progress
                </Button>
              </div>
            </Card>

            <Card className="p-6 glass-strong border-success/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-success" />
                </div>
                <h3 className="font-display font-bold text-foreground">Pro Tip</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Upload routines regularly to track improvement trends. AI learns your movement patterns better with more data.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
