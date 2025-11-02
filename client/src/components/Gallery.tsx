import { Card, CardContent } from "@/components/ui/card";
import europeanPlantation from "@assets/generated_images/Real_European_visitor_farm_cbad4f71.png";
import middleEasternCeremony from "@assets/generated_images/Real_Middle_East_coffee_ceremony_2ea3ecab.png";
import asianRoastery from "@assets/generated_images/Real_Asian_visitors_facility_4707d690.png";
import internationalGroup from "@assets/generated_images/Real_international_buyers_group_6cae605b.png";
import europeanCupping from "@assets/generated_images/Real_quality_control_session_8018d0ca.png";
import asianPartnership from "@assets/generated_images/Real_women_partnership_photo_ab2bf25e.png";

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
