import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, MessageCircle, Clock } from "lucide-react";

const Contact = () => {
  const handleWhatsAppClick = () => {
    const message = "Bonjour! J'aimerais passer une commande ou avoir des informations sur vos produits.";
    const phoneNumber = "242066000000";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Notre Adresse",
      content: ["Pointe-Noire", "République du Congo"],
      action: null
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Téléphone",
      content: ["+242 06 600 00 00"],
      action: () => window.open("tel:+242066000000")
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "WhatsApp Business",
      content: ["Commandes et informations", "Réponse rapide garantie"],
      action: handleWhatsAppClick
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Horaires",
      content: ["Lun - Sam: 8h - 18h", "Dim: 10h - 16h"],
      action: null
    }
  ];

  return (
    <section id="contact" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contactez
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Nous</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Notre équipe est là pour vous accompagner dans vos achats et répondre à toutes vos questions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card 
              key={info.title}
              className={`text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-fade-in border-border ${
                info.action ? 'cursor-pointer hover:bg-muted/50' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={info.action || undefined}
            >
              <CardContent className="p-6">
                <div className="inline-flex p-3 bg-gradient-primary rounded-xl text-white mb-4">
                  {info.icon}
                </div>
                <h3 className="font-semibold text-lg text-card-foreground mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.content.map((line, lineIndex) => (
                    <p key={lineIndex} className="text-sm text-muted-foreground">
                      {line}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-6 animate-fade-in">
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-card-foreground mb-4">
              Commandez facilement sur WhatsApp
            </h3>
            <p className="text-muted-foreground mb-6">
              Envoyez-nous un message avec le produit qui vous intéresse et nous vous guiderons pour votre commande. 
              Livraison rapide à Pointe-Noire et environs.
            </p>
            <Button 
              size="lg" 
              onClick={handleWhatsAppClick}
              className="text-lg"
            >
              <MessageCircle className="h-5 w-5" />
              Commencer une Conversation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;