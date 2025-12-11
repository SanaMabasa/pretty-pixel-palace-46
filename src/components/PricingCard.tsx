import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Headphones, Shield } from "lucide-react";
import FeatureList from "./FeatureList";

interface PricingCardProps {
  price: string;
  turnaround: string;
  support: string;
  features: string[];
}

const PricingCard = ({ price, turnaround, support, features }: PricingCardProps) => {
  return (
    <div className="glass-card rounded-2xl p-8 sticky top-24">
      <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-3">
        Total Investment
      </p>
      <div className="flex items-baseline gap-2 mb-2">
        <span className="font-display text-5xl font-bold text-foreground">{price}</span>
        <span className="text-muted-foreground">/ one-time</span>
      </div>
      <p className="text-sm text-muted-foreground mb-6">
        Transparent pricing. No hidden fees. Secure payment.
      </p>

      <div className="space-y-4 mb-8 pb-8 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
            <Clock className="w-4 h-4 text-accent" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">{turnaround}</p>
            <p className="text-xs text-muted-foreground">From asset handover</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
            <Headphones className="w-4 h-4 text-accent" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">{support}</p>
            <p className="text-xs text-muted-foreground">Direct access to team</p>
          </div>
        </div>
      </div>

      <FeatureList features={features} />

      <Button variant="hero" size="xl" className="w-full mt-8">
        Get Started
        <ArrowRight className="w-5 h-5" />
      </Button>

      <p className="text-center text-xs text-muted-foreground mt-4">
        Compare with other packages
      </p>

      <div className="flex items-center justify-center gap-2 mt-6 pt-6 border-t border-border">
        <Shield className="w-4 h-4 text-primary" />
        <span className="text-xs text-primary">
          Secure Stripe Payment & 100% Satisfaction Guarantee
        </span>
      </div>
    </div>
  );
};

export default PricingCard;
