"use client";
import { useEffect } from "react"
import { useMiniKit } from "@coinbase/onchainkit/minikit"
import { NavBar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { SocialProof } from "@/components/social-proof"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { WhyEffort } from "@/components/why-effort"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

export default function Home() {
  const { isFrameReady, setFrameReady, context } = useMiniKit()

  // Initialize the miniapp
  useEffect(() => {
    if (!isFrameReady) {
      setFrameReady()
    }
  }, [setFrameReady, isFrameReady])

  return (
    <main className="min-h-screen bg-white text-[#1a1a1a]">
      <NavBar />
      <Hero />
      <SocialProof />
      <Features />
      <HowItWorks />
      <WhyEffort />
      <FAQ />
      <Footer />
    </main>
  )
}
