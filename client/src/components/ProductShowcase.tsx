import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import lightRoastImage from "@assets/generated_images/Uniform_light_roast_premium_bacd18bd.png";
import mediumRoastImage from "@assets/generated_images/Uniform_medium_roast_premium_1ec7e031.png";
import darkRoastImage from "@assets/generated_images/Uniform_dark_roast_premium_baa3af8a.png";
import { useLocation } from "wouter";
import { useTranslation } from "react-i18next";
import { paymentLinks } from "@/lib/payments";

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
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6" data-testid="text-products-title">
            {t('products.title')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2" data-testid="text-products-subtitle">
            {t('products.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {roastProfiles.map((roast, index) => (
            <Card key={index} className="hover-elevate transition-all overflow-hidden" data-testid={`card-roast-${index}`}>
              <div className="h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden bg-gradient-to-b from-background/50 to-card p-4 sm:p-6 flex items-center justify-center">
                <img 
                  src={roast.image} 
                  alt={t(`products.${roast.key}.name`)}
                  className="w-full h-full object-contain"
                  data-testid={`img-roast-${index}`}
                />
              </div>
              <CardContent className="pt-4 sm:pt-6">
                <div className="flex justify-between items-start gap-2 mb-2">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-card-foreground" data-testid={`text-roast-name-${index}`}>
                    {t(`products.${roast.key}.name`)}
                  </h3>
                  {roast.featured && (
                    <Badge variant="default" className="shrink-0" data-testid={`badge-featured-${index}`}>{t('products.featured')}</Badge>
                  )}
                </div>
                <p className="font-accent text-base sm:text-lg italic text-primary mb-3" data-testid={`text-roast-tagline-${index}`}>
                  {t(`products.${roast.key}.tagline`)}
                </p>
                <p className="text-sm text-muted-foreground mb-4" data-testid={`text-roast-desc-${index}`}>
                  {t(`products.${roast.key}.description`)}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {(t(`products.${roast.key}.notes`, { returnObjects: true }) as string[] || []).map((note, i) => (
                    <Badge key={i} variant="secondary" className="text-xs" data-testid={`badge-note-${index}-${i}`}>
                      {note}
                    </Badge>
                  ))}
                </div>
                <p className="text-base sm:text-lg font-semibold text-foreground" data-testid={`text-weight-${index}`}>
                  {t(`products.${roast.key}.weight`)}
                </p>
              </CardContent>
              <CardFooter className="flex flex-col gap-2">
                {paymentLinks.stripe[roast.key] && (
                  <Button asChild className="w-full" variant="default" data-testid={`button-buy-${index}`}>
                    <a href={paymentLinks.stripe[roast.key]} target="_blank" rel="noopener noreferrer">
                      {t('products.buyNow', 'Buy now')}
                    </a>
                  </Button>
                )}
                {paymentLinks.paypal && (
                  <Button asChild className="w-full" variant="outline" data-testid={`button-paypal-${index}`}>
                    <a href={paymentLinks.paypal} target="_blank" rel="noopener noreferrer">
                      {t('products.payWithPaypal', 'Pay with PayPal')}
                    </a>
                  </Button>
                )}
                <Button 
                  className="w-full" 
                  variant={paymentLinks.stripe[roast.key] || paymentLinks.paypal ? "ghost" : "default"}
                  onClick={() => setLocation('/contact')}
                  data-testid={`button-sample-${index}`}
                >
                  {t('products.requestSample')}
                </Button>
                {paymentLinks.paypal && (
                  <p className="text-xs text-muted-foreground text-center" data-testid={`text-paypal-note-${index}`}>
                    {t('products.paypalNote', 'PayPal payments are processed by {{name}}.', { name: paymentLinks.paypalName })}
                  </p>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
