import { expect, test } from '@playwright/test';

test('Bai 1', async ({ page }) => {
    // Truy cập trang https://material.playwrightvn.com/, click vào “Bài học 1: Register Page (có đủ các element)”
    await test.step('Step 1: Truy cập trang', async () => {
        await page.goto ("https://material.playwrightvn.com/");
    });

    await test.step('Step 2: Click vào Bài học 1', async () => {
        const bai1 = page.locator('//a[@href = "01-xpath-register-page.html"]');
        await bai1.click();
    });

    // 1. Nhập thông tin cho các field: Username, Email, Gender, Hobbies, Interests, Country, Date of Birth, Profile Picture, Biography
    await test.step('Step 3: Nhập thông tin', async () => {

        const username = page.locator('//input[@id="username"]');
        await username.pressSequentially("Phạm Nhung", {delay: 100});

        const email = page.locator('//input[@id="email"]');
        await email.pressSequentially("phamnhung@gmail.com", {delay: 100});

        //Radio button
        const female = page.locator('//input[@id="female"]');
        const male = page.locator('//input[@id="male"]')
        await female.check();
        await expect(female).toBeChecked();
        await expect(male).not.toBeChecked();
        
        // Checkbox
        const hobbies1 = page.locator('//input[@id="traveling"]')
        await hobbies1.check();
        let isChecked = await hobbies1.isChecked();
        console.log(isChecked);

        const hobbies2 = page.locator('//input[@id="reading"]')
        await hobbies2.check();
        isChecked = await hobbies2.isChecked();
        console.log(isChecked);

        // Multiple select
        const interests = page.locator('#interests');
        await interests.selectOption("music");
        await expect(interests).toHaveValue("music");
        
        // Select dropdown
        const country = page.locator('//select[@id="country"]');
        await country.selectOption("uk");
        await expect(country).toHaveValue("uk");

        // Date
        const dob = page.locator('//input[@id="dob"]');
        await dob.fill("2005-08-24");

        /* Upload file
        const inputFile = page.locator('#profile');
        await inputFile.setInputFiles("C:/Users/DELL/Downloads/test2.spec.tsimages.png");
        */
        
        const biography = page.locator('//textarea[@id="bio"]');
        await biography.fill("Xin chào!");

    });
    
    // 2. Click button Register
    await test.step('Step 3: Click button', async () => {
        const btn = page.locator('//button[@type = "submit"]');
        await btn.click();
    });
});