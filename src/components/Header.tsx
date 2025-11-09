import { Medal, Video, BarChart3, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-elite flex items-center justify-center">
            <Medal className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-foreground">Olympic Edge</h1>
            <p className="text-xs text-muted-foreground">AI Performance Coach</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-1">
          <Button variant="ghost" size="sm" className="gap-2">
            <Video className="w-4 h-4" />
            Analysis
          </Button>
          <Button variant="ghost" size="sm" className="gap-2">
            <BarChart3 className="w-4 h-4" />
            Dashboard
          </Button>
          <Button variant="ghost" size="sm" className="gap-2">
            <TrendingUp className="w-4 h-4" />
            Progress
          </Button>
        </nav>

        <Button size="sm" className="bg-gradient-elite hover:opacity-90 transition-opacity shadow-glow">
          Start Analysis
        </Button>
      </div>
    </header>
  );
};

export default Header;
