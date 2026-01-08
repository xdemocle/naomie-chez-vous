import { useState } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import naomieLogoSmall from "@/assets/naomie-logo-small.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/242067459576", "_blank");
  };

  const navLinks = [
    { href: "#accueil", label: "Accueil" },
    { href: "#produits", label: "Produits Vedettes" },
    { href: "#galerie", label: "Galerie Complète" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
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
            <span className="text-sm text-muted-foreground hidden sm:block">Naomie - Pointe-Noire, ROC</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className="text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="whatsapp"
              size="sm"
              onClick={handleWhatsAppClick}
              className="flex items-center gap-2"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </Button>

            {/* Hamburger button for mobile */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-5">
                <Menu 
                  className={`h-5 w-5 absolute transition-all duration-300 ${
                    isMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                  }`} 
                />
                <X 
                  className={`h-5 w-5 absolute transition-all duration-300 ${
                    isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                  }`} 
                />
              </div>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container mx-auto px-4 pb-4 flex flex-col space-y-3">
          {navLinks.map((link, index) => (
            <a 
              key={link.href}
              href={link.href} 
              onClick={handleNavClick}
              className="text-foreground hover:text-primary transition-colors py-2 border-b border-border/50 last:border-0"
              style={{ 
                animationDelay: `${index * 50}ms`,
                animation: isMenuOpen ? "fade-in 0.3s ease-out forwards" : "none"
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;