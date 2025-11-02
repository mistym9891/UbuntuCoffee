import { Card } from "@/components/ui/card";
import { Leaf, Users, Award, Globe } from "lucide-react";
import volcanicImage from "@assets/generated_images/Volcanic_highlands_coffee_region_f4858a5b.png";
import cooperationImage from "@assets/generated_images/Farmer_community_cooperation_scene_0b198f98.png";

export default function StorySection() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="text-origin-title">
              Origin & Quality
            </h2>
            <p className="text-lg text-foreground mb-4" data-testid="text-origin-description">
              Grown in the misty highlands of Uganda, where the rich volcanic soil nurtures our 100% Arabica beans. At elevations reaching 1,800 meters on the slopes of Mount Elgon, our coffee cherries develop complex flavors and exceptional quality.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-8">
              <Card className="p-4 text-center">
                <p className="font-serif text-2xl font-bold text-primary mb-1" data-testid="text-elevation">1,800m</p>
                <p className="text-sm text-muted-foreground">Elevation</p>
              </Card>
              <Card className="p-4 text-center">
                <p className="font-serif text-2xl font-bold text-primary mb-1" data-testid="text-arabica">100%</p>
                <p className="text-sm text-muted-foreground">Arabica</p>
              </Card>
              <Card className="p-4 text-center">
                <p className="font-serif text-2xl font-bold text-primary mb-1" data-testid="text-volcanic">Volcanic</p>
                <p className="text-sm text-muted-foreground">Soil</p>
              </Card>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img 
              src={volcanicImage} 
              alt="Volcanic highlands of Uganda" 
              className="w-full h-auto"
              data-testid="img-volcanic"
            />
          </div>
        </div>

        <div className="bg-card rounded-lg p-12 mb-24 text-center border border-card-border">
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
              <Users className="w-10 h-10 text-primary" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-card-foreground mb-6" data-testid="text-ubuntu-title">
              Ubuntu Philosophy
            </h2>
            <p className="font-accent text-2xl italic text-foreground mb-6" data-testid="text-ubuntu-quote">
              "I am because we are"
            </p>
            <p className="text-lg text-foreground max-w-3xl mx-auto" data-testid="text-ubuntu-description">
              Inspired by Ubuntu, our coffee brings people together—because life is richer when shared. This ancient African philosophy reminds us that our humanity is intertwined. Every cup of Ubuntu Coffee celebrates community, connection, and the shared experience that makes life meaningful.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 rounded-lg overflow-hidden">
            <img 
              src={cooperationImage} 
              alt="Farmers working together" 
              className="w-full h-auto"
              data-testid="img-cooperation"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="text-sustainability-title">
              Sustainability & Fair Trade
            </h2>
            <p className="text-lg text-foreground mb-6" data-testid="text-sustainability-description">
              Ethically sourced from smallholder farmers, ensuring fair trade and environmental stewardship. We partner with over 500 farmers across Uganda, providing fair wages and supporting sustainable agricultural practices that protect our environment for future generations.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              <div className="flex flex-col items-start gap-2">
                <Leaf className="w-8 h-8 text-primary" />
                <h3 className="font-semibold text-foreground" data-testid="text-organic-title">Organic</h3>
                <p className="text-sm text-muted-foreground">Chemical-free farming</p>
              </div>
              <div className="flex flex-col items-start gap-2">
                <Users className="w-8 h-8 text-primary" />
                <h3 className="font-semibold text-foreground" data-testid="text-farmers-title">500+ Farmers</h3>
                <p className="text-sm text-muted-foreground">Direct partnerships</p>
              </div>
              <div className="flex flex-col items-start gap-2">
                <Award className="w-8 h-8 text-primary" />
                <h3 className="font-semibold text-foreground" data-testid="text-fairtrade-title">Fair Trade</h3>
                <p className="text-sm text-muted-foreground">Certified ethical</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
