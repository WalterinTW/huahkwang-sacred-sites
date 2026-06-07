import { expect, test } from '@playwright/test';

test.describe('首頁基本視覺與功能檢查', () => {
  test('首頁可載入、無水平 overflow、主要圖片與導覽正常', async ({ page }, testInfo) => {
    const consoleErrors: string[] = [];

    page.on('console', (message) => {
      if (message.type() === 'error') {
        consoleErrors.push(message.text());
      }
    });

    await page.goto('/');
    await expect(page).toHaveTitle(/華光寺|八大聖地/);
    await expect(page.locator('main')).toBeVisible();

    await expect(page.locator('.site-logo')).toBeVisible();

    const navigation = page.locator('.site-nav');
    if (!(await navigation.isVisible())) {
      await page.locator('.nav-toggle').click();
    }
    await expect(navigation).toBeVisible();

    const navLinks = page.locator('.site-nav a');
    await expect(navLinks).toHaveCount(4);
    for (const link of await navLinks.all()) {
      await expect(link).toBeVisible();
      await expect(link).toBeEnabled();
      await expect(link).toHaveAttribute('href', /.+/);
    }

    const internalNavLink = page.locator('.site-nav a[href="index.html"]');
    await internalNavLink.click();
    await expect(page).toHaveURL(/\/(index\.html)?$/);

    const images = page.locator('img');
    for (const image of await images.all()) {
      await image.scrollIntoViewIfNeeded();
      await expect(image).toBeVisible();
    }

    await page.waitForLoadState('networkidle');

    const imageIssues = await images.evaluateAll((imageElements) =>
      imageElements
        .filter((image) => !image.complete || image.naturalWidth === 0 || image.naturalHeight === 0)
        .map((image) => image.getAttribute('src') || image.getAttribute('alt') || 'unknown image')
    );
    expect(imageIssues, `Broken images: ${imageIssues.join(', ')}`).toEqual([]);

    const hasHorizontalOverflow = await page.evaluate(() => {
      const documentElement = document.documentElement;
      return documentElement.scrollWidth > documentElement.clientWidth + 1;
    });
    expect(hasHorizontalOverflow).toBe(false);

    expect(consoleErrors, `Console errors: ${consoleErrors.join('\n')}`).toEqual([]);

    await page.screenshot({
      path: testInfo.outputPath(`homepage-${testInfo.project.name}.png`),
      fullPage: true
    });
  });
});

test.describe('聖地分頁頁首圖片檢查', () => {
  test('吠舍離頁首圖片在寬螢幕保留完整主體', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 900 });
    await page.goto('/vaishali.html');

    const heroLayout = await page.locator('.page-image-hero').evaluate((hero) => {
      const image = hero.querySelector<HTMLImageElement>('.hero-image');
      const content = hero.querySelector<HTMLElement>('.hero-content');
      if (!image || !content) {
        return null;
      }

      const imageBox = image.getBoundingClientRect();
      const contentBox = content.getBoundingClientRect();
      const imageRatio = image.naturalWidth / image.naturalHeight;
      const frameRatio = imageBox.width / imageBox.height;
      const renderedWidth = frameRatio > imageRatio ? imageBox.height * imageRatio : imageBox.width;
      const renderedLeft = imageBox.left + (imageBox.width - renderedWidth) / 2;
      const renderedRight = renderedLeft + renderedWidth;

      return {
        objectFit: getComputedStyle(image).objectFit,
        contentLeft: contentBox.left,
        contentRight: contentBox.right,
        renderedLeft,
        renderedRight
      };
    });

    expect(heroLayout).not.toBeNull();
    expect(heroLayout?.objectFit).toBe('contain');
    expect(heroLayout?.contentLeft).toBeGreaterThanOrEqual((heroLayout?.renderedLeft ?? 0) - 1);
    expect(heroLayout?.contentRight).toBeLessThanOrEqual((heroLayout?.renderedRight ?? 0) + 1);
  });
});
