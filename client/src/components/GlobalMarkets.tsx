import { Card, CardContent } from "@/components/ui/card";
import { Globe, TrendingUp, Award, Users } from "lucide-react";
import { useTranslation } from 'react-i18next';

export default function GlobalMarkets() {
  const { t } = useTranslation();

  const markets = [
    {
      region: t('globalMarkets.markets.europe.region'),
      icon: Globe,
      countries: t('globalMarkets.markets.europe.countries', { returnObjects: true }),
      stats: t('globalMarkets.markets.europe.stats'),
      description: t('globalMarkets.markets.europe.description')
    },
    {
      region: t('globalMarkets.markets.middleEast.region'),
      icon: TrendingUp,
      countries: t('globalMarkets.markets.middleEast.countries', { returnObjects: true }),
      stats: t('globalMarkets.markets.middleEast.stats'),
      description: t('globalMarkets.markets.middleEast.description')
    },
    {
      region: t('globalMarkets.markets.asia.region'),
      icon: Globe,
      countries: t('globalMarkets.markets.asia.countries', { returnObjects: true }),
      stats: t('globalMarkets.markets.asia.stats'),
      description: t('globalMarkets.markets.asia.description')
    },
    {
      region: t('globalMarkets.markets.americas.region'),
      icon: TrendingUp,
      countries: t('globalMarkets.markets.americas.countries', { returnObjects: true }),
      stats: t('globalMarkets.markets.americas.stats'),
      description: t('globalMarkets.markets.americas.description')
    }
  ];

  const whyChoose = [
    {
      icon: Award,
      title: t('globalMarkets.whyChoose.premiumQuality.title'),
      description: t('globalMarkets.whyChoose.premiumQuality.description')
    },
    {
      icon: Users,
      title: t('globalMarkets.whyChoose.reliableSupply.title'),
      description: t('globalMarkets.whyChoose.reliableSupply.description')
    },
    {
      icon: Globe,
      title: t('globalMarkets.whyChoose.exportExpertise.title'),
      description: t('globalMarkets.whyChoose.exportExpertise.description')
    }
  ];
  return (
    <section className="py-20 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-card-foreground mb-4" data-testid="text-markets-title">
            {t('globalMarkets.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-markets-subtitle">
            {t('globalMarkets.subtitle')}
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
                  {(market.countries as string[]).map((country: string, i: number) => (
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
