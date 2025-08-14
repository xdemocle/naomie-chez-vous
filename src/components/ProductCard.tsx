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
    const phoneNumber = "242066000000";
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
          <div className="absolute top-3 left-3">
            <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
              {category}
            </span>
          </div>
        </div>
        
        <div className="p-4 space-y-2">
          <h3 className="font-semibold text-lg text-card-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>
          {description && (
            <p className="text-sm text-muted-foreground line-clamp-2">
              {description}
            </p>
          )}
          <p className="text-xl font-bold text-primary">
            {price}
          </p>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button 
          variant="buy" 
          className="w-full"
          onClick={handleBuyNow}
        >
          <MessageCircle className="h-4 w-4" />
          Acheter Maintenant
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;