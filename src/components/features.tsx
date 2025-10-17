"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Activity, Lock, TrendingUp } from "lucide-react"
import { fadeInUp, staggerContainer, cardHover, iconRotate } from "@/lib/animations"

const features = [
  {
    icon: Activity,
    title: "Every workout is a coin",
    description: "Every run, ride, or rep becomes a coin with real utility.",
    size: "large",
    offset: "none",
  },
  {
    icon: Lock,
    title: "Own your data",
    description: "Your history is portable, composable, and under your control.",
    size: "medium",
    offset: "up",
  },
  {
    icon: TrendingUp,
    title: "Insights that matter",
    description: "See trends in pace, HR zones, recovery, and streaks.",
    size: "medium",
    offset: "down",
  },
]

export function Features() {
  return (
    <section id="features" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Abstract background shapes with color */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-[#00ff41]/15 to-[#ff4191]/10 rounded-full blur-2xl sm:blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] sm:w-[450px] sm:h-[450px] lg:w-[500px] lg:h-[500px] bg-gradient-to-tl from-[#ff4191]/15 to-[#00ff41]/10 rounded-full blur-2xl sm:blur-3xl animate-float-reverse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-gradient-to-br from-[#00ff41]/10 to-[#ff4191]/10 rounded-full blur-2xl sm:blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12 sm:space-y-16 lg:space-y-20"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center space-y-3 sm:space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#1a1a1a]">
              Every workout is a coin
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-4 leading-relaxed">
              Your effort becomes a coin. Your data stays yours.
            </p>
          </motion.div>

          {/* Asymmetrical Features Layout */}
          <div className="relative max-w-7xl mx-auto">
            {/* Large feature card - spans left */}
            <motion.div
              variants={fadeInUp}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="mb-8 lg:mb-12"
            >
              <motion.div variants={cardHover}>
                <Card className="border-gray-200 hover:border-[#00ff41]/50 hover:shadow-2xl hover:shadow-[#00ff41]/10 transition-all duration-300 cursor-pointer overflow-hidden group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00ff41]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardContent className="p-8 sm:p-12 lg:p-16 relative">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                      <div className="flex-1 space-y-6">
                        <motion.div variants={iconRotate} className="inline-block">
                          <Activity className="w-12 h-12 sm:w-16 sm:h-16 text-[#00ff41] group-hover:scale-110 transition-transform duration-300" />
                        </motion.div>
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1a1a1a]">
                          Every workout is a coin
                        </h3>
                        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl leading-relaxed">
                          Every run, ride, or rep becomes a coin with real utility.
                        </p>
                      </div>
                      <div className="lg:w-48 lg:h-48 flex-shrink-0">
                        <div className="w-full h-full bg-gradient-to-br from-[#00ff41]/20 to-[#ff4191]/20 rounded-2xl transform rotate-6 group-hover:rotate-12 group-hover:scale-105 transition-all duration-300" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Two smaller cards - offset and overlapping */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 relative">
              {/* First small card - offset up */}
              <motion.div
                variants={fadeInUp}
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="lg:-mt-20"
              >
                <motion.div variants={cardHover}>
                  <Card className="h-full border-gray-200 hover:border-[#00ff41]/50 hover:shadow-xl hover:shadow-[#00ff41]/10 transition-all duration-300 cursor-pointer group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00ff41]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <CardContent className="p-8 sm:p-10 space-y-6 relative">
                      <motion.div variants={iconRotate}>
                        <Lock className="w-10 h-10 text-[#00ff41] group-hover:scale-110 transition-transform duration-300" />
                      </motion.div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#1a1a1a]">
                        Own your data
                      </h3>
                      <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                        Your history is portable, composable, and under your control.
                      </p>
                      <div className="pt-4">
                        <div className="w-24 h-1 bg-gradient-to-r from-[#00ff41] to-transparent group-hover:w-32 transition-all duration-300" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>

              {/* Second small card - offset down */}
              <motion.div
                variants={fadeInUp}
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="lg:mt-12"
              >
                <motion.div variants={cardHover}>
                  <Card className="h-full border-gray-200 hover:border-[#ff4191]/50 hover:shadow-xl hover:shadow-[#ff4191]/10 transition-all duration-300 cursor-pointer group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ff4191]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <CardContent className="p-8 sm:p-10 space-y-6 relative">
                      <motion.div variants={iconRotate}>
                        <TrendingUp className="w-10 h-10 text-[#ff4191] group-hover:scale-110 transition-transform duration-300" />
                      </motion.div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#1a1a1a]">
                        Insights that matter
                      </h3>
                      <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                        See trends in pace, HR zones, recovery, and streaks.
                      </p>
                      <div className="pt-4">
                        <div className="w-24 h-1 bg-gradient-to-r from-[#ff4191] to-transparent group-hover:w-32 transition-all duration-300" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

