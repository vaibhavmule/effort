"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Link, Shield, Trophy } from "lucide-react"
import { fadeInUp, staggerContainer, cardHover, iconRotate } from "@/lib/animations"

const steps = [
  {
    number: "01",
    icon: Link,
    title: "Connect Apple Health or Google Fit",
    description: "Link your fitness app. Privy creates a self-custodial wallet with email/phone — no seed phrase needed.",
    badge: "Privacy-first",
    size: "medium",
  },
  {
    number: "02",
    icon: Shield,
    title: "Automatically syncs and posts workout as a coin on Base via Creator Coin",
    description: "Your activity is automatically tracked, synced, and posted as a tradeable coin. Server-side heuristics + attestations ensure authenticity.",
    badge: "On-chain",
    size: "large",
  },
  {
    number: "03",
    icon: Trophy,
    title: "Collect & Compete with friends, clubs, and challenges",
    description: "Participate in Farcaster Frames, join clubs, compete in challenges. Your effort becomes social and tradable.",
    badge: "Social",
    size: "medium",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-20 lg:py-24 bg-gray-50 relative overflow-hidden">
      {/* Abstract background elements with color */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-[#ff4191]/15 to-[#00ff41]/10 rounded-full blur-2xl sm:blur-3xl animate-float" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] sm:w-[450px] sm:h-[450px] lg:w-[500px] lg:h-[500px] bg-gradient-to-tr from-[#00ff41]/15 to-[#ff4191]/10 rounded-full blur-2xl sm:blur-3xl animate-float-reverse" />
        <div className="absolute top-1/2 right-0 w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-gradient-to-br from-[#00ff41]/10 to-[#ff4191]/10 rounded-full blur-2xl sm:blur-3xl" />
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
              How it works
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-4 leading-relaxed">
              Connect your fitness app. Your workouts automatically become tradeable coins on-chain.
            </p>
          </motion.div>

          {/* Asymmetrical Steps Layout */}
          <div className="relative max-w-7xl mx-auto">
            {/* First row - 2 cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
              {/* Step 1 - offset up */}
              <motion.div
                variants={fadeInUp}
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="lg:-mt-16"
              >
                <motion.div variants={cardHover}>
                  <Card className="h-full border-gray-200 hover:border-[#00ff41]/50 hover:shadow-xl hover:shadow-[#00ff41]/10 transition-all duration-300 cursor-pointer bg-white group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00ff41]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <CardContent className="p-8 sm:p-10 space-y-6 relative">
                      <div className="flex items-start justify-between">
                        <span className="text-5xl sm:text-6xl font-bold text-gray-300">
                          01
                        </span>
                        <Badge variant="secondary" className="bg-[#00ff41]/10 text-[#00ff41] border border-[#00ff41]/20">
                          Privacy-first
                        </Badge>
                      </div>
                      <motion.div variants={iconRotate}>
                        <Link className="w-10 h-10 text-[#00ff41] group-hover:scale-110 transition-transform duration-300" />
                      </motion.div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#1a1a1a]">
                        Connect Apple Health or Google Fit
                      </h3>
                      <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                        Link your fitness app. Privy creates a self-custodial wallet with email/phone — no seed phrase needed.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>

              {/* Step 3 - offset down */}
              <motion.div
                variants={fadeInUp}
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="lg:mt-12"
              >
                <motion.div variants={cardHover}>
                  <Card className="h-full border-gray-200 hover:border-[#ff4191]/50 hover:shadow-xl hover:shadow-[#ff4191]/10 transition-all duration-300 cursor-pointer bg-white group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ff4191]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <CardContent className="p-8 sm:p-10 space-y-6 relative">
                      <div className="flex items-start justify-between">
                        <span className="text-5xl sm:text-6xl font-bold text-gray-300">
                          03
                        </span>
                        <Badge variant="secondary" className="bg-[#ff4191]/10 text-[#ff4191] border border-[#ff4191]/20">
                          Social
                        </Badge>
                      </div>
                      <motion.div variants={iconRotate}>
                        <Trophy className="w-10 h-10 text-[#ff4191] group-hover:scale-110 transition-transform duration-300" />
                      </motion.div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#1a1a1a]">
                        Collect & Compete with friends, clubs, and challenges
                      </h3>
                      <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                        Participate in Farcaster Frames, join clubs, compete in challenges. Your effort becomes social and tradable.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </div>

            {/* Second row - large centered card */}
            <motion.div
              variants={fadeInUp}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="max-w-4xl mx-auto"
            >
              <motion.div variants={cardHover}>
                <Card className="border-gray-200 hover:border-[#00ff41]/50 hover:shadow-2xl hover:shadow-[#00ff41]/20 transition-all duration-300 cursor-pointer bg-white overflow-hidden group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00ff41]/5 via-[#ff4191]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardContent className="p-8 sm:p-12 lg:p-16 relative">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                      <div className="flex-1 space-y-6">
                        <div className="flex items-start justify-between">
                          <span className="text-6xl sm:text-7xl font-bold text-gray-300">
                            02
                          </span>
                          <Badge variant="secondary" className="bg-gradient-to-r from-[#00ff41]/10 to-[#ff4191]/10 text-[#1a1a1a] border border-[#00ff41]/20">
                            On-chain
                          </Badge>
                        </div>
                        <motion.div variants={iconRotate}>
                          <Shield className="w-12 h-12 sm:w-16 sm:h-16 text-[#00ff41] group-hover:scale-110 transition-transform duration-300" />
                        </motion.div>
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#1a1a1a]">
                          Automatically syncs and posts workout as a coin on Base via Creator Coin
                        </h3>
                        <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                          Your activity is automatically tracked, synced, and posted as a tradeable coin. Server-side heuristics + attestations ensure authenticity.
                        </p>
                      </div>
                      <div className="lg:w-48 lg:h-48 flex-shrink-0">
                        <div className="w-full h-full bg-gradient-to-br from-[#00ff41]/20 to-[#ff4191]/20 rounded-2xl transform -rotate-6 group-hover:-rotate-12 group-hover:scale-105 transition-all duration-300" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

