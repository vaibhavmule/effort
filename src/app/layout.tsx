import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import { SafeArea } from "@coinbase/onchainkit/minikit"
import { minikitConfig } from "../../minikit.config"
import { RootProvider } from "./rootProvider"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: minikitConfig.miniapp.name,
    description: minikitConfig.miniapp.description,
    keywords: ["fitness", "NFT", "blockchain", "workout", "on-chain", "Base", "Creator Coin", "effort"],
    authors: [{ name: "Effort.so" }],
    creator: "Effort.so",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://effort.so",
      title: minikitConfig.miniapp.ogTitle,
      description: minikitConfig.miniapp.ogDescription,
      siteName: minikitConfig.miniapp.name,
      images: [
        {
          url: minikitConfig.miniapp.ogImageUrl,
          width: 1200,
          height: 630,
          alt: minikitConfig.miniapp.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: minikitConfig.miniapp.ogTitle,
      description: minikitConfig.miniapp.ogDescription,
      creator: "@effortso",
      images: [minikitConfig.miniapp.ogImageUrl],
    },
    robots: {
      index: true,
      follow: true,
    },
    other: {
      "fc:frame": JSON.stringify({
        version: minikitConfig.miniapp.version,
        imageUrl: minikitConfig.miniapp.heroImageUrl,
        button: {
          title: `Launch ${minikitConfig.miniapp.name}`,
          action: {
            name: `Launch ${minikitConfig.miniapp.name}`,
            type: "launch_frame",
          },
        },
      }),
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <RootProvider>
      <html lang="en">
        <body
          className={`${spaceGrotesk.variable} font-sans antialiased`}
        >
          <SafeArea>{children}</SafeArea>
        </body>
      </html>
    </RootProvider>
  )
}
