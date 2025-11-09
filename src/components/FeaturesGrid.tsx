import { Card } from "@/components/ui/card";
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
    description: "Predict execution and difficulty scores using FIG criteria with 95% accuracy",
    color: "primary"
  },
  {
    icon: Shield,
    title: "Injury Prevention",
    description: "Real-time biomechanical analysis detects dangerous patterns before injuries occur",
    color: "success"
  },
  {
    icon: Gauge,
    title: "Performance Metrics",
    description: "Track consistency, form quality, and progression over time with detailed analytics",
    color: "accent"
  },
  {
    icon: Video,
    title: "Frame Analysis",
    description: "Slow-motion breakdown with pose detection and joint angle measurements",
    color: "primary"
  },
  {
    icon: LineChart,
    title: "Progress Tracking",
    description: "Visualize improvement trends and identify areas requiring focus",
    color: "success"
  },
  {
    icon: Users,
    title: "Coach Collaboration",
    description: "Share annotations, feedback, and training plans with your coaching team",
    color: "accent"
  },
  {
    icon: Trophy,
    title: "Elite Benchmarks",
    description: "Compare performance against Olympic gold medalists and world champions",
    color: "primary"
  },
  {
    icon: Sparkles,
    title: "AI Coach Assistant",
    description: "Natural language feedback and personalized training recommendations",
    color: "accent"
  }
];

const FeaturesGrid = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Olympic-Grade Technology
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every feature designed to push athletes to their absolute peak performance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all group hover:shadow-glow"
              >
                <div className={`w-12 h-12 rounded-lg bg-${feature.color}/10 flex items-center justify-center mb-4 group-hover:bg-${feature.color}/20 transition-colors`}>
                  <Icon className={`w-6 h-6 text-${feature.color}`} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
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
