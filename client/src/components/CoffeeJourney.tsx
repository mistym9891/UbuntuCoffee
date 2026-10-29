import { useTranslation } from 'react-i18next';
import { Card, CardContent } from "@/components/ui/card";
import pickingImage from "@assets/photos/hand-picking.jpg";
import dryingImage from "@assets/photos/sun-drying.jpg";
import roastingImage from "@assets/photos/roasting.jpg";
import packagingImage from "@assets/photos/export-warehouse.jpg";

export default function CoffeeJourney() {
  const { t } = useTranslation();

  const journeySteps = [
    {
      number: "01",
      title: t('journey.steps.handPicking.title'),
      description: t('journey.steps.handPicking.description'),
      image: pickingImage,
      link: "#hand-picking"
    },
    {
      number: "02",
      title: t('journey.steps.sunDrying.title'),
      description: t('journey.steps.sunDrying.description'),
      image: dryingImage,
      link: "#sun-drying"
    },
    {
      number: "03",
      title: t('journey.steps.expertRoasting.title'),
      description: t('journey.steps.expertRoasting.description'),
      image: roastingImage,
      link: "#expert-roasting"
    },
    {
      number: "04",
      title: t('journey.steps.premiumPackaging.title'),
      description: t('journey.steps.premiumPackaging.description'),
      image: packagingImage,
      link: "#premium-packaging"
    }
  ];
  const handleStepClick = (link: string) => {
    const element = document.querySelector(link);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-journey-title">
            {t('journey.title')}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2" data-testid="text-journey-subtitle">
            {t('journey.subtitle')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {journeySteps.map((step, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover-elevate transition-all cursor-pointer" 
              onClick={() => handleStepClick(step.link)}
              data-testid={`card-step-${index}`}
            >
              <div className="h-40 sm:h-48 overflow-hidden">
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-full object-cover"
                  data-testid={`img-step-${index}`}
                />
              </div>
              <CardContent className="pt-4 sm:pt-6">
                <div className="font-serif text-4xl sm:text-5xl font-bold text-primary/20 mb-2" data-testid={`text-number-${index}`}>
                  {step.number}
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3" data-testid={`text-step-title-${index}`}>
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground" data-testid={`text-step-desc-${index}`}>
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
