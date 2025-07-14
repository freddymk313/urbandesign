import { Button } from "@/components/ui/button";
import { Check, Star, Zap, Crown } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$15",
    icon: Zap,
    description: "Perfect for single poster needs",
    features: [
      "1 custom poster",
      "2 revisions",
      "Delivery in 1 day",
      "HD print-ready format",
      "Email support"
    ],
    popular: false,
    gradient: "from-gray-400 to-gray-500"
  },
  {
    name: "Standard",
    price: "$25",
    icon: Star,
    description: "Most popular choice for businesses",
    features: [
      "2 poster concepts",
      "4 revisions",
      "Priority support",
      "HD print-ready format",
      "Multiple format delivery",
      "Commercial license"
    ],
    popular: true,
    gradient: "from-[#F5793B] to-[#F1580C]"
  },
  {
    name: "Premium",
    price: "$45",
    icon: Crown,
    description: "For the ultimate poster experience",
    features: [
      "3 poster concepts",
      "Unlimited revisions",
      "Same-day delivery",
      "Dedicated designer",
      "All formats included",
      "Commercial license",
      "Design consultation call"
    ],
    popular: false,
    gradient: "from-purple-500 to-pink-500"
  }
];

const PricingSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#F5793B]/5 to-[#F1580C]/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#F5793B] to-[#F79A6B] text-white rounded-full text-sm font-medium mb-4">
            PRICING PLANS
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#111111] mb-6">
            Choose Your
            <span className="block text-[#F1580C]">Perfect Package</span>
          </h2>
          <p className="text-xl text-[#2a2a2a] max-w-3xl mx-auto leading-relaxed">
            Transparent pricing with no hidden fees. Choose the package that fits your needs and budget.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border ${
                plan.popular ? 'border-[#F1580C] scale-105' : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-[#F5793B] to-[#F1580C] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${plan.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                  <plan.icon className="h-8 w-8 text-white" />
                </div>

                {/* Plan Name & Price */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-[#111111] mb-2">{plan.name}</h3>
                  <div className="flex items-baseline mb-2">
                    <span className="text-4xl font-bold text-[#F1580C]">{plan.price}</span>
                    <span className="text-[#2a2a2a] ml-2">per poster</span>
                  </div>
                  <p className="text-[#2a2a2a]">{plan.description}</p>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-[#2a2a2a]">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  className={`w-full py-6 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-[#F5793B] to-[#F1580C] text-white hover:shadow-xl'
                      : 'bg-[#111111] text-white hover:bg-[#2a2a2a]'
                  }`}
                >
                  Get This Package
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto border border-gray-100">
            <h3 className="text-2xl font-bold text-[#111111] mb-4">Need a Custom Solution?</h3>
            <p className="text-[#2a2a2a] mb-6 leading-relaxed">
              Planning a large campaign or need multiple posters? Contact us for volume discounts and custom packages tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="border-2 border-[#F1580C] text-[#F1580C] hover:bg-[#F1580C] hover:text-white">
                Contact Sales
              </Button>
              <Button size="lg" className="bg-gradient-to-r from-[#F5793B] to-[#F1580C] text-white hover:shadow-xl">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;