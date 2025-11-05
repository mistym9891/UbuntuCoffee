import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from 'react-i18next';
import pickingImage from "@assets/generated_images/Authentic_hand_picking_closeup_294905e8.png";
import dryingImage from "@assets/generated_images/Authentic_sun_drying_process_58938946.png";
import roastingImage from "@assets/generated_images/Real_roasting_equipment_photo_63bd1486.png";
import packagingImage from "@assets/generated_images/Real_packaging_export_scene_5dc8495a.png";

export default function JourneyDetails() {
  const { t } = useTranslation();

  const journeyDetails = [
    {
      id: "hand-picking",
      number: "01",
      title: t('journeyDetails.handPicking.title'),
      subtitle: t('journeyDetails.handPicking.subtitle'),
      image: pickingImage,
      description: t('journeyDetails.handPicking.description'),
      details: t('journeyDetails.handPicking.details', { returnObjects: true })
    },
    {
      id: "sun-drying",
      number: "02",
      title: t('journeyDetails.sunDrying.title'),
      subtitle: t('journeyDetails.sunDrying.subtitle'),
      image: dryingImage,
      description: t('journeyDetails.sunDrying.description'),
      details: t('journeyDetails.sunDrying.details', { returnObjects: true })
    },
    {
      id: "expert-roasting",
      number: "03",
      title: t('journeyDetails.expertRoasting.title'),
      subtitle: t('journeyDetails.expertRoasting.subtitle'),
      image: roastingImage,
      description: t('journeyDetails.expertRoasting.description'),
      details: t('journeyDetails.expertRoasting.details', { returnObjects: true })
    },
    {
      id: "premium-packaging",
      number: "04",
      title: t('journeyDetails.premiumPackaging.title'),
      subtitle: t('journeyDetails.premiumPackaging.subtitle'),
      image: packagingImage,
      description: t('journeyDetails.premiumPackaging.description'),
      details: t('journeyDetails.premiumPackaging.details', { returnObjects: true })
    }
  ];
  return (
    <section className="py-20 px-6 bg-card">
      <div className="max-w-7xl mx-auto space-y-20">
        {journeyDetails.map((journey, index) => (
          <div 
            key={journey.id} 
            id={journey.id}
            className="scroll-mt-20"
            data-testid={`section-${journey.id}`}
          >
            <Card className="overflow-hidden">
              <div className={`grid md:grid-cols-2 gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`h-96 overflow-hidden ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <img 
                    src={journey.image} 
                    alt={journey.title}
                    className="w-full h-full object-cover"
                    data-testid={`img-detail-${index}`}
                  />
                </div>
                <CardContent className={`pt-8 flex flex-col justify-center ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="font-serif text-6xl font-bold text-primary/20 mb-4" data-testid={`text-detail-number-${index}`}>
                    {journey.number}
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-card-foreground mb-2" data-testid={`text-detail-title-${index}`}>
                    {journey.title}
                  </h3>
                  <p className="text-lg text-primary font-semibold mb-4" data-testid={`text-detail-subtitle-${index}`}>
                    {journey.subtitle}
                  </p>
                  <p className="text-foreground mb-6" data-testid={`text-detail-desc-${index}`}>
                    {journey.description}
                  </p>
                  <ul className="space-y-2">
                    {(journey.details as string[]).map((detail: string, i: number) => (
                      <li key={i} className="flex items-start gap-2" data-testid={`text-detail-point-${index}-${i}`}>
                        <span className="text-primary mt-1">✓</span>
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
