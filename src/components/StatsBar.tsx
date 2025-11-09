import { TrendingUp, Users, Award, Target } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Elite Athletes",
    color: "primary"
  },
  {
    icon: Award,
    value: "15",
    label: "Olympic Medals",
    color: "accent"
  },
  {
    icon: Target,
    value: "95%",
    label: "Accuracy Rate",
    color: "success"
  },
  {
    icon: TrendingUp,
    value: "2.4M+",
    label: "Routines Analyzed",
    color: "elite"
  }
];

const StatsBar = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-elite/5 to-accent/5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 flex justify-center">
                  <div className={`w-14 h-14 rounded-2xl bg-${stat.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-7 h-7 text-${stat.color}`} />
                  </div>
                </div>
                <div className={`text-4xl md:text-5xl font-display font-bold mb-2 bg-gradient-${stat.color === 'accent' ? 'gold' : 'elite'} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
