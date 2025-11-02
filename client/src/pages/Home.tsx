import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import StorySection from "@/components/StorySection";
import ProductShowcase from "@/components/ProductShowcase";
import CoffeeJourney from "@/components/CoffeeJourney";
import TastingNotes from "@/components/TastingNotes";
import GlobalMarkets from "@/components/GlobalMarkets";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <StorySection />
      <ProductShowcase />
      <CoffeeJourney />
      <TastingNotes />
      <GlobalMarkets />
      <Reviews />
      <Footer />
    </div>
  );
}
