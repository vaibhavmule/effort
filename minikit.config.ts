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
    header: "eyJmaWQiOjEzNTY4NzAsInR5cGUiOiJhdXRoIiwia2V5IjoiMHhGRmUxNjg5OEZDMGFmODBlZTlCQ0YyOUQyQjU0YTBGMjBGOTQ5OGFkIn0",
    payload: "eyJkb21haW4iOiJlZmZvcnQtZ2FtbWEudmVyY2VsLmFwcCJ9",
    signature: "vtpg8hqS4McEmyTYrgaVpMqSYZ20v+lBP1xSZF/x491byMgjYUDrp+Fc01Kgr639waUHkRhnbvb4JoyxR9HoVhs="
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

