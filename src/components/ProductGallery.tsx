import React, { useState, useMemo } from "react";
import ProductCard from "./ProductCard";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Search, SlidersHorizontal, X } from "lucide-react";
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
import luxuryHeelPerfume from "@/assets/luxury-heel-perfume.jpg";
import hawiyaPerfume from "@/assets/hawiya-perfume.jpg";
import ameeratPerfume from "@/assets/ameerat-perfume.jpg";
import soLovePerfume from "@/assets/so-love-perfume.jpg";
import sovaryPerfume from "@/assets/sovary-perfume.jpg";
import shaikhSultanPerfume from "@/assets/shaikh-sultan-perfume.jpg";

const ProductGallery = () => {
  const allProducts = [
    // Latest products - Parfums
    {
      id: "23",
      name: "Parfum Luxe Talon Bleu",
      price: "10.000 FCFA",
      image: luxuryHeelPerfume,
      category: "Parfums",
      description: "Eau de parfum élégante avec design talon bleu emblématique"
    },
    {
      id: "24",
      name: "Hawiya For Him",
      price: "10.000 FCFA",
      image: hawiyaPerfume,
      category: "Parfums",
      description: "Parfum masculin Oulsetten, vaporisateur naturel 100ml"
    },
    {
      id: "25",
      name: "Ameerat Al Arab Wardi",
      price: "10.000 FCFA",
      image: ameeratPerfume,
      category: "Parfums",
      description: "Eau de parfum Exotic Collection, spray naturel 100ml"
    },
    {
      id: "26",
      name: "So Love Elite",
      price: "10.000 FCFA",
      image: soLovePerfume,
      category: "Parfums",
      description: "Eau de parfum Elite Collection, spray naturel 100ml"
    },
    {
      id: "27",
      name: "Sovary Elixir",
      price: "10.000 FCFA",
      image: sovaryPerfume,
      category: "Parfums",
      description: "Eau de parfum Exotic Collection, spray naturel 100ml"
    },
    {
      id: "28",
      name: "Shaikh Al Sultan",
      price: "10.000 FCFA",
      image: shaikhSultanPerfume,
      category: "Parfums",
      description: "Eau de parfum prestige Exotic Collection 100ml"
    },
    // Sacs & Chaussures
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

  const categories = ["Tous", "Parfums", "Sacs & Chaussures", "Maison", "Beauté", "Décoration"];
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 150000]);
  const [showFilters, setShowFilters] = useState(false);

  // Helper to extract min price from price string
  const extractMinPrice = (priceStr: string): number => {
    const match = priceStr.match(/[\d.]+/);
    return match ? parseFloat(match[0].replace(".", "")) * 1000 : 0;
  };

  const filteredProducts = useMemo(() => {
    return allProducts.filter(product => {
      // Category filter
      const categoryMatch = selectedCategory === "Tous" || product.category === selectedCategory;
      
      // Search filter
      const searchMatch = searchQuery === "" || 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Price filter
      const productPrice = extractMinPrice(product.price);
      const priceMatch = productPrice >= priceRange[0] && productPrice <= priceRange[1];
      
      return categoryMatch && searchMatch && priceMatch;
    });
  }, [selectedCategory, searchQuery, priceRange]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("Tous");
    setPriceRange([0, 150000]);
  };

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
          </p>
          
          {/* Search and filters */}
          <div className="max-w-4xl mx-auto mb-8 space-y-4">
            {/* Search bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Rechercher un produit..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-12 py-6 text-lg rounded-full border-border"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>

            {/* Toggle filters button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <SlidersHorizontal className="h-4 w-4" />
              {showFilters ? "Masquer les filtres" : "Afficher les filtres"}
            </button>

            {/* Expandable filters */}
            {showFilters && (
              <div className="bg-card rounded-2xl p-6 border border-border shadow-card animate-fade-in">
                {/* Price range */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Fourchette de prix: {priceRange[0].toLocaleString()} - {priceRange[1].toLocaleString()} FCFA
                  </label>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    min={0}
                    max={150000}
                    step={5000}
                    className="w-full"
                  />
                </div>

                {/* Clear filters button */}
                <button
                  onClick={clearFilters}
                  className="text-sm text-primary hover:underline"
                >
                  Réinitialiser les filtres
                </button>
              </div>
            )}
          </div>
          
          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 text-sm ${
                  selectedCategory === category
                    ? "bg-gradient-primary text-primary-foreground shadow-button"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Results count */}
          <p className="text-sm text-muted-foreground mb-4">
            {filteredProducts.length} produit{filteredProducts.length !== 1 ? "s" : ""} trouvé{filteredProducts.length !== 1 ? "s" : ""}
          </p>
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
