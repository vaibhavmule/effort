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
    subtitle: "Every workout is a coin", 
    description: "Track workouts from Apple Health or Google Fit and turn them into tradeable coins on-chain. Own your data and build a fitness economy.",
    screenshotUrls: [`${ROOT_URL}/screenshot.png`],
    iconUrl: `${ROOT_URL}/icon.png`,
    splashImageUrl: `${ROOT_URL}/splash.png`,
    splashBackgroundColor: "#ffffff",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "health-fitness",
    tags: ["fitness", "workout", "on-chain", "nft", "crypto", "apple-health", "google-fit"],
    heroImageUrl: `${ROOT_URL}/hero.png`, 
    tagline: "Own your data, build your fitness economy",
    ogTitle: "Effort.so - The Protocol for Effort On-Chain",
    ogDescription: "Every workout is a coin. From Apple Health or Google Fit, automatically track, sync, and post your workouts as tradeable coins on-chain.",
    ogImageUrl: `${ROOT_URL}/hero.png`,
  },
} as const;

