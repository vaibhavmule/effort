# Effort.so - The Protocol for Effort On-Chain

> Every workout is a coin. Own your data, and build a fitness economy on Creator Coin + Doppler

Effort.so is a modern, production-ready landing page for the protocol that turns human effort from Apple Health or Google Fit into automatically tracked, synced, and posted workout coins that are tradeable on-chain. Built with Next.js 15, TypeScript, Tailwind CSS 4, and Framer Motion.

![Effort.so](https://i.ibb.co/3PV1h7D/Screenshot-2025-10-18-at-2-20-51-AM.png)

## ✨ Features

### Landing Page Sections

1. **NavBar** - Fixed navigation with logo, mobile hamburger menu, and Farcaster CTA
2. **Hero** - Main headline with glitch effect, CTA buttons, and interactive workout card preview
3. **Social Proof** - Partner logos (Base, Creator Coin, Doppler, Privy, Farcaster, Apple Health, Google Fit)
4. **Features** - Three key value propositions with asymmetrical layout
5. **How It Works** - Three-step process flow with numbered cards
6. **Why Effort** - Value props for athletes, builders, and brands
7. **FAQ** - Accordion with common questions
8. **Footer** - Social links and copyright

### Design Features

- **Responsive Design** - Mobile-first, fully responsive with optimized layouts for all screen sizes
- **Smooth Animations** - Scroll-triggered animations with Framer Motion
- **Accessibility** - WCAG compliant with ARIA labels, keyboard navigation, and reduced-motion support
- **SEO Optimized** - Metadata, OG tags, and Twitter card with custom image
- **Modern Aesthetics** - Glassmorphism effects, gradient backgrounds, and hover interactions
- **Performance** - Optimized images, lazy loading, and efficient animations

## 🎨 Design System

- **Background**: `#FFFFFF` (White)
- **Foreground**: `#1a1a1a` (Dark)
- **Primary Green**: `#00ff41` (Neon green)
- **Primary Pink**: `#ff4191` (Hot pink)
- **Accent**: `#00ff41` (Green)
- **Secondary**: `#7AA2FF` (Blue)
- **Borders**: `#E5E7EB` (Gray-200)
- **Text Secondary**: `#4B5563` (Gray-600)

## 🚀 Tech Stack

- **Framework**: Next.js 15.5.6 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion 12
- **UI Components**: Radix UI (Accordion)
- **Icons**: Lucide React
- **Font**: Space Grotesk (Google Fonts)

## 📦 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
effort/
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css              # Global styles with animations
│   │   ├── layout.tsx               # Root layout with metadata
│   │   └── page.tsx                 # Main landing page
│   ├── components/
│   │   ├── ui/                      # Base UI components
│   │   │   ├── accordion.tsx        # Accordion component
│   │   │   ├── badge.tsx            # Badge component
│   │   │   ├── button.tsx           # Button component
│   │   │   ├── card.tsx             # Card component
│   │   │   └── input.tsx            # Input component
│   │   ├── faq.tsx                  # FAQ accordion section
│   │   ├── features.tsx             # Features section
│   │   ├── footer.tsx               # Footer section
│   │   ├── hero.tsx                 # Hero section with workout card
│   │   ├── how-it-works.tsx         # How it works section
│   │   ├── navbar.tsx               # Navigation bar
│   │   ├── social-proof.tsx         # Social proof section
│   │   ├── why-effort.tsx           # Value props section
│   │   └── workout-card.tsx         # Interactive workout card mockup
│   └── lib/
│       ├── animations.ts            # Framer Motion variants
│       └── utils.ts                 # Utility functions (cn)
├── public/                          # Static assets
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🎯 Key Components

### WorkoutCard
Interactive card mockup showing a workout as a tradeable coin with:
- Activity details (type, distance, date)
- Market stats (price, volume, creator earnings)
- Buy/sell interface
- Responsive design for mobile and desktop

### NavBar
- Fixed navigation with smooth scroll
- Mobile hamburger menu with animations
- Desktop and mobile CTAs
- Accessible keyboard navigation

### Hero Section
- Large headline with glitch text effect
- Dual CTA buttons (Get early access, See how it works)
- Animated workout card preview
- Gradient background animations

### Animations
- Smooth scroll-triggered fade-in animations
- Card hover effects with scale and shadow
- Floating gradient backgrounds
- Glitch text effect on hero headline
- Icon rotation on hover

## 🔧 Configuration

### Colors

Update colors in `tailwind.config.ts`:

```typescript
colors: {
  accent: {
    DEFAULT: "#00FF41",  // Neon green
    foreground: "#000000",
  },
  secondary: {
    DEFAULT: "#7AA2FF",  // Blue
    foreground: "#FFFFFF",
  },
}
```

### Metadata

Update SEO metadata in `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Effort.so - The protocol for effort on-chain",
  description: "Every workout is a coin. From Apple Health or Google Fit...",
  // ...
}
```

### OG Image & Social Sharing

The landing page includes optimized Open Graph and Twitter Card metadata:

```typescript
openGraph: {
  images: ['https://i.ibb.co/3PV1h7D/Screenshot-2025-10-18-at-2-20-51-AM.png'],
},
twitter: {
  images: ['https://i.ibb.co/3PV1h7D/Screenshot-2025-10-18-at-2-20-51-AM.png'],
}
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Deploy!

The app can also be deployed to:
- Netlify
- Railway
- Render
- AWS Amplify

## 📝 Customization

### Content

Update content in component files:
- FAQ questions/answers in `src/components/faq.tsx`
- Features in `src/components/features.tsx`
- How it works steps in `src/components/how-it-works.tsx`
- Value props in `src/components/why-effort.tsx`
- Social proof partners in `src/components/social-proof.tsx`

### Animations

Customize animations in `src/lib/animations.ts`:

```typescript
export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}
```

### Background Gradients

Adjust gradient sizes and opacity in component files for performance:

```typescript
className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-[#00ff41]/15..."
```

## ♿ Accessibility

- **Focus States**: Visible focus indicators with green outline
- **ARIA Labels**: All interactive elements have proper labels
- **Keyboard Navigation**: Full keyboard support throughout
- **Reduced Motion**: Respects `prefers-reduced-motion` user preference
- **Touch Targets**: Minimum 44px touch targets for mobile
- **Color Contrast**: WCAG AA compliant color combinations

## 🎨 Design Principles

- **Minimal & Modern** - Clean, protocol-grade aesthetic
- **Glassmorphism** - Subtle blur and transparency effects
- **Subtle Motion** - 200-400ms animations, not overwhelming
- **Accessibility First** - WCAG compliant, keyboard navigable
- **Mobile-First** - Responsive from 320px to 4K displays
- **Performance** - Optimized images, lazy loading, efficient animations

## 📄 License

MIT License - feel free to use this for your own projects.

## 🤝 Contributing

This is a landing page for Effort.so. For product feedback or questions, reach out via:

- Twitter: [@effortso](https://twitter.com/effortso)
- Farcaster: [effort.so](https://farcaster.xyz/vaibhavmule)
- GitHub: [github.com/effort](https://github.com/effort)

## 🙏 Acknowledgments

Built for the crypto and fitness community. Special thanks to:
- Base for the L2 infrastructure
- Creator Coin for the tokenization protocol
- Doppler for the data integration
- Privy for wallet infrastructure
- Farcaster for the social layer

---

**Effort is the new asset.** 💪