import { useParams, Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { getProductById, products } from '@/lib/products';
import { cartManager } from '@/lib/cart';
import { wishlistManager } from '@/lib/wishlist';
import { Heart, ShoppingCart, Star, MessageCircle, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';
import { useState, useEffect } from 'react';
import { ProductCard } from '@/components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProductById(id) : null;
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (product) {
      const updateWishlistState = () => {
        setIsInWishlist(wishlistManager.isInWishlist(product.id));
      };
      updateWishlistState();
      const unsubscribe = wishlistManager.subscribe(updateWishlistState);
      return () => unsubscribe();
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
            <Link to="/shop">
              <Button variant="gradient">Back to Shop</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    cartManager.addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    }, quantity);
    toast.success(`${quantity} ${product.name}(s) added to cart!`);
  };

  const handleToggleWishlist = () => {
    wishlistManager.toggle(product.id);
    toast.success(
      isInWishlist 
        ? `${product.name} removed from wishlist` 
        : `${product.name} added to wishlist!`
    );
  };

  const handleWhatsAppOrder = () => {
    const message = `Hi! I'm interested in ordering the ${product.name} (KSh ${product.price.toLocaleString()}).\n\nProduct: ${window.location.href}`;
    window.open(`https://wa.me/254791174063?text=${encodeURIComponent(message)}`, '_blank');
  };

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          {/* Back Button */}
          <Link to="/shop" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-smooth">
            <ArrowLeft className="h-4 w-4" />
            Back to Shop
          </Link>

          {/* Product Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Product Image */}
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-accent shadow-xl">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <div className="mb-4">
                <span className="text-sm font-medium text-primary">{product.category}</span>
              </div>

              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>

              {/* Rating */}
              {product.rating && (
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating!)
                            ? 'fill-[hsl(var(--star-rating))] text-[hsl(var(--star-rating))]'
                            : 'text-muted'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-lg font-medium">{product.rating}</span>
                  <span className="text-muted-foreground">({product.reviewCount} reviews)</span>
                </div>
              )}

              <p className="text-3xl font-bold text-primary mb-6">
                KSh {product.price.toLocaleString()}
              </p>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                {product.description}
              </p>

              {/* Stock Status */}
              <div className="mb-6">
                {product.inStock ? (
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 text-success rounded-full font-medium">
                    <span className="w-2 h-2 bg-success rounded-full" />
                    In Stock
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-destructive/10 text-destructive rounded-full font-medium">
                    <span className="w-2 h-2 bg-destructive rounded-full" />
                    Out of Stock
                  </span>
                )}
              </div>

              {/* Quantity Selector */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Quantity</label>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </Button>
                  <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </Button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mb-6">
                <Button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  variant="gradient"
                  size="lg"
                  className="flex-1 min-w-[200px]"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>

                <Button
                  onClick={handleToggleWishlist}
                  variant="outline"
                  size="lg"
                >
                  <Heart
                    className={`h-5 w-5 ${isInWishlist ? 'fill-secondary text-secondary' : ''}`}
                  />
                </Button>
              </div>

              {/* WhatsApp Order */}
              <Button
                onClick={handleWhatsAppOrder}
                variant="outline"
                size="lg"
                className="w-full border-success text-success hover:bg-success hover:text-success-foreground"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Order via WhatsApp
              </Button>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <section>
              <h2 className="text-3xl font-bold mb-8">Related Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <ProductCard key={relatedProduct.id} product={relatedProduct} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
