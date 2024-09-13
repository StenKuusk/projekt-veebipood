import { test, expect } from '@playwright/test';

test('Contact form can be submitted', async ({ page }) => {
    // Avab kontaktilehe
    await page.goto('http://localhost:3000/contact');

    //Täidab väljad
    await page.fill('input[name=name]', 'John Puu');
    await page.fill('input[name=email]', 'john.puu@gmail.com');
    await page.fill('textarea[name=message]', 'Tere tulemast');

    // Vajutab esitamise nuppu
    await page.click('button[type=submit]');

    // Ootab, kuni kasutaja suunatakse uuele URL-ile
    await page.waitForURL('http://localhost:3000/contacted');

    expect(page.url()).toBe('http://localhost:3000/contacted');
});