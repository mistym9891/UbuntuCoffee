import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Hans Mueller",
    location: "Munich, Germany",
    rating: 5,
    review: "The quality is exceptional! We've been importing Ubuntu Coffee for our café chain across Germany. Our customers love the rich chocolate notes and the story behind every bag."
  },
  {
    name: "Sarah Osman",
    location: "Dubai, UAE",
    rating: 5,
    review: "As a premium coffee distributor in the Middle East, Ubuntu Coffee stands out. The ethical sourcing and volcanic highland origin create a unique flavor profile our clients appreciate."
  },
  {
    name: "Marco Rossi",
    location: "Milan, Italy",
    rating: 5,
    review: "Absolutely superb! The medium roast is perfect for espresso. We've partnered with Ubuntu Coffee for two years and the consistency in quality is remarkable. Highly recommended for European markets."
  },
  {
    name: "Ahmed Al-Rashid",
    location: "Riyadh, Saudi Arabia",
    rating: 5,
    review: "Outstanding coffee with authentic African character. The Ubuntu philosophy resonates with our values of community and quality. We're proud to serve this in our hospitality venues."
  },
  {
    name: "Emma Thompson",
    location: "London, UK",
    rating: 5,
    review: "The transparency and fair trade practices are what attracted us initially, but the incredible taste keeps us ordering. Perfect for the discerning British coffee market."
  },
  {
    name: "Yusuf Hassan",
    location: "Istanbul, Turkey",
    rating: 5,
    review: "A bridge between African excellence and global coffee culture. The floral notes in the light roast are extraordinary. Our wholesale partnership continues to grow strong."
  }
];

export default function Reviews() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-reviews-title">
            What Our Partners Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-reviews-subtitle">
            Trusted by premium coffee buyers across Europe and the Middle East
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
                  "{review.review}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground" data-testid={`text-reviewer-name-${index}`}>
                    {review.name}
                  </p>
                  <p className="text-sm text-muted-foreground" data-testid={`text-reviewer-location-${index}`}>
                    {review.location}
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
