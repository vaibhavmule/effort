import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[#1a1a1a] text-white hover:bg-[#2a2a2a] hover:scale-[1.01] hover:shadow-lg hover:shadow-black/20",
        secondary: "bg-[#ff4191] text-white hover:bg-[#ff4191]/90 hover:scale-[1.01] hover:shadow-lg hover:shadow-[#ff4191]/20",
        outline: "border border-gray-300 bg-white backdrop-blur-sm text-[#1a1a1a] hover:bg-gray-50",
        ghost: "text-[#1a1a1a] hover:bg-gray-100",
      },
      size: {
        default: "h-12 px-6",
        sm: "h-11 px-4 text-xs", // 44px minimum for touch targets per Base guidelines
        lg: "h-14 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

