import { defineConfig } from "@playwright/test";

const ciBaseURL = process.env.PLAYWRIGHT_BASE_URL;
const developmentBaseURL = "http://localhost:4321";

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  retries: 0,
  reporter: [
    ["html", { outputFolder: "playwright-report", open: "never" }],
    ["list"],
  ],
  use: {
    baseURL: ciBaseURL || developmentBaseURL,
    headless: true,
  },
  projects: [{ name: "chromium", use: { browserName: "chromium" } }],
  // Only boot a local server when no external URL is provided (i.e. locally and
  // in the default CI job). Set PLAYWRIGHT_BASE_URL to run against a deployed
  // preview instead.
  webServer: ciBaseURL
    ? undefined
    : {
        command: "pnpm build && pnpm preview",
        url: developmentBaseURL,
        reuseExistingServer: true,
        timeout: 120_000,
      },
});
