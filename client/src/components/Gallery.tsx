import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from 'react-i18next';
import europeanPlantation from "@assets/generated_images/Real_European_visitor_farm_cbad4f71.png";
import middleEasternCeremony from "@assets/generated_images/Real_Middle_East_coffee_ceremony_2ea3ecab.png";
import asianRoastery from "@assets/generated_images/Real_Asian_visitors_facility_4707d690.png";
import internationalGroup from "@assets/generated_images/Real_international_buyers_group_6cae605b.png";
import europeanCupping from "@assets/generated_images/Real_quality_control_session_8018d0ca.png";
import asianPartnership from "@assets/generated_images/Real_women_partnership_photo_ab2bf25e.png";

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
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-gallery-title">
            {t('gallery.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-gallery-subtitle">
            {t('gallery.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <Card key={index} className="overflow-hidden hover-elevate transition-all" data-testid={`card-gallery-${index}`}>
              <div className="h-64 overflow-hidden bg-muted">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                  data-testid={`img-gallery-${index}`}
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-3" data-testid={`text-gallery-title-${index}`}>
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground" data-testid={`text-gallery-desc-${index}`}>
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
