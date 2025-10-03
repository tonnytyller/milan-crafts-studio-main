import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { wishlistManager } from '@/lib/wishlist';
import { getProductById } from '@/lib/products';
import { Heart } from 'lucide-react';

const Wishlist = () => {
  const [wishlistProductIds, setWishlistProductIds] = useState<string[]>([]);

  useEffect(() => {
    const updateWishlist = () => {
      setWishlistProductIds(wishlistManager.getProductIds());
    };

    updateWishlist();
    const unsubscribe = wishlistManager.subscribe(updateWishlist);
    return () => unsubscribe();
  }, []);

  const wishlistProducts = wishlistProductIds
    .map(id => getProductById(id))
    .filter((product): product is NonNullable<typeof product> => product !== null);

  if (wishlistProducts.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center py-20">
            <Heart className="h-24 w-24 text-muted mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Your wishlist is empty</h2>
            <p className="text-muted-foreground mb-8">Save your favorite items for later!</p>
            <Link to="/shop">
              <Button variant="gradient" size="lg">
                Browse Products
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8">
            My Wishlist ({wishlistProducts.length})
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Wishlist;
