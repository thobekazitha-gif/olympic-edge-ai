import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Video, 
  Calendar,
  Home,
  Upload as UploadIcon,
  TrendingUp,
  ArrowLeft
} from "lucide-react";

interface AnalysisHistory {
  id: string;
  fileName: string;
  date: string;
  score: number;
  sportType: string;
  analysis: any;
}

const AllAnalyses = () => {
  const navigate = useNavigate();
  const [analyses, setAnalyses] = useState<AnalysisHistory[]>([]);

  useEffect(() => {
    // Load all analyses from localStorage
    const historyJson = localStorage.getItem('analysisHistory');
    if (historyJson) {
      const history = JSON.parse(historyJson);
      setAnalyses(history);
    }
  }, []);

  const handleViewAnalysis = (analysis: AnalysisHistory) => {
    // Store the selected analysis in sessionStorage and navigate
    sessionStorage.setItem('currentAnalysis', JSON.stringify(analysis.analysis));
    sessionStorage.setItem('videoFileName', analysis.fileName);
    navigate('/analysis');
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Navigation */}
        <div className="flex justify-between items-center mb-8">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate('/dashboard')}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Button>
          <div className="flex gap-2">
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
        </div>

        {/* Header */}
        <div className="mb-12">
          <Badge className="mb-6 px-6 py-3 bg-primary/10 border-primary/30 text-primary font-semibold">
            <Video className="w-4 h-4 mr-2" />
            Analysis History
          </Badge>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-4">
            All
            <span className="block mt-2 bg-gradient-elite bg-clip-text text-transparent">Analyses</span>
          </h1>
          <p className="text-xl text-muted-foreground font-light">
            View all your previously analyzed routines
          </p>
        </div>

        {/* Analyses List */}
        {analyses.length === 0 ? (
          <Card className="p-12 glass-strong border-border/50 text-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Video className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl font-display font-bold text-foreground mb-3">
              No Analyses Yet
            </h3>
            <p className="text-muted-foreground mb-6">
              Upload your first routine to get started with AI analysis
            </p>
            <Button 
              onClick={() => navigate('/upload')}
              className="gap-2 bg-gradient-elite shadow-glow"
            >
              <UploadIcon className="w-4 h-4" />
              Upload Routine
            </Button>
          </Card>
        ) : (
          <div className="space-y-4">
            {analyses.map((analysis) => (
              <Card 
                key={analysis.id}
                className="p-6 glass-strong border-border/50 hover:border-primary/50 transition-elite cursor-pointer group"
                onClick={() => handleViewAnalysis(analysis)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6 flex-1">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                      <Video className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-display font-bold text-foreground text-lg mb-2 truncate">
                        {analysis.fileName}
                      </h4>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {analysis.date}
                        </span>
                        <Badge variant="outline" className="text-xs">
                          {analysis.sportType}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0 ml-6">
                    <div className="text-4xl font-display font-bold bg-gradient-gold bg-clip-text text-transparent">
                      {analysis.score.toFixed(1)}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Total Score</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllAnalyses;
