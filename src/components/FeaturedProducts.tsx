import ProductCard from "./ProductCard";
import orangeVlogoBag from "@/assets/orange-vlogo-bag.jpg";
import blackBlogoBag from "@/assets/black-b-logo-bag.jpg";
import pinkBlogoBag from "@/assets/pink-b-logo-bag.jpg";
import hermesPatternSandals from "@/assets/hermes-pattern-sandals.jpg";

const FeaturedProducts = () => {
  const products = [
    {
      id: "13",
      name: "Sac à Main V Logo Orange",
      price: "45.000 - 65.000 FCFA",
      image: orangeVlogoBag,
      category: "Sacs & Chaussures",
      description: "Sac à main élégant couleur orange avec logo V argenté et coutures blanches"
    },
    {
      id: "15",
      name: "Sac à Main B Logo Noir",
      price: "60.000 - 90.000 FCFA",
      image: blackBlogoBag,
      category: "Sacs & Chaussures",
      description: "Sac noir texturé avec grand logo B doré et poignées élégantes"
    },
    {
      id: "17",
      name: "Sac à Main Rose B Logo",
      price: "50.000 - 75.000 FCFA",
      image: pinkBlogoBag,
      category: "Sacs & Chaussures",
      description: "Sac rose pâle brillant avec logo B doré et poignées arrondies"
    },
    {
      id: "20",
      name: "Sandales Motif Hermès",
      price: "25.000 - 40.000 FCFA",
      image: hermesPatternSandals,
      category: "Sacs & Chaussures",
      description: "Sandales élégantes avec motif noir et blanc inspiré Hermès"
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
            Découvrez notre sélection d'articles de qualité pour votre maison et votre beauté. 
            De l'organisation domestique aux soins capillaires, trouvez tout ce dont vous avez besoin 
            pour améliorer votre quotidien à Pointe-Noire, République du Congo.
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