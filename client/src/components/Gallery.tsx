import { Card, CardContent } from "@/components/ui/card";
import europeanPlantation from "@assets/generated_images/European_visitor_at_plantation_de13dd27.png";
import middleEasternCeremony from "@assets/generated_images/Middle_Eastern_visitor_coffee_ceremony_9905d505.png";
import asianRoastery from "@assets/generated_images/Asian_visitors_at_roastery_bc5bca16.png";
import internationalGroup from "@assets/generated_images/International_buyers_group_photo_2db42115.png";
import europeanCupping from "@assets/generated_images/European_cupping_session_53670982.png";
import asianPartnership from "@assets/generated_images/Asian-Ugandan_partnership_95791db9.png";

const galleryItems = [
  {
    image: internationalGroup,
    title: "Global Coffee Community",
    description: "International buyers from Europe, Middle East, and Asia unite with our Ugandan farmers, celebrating the Ubuntu spirit of togetherness in the heart of our coffee highlands."
  },
  {
    image: europeanPlantation,
    title: "European Partnership",
    description: "Coffee experts from across Europe visit our plantations to experience firsthand the quality and care that goes into every harvest of our premium Arabica beans."
  },
  {
    image: middleEasternCeremony,
    title: "Cultural Exchange",
    description: "Middle Eastern partners join our traditional coffee ceremonies, sharing in the rich heritage and warm hospitality that defines Ugandan coffee culture."
  },
  {
    image: asianRoastery,
    title: "Asian Market Growth",
    description: "Growing relationships with Asian coffee buyers bring our sustainable, single-origin beans to discerning markets across Japan, Korea, and Southeast Asia."
  },
  {
    image: europeanCupping,
    title: "Quality Assurance",
    description: "Expert cuppers from European specialty roasters evaluate our coffee's exceptional flavor profiles, ensuring only the finest beans reach international markets."
  },
  {
    image: asianPartnership,
    title: "Women Empowerment",
    description: "Building partnerships that empower Ugandan women farmers, connecting them with global buyers who value ethical sourcing and community development."
  }
];

export default function Gallery() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-gallery-title">
            Ubuntu in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-gallery-subtitle">
            Welcoming the world to Uganda — building bridges through exceptional coffee and shared values
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <Card key={index} className="overflow-hidden hover-elevate transition-all" data-testid={`card-gallery-${index}`}>
              <div className="h-64 overflow-hidden bg-muted">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                  data-testid={`img-gallery-${index}`}
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-3" data-testid={`text-gallery-title-${index}`}>
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground" data-testid={`text-gallery-desc-${index}`}>
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
