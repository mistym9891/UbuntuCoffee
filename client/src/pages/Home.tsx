import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import StorySection from "@/components/StorySection";
import ProductShowcase from "@/components/ProductShowcase";
import CoffeeJourney from "@/components/CoffeeJourney";
import TastingNotes from "@/components/TastingNotes";
import FarmersSection from "@/components/FarmersSection";
import ExportInquiry from "@/components/ExportInquiry";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <div id="story">
        <StorySection />
      </div>
      <div id="coffee">
        <ProductShowcase />
      </div>
      <CoffeeJourney />
      <TastingNotes />
      <div id="sustainability">
        <FarmersSection />
      </div>
      <div id="contact">
        <ExportInquiry />
      </div>
      <Footer />
    </div>
  );
}
