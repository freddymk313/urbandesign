import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechStart Inc.",
    rating: 5,
    text: "Urban Design transformed our product launch with stunning posters that perfectly captured our brand essence. The human touch in their designs is unmatched!",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Mike Chen",
    role: "Event Planner",
    company: "Elite Events",
    rating: 5,
    text: "I've worked with many design agencies, but Urban Design stands out. Their attention to detail and quick turnaround helped make our client's birthday celebration unforgettable.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Emily Rodriguez",
    role: "Small Business Owner",
    company: "Bloom Bakery",
    rating: 5,
    text: "The poster they created for our new bakery location drove so much foot traffic! It's clear that real humans designed it - you can feel the creativity and strategic thinking.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "David Park",
    role: "Startup Founder",
    company: "InnovateLab",
    rating: 5,
    text: "Urban Design delivered exactly what we needed for our service promotion. Professional, creative, and the unlimited revisions option gave us complete peace of mind.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Lisa Thompson",
    role: "Brand Manager",
    company: "StyleCo",
    rating: 5,
    text: "Working with Urban Design was seamless. They understood our vision immediately and delivered posters that exceeded our expectations. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Alex Martinez",
    role: "Restaurant Owner",
    company: "Fusion Bistro",
    rating: 5,
    text: "The promotional posters Urban Design created helped us increase our weekend reservations by 40%. Their designs truly convert viewers into customers!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-[#fcfcfc]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#F5793B] to-[#F79A6B] text-white rounded-full text-sm font-medium mb-4">
            CLIENT TESTIMONIALS
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#111111] mb-6">
            What Our Clients
            <span className="block text-[#F1580C]">Say About Us</span>
          </h2>
          <p className="text-xl text-[#2a2a2a] max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with Urban Design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8 w-8 h-8 bg-gradient-to-br from-[#F5793B] to-[#F1580C] rounded-full flex items-center justify-center">
                <Quote className="h-4 w-4 text-white" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4 pt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-[#2a2a2a] leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-[#111111]">{testimonial.name}</h4>
                  <p className="text-sm text-[#2a2a2a]">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-[#F5793B] to-[#F1580C] rounded-3xl p-12 text-white text-center">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-white/90">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-white/90">Posters Created</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-white/90">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24h</div>
              <div className="text-white/90">Average Delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;