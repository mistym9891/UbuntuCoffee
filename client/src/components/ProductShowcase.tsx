import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import lightRoastImage from "@assets/generated_images/Uniform_light_roast_premium_bacd18bd.png";
import mediumRoastImage from "@assets/generated_images/Uniform_medium_roast_premium_1ec7e031.png";
import darkRoastImage from "@assets/generated_images/Uniform_dark_roast_premium_baa3af8a.png";
import { useLocation } from "wouter";
import { useTranslation } from "react-i18next";

export default function ProductShowcase() {
  const { t } = useTranslation();
  const [, setLocation] = useLocation();
  
  const roastProfiles = [
    {
      key: "lightRoast",
      image: lightRoastImage
    },
    {
      key: "mediumRoast",
      featured: true,
      image: mediumRoastImage
    },
    {
      key: "darkRoast",
      image: darkRoastImage
    }
  ];
  
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6" data-testid="text-products-title">
            {t('products.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-products-subtitle">
            {t('products.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {roastProfiles.map((roast, index) => (
            <Card key={index} className="hover-elevate transition-all overflow-hidden" data-testid={`card-roast-${index}`}>
              <div className="h-96 overflow-hidden bg-gradient-to-b from-background/50 to-card p-6 flex items-center justify-center">
                <img 
                  src={roast.image} 
                  alt={t(`products.${roast.key}.name`)}
                  className="w-full h-full object-contain"
                  data-testid={`img-roast-${index}`}
                />
              </div>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-2xl font-bold text-card-foreground" data-testid={`text-roast-name-${index}`}>
                    {t(`products.${roast.key}.name`)}
                  </h3>
                  {roast.featured && (
                    <Badge variant="default" data-testid={`badge-featured-${index}`}>{t('products.featured')}</Badge>
                  )}
                </div>
                <p className="font-accent text-lg italic text-primary mb-3" data-testid={`text-roast-tagline-${index}`}>
                  {t(`products.${roast.key}.tagline`)}
                </p>
                <p className="text-sm text-muted-foreground mb-4" data-testid={`text-roast-desc-${index}`}>
                  {t(`products.${roast.key}.description`)}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {(t(`products.${roast.key}.notes`, { returnObjects: true }) as string[]).map((note, i) => (
                    <Badge key={i} variant="secondary" data-testid={`badge-note-${index}-${i}`}>
                      {note}
                    </Badge>
                  ))}
                </div>
                <p className="text-lg font-semibold text-foreground" data-testid={`text-weight-${index}`}>
                  {t(`products.${roast.key}.weight`)}
                </p>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  variant="default"
                  onClick={() => setLocation('/contact')}
                  data-testid={`button-sample-${index}`}
                >
                  {t('products.requestSample')}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
