import { Card, CardContent } from "@/components/ui/card";
import pickingImage from "@assets/generated_images/Hand-picking_coffee_cherries_closeup_bb2eb2ec.png";
import dryingImage from "@assets/generated_images/Coffee_beans_sun-drying_process_93576b8c.png";
import roastingImage from "@assets/generated_images/Coffee_roasting_equipment_closeup_ba3804aa.png";
import packagingImage from "@assets/Ubuntu Coffee Packaging Close-Up_1762041369592.png";

const journeySteps = [
  {
    number: "01",
    title: "Hand Picking",
    description: "Only the ripest red cherries are carefully selected by our skilled farmers, ensuring premium quality from the start.",
    image: pickingImage
  },
  {
    number: "02",
    title: "Sun Drying",
    description: "Cherries are pulped and naturally fermented, then hand-washed and sun-dried on raised beds to preserve their unique flavor profile.",
    image: dryingImage
  },
  {
    number: "03",
    title: "Expert Roasting",
    description: "Our master roasters carefully control temperature and time to unlock the perfect balance of chocolate, citrus, and floral notes.",
    image: roastingImage
  },
  {
    number: "04",
    title: "Premium Packaging",
    description: "Freshly roasted beans are sealed in our signature packaging, preserving aroma and quality from Uganda to your cup.",
    image: packagingImage
  }
];

export default function CoffeeJourney() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-journey-title">
            From Farm to Cup
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-journey-subtitle">
            Every bean goes through our meticulous process, perfected over generations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {journeySteps.map((step, index) => (
            <Card key={index} className="overflow-hidden hover-elevate transition-all" data-testid={`card-step-${index}`}>
              <div className="h-48 overflow-hidden">
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-full object-cover"
                  data-testid={`img-step-${index}`}
                />
              </div>
              <CardContent className="pt-6">
                <div className="font-serif text-5xl font-bold text-primary/20 mb-2" data-testid={`text-number-${index}`}>
                  {step.number}
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3" data-testid={`text-step-title-${index}`}>
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground" data-testid={`text-step-desc-${index}`}>
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
