import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useEffect } from "react";

const portfolioImages = [
  "/lovable-uploads/94a0b898-9a74-4450-9af6-b02711581657.png",
  "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=600&fit=crop",
];

const HeroSection = () => {
  useEffect(() => {
    const scrollContainer = document.getElementById('portfolio-scroll');
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 1; // pixels per frame
    const itemWidth = 320; // width of each portfolio item including margin
    const totalWidth = portfolioImages.length * itemWidth;

    const scroll = () => {
      scrollPosition += scrollSpeed;

      // Reset position when we've scrolled through all items
      if (scrollPosition >= totalWidth) {
        scrollPosition = 0;
      }

      scrollContainer.scrollLeft = scrollPosition;
      requestAnimationFrame(scroll);
    };

    const scrollAnimation = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(scrollAnimation);
  }, []);

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-[#F5793B] via-[#F79A6B] to-[#F1580C] overflow-hidden pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute top-40 right-20 w-20 h-20 bg-white/20 rounded-lg rotate-45"></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 bg-white/15 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)]">
          {/* Left Content */}
          <div className="text-white space-y-8 lg:pr-8">
            <div className="space-y-2">
              <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm">
                URBAN DESIGN STUDIO
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Turn Your Ideas Into
                <span className="block text-[#fcfcfc] drop-shadow-lg">
                  Posters That
                </span>
                <span className="block bg-gradient-to-r from-[#fcfcfc] to-[#F79A6B] bg-clip-text text-transparent">
                  Sell & Shine
                </span>
              </h1>
            </div>

            <p className="text-xl lg:text-2xl leading-relaxed text-white/90 max-w-xl">
              At Urban Design, our team designers craft stunning custom posters that make your product, service, or event unforgettable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-[#F1580C] hover:bg-white/90 text-lg px-8 py-6 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-xl"
              >
                Get Your Custom Poster
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white hover:text-[#F1580C] text-lg px-8 py-6 rounded-full font-semibold transition-all duration-300"
              >
                <Play className="mr-2 h-5 w-5" />
                See Our Work
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm text-white/80">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">1000+</div>
                <div className="text-sm text-white/80">Posters Created</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm text-white/80">Human-Made</div>
              </div>
            </div>
          </div>

          {/* Right Content - Horizontal Scrolling Portfolio */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white/10 backdrop-blur-sm p-6">
              <div className="mb-4">
                <div className="inline-block px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full text-[#F1580C] font-semibold text-sm">
                  Live Portfolio
                </div>
              </div>

              <div 
                id="portfolio-scroll"
                className="flex gap-4 overflow-x-hidden"
                style={{ scrollBehavior: 'smooth' }}
              >
                {/* Duplicate array for seamless scrolling */}
                {[...portfolioImages, ...portfolioImages].map((image, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-72 h-80 rounded-xl overflow-hidden shadow-lg bg-white"
                  >
                    <img 
                      src={image} 
                      alt={`Portfolio ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-xl border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Designing Now</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#F1580C]">24h</div>
                <div className="text-xs text-gray-600">Avg. Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;