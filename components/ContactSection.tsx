import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageCircle, Instagram, Facebook, Twitter, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-[#fcfcfc]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#F5793B] to-[#F79A6B] text-white rounded-full text-sm font-medium mb-4">
            CONTACT US
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#111111] mb-6">
            Let's Create Something
            <span className="block text-[#F1580C]">Amazing Together</span>
          </h2>
          <p className="text-xl text-[#2a2a2a] max-w-3xl mx-auto leading-relaxed">
            Ready to get started? Have questions? We're here to help you bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#111111] mb-6">Get in Touch</h3>
              <p className="text-[#2a2a2a] text-lg leading-relaxed mb-8">
                We're always excited to work on new projects. Whether you need a single poster or a complete design campaign, our team is ready to help you make an impact.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-[#F5793B] to-[#F1580C] rounded-xl flex items-center justify-center mr-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#111111] mb-1">Email Us</h4>
                  <p className="text-[#2a2a2a]">hello@urbandesign.com</p>
                  <p className="text-sm text-gray-500">Response within 2 hours</p>
                </div>
              </div>

              <div className="flex items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-[#F5793B] to-[#F1580C] rounded-xl flex items-center justify-center mr-4">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#111111] mb-1">WhatsApp</h4>
                  <p className="text-[#2a2a2a]">+1 (555) 123-4567</p>
                  <p className="text-sm text-gray-500">Quick responses & updates</p>
                </div>
              </div>

              <div className="flex items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-[#F5793B] to-[#F1580C] rounded-xl flex items-center justify-center mr-4">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#111111] mb-1">Phone</h4>
                  <p className="text-[#2a2a2a]">+1 (555) 123-4567</p>
                  <p className="text-sm text-gray-500">Mon-Fri, 9AM-6PM EST</p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gradient-to-r from-[#F5793B]/10 to-[#F1580C]/10 p-6 rounded-2xl border border-[#F5793B]/20">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-[#F1580C] mr-2" />
                <h4 className="font-semibold text-[#111111]">Business Hours</h4>
              </div>
              <div className="space-y-2 text-[#2a2a2a]">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold text-[#111111] mb-4">Follow Our Work</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-gradient-to-br from-[#F5793B] to-[#F1580C] rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <Instagram className="h-6 w-6 text-white" />
                </a>
                <a href="#" className="w-12 h-12 bg-gradient-to-br from-[#F5793B] to-[#F1580C] rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <Facebook className="h-6 w-6 text-white" />
                </a>
                <a href="#" className="w-12 h-12 bg-gradient-to-br from-[#F5793B] to-[#F1580C] rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <Twitter className="h-6 w-6 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Start Form */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-[#111111] mb-6">Quick Start Form</h3>
            <p className="text-[#2a2a2a] mb-8">
              Tell us about your project and we'll get back to you with a custom quote within 2 hours.
            </p>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#111111] mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F1580C] focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#111111] mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F1580C] focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#111111] mb-2">Project Type</label>
                <select className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F1580C] focus:border-transparent transition-all duration-300">
                  <option>Select project type</option>
                  <option>Product Launch Poster</option>
                  <option>Service Promotion</option>
                  <option>Birthday/Event Celebration</option>
                  <option>Business Advertisement</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#111111] mb-2">Package Interest</label>
                <select className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F1580C] focus:border-transparent transition-all duration-300">
                  <option>Select package</option>
                  <option>Basic - $15</option>
                  <option>Standard - $25</option>
                  <option>Premium - $45</option>
                  <option>Custom Quote</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#111111] mb-2">Project Details</label>
                <textarea
                  rows={4}
                  className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F1580C] focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about your poster needs, target audience, key message, preferred style, etc."
                ></textarea>
              </div>

              <Button className="w-full bg-gradient-to-r from-[#F5793B] to-[#F1580C] text-white py-4 text-lg font-semibold rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105">
                Get My Custom Quote
              </Button>
            </form>

            <p className="text-sm text-gray-500 text-center mt-6">
              * We'll respond within 2 hours with a detailed quote and next steps
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#F5793B] to-[#F1580C] bg-clip-text text-transparent">
                Urban Design
              </h3>
              <p className="text-[#2a2a2a] mt-2">Crafting posters that sell & shine</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-[#2a2a2a]">© 2024 Urban Design. All rights reserved.</p>
              <p className="text-sm text-gray-500 mt-1">
                Made with ❤️ by human designers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;