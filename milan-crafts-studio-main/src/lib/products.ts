import { Product } from './types';

import hatSunsetDream from '@/assets/products/hat-sunset-dream.jpg';
import bagMarketTote from '@/assets/products/bag-market-tote.jpg';
import hatCozyBeanie from '@/assets/products/hat-cozy-beanie.jpg';
import bagCrossbody from '@/assets/products/bag-crossbody.jpg';
import hatSummerBreeze from '@/assets/products/hat-summer-breeze.jpg';
import bagBackpack from '@/assets/products/bag-backpack.jpg';

export const products: Product[] = [
  {
    id: 'hat-001',
    name: 'Sunset Dream Hat',
    price: 1200,
    category: 'Hats',
    description: 'Beautiful handmade bucket hat featuring vibrant sunset orange and pink gradient colors. Perfect for adding a pop of color to any outfit. Each piece is lovingly crafted by local artisans in Kenya.',
    image: hatSunsetDream,
    inStock: true,
    featured: true,
    rating: 4.8,
    reviewCount: 128,
  },
  {
    id: 'bag-001',
    name: 'Market Tote Bag',
    price: 1800,
    category: 'Bags',
    description: 'Spacious and sturdy tote bag in natural beige with coral pink accents. Perfect for shopping, beach trips, or everyday use. Handmade with durable materials for long-lasting quality.',
    image: bagMarketTote,
    inStock: true,
    featured: true,
    rating: 4.9,
    reviewCount: 95,
  },
  {
    id: 'hat-002',
    name: 'Cozy Beanie',
    price: 950,
    category: 'Hats',
    description: 'Warm and cozy beanie in earthy brown and cream tones. Ideal for cooler weather, this handmade piece combines comfort with style. Soft texture and snug fit guaranteed.',
    image: hatCozyBeanie,
    inStock: true,
    featured: false,
    rating: 4.7,
    reviewCount: 76,
  },
  {
    id: 'bag-002',
    name: 'Crossbody Purse',
    price: 1500,
    category: 'Bags',
    description: 'Vibrant pink and orange crossbody bag perfect for hands-free convenience. Compact yet spacious enough for essentials. Features adjustable strap and secure closure.',
    image: bagCrossbody,
    inStock: true,
    featured: true,
    rating: 4.6,
    reviewCount: 112,
  },
  {
    id: 'hat-003',
    name: 'Summer Breeze Hat',
    price: 1350,
    category: 'Hats',
    description: 'Wide-brim sun hat in soft cream and blush pink colors. Provides excellent sun protection while looking effortlessly chic. Perfect for beach days and summer adventures.',
    image: hatSummerBreeze,
    inStock: true,
    featured: true,
    rating: 4.8,
    reviewCount: 143,
  },
  {
    id: 'bag-003',
    name: 'Daypack Backpack',
    price: 2200,
    category: 'Bags',
    description: 'Practical and stylish backpack in earth-tone brown and beige. Features multiple compartments and comfortable straps. Ideal for daily commutes or casual outings.',
    image: bagBackpack,
    inStock: true,
    featured: false,
    rating: 4.9,
    reviewCount: 87,
  },
];

export const getFeaturedProducts = () => products.filter(p => p.featured);
export const getProductById = (id: string) => products.find(p => p.id === id);
export const getProductsByCategory = (category: Product['category']) => 
  products.filter(p => p.category === category);
