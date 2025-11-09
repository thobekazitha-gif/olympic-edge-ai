import { Medal, Video, BarChart3, TrendingUp, Sparkles, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "@/components/NavLink";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 glass-strong">
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      
      <div className="container mx-auto px-6 h-20 flex items-center justify-between relative z-10">
        <NavLink to="/" className="flex items-center gap-4 group">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-elite rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity" />
            <div className="relative w-12 h-12 rounded-xl bg-gradient-elite flex items-center justify-center shadow-glow">
              <Medal className="w-7 h-7 text-white" />
            </div>
          </div>
          <div>
            <h1 className="text-xl font-display font-bold text-foreground tracking-tight">Olympic Edge</h1>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
              <p className="text-xs text-muted-foreground font-medium">AI Performance System</p>
            </div>
          </div>
        </NavLink>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2">
          <NavLink to="/upload">
            <Button variant="ghost" size="sm" className="gap-2 hover:bg-secondary/80 transition-elite">
              <Video className="w-4 h-4" />
              <span className="font-medium">Upload</span>
            </Button>
          </NavLink>
          <NavLink to="/dashboard">
            <Button variant="ghost" size="sm" className="gap-2 hover:bg-secondary/80 transition-elite">
              <BarChart3 className="w-4 h-4" />
              <span className="font-medium">Dashboard</span>
            </Button>
          </NavLink>
          <NavLink to="/progress">
            <Button variant="ghost" size="sm" className="gap-2 hover:bg-secondary/80 transition-elite">
              <TrendingUp className="w-4 h-4" />
              <span className="font-medium">Progress</span>
            </Button>
          </NavLink>
          
          <Badge variant="outline" className="ml-2 border-elite/30 bg-elite/10 text-elite font-semibold">
            <Sparkles className="w-3 h-3 mr-1" />
            PRO
          </Badge>
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon"
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <NavLink to="/upload">
            <Button 
              size="sm" 
              className="relative group bg-gradient-elite hover:opacity-90 transition-elite shadow-glow font-semibold"
            >
              <span className="relative z-10">Start Analysis</span>
              <div className="absolute inset-0 bg-gradient-elite opacity-0 group-hover:opacity-100 transition-opacity rounded-lg blur-xl" />
            </Button>
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border/50 glass-strong">
          <div className="container mx-auto px-6 py-4 space-y-2">
            <NavLink to="/upload" className="block" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="ghost" size="sm" className="w-full justify-start gap-2">
                <Video className="w-4 h-4" />
                Upload
              </Button>
            </NavLink>
            <NavLink to="/dashboard" className="block" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="ghost" size="sm" className="w-full justify-start gap-2">
                <BarChart3 className="w-4 h-4" />
                Dashboard
              </Button>
            </NavLink>
            <NavLink to="/progress" className="block" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="ghost" size="sm" className="w-full justify-start gap-2">
                <TrendingUp className="w-4 h-4" />
                Progress
              </Button>
            </NavLink>
            <NavLink to="/upload" className="block" onClick={() => setMobileMenuOpen(false)}>
              <Button size="sm" className="w-full bg-gradient-elite">
                Start Analysis
              </Button>
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
