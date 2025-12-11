import { Check } from "lucide-react";

interface FeatureListProps {
  features: string[];
}

const FeatureList = ({ features }: FeatureListProps) => {
  return (
    <div className="space-y-3">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center gap-3">
          <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
            <Check className="w-3 h-3 text-primary" />
          </div>
          <span className="text-sm text-foreground">{feature}</span>
        </div>
      ))}
    </div>
  );
};

export default FeatureList;
