import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  Shield,
  LineChart,
  Video,
  Users,
  Trophy,
  Gauge,
  Sparkles
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Olympic AI Scoring",
    description: "Predict execution and difficulty scores using FIG criteria with industry-leading 95% accuracy",
    color: "primary",
    badge: "Core"
  },
  {
    icon: Shield,
    title: "Injury Prevention",
    description: "Real-time biomechanical analysis detects dangerous patterns milliseconds before injuries occur",
    color: "success",
    badge: "Safety"
  },
  {
    icon: Gauge,
    title: "Performance Metrics",
    description: "Track consistency, form quality, and progression over time with AI-powered detailed analytics",
    color: "accent",
    badge: "Analytics"
  },
  {
    icon: Video,
    title: "Frame Analysis",
    description: "Slow-motion breakdown with advanced pose detection and precise joint angle measurements",
    color: "primary",
    badge: "Pro"
  },
  {
    icon: LineChart,
    title: "Progress Tracking",
    description: "Visualize improvement trends and identify areas requiring focus with predictive modeling",
    color: "success",
    badge: "Growth"
  },
  {
    icon: Users,
    title: "Coach Collaboration",
    description: "Share annotations, feedback, and training plans seamlessly with your entire coaching team",
    color: "elite",
    badge: "Team"
  },
  {
    icon: Trophy,
    title: "Elite Benchmarks",
    description: "Compare performance against Olympic gold medalists and world champions in real-time",
    color: "accent",
    badge: "Elite"
  },
  {
    icon: Sparkles,
    title: "AI Coach Assistant",
    description: "Natural language feedback and personalized training recommendations powered by advanced AI",
    color: "elite",
    badge: "AI"
  }
];

const FeaturesGrid = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <Badge className="mb-6 px-6 py-3 bg-primary/10 border-primary/30 text-primary font-semibold">
            <Trophy className="w-4 h-4 mr-2" />
            Platform Features
          </Badge>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
            Olympic-Grade
            <span className="block mt-2 bg-gradient-elite bg-clip-text text-transparent">Technology</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
            Every feature meticulously engineered to push athletes to their absolute peak performance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="p-8 glass-strong border-border/50 hover:border-primary/50 transition-elite group hover:shadow-glow cursor-pointer"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="relative">
                    <div className={`absolute inset-0 bg-${feature.color}/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all`} />
                    <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br from-${feature.color}/20 to-${feature.color}/5 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-7 h-7 text-${feature.color}`} />
                    </div>
                  </div>
                  <Badge variant="outline" className={`border-${feature.color}/30 text-${feature.color} text-xs font-bold`}>
                    {feature.badge}
                  </Badge>
                </div>
                
                <h3 className="font-display font-bold text-foreground mb-3 text-lg">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
