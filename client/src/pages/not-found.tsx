import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-1 flex items-center justify-center px-6 py-32 text-center">
        <div className="max-w-md">
          <p className="font-serif text-6xl font-bold text-primary/30 mb-4">404</p>
          <h1 className="font-serif text-3xl font-bold text-foreground mb-4">This page wandered off the farm</h1>
          <p className="text-muted-foreground mb-8">
            The page you're looking for doesn't exist. Let's get you back to the coffee.
          </p>
          <Link href="/">
            <Button className="min-h-[44px]">Back to home</Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
