import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import PricingCard from "@/components/PricingCard";
import PackageLimits from "@/components/PackageLimits";
import { 
  Rocket, 
  Store, 
  Palette, 
  Package, 
  ShoppingBag,
  Check
} from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Store,
      title: "Complete Shopify Account Setup",
      description: "Technical configuration, domain connection, and payment gateway setup handling.",
    },
    {
      icon: Palette,
      title: "Standard Theme Installation",
      description: "Selection and installation of a high-performance free Shopify theme optimized for your niche.",
    },
    {
      icon: Package,
      title: "Installation of 3-5 Essential Apps",
      description: "Configuration of key apps for marketing, reviews, and SEO to jumpstart your growth.",
    },
    {
      icon: ShoppingBag,
      title: "Up to 10 Product Uploads",
      description: "Professional formatting and upload of your first batch of products with proper tagging.",
    },
    {
      icon: Palette,
      title: "Basic Brand Customization",
      description: "Logo placement, font selection, and color scheme adjustment to align with your brand identity.",
    },
  ];

  const pricingFeatures = [
    "Full Design & Dev",
    "SEO & Marketing Setup",
    "2-3 Revisions Included",
  ];

  const limits = [
    { label: "Inventory", value: "10 Products Max", note: "Add-ons available for larger catalogs." },
    { label: "Development", value: "Standard Theme", note: "No custom Liquid coding included." },
    { label: "Process", value: "1 Revision Round", note: "Consolidated feedback changes." },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Gradient overlay */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <Header />

      <main className="relative pt-24 pb-12">
        <div className="container mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <a href="#" className="hover:text-foreground transition-colors">Services</a>
            <span>/</span>
            <a href="#" className="hover:text-foreground transition-colors">Shopify Setup</a>
            <span>/</span>
            <span className="text-foreground">Basic Package</span>
          </nav>

          <div className="grid lg:grid-cols-[1fr,420px] gap-12">
            {/* Left Column */}
            <div>
              {/* Hero Section */}
              <div className="mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <Rocket className="w-4 h-4 text-primary" />
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                    Fast Launch Ready
                  </span>
                </div>
                
                <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6">
                  Basic Shopify<br />
                  <span className="gradient-text">Store Setup</span>
                </h1>
                
                <p className="text-lg text-muted-foreground max-w-xl border-l-2 border-primary/50 pl-4">
                  The perfect starter kit for new businesses looking to launch quickly. 
                  Professional setup, essential tools, zero hassle.
                </p>
              </div>

              {/* Dashboard Preview */}
              <div className="glass-card rounded-2xl p-4 mb-12 overflow-hidden">
                <div className="aspect-video rounded-xl bg-gradient-to-br from-secondary to-muted flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Store className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <p className="text-muted-foreground">Your store dashboard preview</p>
                  </div>
                </div>
              </div>

              {/* What's Included */}
              <section>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                  What's Included
                </h2>
                
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div 
                      key={index}
                      className="glass-card rounded-xl p-5 flex items-start gap-4 transition-all duration-300 hover:border-primary/30"
                    >
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Package Limits */}
              <PackageLimits limits={limits} />
            </div>

            {/* Right Column - Pricing Card */}
            <div>
              <PricingCard 
                price="$499"
                turnaround="7-10 Days Turnaround"
                support="Email Support Included"
                features={pricingFeatures}
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
