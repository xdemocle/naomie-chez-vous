import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import naomieLogo from "@/assets/naomie-logo.png";
import naomieLogoSmall from "@/assets/naomie-logo-small.jpg";

const Header = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/242067459576", "_blank");
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src={naomieLogoSmall} 
              alt="Naomie Shop Logo" 
              className="h-6 w-auto md:h-5 lg:h-6"
            />
            <span className="text-sm text-muted-foreground hidden sm:block">Pointe-Noire, ROC</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#accueil" className="text-foreground hover:text-primary transition-colors">
              Accueil
            </a>
            <a href="#produits" className="text-foreground hover:text-primary transition-colors">
              Produits Vedettes
            </a>
            <a href="#galerie" className="text-foreground hover:text-primary transition-colors">
              Galerie Complète
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          <Button
            variant="whatsapp"
            size="sm"
            onClick={handleWhatsAppClick}
            className="flex items-center gap-2"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;