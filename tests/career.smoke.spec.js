const { expect, test } = require("@playwright/test");

test.use({
  channel: "chrome",
  viewport: { width: 1280, height: 1100 },
});

test("starts a career and resolves the first match", async ({ page }) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));

  await page.goto(`file:///${process.cwd().replaceAll("\\", "/")}/index.html`);
  await page.evaluate(() => localStorage.clear());
  await page.reload();

  await page.locator("#startCareerButton").click();
  await expect(page.locator("#careerScreen")).toBeVisible();
  const leagueRounds = await page.locator("#seasonRoute .route-node").count();

  expect([34, 38]).toContain(leagueRounds);

  for (let round = 0; round < leagueRounds; round += 1) {
    await page.getByText("Jugar partido").click();
    await page.locator(".action-button").first().click();
    await page.locator(".action-button").first().click();
  }

  await expect(page.locator("#seasonRoute .route-node.done")).toHaveCount(leagueRounds);
  await expect(page.locator("#awardDialog")).toBeVisible();
  await expect(page.locator("#offerPanel")).toBeVisible();
  await expect(page.locator("#worldView")).toContainText("Club");
  expect(errors).toEqual([]);
});
