import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Sparkles, MessageCircle } from "lucide-react";

const Categories = () => {
  const categories = [
    {
      icon: <Home className="h-8 w-8" />,
      title: "Articles Maison",
      description: "Décoration, ustensiles de cuisine, rangement et bien plus",
      items: ["Bouteilles thermiques", "Services à thé", "Chariots de rangement", "Ustensiles cuisine"],
      gradient: "bg-gradient-secondary"
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Accessoires Beauté", 
      description: "Outils de coiffure, soins et accessoires pour votre beauté",
      items: ["Lisseurs cheveux", "Sèche-cheveux", "Fers à boucler", "Accessoires coiffure"],
      gradient: "bg-gradient-primary"
    }
  ];

  const handleWhatsAppClick = () => {
    const message = "Bonjour! J'aimerais voir votre catalogue complet de produits.";
    const phoneNumber = "242067147133";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="categories" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nos 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Catégories</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trouvez facilement ce que vous cherchez dans nos différentes catégories. 
            Chaque section regroupe des produits soigneusement sélectionnés pour répondre 
            à vos besoins spécifiques en matière de maison et de beauté.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {categories.map((category, index) => (
            <Card 
              key={category.title}
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in border-border"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className={`inline-flex p-3 rounded-xl ${category.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-card-foreground mb-4 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {category.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {item}
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground"
                  onClick={handleWhatsAppClick}
                >
                  Voir les Produits
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <Button 
            size="lg" 
            onClick={handleWhatsAppClick}
            className="text-lg"
          >
            <MessageCircle className="h-5 w-5" />
            Voir Tout le Catalogue
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Categories;