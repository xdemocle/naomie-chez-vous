import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const message = "Bonjour! Je visite votre boutique en ligne et j'aimerais avoir plus d'informations.";
    const phoneNumber = "242067459576";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-scale-in">
      <Button
        variant="whatsapp"
        size="lg"
        onClick={handleWhatsAppClick}
        className="rounded-full w-16 h-16 shadow-2xl hover:shadow-xl transition-all duration-300 animate-pulse"
        title="Contactez-nous sur WhatsApp"
      >
        <MessageCircle className="h-8 w-8" />
      </Button>
    </div>
  );
};

export default WhatsAppFloat;