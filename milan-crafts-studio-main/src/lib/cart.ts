import { CartItem } from './types';

const CART_STORAGE_KEY = 'milanCrochetCart';

export class CartManager {
  private items: CartItem[] = [];
  private listeners: Set<() => void> = new Set();

  constructor() {
    this.loadCart();
  }

  private loadCart() {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      this.items = stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Failed to load cart:', error);
      this.items = [];
    }
  }

  private saveCart() {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.items));
      this.notifyListeners();
    } catch (error) {
      console.error('Failed to save cart:', error);
    }
  }

  private notifyListeners() {
    this.listeners.forEach(listener => listener());
  }

  subscribe(listener: () => void) {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  addItem(product: { id: string; name: string; price: number; image: string }, quantity: number = 1) {
    const existingItem = this.items.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity,
      });
    }
    
    this.saveCart();
  }

  removeItem(productId: string) {
    this.items = this.items.filter(item => item.id !== productId);
    this.saveCart();
  }

  updateQuantity(productId: string, quantity: number) {
    const item = this.items.find(item => item.id === productId);
    if (item) {
      item.quantity = Math.max(1, quantity);
      this.saveCart();
    }
  }

  clearCart() {
    this.items = [];
    this.saveCart();
  }

  getItems(): CartItem[] {
    return [...this.items];
  }

  getItemCount(): number {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  }

  getTotal(): number {
    return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }
}

export const cartManager = new CartManager();
