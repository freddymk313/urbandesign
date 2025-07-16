"use client"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Play } from "lucide-react"
import { useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const portfolioImages: any = [
  { img:"/portfolio/1.jpg" },
  { img:"/portfolio/2.jpg" },
  { img:"/portfolio/3.jpg" },
  { img:"/portfolio/4.jpg" },
  { img:"/portfolio/5.jpg" },
]

const HeroSection = () => {
  useEffect(() => {
    const scrollContainer = document.getElementById('portfolio-scroll')
    if (!scrollContainer) return

    let scrollPosition = 0
    const scrollSpeed = 0.5 // Réduit la vitesse pour un défilement plus élégant
    const itemWidth = 300 // Largeur de chaque élément de portfolio

    const scroll = () => {
      scrollPosition += scrollSpeed
      scrollContainer.scrollLeft = scrollPosition
      requestAnimationFrame(scroll)
    }

    const scrollAnimation = requestAnimationFrame(scroll)

    return () => cancelAnimationFrame(scrollAnimation)
  }, [])

  // Variantes d'animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
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
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] overflow-hidden pt-20"
    >
      {/* Background Elements */}
      {/* <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-[#FCFCFC]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div> */}
      {/* Background Elements */}
      <div className="absolute -top-6 -left-6 inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-[#F1580C] rounded-full"></div>
        <div className="absolute top-40 right-20 w-20 h-20 bg-[#F5793B] rounded-lg rotate-45"></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 bg-[#F79A6B] rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-[#F5793B] rounded-lg rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Left Content */}
          <motion.div
            className="text-[#FCFCFC] space-y-8 lg:pr-8"
            variants={itemVariants}
          >
            <motion.div
              className="space-y-2"
              variants={itemVariants}
            >
              <motion.div
                className="inline-block px-4 py-2 bg-[#FCFCFC]/10 rounded-full text-sm font-medium backdrop-blur-sm border border-[#FCFCFC]/20"
                whileHover={{ scale: 1.05 }}
              >
                POSTER CREATION
              </motion.div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <motion.span className="block">Turn Your Ideas Into</motion.span>
                <motion.span
                  className="block text-[#FCFCFC] drop-shadow-lg"
                  whileHover={{ x: 5 }}
                >
                  Posters That
                </motion.span>
                <motion.span
                  className="block bg-gradient-to-r from-[#FCFCFC] to-[#F5793B] bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  Sell & Shine
                </motion.span>
              </h1>
            </motion.div>

            <motion.p
              className="text-xl lg:text-2xl leading-relaxed text-[#FCFCFC]/90 max-w-xl"
              variants={itemVariants}
            >
              At Urban Design, our creative team crafts stunning custom posters that make your brand unforgettable.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <Button
                size="lg"
                className="bg-[#F5793B] hover:bg-[#F5793B] text-[#FCFCFC] text-lg px-8 py-6 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-[#F5793B]/30"
                
              >
                Get Your Custom Poster
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-[#FCFCFC] text-[#F5793B] hover:bg-[#FCFCFC] hover:text-[#2A2A2A] text-lg px-8 py-6 rounded-full font-semibold transition-all duration-300"
                
              >
                <Play className="mr-2 h-5 w-5" />
                See Our Work
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="flex flex-wrap items-center gap-8 pt-8"
              variants={itemVariants}
            >
              {[
                { value: "500+", label: "Happy Clients" },
                { value: "1000+", label: "Posters Created" },
                { value: "100%", label: "Human-Made" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="text-center"
                  whileHover={{ y: -5 }}
                >
                  {/* <div className="text-3xl font-bold text-[#F5793B]">{item.value}</div> */}
                  <div className="*text-sm text-[#FCFCFC]/80 flex itemes-center justify-center">
                    <div className="w-5 h-5 bg-[#F5793B] rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="h-3 w-3 text-[#fcfcfc]" />
                    </div>
                    <div><span>{item.label}</span></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Portfolio Showcase */}
          <motion.div
            className="relative"
            variants={itemVariants}
          >
            <motion.div
              className="relative overflow-hidden rounded-2xl shadow-2xl bg-[#2A2A2A] border border-[#FCFCFC]/10 p-6"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="mb-4">
                <div className="inline-block px-4 py-2 bg-[#F5793B] rounded-full text-[#FCFCFC] font-semibold text-sm">
                  Live Portfolio
                </div>
              </div>

              <div
                id="portfolio-scroll"
                className="flex gap-6 overflow-x-hidden py-2"
                style={{ scrollBehavior: 'smooth' }}
              >
                {portfolioImages.map((element, index) => (
                  <motion.div
                    key={index}
                    className="flex-shrink-0 w-72 h-80 rounded-xl overflow-hidden shadow-lg bg-[#FCFCFC] relative group"
                    whileHover={{ scale: 1.03 }}
                  >
                    <Image
                      src={element.img}
                      alt={`Portfolio ${index}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2A2A2A]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-[#FCFCFC] font-medium">Project {index}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-6 -left-6 bg-[#FCFCFC] p-3 rounded-xl shadow-xl border border-[#FCFCFC]/20"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-[#2A2A2A]">Designing Now</span>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -right-6 bg-[#FCFCFC] p-5 rounded-xl shadow-xl border border-[#FCFCFC]/20"
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-[#F5793B]">24h</div>
                <div className="text-xs text-[#2A2A2A]/80">Avg. Delivery</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection