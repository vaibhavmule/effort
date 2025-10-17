"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { WorkoutCard } from "@/components/workout-card"
import { ArrowDown } from "lucide-react"
import { fadeInUp, staggerContainer } from "@/lib/animations"

export function Hero() {
  const scrollToHowItWorks = () => {
    const element = document.getElementById("how-it-works")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pb-0 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-[#00ff41]/15 to-[#ff4191]/15 rounded-full blur-2xl sm:blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-tr from-[#ff4191]/15 to-[#00ff41]/15 rounded-full blur-2xl sm:blur-3xl animate-float-reverse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] bg-gradient-to-br from-[#00ff41]/5 to-[#ff4191]/5 rounded-full blur-2xl sm:blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-6 sm:space-y-8"
          >
            <motion.div variants={fadeInUp} className="space-y-4 sm:space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold text-[#1a1a1a] leading-[1.1] tracking-tight">
                Every workout is a <span className="glitch-text-colored" data-text="$Coin">$Coin</span>.
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl leading-relaxed">
                From Apple Health or Google Fit, automatically track, sync, and post your workouts as tradeable coins on-chain.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              {/* TODO: Update for Base app compatibility - replace with in-app signup/auth flow before featured submission */}
              <a
                href="https://farcaster.xyz/vaibhavmule"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-base font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white px-8 h-12 hover:scale-[1.01] hover:shadow-lg hover:shadow-[#00ff41]/20"
                aria-label="Get early access on Farcaster"
              >
                Get early access
              </a>

              <button
                onClick={scrollToHowItWorks}
                className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-base font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 text-[#1a1a1a] hover:bg-gray-50 border border-gray-200 hover:border-[#00ff41] px-8 h-12"
                aria-label="Scroll to How it works section"
              >
                See how it works
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Workout Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex relative items-center justify-center mt-8 sm:mt-12 md:mt-0"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-[#00ff41]/20 to-[#ff4191]/20 rounded-3xl blur-xl animate-pulse" />
            <WorkoutCard />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

