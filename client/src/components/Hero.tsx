import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@assets/photos/hero-plantation.jpg";
import logoSymbol from "@assets/Screenshot 2025-11-02 030336_1762049032640.png";
import { useLocation } from "wouter";
import { useTranslation } from "react-i18next";
import { paymentLinks } from "@/lib/payments";

export default function Hero() {
  const { t } = useTranslation();
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
      
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        <img 
          src={logoSymbol} 
          alt="Ubuntu Coffee Logo" 
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-6 sm:mb-8 drop-shadow-lg object-contain"
          data-testid="img-logo"
        />
        
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2" data-testid="text-hero-title">
          {t('hero.title')}
        </h1>
        
        <p className="font-accent text-lg sm:text-xl md:text-2xl lg:text-3xl italic text-white/95 mb-3 sm:mb-4 px-2" data-testid="text-tagline">
          {t('hero.tagline')}
        </p>
        
        <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto px-2" data-testid="text-subtitle">
          {t('hero.subtitle')}
        </p>
        
        <div className="inline-block mb-6 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 bg-primary/90 backdrop-blur-md rounded-full border-2 border-primary-foreground/20 mx-2">
          {paymentLinks.stripe.farmerSupport || paymentLinks.paypal ? (
            <a
              href={paymentLinks.stripe.farmerSupport || paymentLinks.paypal}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold text-xs sm:text-sm md:text-base underline-offset-4 hover:underline"
              data-testid="badge-farmer-support"
            >
              {t('hero.farmerSupport')}
            </a>
          ) : (
            <p className="text-white font-semibold text-xs sm:text-sm md:text-base" data-testid="badge-farmer-support">
              {t('hero.farmerSupport')}
            </p>
          )}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2">
          <Button 
            size="lg"
            className="backdrop-blur-md bg-white/20 hover:bg-white/30 text-white border-2 border-white/40 w-full sm:w-auto sm:min-w-[200px] text-base sm:text-lg min-h-[44px]"
            onClick={() => setLocation('/coffee')}
            data-testid="button-explore"
          >
            {t('hero.exploreButton')}
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="backdrop-blur-md bg-white/10 hover:bg-white/20 text-white border-2 border-white/60 w-full sm:w-auto sm:min-w-[200px] text-base sm:text-lg min-h-[44px]"
            onClick={() => setLocation('/contact')}
            data-testid="button-inquiry"
          >
            {t('hero.inquiryButton')}
          </Button>
        </div>
      </div>
      
      <button 
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-colors animate-bounce p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
        aria-label="Scroll to content"
        data-testid="button-scroll"
      >
        <ChevronDown className="w-10 h-10" />
      </button>
    </section>
  );
}
