import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/lib/types';
import { cartManager } from '@/lib/cart';
import { wishlistManager } from '@/lib/wishlist';
import { toast } from 'sonner';
import { useState, useEffect } from 'react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    const updateWishlistState = () => {
      setIsInWishlist(wishlistManager.isInWishlist(product.id));
    };

    updateWishlistState();
    const unsubscribe = wishlistManager.subscribe(updateWishlistState);
    return () => unsubscribe();
  }, [product.id]);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    cartManager.addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    toast.success(`${product.name} added to cart!`);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    wishlistManager.toggle(product.id);
    toast.success(
      isInWishlist 
        ? `${product.name} removed from wishlist` 
        : `${product.name} added to wishlist!`
    );
  };

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-smooth border border-border">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden bg-accent">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
          />
          
          {/* Wishlist Button */}
          <button
            onClick={handleToggleWishlist}
            className="absolute top-3 right-3 p-2 bg-card/90 backdrop-blur-sm rounded-full hover:bg-card transition-smooth"
          >
            <Heart
              className={`h-5 w-5 transition-smooth ${
                isInWishlist ? 'fill-secondary text-secondary' : 'text-muted-foreground'
              }`}
            />
          </button>

          {/* Stock Badge */}
          {!product.inStock && (
            <div className="absolute top-3 left-3 px-3 py-1 bg-destructive text-destructive-foreground text-xs font-semibold rounded-full">
              Out of Stock
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-1 line-clamp-1 group-hover:text-primary transition-smooth">
            {product.name}
          </h3>
          
          <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
            {product.description}
          </p>

          {/* Rating */}
          {product.rating && (
            <div className="flex items-center gap-1 mb-3">
              <Star className="h-4 w-4 fill-[hsl(var(--star-rating))] text-[hsl(var(--star-rating))]" />
              <span className="text-sm font-medium">{product.rating}</span>
              <span className="text-xs text-muted-foreground">({product.reviewCount})</span>
            </div>
          )}

          {/* Price & Add to Cart */}
          <div className="flex items-center justify-between gap-2">
            <span className="text-xl font-bold text-primary">
              KSh {product.price.toLocaleString()}
            </span>
            
            <Button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              size="sm"
              variant="gradient"
              className="flex items-center gap-1"
            >
              <ShoppingCart className="h-4 w-4" />
              Add
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};
