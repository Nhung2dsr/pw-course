# TỔNG HỢP KIẾN THỨC #
## 1. DOM (Document Object Model) ##
- __Node là 1 phần tử cấu tạo nên DOM.__
- __Các thẻ tiêu chuẩn thường gặp:__
    - ```<html>```: là thẻ để 
    - ```<head>```: chứa tiêu đề, icon và link trang web và các link liên quan đến trang web.
    - ```<body>```: là những thứ ta nhìn thấy trên trang web.
- __Các thẻ bố cục và ngữ nghĩa:__
    - ```<div>```: khối/ container chung
    - ```<header>```: phần đầu, ```<footer>```: phần cuối, ```<nav>```: thẻ điều hướng.
    - ```<section>```: thẻ ngữ nghĩa.
- __Các thẻ nội dung:__
    - ```<h1>```: heading lớn nhất
    - ```<h6>```: heading nhỏ nhất
    - ```<a>```: link
    - ```<p>```: Dùng để viết đoạn văn bản.
    - ```<img>```: thẻ ảnh
    - ```<ul>```, ```<ol>```, ```<li>```: dạng danh sách.
    - ```<table>```: thẻ bảng chứa các thẻ như: 
        - ```<thead>```: tiêu đề bảng.
        -  ```<tr>```: dòng.
        -  ```<th>```: nội dung cột tiêu đề. 
        - ```<tbody>```: phần nội dung bảng.
        - ```<td>```: dữ liệu trong bảng.
        - Ví dụ:
            ```HTML
                <table>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Họ tên</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <th>Phạm Thị Nhung</th>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Phạm Hải Yến</td>
                        </tr>
                    </tbody>                   
                </table>
            ```
## 2. Selector ##
- Để tương tác được với các phần tử trên trang web khi thực hiện automation, ta cần tìm được các phần tử => __Selector__ là công cụ giúp ta tìm kiếm các phần tử.
- Có 3 loại Selector thường dùng:
    - XPath.
    - CSS selector.
    - Playwright selector.
### 2.1. XPath ### 
- Dùng được trong hầu hết các trường hợp.
- Đa dạng, có khả năng tìm ra các phần tử khó.
- Hơi dài.
- Có 2 loại: 
    - __Tuyệt đối:__ 
        - Đi dọc theo cây DOM đến nơi mình muốn tìm. 
        - Bắt đầu bằng dấu /. 
        - Dễ bị lỗi khi html thay đổi. 
        - VD: __/html/body/section/span[2]__
     - __Tương đối:__
        - Bắt đầu bằng dấu //. 
        - Tìm kiếm dựa trên đặc tính của phần tử. 
        - __//tên thẻ [@ thuộc tính = 'giá trị thuộc tính']__. 
        - VD: //span[@id = 'password']
    - Lưu ý: Nên dùng tương đối, tránh dùng tuyệt đối.
### 2.2. CSS Selector ###
- Ngắn gọn, nhanh hơn XPath.
- Dùng cho các trường hợp dễ tìm.
- Không linh hoạt bằng XPath.
### 2.3. Playwright selector ###

## 3. Playwright basic syntax ##
__3.1. test__: Đơn vị cơ bản để khai báo 1 test
```TypeScript
import { test } from '@playwright/test';

test ('<tên test>', async ({ page }) => {
    // Code của test
});
```
__3.2. navigate:__ để truy cập trang web nào đó
```TypeScript
import {test} from '@playwright/test';

test('Navigate', async ({ page }) => {
    await page.goto ("<link trang web>");
});
```
__Một số option trong navigate:__
- __referer:__ Cho biết website của mình được truy cập từ đâu.
 ```TypeScript
import { test } from '@playwright/test';

test('Navigate with option - referer', async ({ page }) => {
    await page.goto ("https://tailieu.hoctest.com/" , {
        referer: "https://playwrightvn.com",
    });
});
```
- __timeout:__ Chờ tối đa bao lâu
```TypeScript
import { test } from '@playwright/test';

test('Navigate with option - timeout', async ({ page }) => {
await page.goto ("https://tailieu.hoctest.com/", {
    timeout: 1_000
    });
});
```
- __waitUntil:__ Chờ cho đến khi nào
    - __commit:__ Ngay khi nhận được response từ server và bắt đầu tải doccument. **Dùng khi:** Chỉ cần biết server đã response, không cần quan tâm đến nội dung trang, kiểm tra chuyển hướng trang. **Không dùng khi:** Cần tương tác với các element.
        ```TypeScript
        await page.goto ("https://tailieu.hoctest.com/", {
            waitUntil: 'commit'
        });
        ```
    - __domcontentloaded__: DOM đã được parse xong, có thể truy cập element để tìm XPath. **Dùng khi:** Cần tương tác với element ngay, không cần đợi CSS/ images load hết, trang web có nhiều tài nguyên nặng. **Không dùng khi:** Cần đợi images, fonts hiển thị đúng.
        ```TypeScript
        await page.goto ("https://tailieu.hoctest.com/", {
            waitUntil: 'domcontentloaded'
        });
        ```
    - __load:__ Tất cả các tài nguyên đã tải xong (*Mặc định - Khuyên dùng*)
        - Dùng khi: Muốn chắc chắn trang đã hiển thị đầy đủ, Cần chụp screenshot, test giao diện 
        ```TypeScript
        await page.goto ("https://tailieu.hoctest.com/", {
            waitUntil: 'load'
        // Hoặc mặc định
        await page.goto ("https://tailieu.hoctest.com/");
        });
        ```
__3.3. Locate:__ Để lựa chọn phần tử trên trang
```TypeScript
test ('Locate demo', async ({ page }) => {
    await page.goto ("https:// material.playwrightvn.com/");

    const chon = page.locator ('//a[@href="02-xpath-product-page.html"]');
});
```
