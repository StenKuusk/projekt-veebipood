const { test, expect } = require('@playwright/test');

test('Shop Page UI Test', async ({ page }) => {
  // Avab veebilehe
  await page.goto('http://localhost:3000/shop');

  // Kontrollib, et lehe pealkiri on "Shop"
  await expect(page.locator('header h1')).toHaveText('Shop');

  // Lisab "Classic" toode ostukorvi
  await page.click('text=Add to Cart', { hasText: 'Classic' });

  // Eemaldab toode ostukorvist
  await page.click('text=Remove from Cart', { hasText: 'Classic' });

  // Vajutab "Proceed to Purchase" nuppu
  await page.click('text=Proceed to Purchase');
});