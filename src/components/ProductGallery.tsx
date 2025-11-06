import React from "react";
import ProductCard from "./ProductCard";
import bottlesImage from "@/assets/bottles-collection.jpg";
import beautyToolsImage from "@/assets/beauty-tools.jpg";
import teaSetsImage from "@/assets/tea-sets.jpg";
import storageCartImage from "@/assets/storage-cart.jpg";
import hairSprayImage from "@/assets/hair-spray-products.jpg";
import hairCareImage from "@/assets/hair-care-products.jpg";
import wardrobeImage from "@/assets/wardrobe-organizer.jpg";
import bathroomShelfImage from "@/assets/bathroom-shelf.jpg";
import luxuryCookwareImage from "@/assets/luxury-cookware.jpg";
import shoeOrganizerImage from "@/assets/shoe-organizer.jpg";
import roseWallArtImage from "@/assets/rose-wall-art.jpg";
import africanWallArtImage from "@/assets/african-wall-art.jpg";
import orangeVlogoBag from "@/assets/orange-vlogo-bag.jpg";
import quiltedBags from "@/assets/quilted-bags-collection.jpg";
import blackBlogoBag from "@/assets/black-b-logo-bag.jpg";
import beigeToteBag from "@/assets/beige-tote-bag.jpg";
import pinkBlogoBag from "@/assets/pink-b-logo-bag.jpg";
import creamLargeTote from "@/assets/cream-large-tote.jpg";
import twotoneBag from "@/assets/twotone-vlogo-bag.jpg";
import hermesPatternSandals from "@/assets/hermes-pattern-sandals.jpg";
import blueCrocSandals from "@/assets/blue-croc-sandals.jpg";
import whiteBFlipflops from "@/assets/white-b-flipflops.jpg";

const ProductGallery = () => {
  const allProducts = [
    // Latest products - Sacs & Chaussures
    {
      id: "13",
      name: "Sac à Main V Logo Orange",
      price: "20.000 FCFA",
      image: orangeVlogoBag,
      category: "Sacs & Chaussures",
      description: "Sac à main élégant couleur orange avec logo V argenté et coutures blanches"
    },
    {
      id: "14",
      name: "Collection Sacs Matelassés",
      price: "20.000 FCFA",
      image: quiltedBags,
      category: "Sacs & Chaussures",
      description: "Sacs matelassés de luxe en bleu royal et beige avec fermeture dorée"
    },
    {
      id: "15",
      name: "Sac à Main B Logo Noir",
      price: "20.000 FCFA",
      image: blackBlogoBag,
      category: "Sacs & Chaussures",
      description: "Sac noir texturé avec grand logo B doré et poignées élégantes"
    },
    {
      id: "16",
      name: "Sac Cabas Beige",
      price: "20.000 FCFA",
      image: beigeToteBag,
      category: "Sacs & Chaussures",
      description: "Cabas spacieux beige avec détail turquoise et fermetures dorées"
    },
    {
      id: "17",
      name: "Sac à Main Rose B Logo",
      price: "20.000 FCFA",
      image: pinkBlogoBag,
      category: "Sacs & Chaussures",
      description: "Sac rose pâle brillant avec logo B doré et poignées arrondies"
    },
    {
      id: "18",
      name: "Grand Cabas Crème",
      price: "20.000 FCFA",
      image: creamLargeTote,
      category: "Sacs & Chaussures",
      description: "Grand sac cabas crème tressé avec anses en cuir et détails dorés"
    },
    {
      id: "19",
      name: "Sac Bicolore V Logo",
      price: "20.000 FCFA",
      image: twotoneBag,
      category: "Sacs & Chaussures",
      description: "Sac bandoulière noir et camel avec logo V argenté et coutures contrastées"
    },
    {
      id: "20",
      name: "Sandales Motif Hermès",
      price: "25.000 FCFA",
      image: hermesPatternSandals,
      category: "Sacs & Chaussures",
      description: "Sandales élégantes avec motif noir et blanc inspiré Hermès dans boîte orange"
    },
    {
      id: "21",
      name: "Sandales Bleues Croco",
      price: "25.000 FCFA",
      image: blueCrocSandals,
      category: "Sacs & Chaussures",
      description: "Sandales bleues effet crocodile avec logo H doré, style luxe"
    },
    {
      id: "22",
      name: "Tongs Blanches Logo B",
      price: "25.000 FCFA",
      image: whiteBFlipflops,
      category: "Sacs & Chaussures",
      description: "Tongs blanches élégantes avec logo B doré, confort premium"
    },
    // Existing products
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
    },
    // New products from images
    {
      id: "5",
      name: "Sprays Coiffure Professionnels",
      price: "8.000 - 15.000 FCFA",
      image: hairSprayImage,
      category: "Beauté",
      description: "Sprays fixateurs et texturisants pour une coiffure parfaite toute la journée"
    },
    {
      id: "6",
      name: "Kit Soin Cheveux Naturels",
      price: "12.000 - 20.000 FCFA",
      image: hairCareImage,
      category: "Beauté",
      description: "Huile d'olive ORS, bigoudis et accessoires pour cheveux naturels"
    },
    {
      id: "7",
      name: "Armoire Dressing Portable",
      price: "55.000 - 75.000 FCFA",
      image: wardrobeImage,
      category: "Maison",
      description: "Penderie avec étagères pour organiser vos vêtements et accessoires"
    },
    {
      id: "8",
      name: "Étagère Salle de Bain",
      price: "15.000 FCFA",
      image: bathroomShelfImage,
      category: "Maison",
      description: "Rangement pratique au-dessus des toilettes et lave-linge"
    },
    {
      id: "9",
      name: "Batterie de Cuisine Dorée",
      price: "85.000 - 120.000 FCFA",
      image: luxuryCookwareImage,
      category: "Maison",
      description: "Set complet de casseroles blanches avec finitions dorées élégantes"
    },
    {
      id: "10",
      name: "Étagère à Chaussures",
      price: "25.000 - 35.000 FCFA",
      image: shoeOrganizerImage,
      category: "Maison",
      description: "Rangement modulable pour organiser toutes vos chaussures"
    },
    {
      id: "11",
      name: "Tableau Décoratif Rose Dorée",
      price: "30.000 - 45.000 FCFA",
      image: roseWallArtImage,
      category: "Décoration",
      description: "Art mural moderne avec rose blanche et splash doré pour votre intérieur"
    },
    {
      id: "12",
      name: "Collection Art Africain",
      price: "20.000 - 35.000 FCFA",
      image: africanWallArtImage,
      category: "Décoration",
      description: "Tableaux inspirés de la culture africaine pour décorer votre maison"
    }
  ];

  const categories = ["Tous", "Sacs & Chaussures", "Maison", "Beauté", "Décoration"];
  const [selectedCategory, setSelectedCategory] = React.useState("Tous");

  const filteredProducts = selectedCategory === "Tous" 
    ? allProducts 
    : allProducts.filter(product => product.category === selectedCategory);

  return (
    <section id="galerie" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Notre 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Galerie Complète</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Explorez toute notre collection d'articles pour la maison et la beauté. 
            Des solutions de rangement innovantes aux produits de soins professionnels, 
            chaque article est sélectionné pour sa qualité et son utilité au quotidien.
          </p>
          
          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-primary text-primary-foreground shadow-button"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Aucun produit trouvé dans cette catégorie.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGallery;
