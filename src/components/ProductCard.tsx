import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  image: string;
  category: string;
  description?: string;
}

const ProductCard = ({ id, name, price, image, category, description }: ProductCardProps) => {
  const handleBuyNow = () => {
    const message = `Bonjour! Je suis intéressé(e) par le produit: ${name} (${price}). Pouvez-vous me donner plus d'informations?`;
    const phoneNumber = "242067459576";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-card border-border">
      <CardContent className="p-0">
        <div className="aspect-square relative overflow-hidden rounded-t-lg">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
            <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-secondary text-secondary-foreground text-[10px] sm:text-xs font-medium rounded-full">
              {category}
            </span>
          </div>
        </div>
        
        <div className="p-2 sm:p-4 space-y-1 sm:space-y-2">
          <h3 className="font-semibold text-sm sm:text-lg text-card-foreground group-hover:text-primary transition-colors line-clamp-2">
            {name}
          </h3>
          {description && (
            <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 hidden sm:block">
              {description}
            </p>
          )}
          <p className="text-base sm:text-xl font-bold text-primary">
            {price}
          </p>
        </div>
      </CardContent>
      
      <CardFooter className="p-2 sm:p-4 pt-0">
        <Button 
          variant="buy" 
          className="w-full text-xs sm:text-sm py-2 sm:py-2.5"
          onClick={handleBuyNow}
        >
          <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4" />
          <span className="hidden sm:inline">Acheter Maintenant</span>
          <span className="sm:hidden">Commander</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;