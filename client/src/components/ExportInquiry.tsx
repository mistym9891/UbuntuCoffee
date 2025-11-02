import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Globe, Award, Ship } from "lucide-react";

export default function ExportInquiry() {
  const [formData, setFormData] = useState({
    company: "",
    country: "",
    email: "",
    volume: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Export inquiry submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="py-20 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-card-foreground mb-4" data-testid="text-export-title">
            Export Inquiry
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-export-subtitle">
            Bring Uganda's finest coffee to your market. Contact us for wholesale and export partnerships.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card>
            <CardHeader>
              <CardTitle data-testid="text-form-title">Get in Touch</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="company">Company Name *</Label>
                  <Input 
                    id="company" 
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required 
                    data-testid="input-company"
                  />
                </div>
                <div>
                  <Label htmlFor="country">Country *</Label>
                  <Input 
                    id="country" 
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required 
                    data-testid="input-country"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input 
                    id="email" 
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    data-testid="input-email"
                  />
                </div>
                <div>
                  <Label htmlFor="volume">Expected Volume (kg/month)</Label>
                  <Input 
                    id="volume" 
                    name="volume"
                    value={formData.volume}
                    onChange={handleChange}
                    data-testid="input-volume"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    data-testid="input-message"
                  />
                </div>
                <Button type="submit" className="w-full" data-testid="button-submit">
                  Submit Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-4">
                  <Globe className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2" data-testid="text-global-title">Global Reach</h3>
                    <p className="text-sm text-muted-foreground" data-testid="text-global-desc">
                      Currently exporting to 24+ countries across Europe, Asia, and America. Experience in international logistics and customs.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-4">
                  <Award className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2" data-testid="text-cert-title">Certifications</h3>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Badge variant="secondary">Organic Certified</Badge>
                      <Badge variant="secondary">Fair Trade</Badge>
                      <Badge variant="secondary">Rainforest Alliance</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-4">
                  <Ship className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2" data-testid="text-shipping-title">Shipping & MOQ</h3>
                    <p className="text-sm text-muted-foreground mb-2" data-testid="text-shipping-desc">
                      Minimum order: 100kg. We work with reliable freight partners for sea and air shipping worldwide.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="pt-6">
                <p className="font-semibold mb-3" data-testid="text-contact-title">Direct Contact</p>
                <p className="text-sm mb-2" data-testid="text-email-sales">sales@ubuntucoffee.co.ug</p>
                <p className="text-sm mb-3" data-testid="text-email-info">info@ubuntucoffee.co.ug</p>
                <p className="text-sm mb-1" data-testid="text-phone-uganda">Uganda: +256 780240662</p>
                <p className="text-sm" data-testid="text-phone-germany">Germany: +49 517645694259</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
