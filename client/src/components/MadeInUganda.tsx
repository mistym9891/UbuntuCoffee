import { Card, CardContent } from "@/components/ui/card";
import { Factory, Award, Coffee, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import baristaLatteArt from "@assets/photos/barista-latte.jpg";
import femaleBaristaPouring from "@assets/photos/barista-pourover.jpg";
import roastingFacility from "@assets/photos/roasting-facility.jpg";
import qualityCupping from "@assets/photos/quality-control.jpg";
import baristaChampionship from "@assets/photos/barista-competition.jpg";

export default function MadeInUganda() {
  const { t } = useTranslation();

  const productionSteps = [
    {
      icon: Factory,
      title: t('madeInUganda.production.localProduction.title'),
      description: t('madeInUganda.production.localProduction.description')
    },
    {
      icon: Award,
      title: t('madeInUganda.production.worldClassRoasting.title'),
      description: t('madeInUganda.production.worldClassRoasting.description')
    },
    {
      icon: Coffee,
      title: t('madeInUganda.production.expertProcessing.title'),
      description: t('madeInUganda.production.expertProcessing.description')
    },
    {
      icon: Users,
      title: t('madeInUganda.production.localExpertise.title'),
      description: t('madeInUganda.production.localExpertise.description')
    }
  ];

  const baristaShowcase = [
    {
      image: baristaLatteArt,
      name: t('madeInUganda.baristas.samuel.name'),
      title: t('madeInUganda.baristas.samuel.title'),
      achievement: t('madeInUganda.baristas.samuel.achievement')
    },
    {
      image: femaleBaristaPouring,
      name: t('madeInUganda.baristas.grace.name'),
      title: t('madeInUganda.baristas.grace.title'),
      achievement: t('madeInUganda.baristas.grace.achievement')
    },
    {
      image: qualityCupping,
      name: t('madeInUganda.baristas.rebecca.name'),
      title: t('madeInUganda.baristas.rebecca.title'),
      achievement: t('madeInUganda.baristas.rebecca.achievement')
    }
  ];
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-card-foreground mb-4" data-testid="text-made-title">
            {t('madeInUganda.title')}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2" data-testid="text-made-subtitle">
            {t('madeInUganda.subtitle')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 sm:mb-20">
          {productionSteps.map((step, index) => (
            <Card key={index} className="text-center hover-elevate transition-all" data-testid={`card-production-${index}`}>
              <CardContent className="pt-6 sm:pt-8">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h3 className="font-serif text-base sm:text-lg font-bold text-card-foreground mb-2 sm:mb-3" data-testid={`text-production-title-${index}`}>
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground" data-testid={`text-production-desc-${index}`}>
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-10 sm:mb-12">
          <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-card-foreground mb-4" data-testid="text-baristas-title">
            {t('madeInUganda.baristas.title')}
          </h3>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2" data-testid="text-baristas-subtitle">
            {t('madeInUganda.baristas.subtitle')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {baristaShowcase.map((barista, index) => (
            <Card key={index} className="overflow-hidden hover-elevate transition-all" data-testid={`card-barista-${index}`}>
              <div className="h-56 sm:h-64 overflow-hidden bg-muted">
                <img 
                  src={barista.image} 
                  alt={barista.name}
                  className="w-full h-full object-cover"
                  data-testid={`img-barista-${index}`}
                />
              </div>
              <CardContent className="pt-4 sm:pt-6">
                <h4 className="font-serif text-lg sm:text-xl font-bold text-card-foreground mb-1" data-testid={`text-barista-name-${index}`}>
                  {barista.name}
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground mb-2" data-testid={`text-barista-title-${index}`}>
                  {barista.title}
                </p>
                <p className="text-xs sm:text-sm text-primary font-semibold" data-testid={`text-barista-achievement-${index}`}>
                  {barista.achievement}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
