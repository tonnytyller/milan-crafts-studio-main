import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { cartManager } from '@/lib/cart';
import { CartItem } from '@/lib/types';
import { Trash2, Plus, Minus, MessageCircle, ShoppingBag } from 'lucide-react';
import { toast } from 'sonner';

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const updateCart = () => {
      setCartItems(cartManager.getItems());
    };

    updateCart();
    const unsubscribe = cartManager.subscribe(updateCart);
    return () => unsubscribe();
  }, []);

  const handleUpdateQuantity = (productId: string, newQuantity: number) => {
    cartManager.updateQuantity(productId, newQuantity);
  };

  const handleRemoveItem = (productId: string, productName: string) => {
    cartManager.removeItem(productId);
    toast.success(`${productName} removed from cart`);
  };

  const handleWhatsAppCheckout = () => {
    if (cartItems.length === 0) return;

    const customerName = prompt('Enter your name:');
    const customerPhone = prompt('Enter your WhatsApp number:');
    const customerLocation = prompt('Enter your delivery location:');

    if (!customerName || !customerPhone || !customerLocation) {
      toast.error('All fields are required!');
      return;
    }

    let message = `*MILAN CROCHET ORDER*\n\n`;
    message += `*Customer:* ${customerName}\n`;
    message += `*Phone:* ${customerPhone}\n`;
    message += `*Location:* ${customerLocation}\n\n`;
    message += `*ORDER ITEMS:*\n`;

    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n`;
      message += `   Qty: ${item.quantity} × KSh ${item.price.toLocaleString()}\n`;
      message += `   Subtotal: KSh ${(item.quantity * item.price).toLocaleString()}\n\n`;
    });

    const total = cartManager.getTotal();
    message += `*TOTAL: KSh ${total.toLocaleString()}*\n\n`;
    message += `Please confirm this order!`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/254791174063?text=${encodedMessage}`, '_blank');
  };

  const subtotal = cartManager.getTotal();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center py-20">
            <ShoppingBag className="h-24 w-24 text-muted mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Your cart is empty</h2>
            <p className="text-muted-foreground mb-8">Add some beautiful handmade items to get started!</p>
            <Link to="/shop">
              <Button variant="gradient" size="lg">
                Start Shopping
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
          <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-card rounded-xl p-4 shadow-md border border-border">
                  <div className="flex gap-4">
                    {/* Product Image */}
                    <Link to={`/product/${item.id}`} className="flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                    </Link>

                    {/* Product Info */}
                    <div className="flex-1">
                      <Link to={`/product/${item.id}`}>
                        <h3 className="font-semibold text-lg hover:text-primary transition-smooth">
                          {item.name}
                        </h3>
                      </Link>
                      <p className="text-lg font-bold text-primary mt-1">
                        KSh {item.price.toLocaleString()}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3 mt-3">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="font-semibold w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>

                    {/* Remove & Subtotal */}
                    <div className="flex flex-col items-end justify-between">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleRemoveItem(item.id, item.name)}
                      >
                        <Trash2 className="h-5 w-5 text-destructive" />
                      </Button>
                      <p className="font-bold text-lg">
                        KSh {(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-xl p-6 shadow-md border border-border sticky top-20">
                <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span className="font-medium">KSh {subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Items</span>
                    <span className="font-medium">{cartManager.getItemCount()}</span>
                  </div>
                </div>

                <div className="border-t border-border pt-4 mb-6">
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span className="text-primary">KSh {subtotal.toLocaleString()}</span>
                  </div>
                </div>

                <Button
                  onClick={handleWhatsAppCheckout}
                  variant="gradient"
                  size="lg"
                  className="w-full mb-3"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Checkout via WhatsApp
                </Button>

                <Link to="/shop">
                  <Button variant="outline" size="lg" className="w-full">
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
