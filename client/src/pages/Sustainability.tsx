import Navigation from "@/components/Navigation";
import FarmersSection from "@/components/FarmersSection";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Users, Heart, Recycle } from "lucide-react";
import cooperationImage from "@assets/photos/farmer-cooperative.jpg";
import { useTranslation } from "react-i18next";

export default function Sustainability() {
  const { t } = useTranslation();
  
  const sustainabilityPillars = [
    {
      icon: Leaf,
      key: "environmental"
    },
    {
      icon: Users,
      key: "fairTrade"
    },
    {
      icon: Heart,
      key: "social"
    },
    {
      icon: Recycle,
      key: "packaging"
    }
  ];
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <section className="py-20 px-6 bg-background text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6" data-testid="text-sustainability-hero-title">
              {t('sustainability.heroTitle')}
            </h1>
            <p className="text-xl text-muted-foreground mb-8" data-testid="text-sustainability-hero-subtitle">
              {t('sustainability.heroSubtitle')}
            </p>
          </div>
        </section>

        <section className="py-20 px-6 bg-card">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src={cooperationImage} 
                  alt="Farmers working together" 
                  className="w-full h-auto"
                  data-testid="img-cooperation-main"
                />
              </div>
              <div>
                <h2 className="font-serif text-4xl font-bold text-card-foreground mb-6" data-testid="text-mission-title">
                  {t('sustainability.missionTitle')}
                </h2>
                <p className="text-lg text-foreground mb-4" data-testid="text-mission-desc">
                  {t('sustainability.missionDesc1')}
                </p>
                <p className="text-lg text-foreground" data-testid="text-mission-desc-2">
                  {t('sustainability.missionDesc2')}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {sustainabilityPillars.map((pillar, index) => (
                <Card key={index} className="hover-elevate transition-all" data-testid={`card-pillar-${index}`}>
                  <CardContent className="pt-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <pillar.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl font-bold text-card-foreground mb-3" data-testid={`text-pillar-title-${index}`}>
                          {t(`sustainability.pillars.${pillar.key}.title`)}
                        </h3>
                        <p className="text-sm text-muted-foreground" data-testid={`text-pillar-desc-${index}`}>
                          {t(`sustainability.pillars.${pillar.key}.description`)}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <FarmersSection />
      </div>
      <Footer />
    </div>
  );
}
