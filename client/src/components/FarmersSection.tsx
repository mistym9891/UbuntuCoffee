import { Card, CardContent } from "@/components/ui/card";
import farmer1Image from "@assets/generated_images/Ugandan_coffee_farmer_portrait_49eaac4d.png";
import farmer2Image from "@assets/generated_images/Female_Ugandan_farmer_portrait_bb1131ac.png";

const farmers = [
  {
    name: "James Wasswa",
    role: "Lead Farmer, Mt. Elgon Region",
    quote: "Ubuntu Coffee has transformed our community. Fair trade means my children can go to school and we can invest in better farming practices.",
    image: farmer1Image
  },
  {
    name: "Sarah Nakato",
    role: "Cooperative Leader",
    quote: "Working together as a cooperative, we've learned sustainable methods and achieved organic certification. We're proud to share Uganda's finest coffee with the world.",
    image: farmer2Image
  }
];

export default function FarmersSection() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-farmers-section-title">
            Meet Our Farmers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-farmers-subtitle">
            The heart of Ubuntu Coffee is our community of dedicated farmers
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {farmers.map((farmer, index) => (
            <Card key={index} className="overflow-hidden hover-elevate transition-all" data-testid={`card-farmer-${index}`}>
              <div className="h-80 overflow-hidden">
                <img 
                  src={farmer.image} 
                  alt={farmer.name}
                  className="w-full h-full object-cover"
                  data-testid={`img-farmer-${index}`}
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-1" data-testid={`text-farmer-name-${index}`}>
                  {farmer.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4" data-testid={`text-farmer-role-${index}`}>
                  {farmer.role}
                </p>
                <p className="font-accent italic text-foreground" data-testid={`text-farmer-quote-${index}`}>
                  "{farmer.quote}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <Card className="p-6">
            <p className="font-serif text-4xl font-bold text-primary mb-2" data-testid="text-stat-farmers">500+</p>
            <p className="text-sm text-muted-foreground">Smallholder Farmers</p>
          </Card>
          <Card className="p-6">
            <p className="font-serif text-4xl font-bold text-primary mb-2" data-testid="text-stat-cooperatives">3</p>
            <p className="text-sm text-muted-foreground">Cooperative Partnerships</p>
          </Card>
          <Card className="p-6">
            <p className="font-serif text-4xl font-bold text-primary mb-2" data-testid="text-stat-organic">100%</p>
            <p className="text-sm text-muted-foreground">Organic Certified</p>
          </Card>
          <Card className="p-6">
            <p className="font-serif text-4xl font-bold text-primary mb-2" data-testid="text-stat-countries">24+</p>
            <p className="text-sm text-muted-foreground">Countries Exported</p>
          </Card>
        </div>
      </div>
    </section>
  );
}
