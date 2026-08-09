import { test } from '@playwright/test'

test ('Bài 3', async({ page }) => {

    //Truy cập trang https://material.playwrightvn.com/
    await test.step('Step 1: Truy cập trang', async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    // Click vào “Bài học 3: Todo page”
    await test.step('Step 2: Click bài học 3', async() => {
        await page.locator('//a[@href = "03-xpath-todo-list.html"]').click();
    });

    // Thêm mới 100 todo item có nội dung “Todo <i>”
    await test.step('Thêm 100 item', async() => {
        const input = page.locator('//input[@id = "new-task"]');
        const btn = page.locator('//button[@id = "add-task"]');

        for(let i = 1; i <= 100; i++){
            await input.fill(`Todo ${i}`);
            await btn.click();
        };
    });

    // Xoá các todo có số lẻ
    await test.step('Step 4: Xóa các todo có số lẻ', async() => {
        page.on ('dialog', async dialog => {
            await dialog.accept()
        });
        for(let i = 1; i <= 100; i+=2 ){
            const btnXoa = page.locator(`#todo-${i}-delete`);
            await btnXoa.click();    
        }
    });
});