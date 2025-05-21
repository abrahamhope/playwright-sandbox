// tests/login.spec.js
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { validUser } from '../utils/testData.js';

test('Valid user can log in', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(validUser.username, validUser.password);

  await expect(page).toHaveURL(/dashboard/); // update this based on actual landing page
});
