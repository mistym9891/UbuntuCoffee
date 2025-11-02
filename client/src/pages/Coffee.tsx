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
        <section className="py-20 px-6 bg-background text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6" data-testid="text-coffee-hero-title">
              Our Coffee
            </h1>
            <p className="text-xl text-muted-foreground" data-testid="text-coffee-hero-subtitle">
              From the volcanic highlands of Uganda to your cup — discover our premium roast profiles
            </p>
          </div>
        </section>
        <ProductShowcase />
        <CoffeeJourney />
        <TastingNotes />
      </div>
      <Footer />
    </div>
  );
}
