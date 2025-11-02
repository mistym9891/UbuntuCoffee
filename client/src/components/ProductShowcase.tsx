import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import lightRoastImage from "@assets/generated_images/Light_roast_coffee_packaging_bd1c0ff4.png";
import mediumRoastImage from "@assets/generated_images/Tilted_medium_roast_packaging_44136044.png";
import darkRoastImage from "@assets/generated_images/Dark_roast_coffee_packaging_0d5ebddb.png";

const roastProfiles = [
  {
    name: "Light Roast",
    weight: "500g",
    tagline: "Bright & Vibrant",
    notes: ["Floral", "Citrus", "Tea-like"],
    description: "Delicate flavors with a smooth, clean finish",
    image: lightRoastImage
  },
  {
    name: "Medium Roast",
    weight: "500g",
    tagline: "Balanced & Rich",
    notes: ["Chocolate", "Caramel", "Balanced"],
    description: "Perfect harmony of acidity and body",
    featured: true,
    image: mediumRoastImage
  },
  {
    name: "Dark Roast",
    weight: "500g",
    tagline: "Bold & Intense",
    notes: ["Bold", "Smoky", "Rich"],
    description: "Full-bodied with deep, complex flavors",
    image: darkRoastImage
  }
];

export default function ProductShowcase() {
  return (
    <section className="py-20 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-card-foreground mb-4" data-testid="text-products-title">
            Our Coffee
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-products-subtitle">
            Experience the finest Ugandan Arabica, carefully roasted to perfection
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {roastProfiles.map((roast, index) => (
            <Card key={index} className="hover-elevate transition-all overflow-hidden" data-testid={`card-roast-${index}`}>
              <div className="h-96 overflow-hidden bg-gradient-to-b from-background/50 to-card p-6 flex items-center justify-center">
                <img 
                  src={roast.image} 
                  alt={roast.name}
                  className="w-full h-full object-contain"
                  data-testid={`img-roast-${index}`}
                />
              </div>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-2xl font-bold text-card-foreground" data-testid={`text-roast-name-${index}`}>
                    {roast.name}
                  </h3>
                  {roast.featured && (
                    <Badge variant="default" data-testid={`badge-featured-${index}`}>Featured</Badge>
                  )}
                </div>
                <p className="font-accent text-lg italic text-primary mb-3" data-testid={`text-roast-tagline-${index}`}>
                  {roast.tagline}
                </p>
                <p className="text-sm text-muted-foreground mb-4" data-testid={`text-roast-desc-${index}`}>
                  {roast.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {roast.notes.map((note, i) => (
                    <Badge key={i} variant="secondary" data-testid={`badge-note-${index}-${i}`}>
                      {note}
                    </Badge>
                  ))}
                </div>
                <p className="text-lg font-semibold text-foreground" data-testid={`text-weight-${index}`}>
                  {roast.weight}
                </p>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  variant="default"
                  onClick={() => console.log(`Request sample: ${roast.name}`)}
                  data-testid={`button-sample-${index}`}
                >
                  Request Sample
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
