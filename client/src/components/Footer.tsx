import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import logoSymbol from "@assets/Screenshot 2025-11-02 030336_1762049032640.png";
import { useState } from "react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function Footer() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await apiRequest("POST", "/api/newsletter", { email });
      setEmail("");
      toast({ title: t("footer.newsletterSuccess", "You're subscribed. Thank you!") });
    } catch {
      toast({ variant: "destructive", title: t("footer.newsletterError", "Please enter a valid email.") });
    }
  };

  return (
    <footer className="bg-background border-t border-border py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img src={logoSymbol} alt="Ubuntu Coffee" className="w-16 h-16 mb-4 object-contain" data-testid="img-footer-logo" />
            <h3 className="font-serif text-xl font-bold text-foreground mb-2" data-testid="text-footer-brand">{t('footer.brand')}</h3>
            <p className="text-sm text-muted-foreground mb-4" data-testid="text-footer-tagline">
              {t('footer.tagline')}
            </p>
            <p className="text-sm text-muted-foreground" data-testid="text-footer-stats">
              {t('footer.stats')}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4" data-testid="text-products-heading">{t('footer.productsHeading')}</h4>
            <ul className="space-y-2">
              <li><Link href="/coffee" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-light-roast">{t('footer.lightRoast')}</Link></li>
              <li><Link href="/coffee" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-medium-roast">{t('footer.mediumRoast')}</Link></li>
              <li><Link href="/coffee" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-dark-roast">{t('footer.darkRoast')}</Link></li>
              <li><Link href="/coffee" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-sample-pack">{t('footer.samplePack')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4" data-testid="text-about-heading">{t('footer.aboutHeading')}</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-our-story">{t('footer.ourStory')}</Link></li>
              <li><Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-farmers">{t('footer.farmers')}</Link></li>
              <li><Link href="/sustainability" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-sustainability">{t('footer.sustainability')}</Link></li>
              <li><Link href="/sustainability" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-certifications">{t('footer.certifications')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4" data-testid="text-newsletter-heading">{t('footer.newsletterHeading')}</h4>
            <form onSubmit={handleNewsletterSubmit} className="mb-4">
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder={t('footer.emailPlaceholder')} 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  data-testid="input-newsletter"
                />
                <Button type="submit" data-testid="button-newsletter">{t('footer.joinButton')}</Button>
              </div>
            </form>
            <div className="flex gap-4">
              <a href="https://instagram.com/ubuntucoffee" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Instagram" data-testid="link-instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com/ubuntucoffee" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Facebook" data-testid="link-facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/ubuntucoffee" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn" data-testid="link-linkedin">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground" data-testid="text-copyright">
            {t('footer.copyright')}
          </p>
          <div className="flex gap-6">
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-privacy">{t('footer.privacy')}</Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-terms">{t('footer.terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
