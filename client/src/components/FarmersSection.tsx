import { Card, CardContent } from "@/components/ui/card";
import farmer1Image from "@assets/generated_images/Authentic_farmer_portrait_male_5ea28248.png";
import farmer2Image from "@assets/generated_images/Authentic_farmer_portrait_female_e5b6ec50.png";
import { useTranslation } from "react-i18next";

export default function FarmersSection() {
  const { t } = useTranslation();
  
  const farmers = [
    {
      key: "james",
      image: farmer1Image
    },
    {
      key: "sarah",
      image: farmer2Image
    }
  ];
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-farmers-section-title">
            {t('farmers.title')}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2" data-testid="text-farmers-subtitle">
            {t('farmers.subtitle')}
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {farmers.map((farmer, index) => (
            <Card key={index} className="overflow-hidden hover-elevate transition-all" data-testid={`card-farmer-${index}`}>
              <div className="h-64 sm:h-72 md:h-80 overflow-hidden">
                <img 
                  src={farmer.image} 
                  alt={t(`farmers.${farmer.key}.name`)}
                  className="w-full h-full object-cover"
                  data-testid={`img-farmer-${index}`}
                />
              </div>
              <CardContent className="pt-4 sm:pt-6">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-1" data-testid={`text-farmer-name-${index}`}>
                  {t(`farmers.${farmer.key}.name`)}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4" data-testid={`text-farmer-role-${index}`}>
                  {t(`farmers.${farmer.key}.role`)}
                </p>
                <p className="font-accent text-sm sm:text-base italic text-foreground" data-testid={`text-farmer-quote-${index}`}>
                  "{t(`farmers.${farmer.key}.quote`)}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          <Card className="p-4 sm:p-6">
            <p className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2" data-testid="text-stat-farmers">500+</p>
            <p className="text-xs sm:text-sm text-muted-foreground">{t('farmers.stats.farmers')}</p>
          </Card>
          <Card className="p-4 sm:p-6">
            <p className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2" data-testid="text-stat-cooperatives">3</p>
            <p className="text-xs sm:text-sm text-muted-foreground">{t('farmers.stats.cooperatives')}</p>
          </Card>
          <Card className="p-4 sm:p-6">
            <p className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2" data-testid="text-stat-organic">100%</p>
            <p className="text-xs sm:text-sm text-muted-foreground">{t('farmers.stats.organic')}</p>
          </Card>
          <Card className="p-4 sm:p-6">
            <p className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2" data-testid="text-stat-countries">24+</p>
            <p className="text-xs sm:text-sm text-muted-foreground">{t('farmers.stats.countries')}</p>
          </Card>
        </div>
      </div>
    </section>
  );
}
