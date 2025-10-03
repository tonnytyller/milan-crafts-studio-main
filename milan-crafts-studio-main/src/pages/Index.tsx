import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { getFeaturedProducts } from '@/lib/products';
import { Sparkles, Heart, Shield } from 'lucide-react';
import heroBanner from '@/assets/hero-banner.jpg';

const Index = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${heroBanner})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Handmade Crochet
              <span className="block gradient-primary bg-clip-text text-transparent">
                from Kenya
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
              Beautiful crafts made with love by local artisans. Each piece tells a unique story.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/shop">
                <Button size="lg" variant="gradient" className="text-lg">
                  Shop Now
                </Button>
              </Link>
              <Link to="/custom-orders">
                <Button size="lg" variant="outline" className="text-lg bg-white/10 backdrop-blur-sm border-white/50 text-white hover:bg-white hover:text-foreground">
                  Custom Orders
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-accent/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary mb-4">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Handmade Quality</h3>
                <p className="text-muted-foreground">
                  Every item is carefully crafted by skilled artisans with attention to detail.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Made with Love</h3>
                <p className="text-muted-foreground">
                  Supporting local communities and preserving traditional craftsmanship.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Quality Guaranteed</h3>
                <p className="text-muted-foreground">
                  Durable materials and expert craftsmanship ensure long-lasting products.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover our most popular handmade crochet items, loved by customers across Kenya.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="text-center">
              <Link to="/shop">
                <Button size="lg" variant="gradient">
                  View All Products
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 gradient-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Want Something Unique?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              We offer custom orders! Work with our artisans to create a one-of-a-kind piece 
              tailored to your preferences.
            </p>
            <Link to="/custom-orders">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/50 text-white hover:bg-white hover:text-foreground">
                Request Custom Order
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
