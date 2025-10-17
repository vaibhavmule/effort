"use client"

import { motion } from "framer-motion"
import { fadeInUp } from "@/lib/animations"

const linkVariants = {
  rest: { 
    scale: 1,
    transition: { duration: 0.2 }
  },
  hover: { 
    scale: 1.05,
    transition: { duration: 0.2 }
  }
}

export function Footer() {
  return (
    <footer className="border-t border-gray-200 py-8 sm:py-10 lg:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6"
        >
          {/* Left */}
          <div className="flex flex-col md:flex-row items-center gap-2 text-xs sm:text-sm text-gray-600">
            <span>© Effort {new Date().getFullYear()}</span>
            <span className="hidden md:inline">•</span>
            <span className="italic">Effort is the new asset</span>
          </div>

          {/* Right - Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <motion.a
              href="https://twitter.com/effortso"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm text-gray-600 hover:text-[#1a1a1a] transition-colors relative group"
              variants={linkVariants}
              initial="rest"
              whileHover="hover"
              animate="rest"
              aria-label="Follow us on X/Twitter"
            >
              X/Twitter
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1a1a1a] group-hover:w-full transition-all duration-300"></span>
            </motion.a>
            <motion.a
              href="https://farcaster.xyz/vaibhavmule"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm text-gray-600 hover:text-[#1a1a1a] transition-colors relative group"
              variants={linkVariants}
              initial="rest"
              whileHover="hover"
              animate="rest"
              aria-label="Follow us on Farcaster"
            >
              Farcaster
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1a1a1a] group-hover:w-full transition-all duration-300"></span>
            </motion.a>
            <motion.a
              href="https://github.com/effort"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm text-gray-600 hover:text-[#1a1a1a] transition-colors relative group"
              variants={linkVariants}
              initial="rest"
              whileHover="hover"
              animate="rest"
              aria-label="View our GitHub repository"
            >
              GitHub
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1a1a1a] group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

