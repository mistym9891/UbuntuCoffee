import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@assets/generated_images/Natural_hero_plantation_photo_ee93ba44.png";
import logoSymbol from "@assets/Screenshot 2025-11-02 030336_1762049032640.png";
import { useLocation } from "wouter";

export default function Hero() {
  const [, setLocation] = useLocation();
  
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <img 
          src={logoSymbol} 
          alt="Ubuntu Coffee Logo" 
          className="w-24 h-24 mx-auto mb-8 drop-shadow-lg object-contain"
          data-testid="img-logo"
        />
        
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 leading-tight" data-testid="text-hero-title">
          UBUNTU COFFEE
        </h1>
        
        <p className="font-accent text-2xl md:text-3xl italic text-white/95 mb-4" data-testid="text-tagline">
          From Uganda's Highlands to Your Cup — Life is Richer When Shared
        </p>
        
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto" data-testid="text-subtitle">
          Premium 100% Arabica Coffee | Ethically Sourced | Globally Loved
        </p>
        
        <div className="inline-block mb-8 px-6 py-3 bg-primary/90 backdrop-blur-md rounded-full border-2 border-primary-foreground/20">
          <p className="text-white font-semibold text-sm md:text-base" data-testid="badge-farmer-support">
            Buy & Support Small Local Farmer Development in Ugandan Villages
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg"
            className="backdrop-blur-md bg-white/20 hover:bg-white/30 text-white border-2 border-white/40 min-w-[200px] text-lg"
            onClick={() => setLocation('/coffee')}
            data-testid="button-explore"
          >
            Explore Our Coffee
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="backdrop-blur-md bg-white/10 hover:bg-white/20 text-white border-2 border-white/60 min-w-[200px] text-lg"
            onClick={() => setLocation('/contact')}
            data-testid="button-inquiry"
          >
            Export Inquiry
          </Button>
        </div>
      </div>
      
      <button 
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll to content"
        data-testid="button-scroll"
      >
        <ChevronDown className="w-10 h-10" />
      </button>
    </section>
  );
}
