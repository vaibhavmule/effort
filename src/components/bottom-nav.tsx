"use client"

import { motion } from "framer-motion"
import { Home, Sparkles, PlayCircle, HelpCircle } from "lucide-react"

export function BottomNav() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const navItems = [
    {
      id: "home",
      label: "Home",
      icon: Home,
      action: () => window.scrollTo({ top: 0, behavior: "smooth" }),
    },
    {
      id: "features",
      label: "Features",
      icon: Sparkles,
      action: () => scrollToSection("features"),
    },
    {
      id: "how-it-works",
      label: "How it Works",
      icon: PlayCircle,
      action: () => scrollToSection("how-it-works"),
    },
    {
      id: "faq",
      label: "FAQ",
      icon: HelpCircle,
      action: () => scrollToSection("faq"),
    },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white/95 backdrop-blur-sm md:hidden">
      <div className="grid grid-cols-4 h-16">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.id}
              onClick={item.action}
              className="flex flex-col items-center justify-center gap-1 text-gray-600 hover:text-[#1a1a1a] transition-colors min-h-[44px]"
              aria-label={`Navigate to ${item.label}`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}

