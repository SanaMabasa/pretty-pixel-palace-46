import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  featured?: boolean;
}

const FeatureCard = ({ icon: Icon, title, description, featured = false }: FeatureCardProps) => {
  return (
    <div 
      className={`
        glass-card rounded-xl p-6 transition-all duration-300 hover:border-primary/30 hover:translate-y-[-2px]
        ${featured ? 'border-primary/50 bg-gradient-to-br from-primary/10 to-accent/5' : ''}
      `}
    >
      <div className={`
        w-10 h-10 rounded-lg flex items-center justify-center mb-4
        ${featured ? 'bg-gradient-to-br from-primary to-accent' : 'bg-secondary'}
      `}>
        <Icon className={`w-5 h-5 ${featured ? 'text-primary-foreground' : 'text-primary'}`} />
      </div>
      <h3 className="font-display text-lg font-semibold text-foreground mb-2">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
