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
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-farmers-section-title">
            {t('farmers.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-farmers-subtitle">
            {t('farmers.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {farmers.map((farmer, index) => (
            <Card key={index} className="overflow-hidden hover-elevate transition-all" data-testid={`card-farmer-${index}`}>
              <div className="h-80 overflow-hidden">
                <img 
                  src={farmer.image} 
                  alt={t(`farmers.${farmer.key}.name`)}
                  className="w-full h-full object-cover"
                  data-testid={`img-farmer-${index}`}
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-1" data-testid={`text-farmer-name-${index}`}>
                  {t(`farmers.${farmer.key}.name`)}
                </h3>
                <p className="text-sm text-muted-foreground mb-4" data-testid={`text-farmer-role-${index}`}>
                  {t(`farmers.${farmer.key}.role`)}
                </p>
                <p className="font-accent italic text-foreground" data-testid={`text-farmer-quote-${index}`}>
                  "{t(`farmers.${farmer.key}.quote`)}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <Card className="p-6">
            <p className="font-serif text-4xl font-bold text-primary mb-2" data-testid="text-stat-farmers">500+</p>
            <p className="text-sm text-muted-foreground">{t('farmers.stats.farmers')}</p>
          </Card>
          <Card className="p-6">
            <p className="font-serif text-4xl font-bold text-primary mb-2" data-testid="text-stat-cooperatives">3</p>
            <p className="text-sm text-muted-foreground">{t('farmers.stats.cooperatives')}</p>
          </Card>
          <Card className="p-6">
            <p className="font-serif text-4xl font-bold text-primary mb-2" data-testid="text-stat-organic">100%</p>
            <p className="text-sm text-muted-foreground">{t('farmers.stats.organic')}</p>
          </Card>
          <Card className="p-6">
            <p className="font-serif text-4xl font-bold text-primary mb-2" data-testid="text-stat-countries">24+</p>
            <p className="text-sm text-muted-foreground">{t('farmers.stats.countries')}</p>
          </Card>
        </div>
      </div>
    </section>
  );
}
