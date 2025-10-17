"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Copy, Share2, MoreVertical, TrendingDown, Flame, Coins, ArrowDown } from "lucide-react"
import { useState } from "react"

export function WorkoutCard() {
  const [amount, setAmount] = useState("0.0")

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="relative w-full max-w-sm mx-auto"
    >
      <div className="bg-white rounded-lg border border-gray-200 shadow-lg overflow-hidden">
        {/* Header - Creator Info */}
        <div className="p-3 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://scontent-iad4-1.choicecdn.com/-/rs:fill:360:360/g:ce/f:webp/aHR0cHM6Ly9tYWdpYy5kZWNlbnRyYWxpemVkLWNvbnRlbnQuY29tL2lwZnMvYmFmeWJlaWF0b2Qzd2hjcm42ZHQ2cnplbmF0bmFuYnVhZ2p4aGVsY3FwdXgzeGRkM3JvZjR3MjJkdjQ" 
                alt="$jesse.base.eth"
                className="w-8 h-8 rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-[#1a1a1a] text-sm">$jesse.base.eth</p>
                <p className="text-xs text-gray-500">3mo</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-all duration-200 hover:scale-110 hover:text-[#00ff41]">
                <Share2 className="w-3.5 h-3.5 text-gray-600" />
              </button>
              <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-all duration-200 hover:scale-110 hover:text-[#ff4191]">
                <MoreVertical className="w-3.5 h-3.5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Activity Display */}
        <div className="bg-[#1a1a1a] border-b border-gray-200">
          {/* Activity Image */}
          <div className="w-full aspect-[4/3] sm:h-40 overflow-hidden">
            <img 
              src="https://i.ibb.co/8LBWr5cL/IMG-1294.jpg" 
              alt="Outdoor Walk Activity"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          
          {/* Activity Details */}
          <div className="p-4">
            <div className="flex items-start gap-3">
              {/* Activity Icon */}
              <div className="w-10 h-10 rounded-full bg-[#00ff41] flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-[#1a1a1a]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7z"/>
                </svg>
              </div>
              
              {/* Activity Details */}
              <div className="flex-1">
                <p className="text-white text-sm sm:text-base font-medium mb-1">Outdoor Walk</p>
                <p className="text-[#00ff41] text-2xl sm:text-3xl font-bold mb-1">5.24KM</p>
                <p className="text-white text-xs sm:text-sm">June 2, 2014</p>
              </div>
            </div>
            
            {/* Source Info */}
            <div className="flex items-center gap-1.5 mt-3">
              <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded bg-white flex items-center justify-center">
                <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" viewBox="0 0 100 100" fill="none">
                  <path d="M50 20C35.6 20 24 31.6 24 46C24 60.4 50 80 50 80C50 80 76 60.4 76 46C76 31.6 64.4 20 50 20Z" fill="url(#heartGradient)"/>
                  <defs>
                    <linearGradient id="heartGradient" x1="50" y1="20" x2="50" y2="80" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#FF2D92"/>
                      <stop offset="100%" stopColor="#FF3B30"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <p className="text-xs sm:text-sm text-gray-400">Apple Health</p>
            </div>
          </div>
        </div>

        {/* Price & Address */}
        <div className="p-3 border-b border-gray-200 flex gap-2">
          <button className="flex-1 bg-gray-100 hover:bg-gray-200 px-3 py-2 sm:py-1.5 rounded-lg text-left transition-all duration-200 hover:scale-[1.02] min-h-[44px]">
            <p className="text-xs sm:text-sm text-gray-600">Price</p>
            <p className="text-sm sm:text-base font-semibold text-[#1a1a1a]">$ 1.60</p>
          </button>
          <button className="flex items-center gap-1.5 px-3 py-2 sm:py-1.5 border border-gray-200 hover:bg-gray-50 rounded-lg transition-all duration-200 hover:scale-[1.02] hover:border-[#00ff41] hover:text-[#00ff41] min-h-[44px]">
            <Copy className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-600" />
            <span className="text-xs sm:text-sm text-gray-600">Copy</span>
          </button>
        </div>

        {/* Market Stats */}
        <div className="p-3 border-b border-gray-200">
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            <div>
              <p className="text-xs sm:text-sm text-gray-600 mb-0.5">Market Cap</p>
              <div className="flex items-center gap-1">
                <p className="text-xs sm:text-sm font-semibold text-[#1a1a1a]">$626.16</p>
                <TrendingDown className="w-3 h-3 text-red-500" />
              </div>
            </div>
            <div>
              <p className="text-xs sm:text-sm text-gray-600 mb-0.5">24H Volume</p>
              <div className="flex items-center gap-1">
                <p className="text-xs sm:text-sm font-semibold text-[#1a1a1a]">$0</p>
                <Flame className="w-3 h-3 text-gray-400" />
              </div>
            </div>
            <div>
              <p className="text-xs sm:text-sm text-gray-600 mb-0.5">Creator Earnings</p>
              <div className="flex items-center gap-1">
                <p className="text-xs sm:text-sm font-semibold text-[#1a1a1a]">$0.03</p>
                <Coins className="w-3 h-3 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Buy/Sell Toggle */}
        <div className="p-3 border-b border-gray-200">
          <div className="flex gap-2 mb-3">
            <button className="flex-1 bg-[#00ff41] text-[#1a1a1a] font-medium py-2 sm:py-1.5 text-sm rounded-lg hover:bg-[#00ff41]/90 hover:scale-[1.02] transition-all duration-200 min-h-[44px]">
              Buy
            </button>
            <button className="flex-1 bg-[#ff4191] text-white font-medium py-2 sm:py-1.5 text-sm rounded-lg hover:bg-[#ff4191]/90 hover:scale-[1.02] transition-all duration-200 min-h-[44px]">
              Sell
            </button>
          </div>

          {/* Amount Input */}
          <div className="relative mb-1.5">
            <Input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="text-lg sm:text-xl font-semibold pr-16 h-11 sm:h-10"
              placeholder="0.0"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1 text-gray-600">
              <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-blue-500" />
              <span className="font-medium text-xs sm:text-sm">ETH</span>
              <ArrowDown className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </div>
          </div>
          <p className="text-xs sm:text-sm text-gray-600 mb-3">Balance 0.5 ETH</p>

          {/* Quick Select */}
          <div className="grid grid-cols-4 gap-1.5">
            {["0.001", "0.01", "0.1", "Max"].map((val) => (
              <button
                key={val}
                className="px-2 py-2 sm:py-1.5 text-xs border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-[#00ff41] hover:text-[#00ff41] hover:scale-[1.05] transition-all duration-200 min-h-[40px]"
              >
                {val}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

