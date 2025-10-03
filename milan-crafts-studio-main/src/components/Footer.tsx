import { Instagram, Twitter, MessageCircle, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold gradient-primary bg-clip-text text-transparent mb-4">
              Milan Crochet
            </h3>
            <p className="text-muted-foreground mb-4">
              Beautiful handmade crochet items crafted with love by local artisans in Kenya. 
              Each piece tells a story of tradition, skill, and passion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-muted-foreground hover:text-primary transition-smooth">
                  Shop All Products
                </Link>
              </li>
              <li>
                <Link to="/custom-orders" className="text-muted-foreground hover:text-primary transition-smooth">
                  Custom Orders
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-smooth">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-smooth">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
            
            {/* Social Links */}
            <div className="flex gap-3 mb-6">
              <a
                href="https://instagram.com/milans_crotchet_wrld"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-accent rounded-full hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/millancrotchet"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-accent rounded-full hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/254791174063"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-accent rounded-full hover:bg-success hover:text-success-foreground transition-smooth"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+254 791 174063</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Ngong Town, Kenya</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Milan Crochet. All rights reserved. Handmade with ❤️ in Kenya.</p>
        </div>
      </div>
    </footer>
  );
};
