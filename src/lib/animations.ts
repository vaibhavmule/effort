import { Variants } from "framer-motion"

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" }
  }
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" }
  }
}

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

// Card hover animation
export const cardHover: Variants = {
  rest: { 
    y: 0,
    transition: { duration: 0.2, ease: "easeOut" }
  },
  hover: { 
    y: -4,
    transition: { duration: 0.2, ease: "easeOut" }
  }
}

// Icon rotation on hover
export const iconRotate: Variants = {
  rest: { 
    rotate: 0,
    transition: { duration: 0.2, ease: "easeOut" }
  },
  hover: { 
    rotate: 5,
    transition: { duration: 0.2, ease: "easeOut" }
  }
}

// Scale pulse animation
export const pulseScale: Variants = {
  rest: { 
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" }
  },
  hover: { 
    scale: 1.05,
    transition: { duration: 0.3, ease: "easeOut" }
  }
}

