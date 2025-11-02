import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import logoSymbol from "@assets/generated_images/Pure_transparent_alpha_logo_8df46b86.png";
import { useState } from "react";
import { Link } from "wouter";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <footer className="bg-background border-t border-border py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img src={logoSymbol} alt="Ubuntu Coffee" className="w-16 h-16 mb-4" data-testid="img-footer-logo" style={{ backgroundColor: 'transparent', mixBlendMode: 'multiply' }} />
            <h3 className="font-serif text-xl font-bold text-foreground mb-2" data-testid="text-footer-brand">UBUNTU COFFEE</h3>
            <p className="text-sm text-muted-foreground mb-4" data-testid="text-footer-tagline">
              Uganda - Pearl of Africa
            </p>
            <p className="text-sm text-muted-foreground" data-testid="text-footer-stats">
              Exporting to 24+ countries
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4" data-testid="text-products-heading">Products</h4>
            <ul className="space-y-2">
              <li><Link href="/coffee" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-light-roast">Light Roast</Link></li>
              <li><Link href="/coffee" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-medium-roast">Medium Roast</Link></li>
              <li><Link href="/coffee" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-dark-roast">Dark Roast</Link></li>
              <li><Link href="/coffee" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-sample-pack">Sample Pack</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4" data-testid="text-about-heading">About Ubuntu</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-our-story">Our Story</Link></li>
              <li><Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-farmers">Our Farmers</Link></li>
              <li><Link href="/sustainability" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-sustainability">Sustainability</Link></li>
              <li><Link href="/sustainability" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-certifications">Certifications</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4" data-testid="text-newsletter-heading">Join the Ubuntu Community</h4>
            <form onSubmit={handleNewsletterSubmit} className="mb-4">
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  data-testid="input-newsletter"
                />
                <Button type="submit" data-testid="button-newsletter">Join</Button>
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
            © 2025 Ubuntu Coffee. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-privacy">Privacy Policy</Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
