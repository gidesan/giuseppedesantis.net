import { test, expect } from "@playwright/test";

test.describe("Home page", () => {
  test("returns 200 and renders name + role", async ({ page }) => {
    const response = await page.goto("/");
    expect(response?.status()).toBe(200);

    await expect(page.locator("h1")).toHaveText("Giuseppe de Santis");
    await expect(page.getByText("Software Engineer")).toBeVisible();
  });

  test("exposes the three social profile links", async ({ page }) => {
    await page.goto("/");

    const expected = {
      Twitter: "https://twitter.com/gidesan",
      GitHub: "https://github.com/gidesan/",
      LinkedIn: "https://www.linkedin.com/in/giuseppedesantis/",
    };

    for (const [network, href] of Object.entries(expected)) {
      const link = page.getByRole("link", {
        name: `Giuseppe de Santis on ${network}`,
      });
      await expect(link).toHaveAttribute("href", href);
    }
  });

  test("has a title, meta description and canonical", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(/Giuseppe de Santis/);
    await expect(page.locator('link[rel="canonical"]')).toHaveCount(1);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      "content",
      /.+/,
    );
  });
});

test("serves robots.txt with a sitemap reference", async ({ request }) => {
  const res = await request.get("/robots.txt");
  expect(res.status()).toBe(200);
  expect(await res.text()).toContain("sitemap-index.xml");
});
