import { Card, CardContent } from "@/components/ui/card";
import { Globe, TrendingUp, Award, Users } from "lucide-react";

const markets = [
  {
    region: "Europe",
    icon: Globe,
    countries: ["Germany", "United Kingdom", "France", "Italy", "Netherlands", "Switzerland"],
    stats: "15+ Countries",
    description: "Leading supplier to premium European cafés and specialty roasters"
  },
  {
    region: "Middle East",
    icon: TrendingUp,
    countries: ["UAE", "Saudi Arabia", "Qatar", "Kuwait", "Bahrain", "Turkey"],
    stats: "6+ Countries",
    description: "Trusted partner for luxury hospitality and retail coffee markets"
  },
  {
    region: "Asia",
    icon: Globe,
    countries: ["Japan", "South Korea", "Singapore", "Hong Kong", "Malaysia", "Thailand"],
    stats: "8+ Countries",
    description: "Growing presence in Asia's specialty coffee and premium retail sectors"
  },
  {
    region: "Americas",
    icon: TrendingUp,
    countries: ["United States", "Canada", "Brazil"],
    stats: "3+ Countries",
    description: "Expanding partnerships across North and South American markets"
  }
];

const whyChoose = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "Single-origin 100% Arabica from volcanic highlands, consistently high cupping scores"
  },
  {
    icon: Users,
    title: "Reliable Supply Chain",
    description: "Direct relationships with 500+ farmers ensure stable year-round availability"
  },
  {
    icon: Globe,
    title: "Export Expertise",
    description: "Experienced in international logistics, customs, and quality certifications"
  }
];

export default function GlobalMarkets() {
  return (
    <section className="py-20 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-card-foreground mb-4" data-testid="text-markets-title">
            Global Reach
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-markets-subtitle">
            From Uganda to your cup — experience the warmth of African coffee culture anywhere in the world
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {markets.map((market, index) => (
            <Card key={index} className="hover-elevate transition-all" data-testid={`card-market-${index}`}>
              <CardContent className="pt-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <market.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-card-foreground mb-2" data-testid={`text-market-region-${index}`}>
                      {market.region}
                    </h3>
                    <p className="text-primary font-semibold mb-2" data-testid={`text-market-stats-${index}`}>
                      {market.stats}
                    </p>
                    <p className="text-sm text-muted-foreground mb-4" data-testid={`text-market-desc-${index}`}>
                      {market.description}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {market.countries.map((country, i) => (
                    <span 
                      key={i} 
                      className="text-xs px-3 py-1 bg-background rounded-full text-foreground"
                      data-testid={`badge-country-${index}-${i}`}
                    >
                      {country}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {whyChoose.map((item, index) => (
            <Card key={index} className="text-center" data-testid={`card-why-${index}`}>
              <CardContent className="pt-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold text-card-foreground mb-3" data-testid={`text-why-title-${index}`}>
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground" data-testid={`text-why-desc-${index}`}>
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
