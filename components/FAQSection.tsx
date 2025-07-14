"use client"
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How long does delivery take?",
    answer: "Our delivery times vary by package: Basic (1 day), Standard (1-2 days), and Premium (same-day delivery). We prioritize quality while meeting these timelines, and our team works efficiently to ensure you get stunning results quickly."
  },
  {
    question: "Are your posters made by real people?",
    answer: "Absolutely! We're proud to say that 100% of our posters are handcrafted by experienced human designers. No AI, no templates, no shortcuts. Every design is thoughtfully created with creativity, strategy, and attention to detail that only human designers can provide."
  },
  {
    question: "Can I ask for changes after delivery?",
    answer: "Yes! All our packages include revisions. Basic includes 2 revisions, Standard includes 4 revisions, and Premium includes unlimited revisions. We work with you until you're completely satisfied with your poster design."
  },
  {
    question: "What formats do you deliver the posters in?",
    answer: "We deliver all posters in high-resolution, print-ready formats including JPG, PNG, and PDF. Premium packages also include vector formats (AI/EPS) and social media optimized versions. All files are ready for both print and digital use."
  },
  {
    question: "Do you offer refunds if I'm not satisfied?",
    answer: "We stand behind our work with a 100% satisfaction guarantee. If you're not happy with the final result after utilizing all your included revisions, we'll work with you to make it right or provide a full refund."
  },
  {
    question: "Can you design posters for any industry or occasion?",
    answer: "Yes! Our talented designers have experience across all industries and occasions - from product launches and service promotions to birthday celebrations, corporate events, restaurants, retail, healthcare, and more. Every poster is custom-tailored to your specific needs."
  },
  {
    question: "What information do you need to start my design?",
    answer: "We'll need your poster's purpose, target audience, key message, preferred colors/style, any text content, logos/images to include, and size requirements. Our brief form makes it easy to provide all necessary details, and we'll reach out if we need clarification."
  },
  {
    question: "Do you provide commercial licenses for the designs?",
    answer: "Yes! Standard and Premium packages include full commercial licenses, meaning you can use your poster for any business purpose without restrictions. Basic packages include personal/small business use rights, with commercial licenses available as an add-on."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#F5793B]/5 to-[#F1580C]/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#F5793B] to-[#F79A6B] text-white rounded-full text-sm font-medium mb-4">
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#111111] mb-6">
            Got Questions?
            <span className="block text-[#F1580C]">We've Got Answers</span>
          </h2>
          <p className="text-xl text-[#2a2a2a] max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about our poster design process, delivery, and services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-[#111111] pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="h-6 w-6 text-[#F1580C]" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-[#F1580C]" />
                    )}
                  </div>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-6">
                    <div className="w-full h-px bg-gradient-to-r from-[#F5793B] to-[#F1580C] mb-4 opacity-20"></div>
                    <p className="text-[#2a2a2a] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto border border-gray-100">
            <h3 className="text-2xl font-bold text-[#111111] mb-4">Still Have Questions?</h3>
            <p className="text-[#2a2a2a] mb-6">
              Our team is here to help! Reach out to us directly and we'll get back to you within 2 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-[#F5793B] to-[#F1580C] text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105">
                Contact Support
              </button>
              <button className="border-2 border-[#F1580C] text-[#F1580C] px-6 py-3 rounded-full font-semibold hover:bg-[#F1580C] hover:text-white transition-all duration-300">
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;