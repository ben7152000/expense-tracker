# 記帳本 (Expense Tracker)

## 環境建置與需求 (Prerequisites)

1. Node.js : v14.15.4
2. Express : v4.17.1
3. Nodemon : v2.0.7
4. Autoprefixer : v10.2.5
5. Bcryptjs : v2.4.3
6. Body-Parser : v1.19.9
7. Connect-Flash : v0.1.1
8. Cors : v2.8.5
9. Dotenv : v8.2.0
10. Express-Handlebars : v5.2.0
11. Express-Session : v1.17.1
12. Mongoose : v5.11.12
13. Passport : v0.4.1
14. Passport-Facebook : v3.0.0
15. Passport-local : v1.0.0
16. Tailwindcss : v2.0.3

## 安裝與執行步驟 (Installation and Execution)

1. 將專案複製到本機 (兩種方法)

   > (1) 打開終端機輸入
   > `git clone https://github.com/ben7152000/expense-tracker.git`</br>
   > (2) 點選 download ZIP 下載

2. 進入專案資料夾安裝工具包

   > 打開終端機輸入
   > `npm install`

3. 建立種子檔案

   > 打開終端機輸入
   > `npm run seed`

4. 執行專案

   > 打開終端機輸入
   > `npm run dev`

5. 使用瀏覽器瀏覽</br>
   > 打開瀏覽器在網址列輸入 localhost:3000 即可瀏覽

## 功能描述 (Features)

1. 首頁能夠瀏覽所有事項
2. 按下 + 能夠新增一個支出清單
3. 按下 筆 能夠重新編輯支出清單
4. 按下 垃圾桶 能夠刪除一個支出清單
5. 可利用篩選功能選擇出相同種類清單
6. 首頁有當下所有清單的總額顯示
