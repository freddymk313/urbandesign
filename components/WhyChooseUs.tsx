import { CheckCircle, Users, Zap, Palette, Clock, RefreshCw } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Real Human Designers",
    description: "No AI-generated designs. Every poster is handcrafted by our talented human designers with years of experience."
  },
  {
    icon: Zap,
    title: "Quick Delivery",
    description: "Premium quality delivered fast. Most posters completed within 24 hours without compromising on excellence."
  },
  {
    icon: Palette,
    title: "100% Custom Design",
    description: "Every poster is unique and tailored to your brand, message, and target audience. No templates, no copies."
  },
  {
    icon: RefreshCw,
    title: "Unlimited Revisions",
    description: "We work until you're 100% satisfied. Our premium packages include unlimited revisions at no extra cost."
  },
  {
    icon: Clock,
    title: "Multi-Purpose",
    description: "Perfect for product launches, service promotions, birthday celebrations, events, and any marketing needs."
  },
  {
    icon: CheckCircle,
    title: "Trust & Quality",
    description: "Trusted by 500+ clients worldwide. We deliver print-ready files in HD format with complete satisfaction guarantee."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-[#fcfcfc]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#F5793B] to-[#F79A6B] text-white rounded-full text-sm font-medium mb-4">
            WHY CHOOSE URBAN DESIGN
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#111111] mb-6">
            Crafted by Humans,
            <span className="block text-[#F1580C]">Made for Impact</span>
          </h2>
          <p className="text-xl text-[#2a2a2a] max-w-3xl mx-auto leading-relaxed">
            We combine creativity, strategy, and visual storytelling to deliver posters that grab attention and convert viewers into customers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#F5793B] to-[#F1580C] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-8 w-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-[#111111] mb-4 group-hover:text-[#F1580C] transition-colors duration-300">
                {feature.title}
              </h3>

              <p className="text-[#2a2a2a] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="mt-20 text-center">
          <p className="text-[#2a2a2a] mb-8 text-lg">Trusted by leading brands and entrepreneurs</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-24 h-12 bg-gradient-to-r from-[#F5793B] to-[#F79A6B] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">BRAND {i}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;