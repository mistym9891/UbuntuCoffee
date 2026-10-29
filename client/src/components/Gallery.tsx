import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from 'react-i18next';
import europeanPlantation from "@assets/photos/visitor-farm.jpg";
import middleEasternCeremony from "@assets/photos/coffee-ceremony.jpg";
import asianRoastery from "@assets/photos/buyers-roastery-tour.jpg";
import internationalGroup from "@assets/photos/buyers-group.jpg";
import europeanCupping from "@assets/photos/cupping-session.jpg";
import asianPartnership from "@assets/photos/women-partnership.jpg";

export default function Gallery() {
  const { t } = useTranslation();

  const galleryItems = [
    {
      image: internationalGroup,
      title: t('gallery.items.globalCommunity.title'),
      description: t('gallery.items.globalCommunity.description')
    },
    {
      image: europeanPlantation,
      title: t('gallery.items.europeanPartnership.title'),
      description: t('gallery.items.europeanPartnership.description')
    },
    {
      image: middleEasternCeremony,
      title: t('gallery.items.culturalExchange.title'),
      description: t('gallery.items.culturalExchange.description')
    },
    {
      image: asianRoastery,
      title: t('gallery.items.asianMarketGrowth.title'),
      description: t('gallery.items.asianMarketGrowth.description')
    },
    {
      image: europeanCupping,
      title: t('gallery.items.qualityAssurance.title'),
      description: t('gallery.items.qualityAssurance.description')
    },
    {
      image: asianPartnership,
      title: t('gallery.items.womenEmpowerment.title'),
      description: t('gallery.items.womenEmpowerment.description')
    }
  ];
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-gallery-title">
            {t('gallery.title')}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2" data-testid="text-gallery-subtitle">
            {t('gallery.subtitle')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {galleryItems.map((item, index) => (
            <Card key={index} className="overflow-hidden hover-elevate transition-all" data-testid={`card-gallery-${index}`}>
              <div className="h-56 sm:h-64 overflow-hidden bg-muted">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                  data-testid={`img-gallery-${index}`}
                />
              </div>
              <CardContent className="pt-4 sm:pt-6">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3" data-testid={`text-gallery-title-${index}`}>
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground" data-testid={`text-gallery-desc-${index}`}>
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
