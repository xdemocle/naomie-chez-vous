import { MessageCircle, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/242067459576", "_blank");
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">Naomie</div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Votre boutique de confiance pour les articles de maison et accessoires de beauté 
              à Pointe-Noire, République du Congo.
            </p>
            <div className="flex items-center space-x-2 text-primary-foreground/80">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">Pointe-Noire, ROC</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <div className="text-lg font-semibold">Liens Rapides</div>
            <div className="space-y-2">
              <a href="#accueil" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Accueil
              </a>
              <a href="#produits" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Nos Produits
              </a>
              <a href="#categories" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Catégories
              </a>
              <a href="#contact" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <div className="text-lg font-semibold">Contact</div>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-primary-foreground/80">Téléphone:</p>
                <p className="font-medium">+242 06 745 9576</p>
              </div>
              <div>
                <p className="text-sm text-primary-foreground/80">Horaires:</p>
                <p className="font-medium">Lun-Sam: 8h-18h</p>
                <p className="font-medium">Dim: 10h-16h</p>
              </div>
              <button
                onClick={handleWhatsAppClick}
                className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80 text-sm">
            © {currentYear} Naomie. Tous droits réservés. | Pointe-Noire, République du Congo
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;