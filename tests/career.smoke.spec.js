const { expect, test } = require("@playwright/test");

test.use({
  channel: "chrome",
  viewport: { width: 1280, height: 1100 },
});

test("starts a career and resolves the first match", async ({ page }) => {
  test.setTimeout(120000);
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));

  await page.goto(`file:///${process.cwd().replaceAll("\\", "/")}/index.html`);
  await page.evaluate(() => localStorage.clear());
  await page.reload();

  await page.locator("#openAccountButton").click();
  await expect(page.locator("#accountDialog")).toBeVisible();
  await expect(page.locator("#onlineStatus")).toContainText("Configura Supabase");
  await page.locator("#closeAccountButton").click();
  await page.locator("#openFriendsButton").click();
  await expect(page.locator("#friendsDialog")).toBeVisible();
  await expect(page.locator("#friendsLiveBody")).toContainText("modo online");
  await page.locator("#closeFriendsButton").click();

  await page.locator("#startCareerButton").click();
  await expect(page.locator("#careerScreen")).toBeVisible();
  await expect(page.locator("#seasonCalendar")).toContainText("Calendario");
  await expect.poll(() => page.evaluate(() => window.TRIVIA_QUESTIONS.length)).toBe(200);
  const leagueRounds = await page.locator("#seasonRoute .route-node").count();

  expect([34, 38]).toContain(leagueRounds);

  for (let round = 0; round < leagueRounds; round += 1) {
    await page.evaluate(() => {
      for (let day = 0; day < 420 && !document.querySelector("#offerPanel:not(.hidden)"); day += 1) {
        if ([...document.querySelectorAll("button")].some((button) => button.textContent.includes("Simular partido"))) break;
        const training = currentEvent();
        if (training.type === "training") {
          const question = trainingQuestion(training.calendarId);
          answerTraining(training.calendarId, question.options.indexOf(question.answer));
          continue;
        }
        advanceCalendarDay();
      }
    });
    await page.getByText("Simular partido").click();
    if (round === 0) {
      await expect(page.locator("#matchOverlay")).toContainText("EN VIVO");
      await page.locator('[data-speed="1.5"]').click();
      await expect(page.locator('[data-speed="1.5"]')).toHaveClass(/active/);
      await page.locator('[data-speed="4"]').click();
      await expect(page.locator('[data-speed="4"]')).toHaveClass(/active/);
    }
    await page.evaluate(() => {
      setMatchSpeed(4);
      for (let tick = 0; tick < 40; tick += 1) {
        if (!document.querySelector('[data-speed]')) break;
        tickMatchClock();
      }
    });
    if (round === 0) {
      await page.locator("#seasonRoute .route-node.done").first().click();
      await expect(page.locator("#matchHistoryDialog")).toBeVisible();
      await expect(page.locator("#matchHistoryBody")).toContainText("goleadores");
      await page.locator("#closeHistoryButton").click();
      await page.getByText("Plantillas").click();
      await expect(page.locator("#squadSearch")).toBeVisible();
      await expect(page.locator(".squad-table")).toContainText("Jugador");
    }
  }

  await expect(page.locator("#seasonRoute .route-node.done")).toHaveCount(leagueRounds);
  await expect(page.locator("#awardDialog")).toBeVisible();
  await expect(page.locator("#awardDialog .player-row")).toHaveCount(0);
  await expect(page.locator("#offerPanel")).toBeVisible();
  await page.locator("#closeAwardButton").click();
  await page.getByText("Adelantar intervalo").click();
  await expect(page.locator(".market-feed")).toContainText("Fichajes");
  await expect(page.locator("#worldView")).toContainText(/Poder club|Club|Jugador/);
  expect(errors).toEqual([]);
});
