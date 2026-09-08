export const SITE = {
  title: "Giuseppe de Santis",
  tagline: "Software Engineer",
  description: "Personal site of Giuseppe de Santis, software engineer.",
  author: "Giuseppe de Santis",
  url: "https://giuseppedesantis.net",
  // Handle used for the twitter:creator card attribution.
  twitterHandle: "@gidesan",
} as const;

// Social profiles, rendered as the icon row on the homepage and exposed as
// `sameAs` entries in the Person JSON-LD. `platform` keys the icon component.
export const SOCIAL_LINKS = [
  {
    platform: "twitter",
    label: "Twitter",
    href: "https://twitter.com/gidesan",
  },
  {
    platform: "github",
    label: "GitHub",
    href: "https://github.com/gidesan/",
  },
  {
    platform: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/giuseppedesantis/",
  },
] as const;

export type SocialPlatform = (typeof SOCIAL_LINKS)[number]["platform"];
