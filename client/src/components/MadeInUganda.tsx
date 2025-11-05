import { Card, CardContent } from "@/components/ui/card";
import { Factory, Award, Coffee, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import baristaLatteArt from "@assets/generated_images/Real_Ugandan_barista_working_184f8a98.png";
import femaleBaristaPouring from "@assets/generated_images/Real_female_barista_pouring_7e5910bb.png";
import roastingFacility from "@assets/generated_images/Coffee_roasting_facility_Uganda_8a2361b6.png";
import qualityCupping from "@assets/generated_images/Real_quality_control_cupping_d4681134.png";
import baristaChampionship from "@assets/generated_images/Ugandan_barista_championship_3def82db.png";

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
    <section className="py-20 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-card-foreground mb-4" data-testid="text-made-title">
            {t('madeInUganda.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-made-subtitle">
            {t('madeInUganda.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {productionSteps.map((step, index) => (
            <Card key={index} className="text-center hover-elevate transition-all" data-testid={`card-production-${index}`}>
              <CardContent className="pt-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-bold text-card-foreground mb-3" data-testid={`text-production-title-${index}`}>
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground" data-testid={`text-production-desc-${index}`}>
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-12">
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-card-foreground mb-4" data-testid="text-baristas-title">
            {t('madeInUganda.baristas.title')}
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-baristas-subtitle">
            {t('madeInUganda.baristas.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {baristaShowcase.map((barista, index) => (
            <Card key={index} className="overflow-hidden hover-elevate transition-all" data-testid={`card-barista-${index}`}>
              <div className="h-64 overflow-hidden bg-muted">
                <img 
                  src={barista.image} 
                  alt={barista.name}
                  className="w-full h-full object-cover"
                  data-testid={`img-barista-${index}`}
                />
              </div>
              <CardContent className="pt-6">
                <h4 className="font-serif text-xl font-bold text-card-foreground mb-1" data-testid={`text-barista-name-${index}`}>
                  {barista.name}
                </h4>
                <p className="text-sm text-muted-foreground mb-2" data-testid={`text-barista-title-${index}`}>
                  {barista.title}
                </p>
                <p className="text-sm text-primary font-semibold" data-testid={`text-barista-achievement-${index}`}>
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
