import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/242067147133", "_blank");
  };

  return (
    <section id="accueil" className="relative min-h-[70vh] flex items-center bg-gradient-hero">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Votre Boutique
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Naomie
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Découvrez notre collection exclusive d'articles pour la maison et d'accessoires de beauté. 
              Qualité, élégance et style pour votre quotidien.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                onClick={handleWhatsAppClick}
                className="text-lg"
              >
                <MessageCircle className="h-5 w-5" />
                Commander sur WhatsApp
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('produits')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-lg"
              >
                Voir nos Produits
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Produits</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground">Qualité</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">24h</p>
                <p className="text-sm text-muted-foreground">Livraison</p>
              </div>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={heroImage} 
                alt="Collection Naomie - Articles maison et beauté"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;