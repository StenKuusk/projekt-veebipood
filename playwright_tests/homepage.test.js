const { test, expect } = require('@playwright/test');

test('Homepage UI Test', async ({ page }) => {
  // Avab avalehe
  await page.goto('http://localhost:3000');

  // Kontrollib, et lehe pealkiri on "Welcome to My Coffee Shop"
  await expect(page.locator('header h1')).toHaveText('Welcome to My Coffee Shop');

  // Kontrollib, et lehel on 3 navigatsioonilinki
  const links = await page.locator('nav a').count();

  //Kontrollib, et lehel on 3 pilti
  const images = await page.locator('img').count();
});