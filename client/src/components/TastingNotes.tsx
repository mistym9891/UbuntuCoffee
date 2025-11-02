import { Card, CardContent } from "@/components/ui/card";
import { Coffee } from "lucide-react";
import tastingImage from "@assets/generated_images/Premium_coffee_tasting_moment_57512778.png";

const flavorNotes = [
  { name: "Chocolate", intensity: 90, description: "Rich, velvety cocoa notes" },
  { name: "Citrus", intensity: 75, description: "Bright, zesty undertones" },
  { name: "Floral", intensity: 60, description: "Subtle, aromatic hints" },
  { name: "Caramel", intensity: 70, description: "Sweet, smooth finish" }
];

export default function TastingNotes() {
  return (
    <section className="py-20 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-card-foreground mb-6" data-testid="text-tasting-title">
              Taste Profile
            </h2>
            <p className="text-lg text-foreground mb-8" data-testid="text-tasting-description">
              Notes of chocolate, citrus, and subtle floral aromas, perfect for your daily ritual. Our unique terroir creates a complex flavor profile that coffee enthusiasts around the world have come to love.
            </p>
            
            <div className="space-y-6">
              {flavorNotes.map((note, index) => (
                <div key={index} data-testid={`flavor-${index}`}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-foreground" data-testid={`text-flavor-name-${index}`}>{note.name}</span>
                    <span className="text-sm text-muted-foreground" data-testid={`text-flavor-intensity-${index}`}>{note.intensity}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all"
                      style={{ width: `${note.intensity}%` }}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mt-1" data-testid={`text-flavor-desc-${index}`}>{note.description}</p>
                </div>
              ))}
            </div>

            <Card className="mt-8 bg-background border-border">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Coffee className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2" data-testid="text-brewing-title">Brewing Recommendation</h3>
                    <p className="text-sm text-muted-foreground" data-testid="text-brewing-desc">
                      Best enjoyed as pour-over, French press, or espresso. Use water at 93-96°C (200-205°F) for optimal extraction.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="rounded-lg overflow-hidden">
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
