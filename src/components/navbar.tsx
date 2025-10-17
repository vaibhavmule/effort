"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-2xl font-bold text-[#1a1a1a]">
              Effort
            </span>
            <span className="text-accent">.</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-sm text-gray-600 hover:text-[#1a1a1a] transition-colors"
              aria-label="Scroll to Features section"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-sm text-gray-600 hover:text-[#1a1a1a] transition-colors"
              aria-label="Scroll to How it works section"
            >
              How it works
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-sm text-gray-600 hover:text-[#1a1a1a] transition-colors"
              aria-label="Scroll to FAQ section"
            >
              FAQ
            </button>
          </div>

          {/* Desktop CTA Button */}
          <a
            href="https://farcaster.xyz/vaibhavmule"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-xs font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-[#1a1a1a] text-white hover:bg-[#2a2a2a] h-10 px-4 hover:scale-[1.01] hover:shadow-lg hover:shadow-black/20"
          >
            Get early access
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-[#1a1a1a] transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-gray-200"
            >
              <div className="flex flex-col py-4 space-y-4">
                <button
                  onClick={() => scrollToSection("features")}
                  className="text-left text-sm text-gray-600 hover:text-[#1a1a1a] transition-colors"
                  aria-label="Scroll to Features section"
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection("how-it-works")}
                  className="text-left text-sm text-gray-600 hover:text-[#1a1a1a] transition-colors"
                  aria-label="Scroll to How it works section"
                >
                  How it works
                </button>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-left text-sm text-gray-600 hover:text-[#1a1a1a] transition-colors"
                  aria-label="Scroll to FAQ section"
                >
                  FAQ
                </button>
                <a
                  href="https://farcaster.xyz/vaibhavmule"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-2 flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-xs font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-[#1a1a1a] text-white hover:bg-[#2a2a2a] h-10 px-4 hover:scale-[1.01] hover:shadow-lg hover:shadow-black/20"
                  aria-label="Get early access on Farcaster"
                >
                  Get early access
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

