import { test } from '@playwright/test'

test('Bài 4', async({ page }) => {
    //Truy cập trang https://material.playwrightvn.com/
    await test.step('Step 1: Truy cập trang', async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    // Click vào “Bài học 4: Personal notes”
    await test.step('Step 2: Click bài học 4', async() => {
        await page.locator('//a[@href = "04-xpath-personal-notes.html"]').click();
    });

    // Thêm 10 note
    await test.step('Step 3: Thêm mới 10 notes', async () => {
        const notes = [
            {
                title: 'click',
                content: 'Hàm click dùng để thực hiện click vào các phần tử trên trang web'
            },
            {
                title: 'fill',
                content: 'Hàm fill dùng để điền văn bản vào các trường input hoặc textarea trên trang web'
            },
            {
                title: 'type',
                content: 'Hàm type dùng để nhập từng ký tự một vào phần tử, mô phỏng hành vi gõ phím thực tế của người dùng'
            },
            {
                title: 'hover',
                content: 'Hàm hover dùng để di chuyển con trỏ chuột đến vị trí của phần tử, kích hoạt các hiệu ứng hover'
            },
            {
                title: 'check',
                content: 'Hàm check dùng để đánh dấu checkbox hoặc radio button, đảm bảo phần tử ở trạng thái checked'
            },
            {
                title: 'uncheck',
                content: 'Hàm uncheck dùng để bỏ đánh dấu checkbox, đảm bảo phần tử ở trạng thái unchecked'
            },
            {
                title: 'selectOption',
                content: 'Hàm selectOption dùng để chọn một hoặc nhiều option trong thẻ select dropdown'
            },
            {
                title: 'press',
                content: 'Hàm press dùng để mô phỏng việc nhấn phím bàn phím như Enter, Tab, Escape hoặc các phím khác'
            },
            {
                title: 'dblclick',
                content: 'Hàm dblclick dùng để thực hiện double click (nhấp đúp chuột) vào phần tử trên trang web'
            },
            {
                title: 'dragAndDrop',
                content: 'Hàm dragAndDrop dùng để kéo một phần tử từ vị trí nguồn và thả vào vị trí đích trên trang web'
            }
        ];

        const titleInput = page.locator('#note-title');
        const contentInput = page.locator('#note-content');
        const btnAdd = page.locator('//button[@id = "add-note"]');

        for(const note of notes){
            await titleInput.fill(note.title);
            await contentInput.fill(note.content);
            await btnAdd.click();
        }
    });

    // Thực hiện search với keyword “một hoặc nhiều”
    await test.step('Step 4: Tìm kiếm với keyword', async() => {
        const searchInput = page.locator('#search');
        await searchInput.pressSequentially("một hoặc nhiều", {delay: 50});
    });
});