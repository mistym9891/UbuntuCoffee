import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun, Globe } from "lucide-react";
import { Link, useLocation } from "wouter";
import logoSymbol from "@assets/Screenshot 2025-11-02 030336_1762049032640.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";

export default function Navigation() {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [location] = useLocation();

  const languages = [
    { code: "en", name: "English", display: "EN" },
    { code: "fr", name: "Français", display: "FR" },
    { code: "de", name: "Deutsch", display: "DE" },
    { code: "es", name: "Español", display: "ES" },
    { code: "ar", name: "العربية", display: "AR" },
    { code: "zh", name: "中文", display: "ZH" },
    { code: "ja", name: "日本語", display: "JA" },
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
  };

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
    { name: t('nav.home'), href: "/" },
    { name: t('nav.coffee'), href: "/coffee" },
    { name: t('nav.sustainability'), href: "/sustainability" },
    { name: t('nav.contact'), href: "/contact" }
  ];

  const isHomePage = location === "/";

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        isScrolled || !isHomePage ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
      data-testid="nav-main"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <img src={logoSymbol} alt="Ubuntu Coffee" className="w-10 h-10 object-contain" data-testid="img-nav-logo" />
            <span className={`font-serif font-bold text-lg ${isScrolled || !isHomePage ? "text-foreground" : "text-white"}`} data-testid="text-nav-brand">
              UBUNTU
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <Link 
                key={index} 
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isScrolled || !isHomePage 
                    ? "text-foreground hover:text-primary" 
                    : "text-white hover:text-white/80"
                } ${location === link.href ? "text-primary" : ""}`}
                data-testid={`link-nav-${index}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`gap-2 ${isScrolled || !isHomePage ? "" : "text-white hover:bg-white/10"}`}
                  data-testid="button-language"
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-sm font-medium">{currentLanguage.display}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" data-testid="menu-language">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={i18n.language === lang.code ? "bg-accent" : ""}
                    data-testid={`lang-${lang.code.toLowerCase()}`}
                  >
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className={isScrolled || !isHomePage ? "" : "text-white hover:bg-white/10"}
              data-testid="button-theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            <Link href="/contact">
              <Button 
                variant="default"
                data-testid="button-nav-cta"
              >
                {t('nav.orderExport')}
              </Button>
            </Link>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden ${isScrolled || !isHomePage ? "" : "text-white"}`}
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
              <Link 
                key={index} 
                href={link.href}
                className={`block text-foreground hover:text-primary transition-colors ${
                  location === link.href ? "text-primary font-semibold" : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
                data-testid={`link-mobile-${index}`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground mb-2">Language</p>
              <div className="grid grid-cols-2 gap-2">
                {languages.map((lang) => (
                  <Button
                    key={lang.code}
                    variant={i18n.language === lang.code ? "default" : "outline"}
                    size="sm"
                    onClick={() => changeLanguage(lang.code)}
                    data-testid={`mobile-lang-${lang.code.toLowerCase()}`}
                  >
                    {lang.display}
                  </Button>
                ))}
              </div>
            </div>
            <Button 
              className="w-full"
              onClick={() => {
                setIsMobileMenuOpen(false);
                window.location.href = "/contact";
              }}
              data-testid="button-mobile-cta"
            >
              {t('nav.orderExport')}
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
