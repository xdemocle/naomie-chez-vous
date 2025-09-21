import Categories from "@/components/Categories";
import Contact from "@/components/Contact";
import FeaturedProducts from "@/components/FeaturedProducts";
import Hero from "@/components/Hero";
import ProductGallery from "@/components/ProductGallery";

const Index = () => {
  return (
      <main>
        <Hero />
        <FeaturedProducts />
        <ProductGallery />
        <Categories />
        <Contact />
      </main>
  );
};

export default Index;
