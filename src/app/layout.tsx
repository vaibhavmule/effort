import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Effort.so - The protocol for effort on-chain",
  description: "Every workout is a coin. From Apple Health or Google Fit, automatically track, sync, and post your workouts as tradeable coins on-chain. Own your data, and build a fitness economy on Creator Coin + Doppler.",
  keywords: ["fitness", "NFT", "blockchain", "workout", "on-chain", "Base", "Creator Coin", "effort"],
  authors: [{ name: "Effort.so" }],
  creator: "Effort.so",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://effort.so",
    title: "Effort.so - The protocol for effort on-chain",
    description: "Every workout is a coin. From Apple Health or Google Fit, automatically track, sync, and post your workouts as tradeable coins on-chain.",
    siteName: "Effort.so",
    images: [
      {
        url: "https://i.ibb.co/3PV1h7D/Screenshot-2025-10-18-at-2-20-51-AM.png",
        width: 1200,
        height: 630,
        alt: "Effort.so - The protocol for effort on-chain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Effort.so - The protocol for effort on-chain",
    description: "Every workout is a coin. From Apple Health or Google Fit, automatically track, sync, and post your workouts as tradeable coins on-chain.",
    creator: "@effortso",
    images: ["https://i.ibb.co/3PV1h7D/Screenshot-2025-10-18-at-2-20-51-AM.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
