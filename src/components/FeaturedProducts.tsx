import ProductCard from "./ProductCard";
import bottlesImage from "@/assets/bottles-collection.jpg";
import beautyToolsImage from "@/assets/beauty-tools.jpg";
import teaSetsImage from "@/assets/tea-sets.jpg";
import storageCartImage from "@/assets/storage-cart.jpg";

const FeaturedProducts = () => {
  const products = [
    {
      id: "1",
      name: "Collection Bouteilles Thermiques",
      price: "15.000 - 25.000 FCFA",
      image: bottlesImage,
      category: "Maison",
      description: "Bouteilles isothermes élégantes pour maintenir vos boissons à température idéale"
    },
    {
      id: "2", 
      name: "Outils de Coiffure Professionnels",
      price: "35.000 - 55.000 FCFA",
      image: beautyToolsImage,
      category: "Beauté",
      description: "Lisseurs, sèche-cheveux et fers à boucler de qualité professionnelle"
    },
    {
      id: "3",
      name: "Services à Thé Élégants",
      price: "20.000 - 40.000 FCFA", 
      image: teaSetsImage,
      category: "Maison",
      description: "Services à thé en porcelaine fine pour des moments de détente raffinés"
    },
    {
      id: "4",
      name: "Chariot de Rangement Cuisine",
      price: "45.000 - 65.000 FCFA",
      image: storageCartImage,
      category: "Maison",
      description: "Organisation optimale pour votre cuisine avec ce chariot multifonctions"
    }
  ];

  return (
    <section id="produits" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nos Produits 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Vedettes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez notre sélection soigneusement choisie d'articles pour embellir votre maison et sublimer votre beauté
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;