"use client"
import { CheckCircle, Users, Zap, Palette, Clock, RefreshCw } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

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
]

const WhyChooseUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <section className="py-24 bg-[#FCFCFC] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-[#2A2A2A] rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
            }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 40 + 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="inline-block px-6 py-2 bg-[#F5793B] text-white rounded-full text-sm font-medium mb-6 shadow-lg shadow-[#F5793B]/30"
            whileHover={{ scale: 1.05 }}
          >
            WHY CHOOSE URBAN DESIGN
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2A2A2A] mb-6">
            Crafted by Humans,
            <motion.span 
              className="block text-[#F5793B]"
              whileHover={{ x: 5 }}
            >
              Made for Impact
            </motion.span>
          </h2>
          <motion.p 
            className="text-xl text-[#2A2A2A]/90 max-w-3xl mx-auto leading-relaxed"
            whileHover={{ scale: 1.01 }}
          >
            We combine creativity, strategy, and visual storytelling to deliver posters that grab attention and convert viewers into customers.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-[#FCFCFC]/20 relative overflow-hidden"
              whileHover={{ 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#F5793B]/5 to-[#2A2A2A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <motion.div 
                className="w-16 h-16 bg-gradient-to-br from-[#F5793B] to-[#F79A6B] rounded-xl flex items-center justify-center mb-6 relative z-10"
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ type: "spring" }}
              >
                <feature.icon className="h-8 w-8 text-white" />
              </motion.div>

              <h3 className="text-xl font-bold text-[#2A2A2A] mb-4 group-hover:text-[#F5793B] transition-colors duration-300 relative z-10">
                {feature.title}
              </h3>

              <p className="text-[#2A2A2A]/80 leading-relaxed relative z-10">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Client Logos */}
        <motion.div 
          className="mt-24 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-[#2A2A2A]/80 mb-10 text-lg font-medium"
            whileHover={{ scale: 1.02 }}
          >
            Trusted by leading brands and entrepreneurs
          </motion.p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {[1, 2, 3, 4, 5].map((i) => (
              <motion.div 
                key={i}
                className="w-32 h-16 bg-white rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-shadow border border-[#FCFCFC]/20"
                whileHover={{ y: -5 }}
              >
                <Image
                  src={`/brand-logos/brand-${i}.png`}
                  alt={`Brand ${i}`}
                  width={80}
                  height={40}
                  className="object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs