import { Card, CardContent } from "@/components/ui/card";
import { Factory, Award, Coffee, Users } from "lucide-react";
import baristaLatteArt from "@assets/generated_images/Ugandan_barista_latte_art_846383b0.png";
import femaleBaristaPouring from "@assets/generated_images/Female_barista_pour-over_616e3a19.png";
import roastingFacility from "@assets/generated_images/Coffee_roasting_facility_Uganda_8a2361b6.png";
import qualityCupping from "@assets/generated_images/Quality_control_cupping_Uganda_0b019661.png";
import baristaChampionship from "@assets/generated_images/Ugandan_barista_championship_3def82db.png";

const productionSteps = [
  {
    icon: Factory,
    title: "100% Local Production",
    description: "Every step from harvesting to roasting happens in Uganda, ensuring quality control and supporting local employment."
  },
  {
    icon: Award,
    title: "World-Class Roasting",
    description: "Our state-of-the-art roasting facility in Kampala uses precision equipment to bring out the perfect flavor profiles."
  },
  {
    icon: Coffee,
    title: "Expert Processing",
    description: "From cherry to cup, our skilled teams handle every stage with care—washing, drying, sorting, and quality testing."
  },
  {
    icon: Users,
    title: "Local Expertise",
    description: "Ugandan coffee professionals, from farmers to baristas, bring generations of knowledge and passion to every bag."
  }
];

const baristaShowcase = [
  {
    image: baristaLatteArt,
    name: "Samuel Mugisha",
    title: "Head Barista, Kampala",
    achievement: "2024 Uganda Latte Art Champion"
  },
  {
    image: femaleBaristaPouring,
    name: "Grace Nakato",
    title: "Coffee Specialist",
    achievement: "Certified Q-Grader & Brewing Expert"
  },
  {
    image: qualityCupping,
    name: "Rebecca Nankya",
    title: "Quality Control Lead",
    achievement: "SCA Certified Coffee Cupper"
  }
];

export default function MadeInUganda() {
  return (
    <section className="py-20 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-card-foreground mb-4" data-testid="text-made-title">
            Proudly Made in Uganda
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-made-subtitle">
            From seed to cup, every step of our coffee journey happens right here in the Pearl of Africa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {productionSteps.map((step, index) => (
            <Card key={index} className="text-center hover-elevate transition-all" data-testid={`card-production-${index}`}>
              <CardContent className="pt-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-bold text-card-foreground mb-3" data-testid={`text-production-title-${index}`}>
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground" data-testid={`text-production-desc-${index}`}>
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-12">
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-card-foreground mb-4" data-testid="text-baristas-title">
            Uganda's Finest Baristas
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-baristas-subtitle">
            World-class coffee expertise, homegrown talent
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {baristaShowcase.map((barista, index) => (
            <Card key={index} className="overflow-hidden hover-elevate transition-all" data-testid={`card-barista-${index}`}>
              <div className="h-64 overflow-hidden bg-muted">
                <img 
                  src={barista.image} 
                  alt={barista.name}
                  className="w-full h-full object-cover"
                  data-testid={`img-barista-${index}`}
                />
              </div>
              <CardContent className="pt-6">
                <h4 className="font-serif text-xl font-bold text-card-foreground mb-1" data-testid={`text-barista-name-${index}`}>
                  {barista.name}
                </h4>
                <p className="text-sm text-muted-foreground mb-2" data-testid={`text-barista-title-${index}`}>
                  {barista.title}
                </p>
                <p className="text-sm text-primary font-semibold" data-testid={`text-barista-achievement-${index}`}>
                  🏆 {barista.achievement}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
