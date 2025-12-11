import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-display text-xl font-semibold text-foreground">
            Bloom Studio
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            Services
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            Portfolio
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            Pricing
          </a>
        </nav>

        <Button variant="hero" size="sm">
          Sign In
        </Button>
      </div>
    </header>
  );
};

export default Header;
