import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Clock, Users } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#111111] to-[#2a2a2a] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-[#F1580C] rounded-full"></div>
        <div className="absolute top-40 right-20 w-20 h-20 bg-[#F5793B] rounded-lg rotate-45"></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 bg-[#F79A6B] rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-[#F5793B] rounded-lg rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#F5793B] to-[#F79A6B] text-white rounded-full text-sm font-medium mb-6">
            READY TO GET STARTED?
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Make Your
            <span className="block bg-gradient-to-r from-[#F5793B] to-[#F1580C] bg-clip-text text-transparent">
              Brand Pop?
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
            Join hundreds of satisfied clients who've transformed their ideas into stunning posters that drive real results. Let's bring your vision to life!
          </p>

          {/* Main CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#F5793B] to-[#F1580C] text-white hover:shadow-2xl text-lg px-12 py-6 rounded-full font-semibold transition-all duration-300 hover:scale-105 border-0"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Start Your Design Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white hover:text-[#111111] text-lg px-12 py-6 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              View Portfolio
            </Button>
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#F5793B] to-[#F1580C] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Fast Delivery</h3>
              <p className="text-gray-300">Get your poster in as little as 24 hours</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#F5793B] to-[#F1580C] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Human Designers</h3>
              <p className="text-gray-300">100% handcrafted by real professionals</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#F5793B] to-[#F1580C] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Satisfaction Guaranteed</h3>
              <p className="text-gray-300">Unlimited revisions until perfect</p>
            </div>
          </div>

          {/* Urgency Element */}
          <div className="bg-gradient-to-r from-[#F5793B]/20 to-[#F1580C]/20 backdrop-blur-sm border border-[#F5793B]/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">🔥 Limited Time Offer</h3>
            <p className="text-gray-300 mb-6 text-lg">
              Get 20% off your first poster design when you order in the next 48 hours. Use code: <span className="text-[#F79A6B] font-bold">FIRST20</span>
            </p>
            <div className="flex justify-center">
              <Button className="bg-gradient-to-r from-[#F5793B] to-[#F1580C] text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Claim Your Discount
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;