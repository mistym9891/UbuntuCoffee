import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Reviews() {
  const { t } = useTranslation();
  
  const reviews = [
    { key: "hans", rating: 5 },
    { key: "sarah", rating: 5 },
    { key: "marco", rating: 5 },
    { key: "ahmed", rating: 5 },
    { key: "emma", rating: 5 },
    { key: "yusuf", rating: 5 }
  ];
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-reviews-title">
            {t('reviews.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-reviews-subtitle">
            {t('reviews.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="hover-elevate transition-all" data-testid={`card-review-${index}`}>
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" data-testid={`star-${index}-${i}`} />
                  ))}
                </div>
                <p className="text-sm text-foreground mb-4 italic" data-testid={`text-review-content-${index}`}>
                  "{t(`reviews.${review.key}.review`)}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground" data-testid={`text-reviewer-name-${index}`}>
                    {t(`reviews.${review.key}.name`)}
                  </p>
                  <p className="text-sm text-muted-foreground" data-testid={`text-reviewer-location-${index}`}>
                    {t(`reviews.${review.key}.location`)}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
