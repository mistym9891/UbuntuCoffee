import Navigation from "@/components/Navigation";
import ProductShowcase from "@/components/ProductShowcase";
import CoffeeJourney from "@/components/CoffeeJourney";
import TastingNotes from "@/components/TastingNotes";
import Footer from "@/components/Footer";

export default function Coffee() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <ProductShowcase />
        <CoffeeJourney />
        <TastingNotes />
      </div>
      <Footer />
    </div>
  );
}
