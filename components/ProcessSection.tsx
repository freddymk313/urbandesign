import { FileText, Palette, Eye, Download, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Choose Package & Brief",
    description: "Select your poster type and package, then fill out our short brief form with your requirements."
  },
  {
    number: "02",
    icon: Palette,
    title: "Design Creation",
    description: "Our human designers start crafting your custom poster using creativity and strategic thinking."
  },
  {
    number: "03",
    icon: Eye,
    title: "Review & Revisions",
    description: "You review the design and request any changes. We refine until it's exactly what you envisioned."
  },
  {
    number: "04",
    icon: Download,
    title: "Final Delivery",
    description: "Receive your stunning poster in HD, print-ready format. Ready to make an impact!"
  }
];

const ProcessSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#F5793B]/5 to-[#F1580C]/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#F5793B] to-[#F79A6B] text-white rounded-full text-sm font-medium mb-4">
            OUR PROCESS
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#111111] mb-6">
            From Idea to
            <span className="block text-[#F1580C]">Stunning Poster</span>
          </h2>
          <p className="text-xl text-[#2a2a2a] max-w-3xl mx-auto leading-relaxed">
            Our streamlined 4-step process ensures you get exactly what you need, when you need it.
          </p>
        </div>

        <div className="relative">
          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="grid lg:grid-cols-4 gap-8 relative">
              {/* Connection Lines */}
              <div className="absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-[#F5793B] to-[#F1580C] opacity-30"></div>

              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 relative z-10">
                    {/* Step Number */}
                    <div className="absolute -top-4 left-8 w-12 h-12 bg-gradient-to-br from-[#F5793B] to-[#F1580C] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {step.number}
                    </div>

                    <div className="pt-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#F5793B]/10 to-[#F1580C]/10 rounded-xl flex items-center justify-center mb-6">
                        <step.icon className="h-8 w-8 text-[#F1580C]" />
                      </div>

                      <h3 className="text-xl font-bold text-[#111111] mb-4">
                        {step.title}
                      </h3>

                      <p className="text-[#2a2a2a] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Arrow for desktop */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-20 -right-4 z-20">
                      <div className="w-8 h-8 bg-white border-2 border-[#F1580C] rounded-full flex items-center justify-center shadow-lg">
                        <ArrowRight className="h-4 w-4 text-[#F1580C]" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8 w-12 h-12 bg-gradient-to-br from-[#F5793B] to-[#F1580C] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.number}
                  </div>

                  <div className="pt-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#F5793B]/10 to-[#F1580C]/10 rounded-xl flex items-center justify-center mb-6">
                      <step.icon className="h-8 w-8 text-[#F1580C]" />
                    </div>

                    <h3 className="text-xl font-bold text-[#111111] mb-4">
                      {step.title}
                    </h3>

                    <p className="text-[#2a2a2a] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Vertical connector for mobile */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center py-4">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-[#F5793B] to-[#F1580C] opacity-30"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;