import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/lib/products';
import { Product } from '@/lib/types';
import { Button } from '@/components/ui/button';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | Product['category']>('All');

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const categories: ('All' | Product['category'])[] = ['All', 'Hats', 'Bags', 'Accessories'];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Header */}
        <section className="py-12 gradient-warm border-b border-border">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Shop All Products</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Browse our complete collection of handmade crochet items. Each piece is unique and crafted with care.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="font-medium">Filter by:</span>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'gradient' : 'outline'}
                  onClick={() => setSelectedCategory(category)}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-6">
              <p className="text-muted-foreground">
                Showing <span className="font-semibold text-foreground">{filteredProducts.length}</span> products
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-xl text-muted-foreground">No products found in this category.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
