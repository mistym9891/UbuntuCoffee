import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";
import logoSymbol from "@assets/generated_images/Ubuntu_Coffee_logo_symbol_206098f4.png";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const navLinks = [
    { name: "Our Story", href: "#story" },
    { name: "Coffee", href: "#coffee" },
    { name: "Sustainability", href: "#sustainability" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
      data-testid="nav-main"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src={logoSymbol} alt="Ubuntu Coffee" className="w-10 h-10" data-testid="img-nav-logo" />
            <span className={`font-serif font-bold text-lg ${isScrolled ? "text-foreground" : "text-white"}`} data-testid="text-nav-brand">
              UBUNTU
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                className={`text-sm font-medium transition-colors ${
                  isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/80"
                }`}
                data-testid={`link-nav-${index}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className={isScrolled ? "" : "text-white hover:bg-white/10"}
              data-testid="button-theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            <Button 
              variant="default"
              onClick={() => console.log("Export inquiry clicked")}
              data-testid="button-nav-cta"
            >
              Order Export
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden ${isScrolled ? "" : "text-white"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border" data-testid="menu-mobile">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                className="block text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
                data-testid={`link-mobile-${index}`}
              >
                {link.name}
              </a>
            ))}
            <Button 
              className="w-full"
              onClick={() => {
                console.log("Export inquiry clicked");
                setIsMobileMenuOpen(false);
              }}
              data-testid="button-mobile-cta"
            >
              Order Export
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={toggleTheme}
              className="w-full"
              data-testid="button-mobile-theme"
            >
              {isDark ? <Sun className="w-4 h-4 mr-2" /> : <Moon className="w-4 h-4 mr-2" />}
              {isDark ? "Light Mode" : "Dark Mode"}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
