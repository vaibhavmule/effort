const ROOT_URL =
  process.env.NEXT_PUBLIC_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000');

/**
 * MiniApp configuration object. Must follow the Farcaster MiniApp specification.
 *
 * @see {@link https://miniapps.farcaster.xyz/docs/guides/publishing}
 */
export const minikitConfig = {
  accountAssociation: {
    header: "",
    payload: "",
    signature: ""
  },
  miniapp: {
    version: "1",
    name: "Effort", 
    subtitle: "Build Your Body, Build Your Future", 
    description: "Transform your fitness journey with Effort. Track workouts, set goals, and achieve your best self.",
    screenshotUrls: [`${ROOT_URL}/screenshot.png`],
    iconUrl: `${ROOT_URL}/icon.png`,
    splashImageUrl: `${ROOT_URL}/splash.png`,
    splashBackgroundColor: "#000000",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "health-fitness",
    tags: ["fitness", "workout", "health", "wellness"],
    heroImageUrl: `${ROOT_URL}/hero.png`, 
    tagline: "Your Fitness Journey Starts Here",
    ogTitle: "Effort - Transform Your Fitness Journey",
    ogDescription: "Track workouts, set goals, and achieve your best self with Effort.",
    ogImageUrl: `${ROOT_URL}/hero.png`,
  },
} as const;

