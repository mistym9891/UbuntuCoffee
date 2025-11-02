import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import packagingImage from "@assets/Ubuntu Coffee Packaging Close-Up_1762041369592.png";

const roastProfiles = [
  {
    name: "Light Roast",
    weight: "500g",
    notes: ["Floral", "Citrus", "Tea-like"],
    description: "Bright and vibrant with delicate flavors"
  },
  {
    name: "Medium Roast",
    weight: "500g",
    notes: ["Chocolate", "Caramel", "Balanced"],
    description: "Perfect balance of acidity and body",
    featured: true
  },
  {
    name: "Dark Roast",
    weight: "500g",
    notes: ["Bold", "Smoky", "Rich"],
    description: "Full-bodied with intense flavors"
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

        <div className="mb-16 max-w-md mx-auto">
          <img 
            src={packagingImage} 
            alt="Ubuntu Coffee Packaging" 
            className="w-full h-auto rounded-lg shadow-lg"
            data-testid="img-packaging"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {roastProfiles.map((roast, index) => (
            <Card key={index} className="hover-elevate transition-all" data-testid={`card-roast-${index}`}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-serif text-2xl font-bold text-card-foreground" data-testid={`text-roast-name-${index}`}>
                    {roast.name}
                  </h3>
                  {roast.featured && (
                    <Badge variant="default" data-testid={`badge-featured-${index}`}>Featured</Badge>
                  )}
                </div>
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
