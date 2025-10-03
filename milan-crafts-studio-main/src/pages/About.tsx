import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Heart, Users, Award, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 gradient-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Milan Crochet</h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Crafting beautiful stories, one stitch at a time
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  Welcome to <span className="font-semibold text-foreground">Milan Crochet</span>, where traditional craftsmanship meets contemporary design. 
                  Based in the vibrant town of Ngong, Kenya, we are a collective of passionate artisans dedicated 
                  to creating beautiful, handmade crochet items that bring joy and color to everyday life.
                </p>
                <p>
                  Our journey began with a simple love for the art of crochet and a desire to preserve this 
                  timeless craft while supporting local communities. Each piece we create tells a story - 
                  of skilled hands, patient hearts, and the rich cultural heritage of Kenya.
                </p>
                <p>
                  What started as a small workshop has grown into a thriving community of artisans, all 
                  committed to producing high-quality, sustainable products. We take pride in every stitch, 
                  ensuring that each item meets our standards of excellence and brings happiness to its new owner.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-accent/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">What We Stand For</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Handmade with Love</h3>
                <p className="text-muted-foreground text-sm">
                  Every piece is carefully crafted by hand, with attention to detail and a passion for excellence.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Community First</h3>
                <p className="text-muted-foreground text-sm">
                  We support local artisans, providing fair wages and empowering our community members.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Quality Assured</h3>
                <p className="text-muted-foreground text-sm">
                  Premium materials and expert craftsmanship ensure durable, long-lasting products.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary mb-4">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Uniquely You</h3>
                <p className="text-muted-foreground text-sm">
                  Each item has its own character, making your purchase truly one-of-a-kind.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To preserve and celebrate the art of crochet while creating sustainable livelihoods for 
                artisans in Kenya. We believe in the power of handmade crafts to connect people, tell stories, 
                and bring warmth and beauty into homes around the world. Through our work, we aim to showcase 
                the incredible talent of Kenyan artisans and contribute to the economic empowerment of our community.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 gradient-warm border-t border-border">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Follow us on social media to see behind-the-scenes of our creative process, 
              meet our artisans, and be the first to know about new products!
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://instagram.com/milans_crotchet_wrld"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary-dark transition-smooth"
              >
                Follow on Instagram
              </a>
              <a
                href="https://twitter.com/millancrotchet"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary-dark transition-smooth"
              >
                Follow on Twitter
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
