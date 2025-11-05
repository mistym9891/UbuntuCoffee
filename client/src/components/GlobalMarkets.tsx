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
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-card-foreground mb-4" data-testid="text-markets-title">
            {t('globalMarkets.title')}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2" data-testid="text-markets-subtitle">
            {t('globalMarkets.subtitle')}
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {markets.map((market, index) => (
            <Card key={index} className="hover-elevate transition-all" data-testid={`card-market-${index}`}>
              <CardContent className="pt-6 sm:pt-8">
                <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <market.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-card-foreground mb-2" data-testid={`text-market-region-${index}`}>
                      {market.region}
                    </h3>
                    <p className="text-sm sm:text-base text-primary font-semibold mb-2" data-testid={`text-market-stats-${index}`}>
                      {market.stats}
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4" data-testid={`text-market-desc-${index}`}>
                      {market.description}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {(market.countries as string[]).map((country: string, i: number) => (
                    <span 
                      key={i} 
                      className="text-xs px-2 sm:px-3 py-1 bg-background rounded-full text-foreground"
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

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {whyChoose.map((item, index) => (
            <Card key={index} className="text-center" data-testid={`card-why-${index}`}>
              <CardContent className="pt-6 sm:pt-8">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-card-foreground mb-2 sm:mb-3" data-testid={`text-why-title-${index}`}>
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground" data-testid={`text-why-desc-${index}`}>
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
