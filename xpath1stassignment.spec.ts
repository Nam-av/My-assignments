import { test, expect } from '@playwright/test';
import { assert } from 'console';

test('login test with await', async ({ page }) => {
  await page.goto('http://leaftaps.com/opentaps/control/main'); 
  await page.fill('#username', 'Demosalesmanager');     

  await page.fill('#password', 'crmsfa');
  await page.click('.decorativeSubmit');  
  await page.waitForTimeout(3000); 
  await expect(page).toHaveTitle(/Leaftaps - TestLeaf Automation Platform/);
  await page.click('.decorativeSubmit');
 // await expect(page).toHaveTitle('Leaftaps - TestLeaf Automation Platform');
  await expect(page.locator('#username')).toBeVisible();
});