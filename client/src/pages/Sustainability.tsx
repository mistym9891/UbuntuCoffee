import Navigation from "@/components/Navigation";
import FarmersSection from "@/components/FarmersSection";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Users, Heart, Recycle } from "lucide-react";
import cooperationImage from "@assets/generated_images/Farmer_community_cooperation_scene_0b198f98.png";

const sustainabilityPillars = [
  {
    icon: Leaf,
    title: "Environmental Stewardship",
    description: "100% organic farming practices, shade-grown coffee preserving biodiversity, and water conservation methods protecting local ecosystems."
  },
  {
    icon: Users,
    title: "Fair Trade & Community",
    description: "Direct partnerships with 500+ smallholder farmers, fair wages above market rates, and investment in community education and infrastructure."
  },
  {
    icon: Heart,
    title: "Social Impact",
    description: "Healthcare programs for farming families, educational scholarships for children, and women's empowerment initiatives in rural communities."
  },
  {
    icon: Recycle,
    title: "Sustainable Packaging",
    description: "Recyclable materials, biodegradable components, and reduced carbon footprint in our supply chain from farm to consumer."
  }
];

export default function Sustainability() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <section className="py-20 px-6 bg-background text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6" data-testid="text-sustainability-hero-title">
              Sustainability & Fair Trade
            </h1>
            <p className="text-xl text-muted-foreground mb-8" data-testid="text-sustainability-hero-subtitle">
              Building a better future through ethical sourcing and environmental responsibility
            </p>
          </div>
        </section>

        <section className="py-20 px-6 bg-card">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src={cooperationImage} 
                  alt="Farmers working together" 
                  className="w-full h-auto"
                  data-testid="img-cooperation-main"
                />
              </div>
              <div>
                <h2 className="font-serif text-4xl font-bold text-card-foreground mb-6" data-testid="text-mission-title">
                  Our Mission
                </h2>
                <p className="text-lg text-foreground mb-4" data-testid="text-mission-desc">
                  At Ubuntu Coffee, sustainability isn't just a buzzword — it's the foundation of everything we do. Inspired by the African philosophy of Ubuntu ("I am because we are"), we believe that our success is intrinsically linked to the wellbeing of our farmers, their communities, and the environment.
                </p>
                <p className="text-lg text-foreground" data-testid="text-mission-desc-2">
                  Every bag of Ubuntu Coffee represents a commitment to ethical practices, environmental conservation, and the empowerment of Ugandan coffee farming communities.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {sustainabilityPillars.map((pillar, index) => (
                <Card key={index} className="hover-elevate transition-all" data-testid={`card-pillar-${index}`}>
                  <CardContent className="pt-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <pillar.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl font-bold text-card-foreground mb-3" data-testid={`text-pillar-title-${index}`}>
                          {pillar.title}
                        </h3>
                        <p className="text-sm text-muted-foreground" data-testid={`text-pillar-desc-${index}`}>
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <FarmersSection />
      </div>
      <Footer />
    </div>
  );
}
