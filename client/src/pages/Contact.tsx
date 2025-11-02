import Navigation from "@/components/Navigation";
import ExportInquiry from "@/components/ExportInquiry";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <section className="py-20 px-6 bg-background text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6" data-testid="text-contact-hero-title">
              {t('contact.heroTitle')}
            </h1>
            <p className="text-xl text-muted-foreground" data-testid="text-contact-hero-subtitle">
              {t('contact.heroSubtitle')}
            </p>
          </div>
        </section>
        <ExportInquiry />
      </div>
      <Footer />
    </div>
  );
}
