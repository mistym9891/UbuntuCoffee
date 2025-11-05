import { Card, CardContent } from "@/components/ui/card";
import { Coffee } from "lucide-react";
import tastingImage from "@assets/generated_images/Premium_coffee_tasting_moment_57512778.png";
import { useTranslation } from 'react-i18next';

export default function TastingNotes() {
  const { t } = useTranslation();

  const flavorNotes = [
    { name: t('tasting.flavors.chocolate.name'), intensity: 90, description: t('tasting.flavors.chocolate.description') },
    { name: t('tasting.flavors.citrus.name'), intensity: 75, description: t('tasting.flavors.citrus.description') },
    { name: t('tasting.flavors.floral.name'), intensity: 60, description: t('tasting.flavors.floral.description') },
    { name: t('tasting.flavors.caramel.name'), intensity: 70, description: t('tasting.flavors.caramel.description') }
  ];
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-card-foreground mb-4 sm:mb-6" data-testid="text-tasting-title">
              {t('tasting.title')}
            </h2>
            <p className="text-base sm:text-lg text-foreground mb-6 sm:mb-8" data-testid="text-tasting-description">
              {t('tasting.description')}
            </p>
            
            <div className="space-y-5 sm:space-y-6">
              {flavorNotes.map((note, index) => (
                <div key={index} data-testid={`flavor-${index}`}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-sm sm:text-base text-foreground" data-testid={`text-flavor-name-${index}`}>{note.name}</span>
                    <span className="text-xs sm:text-sm text-muted-foreground" data-testid={`text-flavor-intensity-${index}`}>{note.intensity}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all"
                      style={{ width: `${note.intensity}%` }}
                    />
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1" data-testid={`text-flavor-desc-${index}`}>{note.description}</p>
                </div>
              ))}
            </div>

            <Card className="mt-6 sm:mt-8 bg-background border-border">
              <CardContent className="pt-4 sm:pt-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <Coffee className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base text-foreground mb-2" data-testid="text-brewing-title">{t('tasting.brewing.title')}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground" data-testid="text-brewing-desc">
                      {t('tasting.brewing.description')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="rounded-lg overflow-hidden mt-8 lg:mt-0">
            <img 
              src={tastingImage} 
              alt="Coffee tasting" 
              className="w-full h-auto"
              data-testid="img-tasting"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
