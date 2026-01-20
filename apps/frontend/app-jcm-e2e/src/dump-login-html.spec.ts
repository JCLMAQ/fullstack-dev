import { test } from '@playwright/test';

test('dump login page HTML', async ({ page }) => {
  await page.goto('http://localhost:4000/auth/login');
  const html = await page.content();
  console.log(html);
});
