import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MessageCircle, Palette, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

const CustomOrders = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    itemType: '',
    description: '',
    colors: '',
    budget: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.itemType || !formData.description) {
      toast.error('Please fill in all required fields');
      return;
    }

    let message = `*MILAN CROCHET - CUSTOM ORDER REQUEST*\n\n`;
    message += `*Customer Details:*\n`;
    message += `Name: ${formData.name}\n`;
    message += `Phone: ${formData.phone}\n`;
    if (formData.email) message += `Email: ${formData.email}\n`;
    message += `\n*Order Details:*\n`;
    message += `Item Type: ${formData.itemType}\n`;
    message += `Description: ${formData.description}\n`;
    if (formData.colors) message += `Preferred Colors: ${formData.colors}\n`;
    if (formData.budget) message += `Budget: KSh ${formData.budget}\n`;
    message += `\n_Thank you for your interest! We'll get back to you soon._`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/254791174063?text=${encodedMessage}`, '_blank');
    
    toast.success('Opening WhatsApp to send your custom order request!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 gradient-warm border-b border-border">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Custom Orders</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a unique vision? Work directly with our talented artisans to create a one-of-a-kind piece tailored just for you.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Tell Us About Your Vision</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Your Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">WhatsApp Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+254 712 345 678"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email (Optional)</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="itemType">What would you like made? *</Label>
                  <Input
                    id="itemType"
                    name="itemType"
                    value={formData.itemType}
                    onChange={handleChange}
                    placeholder="e.g., Hat, Bag, Scarf, Blanket"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="description">Describe Your Vision *</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Tell us about the size, style, patterns, or any specific details you'd like..."
                    rows={5}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="colors">Preferred Colors (Optional)</Label>
                  <Input
                    id="colors"
                    name="colors"
                    value={formData.colors}
                    onChange={handleChange}
                    placeholder="e.g., Pink and Orange, Earth tones"
                  />
                </div>

                <div>
                  <Label htmlFor="budget">Budget (KSh) (Optional)</Label>
                  <Input
                    id="budget"
                    name="budget"
                    type="number"
                    value={formData.budget}
                    onChange={handleChange}
                    placeholder="e.g., 2000"
                  />
                </div>

                <Button type="submit" variant="gradient" size="lg" className="w-full">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Send Request via WhatsApp
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  * Required fields
                </p>
              </form>
            </div>

            {/* Info Section */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">How It Works</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Share Your Idea</h3>
                      <p className="text-muted-foreground">
                        Fill out the form with details about what you'd like made. The more specific, the better!
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">We'll Discuss</h3>
                      <p className="text-muted-foreground">
                        Our team will reach out via WhatsApp to discuss your vision, materials, timeline, and pricing.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">We Create</h3>
                      <p className="text-muted-foreground">
                        Once confirmed, our artisans will handcraft your unique piece with care and attention to detail.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">You Receive</h3>
                      <p className="text-muted-foreground">
                        We'll deliver your custom creation, made exactly to your specifications!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-accent/50 rounded-xl p-6 border border-border">
                <div className="flex items-start gap-3 mb-4">
                  <Palette className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Endless Possibilities</h3>
                    <p className="text-sm text-muted-foreground">
                      From baby blankets to beach bags, from home décor to fashion accessories - 
                      if you can imagine it, we can create it!
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Sparkles className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Quality Guarantee</h3>
                    <p className="text-sm text-muted-foreground">
                      Every custom order is made with premium materials and crafted by experienced artisans 
                      who take pride in their work.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CustomOrders;
