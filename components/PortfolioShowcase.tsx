"use client"
import { useState } from "react";

const portfolioItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=800&fit=crop",
    category: "Product Ads"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=600&h=800&fit=crop",
    category: "Service Promotions"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=800&fit=crop",
    category: "Birthdays"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=600&h=800&fit=crop",
    category: "Product Ads"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1594736797933-d0d29ac32393?w=600&h=800&fit=crop",
    category: "Service Promotions"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&h=800&fit=crop",
    category: "Birthdays"
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1626785774625-0b1c2c4eab67?w=600&h=800&fit=crop",
    category: "Product Ads"
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=800&fit=crop",
    category: "Service Promotions"
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=800&fit=crop",
    category: "Birthdays"
  }
];

const categories = ["All", "Product Ads", "Service Promotions", "Birthdays"];

const PortfolioShowcase = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-20 bg-[#fcfcfc]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#F5793B] to-[#F79A6B] text-white rounded-full text-sm font-medium mb-4">
            PORTFOLIO SHOWCASE
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#111111] mb-6">
            Designs That
            <span className="block text-[#F1580C]">Drive Results</span>
          </h2>
          <p className="text-xl text-[#2a2a2a] max-w-3xl mx-auto leading-relaxed mb-12">
            Every poster tells a story. Here's a collection of our recent work that helped our clients achieve their goals.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-[#F5793B] to-[#F1580C] text-white shadow-lg'
                    : 'bg-white text-[#2a2a2a] hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <img
                  src={item.image}
                  alt={`Portfolio ${item.id}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-[#F1580C] font-semibold text-sm">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Corners */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-3 border-t-3 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 w-8 h-8 border-r-3 border-t-3 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-l-3 border-b-3 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-3 border-b-3 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-[#2a2a2a] mb-6">Ready to see your idea come to life?</p>
          <button className="bg-gradient-to-r from-[#F5793B] to-[#F1580C] text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Start Your Design Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;