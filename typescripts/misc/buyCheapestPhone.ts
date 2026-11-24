
import { test, expect } from '@playwright/test';

test('buy cheapest phone', async ({ page }) => {

    await page.goto('https://example.com/phones');

    const phones = page.locator('.phone');

    const count = await phones.count();

    let lowestPrice = Number.MAX_VALUE;
    let cheapestPhoneIndex = 0;

    for (let i = 0; i < count; i++) {

        const priceText = await phones
            .nth(i)
            .locator('.price')
            .textContent();

        const price = Number(priceText?.replace(/[^\d]/g, ''));

        if (price < lowestPrice) {
            lowestPrice = price;
            cheapestPhoneIndex = i;
        }
    }

    const phoneName = await phones
        .nth(cheapestPhoneIndex)
        .locator('h3')
        .textContent();

    console.log(`Cheapest Phone: ${phoneName}`);
    console.log(`Price: ${lowestPrice}`);

    await phones
        .nth(cheapestPhoneIndex)
        .getByRole('button', { name: 'Add to Cart' })
        .click();
});