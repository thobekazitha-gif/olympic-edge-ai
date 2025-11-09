import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Home, Sparkles, Crown, Rocket } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate();

  const plans = [
    {
      name: "Free",
      icon: Sparkles,
      price: "$0",
      period: "forever",
      description: "Perfect for getting started",
      features: [
        "1 video analysis per week",
        "Basic AI feedback",
        "Performance tracking",
        "Community support",
        "Standard processing speed"
      ],
      buttonText: "Get Started",
      buttonVariant: "outline" as const,
      popular: false
    },
    {
      name: "PRO",
      icon: Crown,
      price: "$29",
      period: "per month",
      description: "For serious athletes",
      features: [
        "Unlimited video analysis",
        "Advanced AI coaching",
        "Detailed biomechanics report",
        "Priority processing",
        "Performance history & trends",
        "Custom training plans",
        "Email support"
      ],
      buttonText: "Go Pro",
      buttonVariant: "default" as const,
      popular: true
    },
    {
      name: "MVP",
      icon: Rocket,
      price: "$99",
      period: "per month",
      description: "Elite performance package",
      features: [
        "Everything in PRO",
        "1-on-1 coach consultations",
        "Olympic-level analysis",
        "Competition prep plans",
        "Weekly progress reviews",
        "Injury prevention insights",
        "Priority 24/7 support",
        "Team collaboration tools"
      ],
      buttonText: "Go Elite",
      buttonVariant: "default" as const,
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="container mx-auto px-6 py-4">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="gap-2"
        >
          <Home className="w-4 h-4" />
          Home
        </Button>
      </div>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground">
              Choose Your
              <span className="block mt-2 bg-gradient-gold bg-clip-text text-transparent">
                Performance Plan
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Select the perfect plan to elevate your athletic performance with AI-powered analysis
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan) => {
              const Icon = plan.icon;
              return (
                <Card 
                  key={plan.name}
                  className={`relative p-8 glass-strong border-border/50 hover:border-primary/50 transition-elite ${
                    plan.popular ? 'ring-2 ring-primary shadow-glow-elite' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="bg-gradient-elite px-6 py-2 rounded-full text-sm font-bold text-white shadow-glow-elite">
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="space-y-6">
                    {/* Icon & Name */}
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        plan.popular ? 'bg-gradient-elite' : 'bg-secondary'
                      }`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-display font-bold text-foreground">
                        {plan.name}
                      </h3>
                    </div>

                    {/* Price */}
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-display font-bold text-foreground">
                          {plan.price}
                        </span>
                        <span className="text-muted-foreground">
                          {plan.period}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        {plan.description}
                      </p>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Button 
                      variant={plan.buttonVariant}
                      className={`w-full h-12 font-bold ${
                        plan.popular ? 'bg-gradient-elite hover:opacity-90 shadow-glow-elite' : ''
                      }`}
                      onClick={() => navigate('/upload')}
                    >
                      {plan.buttonText}
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 text-center space-y-4">
            <p className="text-muted-foreground">
              Trusted by thousands of athletes worldwide
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-success" />
                <span className="text-sm font-semibold text-foreground">No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-success" />
                <span className="text-sm font-semibold text-foreground">Cancel anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-success" />
                <span className="text-sm font-semibold text-foreground">30-day money back</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
