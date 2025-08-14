import ProductCard from "./ProductCard";
import bottlesImage from "@/assets/bottles-collection.jpg";
import beautyToolsImage from "@/assets/beauty-tools.jpg";
import hairSprayImage from "@/assets/hair-spray-products.jpg";
import luxuryCookwareImage from "@/assets/luxury-cookware.jpg";

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
      id: "5",
      name: "Sprays Coiffure Professionnels",
      price: "8.000 - 15.000 FCFA",
      image: hairSprayImage,
      category: "Beauté",
      description: "Sprays fixateurs et texturisants pour une coiffure parfaite"
    },
    {
      id: "9",
      name: "Batterie de Cuisine Dorée",
      price: "85.000 - 120.000 FCFA",
      image: luxuryCookwareImage,
      category: "Maison",
      description: "Set complet de casseroles blanches avec finitions dorées élégantes"
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
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground mb-6">
            Découvrez notre galerie complète avec plus de 50 produits
          </p>
          <button 
            onClick={() => document.getElementById('galerie')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-gradient-secondary text-secondary-foreground font-semibold rounded-lg hover:scale-105 transition-all duration-300 shadow-card"
          >
            Voir Toute la Galerie
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;