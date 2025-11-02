import { Card, CardContent } from "@/components/ui/card";
import pickingImage from "@assets/generated_images/Real_hand_picking_cherries_f60d262e.png";
import dryingImage from "@assets/generated_images/Authentic_sun_drying_process_58938946.png";
import roastingImage from "@assets/generated_images/Real_roasting_equipment_photo_63bd1486.png";
import packagingImage from "@assets/generated_images/Real_packaging_export_scene_5dc8495a.png";

const journeyDetails = [
  {
    id: "hand-picking",
    number: "01",
    title: "Hand Picking",
    subtitle: "Selective Harvesting Excellence",
    image: pickingImage,
    description: "Our coffee journey begins at dawn in the volcanic highlands of Uganda, where experienced farmers handpick only the ripest red cherries. This selective harvesting method ensures that each cherry is at peak ripeness, contributing to the exceptional quality and flavor of our coffee.",
    details: [
      "Only ripe red cherries are selected",
      "Multiple passes through each tree during harvest season",
      "Immediate transport to processing facilities",
      "Quality control at every picking station"
    ]
  },
  {
    id: "sun-drying",
    number: "02",
    title: "Sun Drying",
    subtitle: "Natural Processing Tradition",
    image: dryingImage,
    description: "After pulping, the coffee beans undergo natural fermentation for 12-24 hours, then are carefully hand-washed and spread on raised African drying beds. The beans are turned regularly under Uganda's equatorial sun, developing the unique honey and chocolate notes that define our coffee.",
    details: [
      "Natural fermentation enhances flavor complexity",
      "Raised beds ensure even airflow and drying",
      "Regular turning prevents over-fermentation",
      "Moisture content monitored to optimal 11-12%"
    ]
  },
  {
    id: "expert-roasting",
    number: "03",
    title: "Expert Roasting",
    subtitle: "Precision & Craft",
    image: roastingImage,
    description: "Our master roasters in Kampala use state-of-the-art equipment combined with generations of knowledge. Each roast profile is carefully designed to highlight the inherent flavors of our high-altitude Arabica beans—from bright citrus notes in light roasts to rich chocolate depth in dark roasts.",
    details: [
      "Temperature precision within 1 degree Celsius",
      "Continuous monitoring throughout roasting",
      "Customized profiles for each roast level",
      "Immediate cooling to lock in flavors"
    ]
  },
  {
    id: "premium-packaging",
    number: "04",
    title: "Premium Packaging",
    subtitle: "Freshness Guaranteed",
    image: packagingImage,
    description: "Within hours of roasting, our coffee is sealed in valve-equipped bags that preserve freshness while allowing CO2 to escape. Each package is labeled with roast date and batch information, ensuring complete traceability from our farms to your cup.",
    details: [
      "One-way degassing valves preserve freshness",
      "UV-protective packaging materials",
      "Complete batch traceability",
      "Quality tested before packaging"
    ]
  }
];

export default function JourneyDetails() {
  return (
    <section className="py-20 px-6 bg-card">
      <div className="max-w-7xl mx-auto space-y-20">
        {journeyDetails.map((journey, index) => (
          <div 
            key={journey.id} 
            id={journey.id}
            className="scroll-mt-20"
            data-testid={`section-${journey.id}`}
          >
            <Card className="overflow-hidden">
              <div className={`grid md:grid-cols-2 gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`h-96 overflow-hidden ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <img 
                    src={journey.image} 
                    alt={journey.title}
                    className="w-full h-full object-cover"
                    data-testid={`img-detail-${index}`}
                  />
                </div>
                <CardContent className={`pt-8 flex flex-col justify-center ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="font-serif text-6xl font-bold text-primary/20 mb-4" data-testid={`text-detail-number-${index}`}>
                    {journey.number}
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-card-foreground mb-2" data-testid={`text-detail-title-${index}`}>
                    {journey.title}
                  </h3>
                  <p className="text-lg text-primary font-semibold mb-4" data-testid={`text-detail-subtitle-${index}`}>
                    {journey.subtitle}
                  </p>
                  <p className="text-foreground mb-6" data-testid={`text-detail-desc-${index}`}>
                    {journey.description}
                  </p>
                  <ul className="space-y-2">
                    {journey.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2" data-testid={`text-detail-point-${index}-${i}`}>
                        <span className="text-primary mt-1">✓</span>
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
