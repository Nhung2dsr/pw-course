import { test } from '@playwright/test';

test ('Bài 2', async({ page }) => {

    // Truy cập trang https://material.playwrightvn.com/
    await test.step('Step 1: Truy cập trang', async() => {
        await page.goto ("https://material.playwrightvn.com/");
    });

    //  Click vào “Bài học 2: Product page”
    await test.step('Step 2: Click vào Bài học 2', async() => {
        await page.locator('//a[@href = "02-xpath-product-page.html"]').click();
    });

    // Thêm sản phẩm vào giỏ hàng
    await test.step('Step 3: Thêm vào giỏ hàng', async () => {
        // Sản phẩm 1: 2 sản phẩm
        const sp1 = page.locator('//button[@data-product-id="1"]');
        await sp1.dblclick();

        // Sản phẩm 2: 3 sản phẩm
        const sp2 = page.locator('//button[@data-product-id="2"]');
        await sp2.click({clickCount: 3});

        // Sản phẩm 3: 1 sản phẩm
        const sp3 = page.locator('//button[@data-product-id="3"]');
        await sp3.click();
    });
});