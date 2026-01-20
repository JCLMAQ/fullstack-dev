import { expect, test } from '@playwright/test';

// Ce test suppose un utilisateur de test existant avec email et mot de passe valides
const TEST_EMAIL = 'test-refresh@example.com';
const TEST_PASSWORD = 'TestPassword123!';

// Utilitaire pour manipuler le localStorage dans le navigateur
async function getTokens(page) {
  return await page.evaluate(() => ({
    accessToken: localStorage.getItem('authJwtToken'),
    refreshToken: localStorage.getItem('refreshJwtToken'),
  }));
}

test.describe('Flow Auth + Refresh Token', () => {
  test('login, expiration, refresh automatique, déconnexion si refresh échoue', async ({ page }) => {
    // 1. Aller sur la page de login
    await page.goto('http://localhost:4000/auth/login');
    await page.fill('input[type="email"]', TEST_EMAIL);
    await page.fill('input[type="password"]', TEST_PASSWORD);
    await page.click('button:has-text("Login")');

    // 2. Vérifier que l’utilisateur est connecté (présence d’un token)
    await page.waitForTimeout(1000);
    let tokens = await getTokens(page);
    expect(tokens.accessToken).toBeTruthy();
    expect(tokens.refreshToken).toBeTruthy();

    // 3. Invalider manuellement l’accessToken (simulateur d’expiration)
    await page.evaluate(() => localStorage.setItem('authJwtToken', 'invalid-token'));

    // 4. Déclencher une requête protégée (ex : accès à /pages/home)
    await page.goto('/pages/home');
    await page.waitForTimeout(1000);

    // 5. Vérifier que le refresh a été tenté et que les tokens ont changé (rotation)
    const tokensAfter = await getTokens(page);
    expect(tokensAfter.accessToken).not.toBe('invalid-token');
    expect(tokensAfter.accessToken).toBeTruthy();
    expect(tokensAfter.refreshToken).not.toBe(tokens.refreshToken); // rotation

    // 6. Invalider le refreshToken pour simuler un vol/expiration
    await page.evaluate(() => localStorage.setItem('refreshJwtToken', 'invalid-refresh'));
    await page.goto('/pages/home');
    await page.waitForTimeout(1000);

    // 7. L’utilisateur doit être déconnecté (tokens supprimés)
    const tokensFinal = await getTokens(page);
    expect(tokensFinal.accessToken).toBeFalsy();
    expect(tokensFinal.refreshToken).toBeFalsy();
    // Optionnel : vérifier la redirection vers /login
    expect(page.url()).toContain('/login');
  });
});
