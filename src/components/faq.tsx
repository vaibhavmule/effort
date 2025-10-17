"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { fadeInUp, staggerContainer } from "@/lib/animations"

const faqs = [
  {
    question: "What gets stored on-chain?",
    answer: "We store a hashed activity summary + metadata; raw sensitive data stays off-chain.",
  },
  {
    question: "How do you verify workouts?",
    answer: "Server-side heuristics + attestations; device-level proofs coming.",
  },
  {
    question: "Do I need a crypto wallet?",
    answer: "Privy creates a self-custodial wallet with email/phone — no seed phrase needed.",
  },
  {
    question: "Is my health data private?",
    answer: "You control what's public; PII and granular biometrics remain encrypted/off-chain.",
  },
  {
    question: "How do brands/clubs use Effort?",
    answer: "Run sponsored challenges and token-gate rewards with provable activity.",
  },
  {
    question: "What happens when I sell or trade a workout coin?",
    answer: "Workout coins are tradeable on-chain via Creator Coin. You earn creator fees on every trade, and collectors can buy/sell based on your activity history and performance.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 bg-gray-50 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-bl from-[#00ff41]/10 to-[#ff4191]/5 rounded-full blur-2xl sm:blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-tr from-[#ff4191]/10 to-[#00ff41]/5 rounded-full blur-2xl sm:blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-12 sm:space-y-16 lg:space-y-20"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center space-y-3 sm:space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#1a1a1a]">
              FAQ
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600">
              Everything you need to know
            </p>
          </motion.div>

          {/* Accordion */}
          <motion.div variants={fadeInUp}>
            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-xl px-4 sm:px-6 bg-white hover:border-[#00ff41]/30 hover:shadow-md transition-all duration-300 group"
                >
                  <AccordionTrigger className="text-left text-sm sm:text-base lg:text-lg hover:no-underline group-hover:text-[#00ff41] transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

