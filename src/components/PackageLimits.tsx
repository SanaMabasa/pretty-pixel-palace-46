import { Info } from "lucide-react";

interface LimitItem {
  label: string;
  value: string;
  note: string;
}

interface PackageLimitsProps {
  limits: LimitItem[];
}

const PackageLimits = ({ limits }: PackageLimitsProps) => {
  return (
    <section className="mt-16 pt-8 border-t border-border">
      <div className="flex items-center gap-2 mb-6">
        <Info className="w-5 h-5 text-primary" />
        <h2 className="font-display text-xl font-semibold text-foreground">
          Package Limits
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {limits.map((limit, index) => (
          <div key={index} className="glass-card rounded-xl p-5">
            <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase mb-2">
              {limit.label}
            </p>
            <p className="font-display text-lg font-semibold text-foreground mb-1">
              {limit.value}
            </p>
            <p className="text-xs text-muted-foreground">
              {limit.note}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PackageLimits;
