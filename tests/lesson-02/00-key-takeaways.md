# Bài 2: Git & JavaScript cơ bản
## 1. Git
1. __Ba vùng trong git__
- __Working directory:__ Vùng làm việc hiện tại trên máy tính, chứa các file đang tạo/chỉnh sửa.
- __Staging Area:__ Vùng chuẩn bị, chứa các file đã add chuẩn bị commit.
- __Respository:__ Kho lưu trữ, chứa toàn bộ các lịch sử commit của dự án.
2. __Các câu lệnh git cơ bản__
- __git init__: Khởi tạo responsitory git mới trong thư mục hiện tại.
 -  __git add <tên file>__: Đưa file từ vùng working director vào vùng staging, đưa những file chuẩn bị commit.
-  __git commit -m "tên commit"__: Tạo commit cho file ở vùng staging, xem phiên bản commit theo thứ tự file nào commit sau hiển thị trước.
-  __git add .__: Đưa toàn bộ các file trong project vào vùng staging.
-  __git status__: Xem trạng thái file.
- __git log:__ Kiểm tra danh sách các file đã commit.
3. Quy tắc viết message commit:
```<type>: <Mô tả ngắn>```
- Trong đó type gồm:
    - chore: Sửa nhỏ lẻ, chính tả, xóa file không dùng tới.
    - feat: Thêm tính năng mới, thêm test case mới.
    - fix: Sửa lỗi 1 test case trước đó.
## 2. JavaScript cơ bản
1. In kết quả ra màn hình
```JavaScript
console.log("Hello, wold!");
```
2. Khai báo biến
```JavaScript 
let tuoi = "22";
console.log("Tuổi: " + tuoi);
```
3. Hằng: **Là các giá trị không thể thay đổi được**
```JavaScript
const ten = "Phạm Nhung";
console.log(ten);
```
4. Boolean: **Kiểu dữ liệu logic chỉ trả về kết quả True/ False** 
```JavaScript
const dung = true;
const sai = false;
```
5. Toán tử logic: **AND(&&) và OR(||)**
- __AND (&&):__ Trả về true nếu cả 2 mệnh đề đều đúng.
- __OR (||):__ Trả về true nếu 1 trong 2 mệnh đề là đúng.
6. Toán tử 1 ngôi: **Là toán tử chỉ cần 1 toán hạng để thực hiện**
- __++i:__ Tăng trước, trả về sau. 
    - Ví dụ:
        ```JavaScript
        let a = 10;
        b = ++a; // Tăng a = 11 --> Trả về b = 11
        ```
- __i++:__ Trả về trước, tăng sau.
    - Ví dụ:
        ```JavaScript
        let a =10;
        b = a++; // Trả về b = 10, a = 11
        ```
6. Câu điều kiện: **if...else,if...else if, switch case**
```JavaScript
const score = "5";
if (score < 5){
    console.log("Không đạt");
}
else (score >= 5){
    console.log("Đạt");
}
```
7. Vòng lặp
- _For_:
```JavaScript
let i = 0;
for (i = 0, i < 10, i++){
    console.log(i);
    i++;
}
```
- _While_:
```JavaScript
let i = 1;
while(i <= 5){
    console.log(i);
    i++;
}
```




