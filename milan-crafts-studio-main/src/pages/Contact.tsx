import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { MessageCircle, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/254791174063', '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 gradient-warm border-b border-border">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We'd love to hear from you! Whether you have a question, feedback, or want to discuss a custom order.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Methods */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  Reach out to us through any of these channels. We typically respond within 24 hours!
                </p>
              </div>

              {/* WhatsApp */}
              <div className="bg-card rounded-xl p-6 border border-border shadow-md hover:shadow-lg transition-smooth">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-success/10 rounded-lg">
                    <MessageCircle className="h-6 w-6 text-success" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">WhatsApp</h3>
                    <p className="text-muted-foreground mb-3">
                      Our preferred method for quick responses and order inquiries.
                    </p>
                    <Button onClick={handleWhatsApp} variant="outline" className="border-success text-success hover:bg-success hover:text-success-foreground">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Chat on WhatsApp
                    </Button>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-card rounded-xl p-6 border border-border shadow-md">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <p className="text-muted-foreground mb-2">
                      Call us directly for immediate assistance.
                    </p>
                    <a href="tel:+254791174063" className="text-primary font-semibold hover:underline">
                      +254 791 174063
                    </a>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="bg-card rounded-xl p-6 border border-border shadow-md">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">Location</h3>
                    <p className="text-muted-foreground">
                      Ngong Town, Kenya
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      We offer delivery across Kenya. International shipping available on request.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social & FAQ */}
            <div className="space-y-8">
              {/* Social Media */}
              <div className="bg-card rounded-xl p-6 border border-border shadow-md">
                <h3 className="font-semibold text-xl mb-4">Connect on Social Media</h3>
                <p className="text-muted-foreground mb-6">
                  Follow us to see our latest creations, behind-the-scenes content, and special offers!
                </p>
                
                <div className="space-y-3">
                  <a
                    href="https://instagram.com/milans_crotchet_wrld"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-accent hover:bg-accent-foreground/10 rounded-lg transition-smooth"
                  >
                    <Instagram className="h-6 w-6 text-primary" />
                    <div>
                      <div className="font-semibold">Instagram</div>
                      <div className="text-sm text-muted-foreground">@milans_crotchet_wrld</div>
                    </div>
                  </a>

                  <a
                    href="https://twitter.com/millancrotchet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-accent hover:bg-accent-foreground/10 rounded-lg transition-smooth"
                  >
                    <Twitter className="h-6 w-6 text-primary" />
                    <div>
                      <div className="font-semibold">Twitter</div>
                      <div className="text-sm text-muted-foreground">@millancrotchet</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Quick FAQs */}
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 border border-border">
                <h3 className="font-semibold text-xl mb-4">Quick Answers</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-1">Do you ship nationwide?</h4>
                    <p className="text-sm text-muted-foreground">
                      Yes! We deliver across all counties in Kenya.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">How long does a custom order take?</h4>
                    <p className="text-sm text-muted-foreground">
                      Typically 1-3 weeks depending on complexity.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">What payment methods do you accept?</h4>
                    <p className="text-sm text-muted-foreground">
                      M-Pesa, bank transfer, and cash on delivery.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Can I return an item?</h4>
                    <p className="text-sm text-muted-foreground">
                      Yes, within 7 days if unused and in original condition.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center p-6 gradient-primary rounded-xl text-white">
                <h3 className="font-bold text-xl mb-2">Ready to Order?</h3>
                <p className="mb-4 opacity-90">
                  Start a conversation with us on WhatsApp!
                </p>
                <Button
                  onClick={handleWhatsApp}
                  variant="outline"
                  size="lg"
                  className="bg-white/10 backdrop-blur-sm border-white/50 text-white hover:bg-white hover:text-foreground"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Chat Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
