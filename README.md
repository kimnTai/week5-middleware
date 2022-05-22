# 第五週：Express middleware 異常狀態處理

1.  請設計一個 middleware，讓 controller 程式碼裡面沒有 try catch

2.  請透過環境變數執行指令加上 dev、production 的客製化回饋

3.  承第二點，確保你的後端語言有客製化各種錯誤狀態，包含 NPM 的錯誤訊息客製化

4.  請透過 node.js uncaughtException、unhandledRejection 來捕捉預期外的錯誤

# 參考資料
- [Handling errors in express async middleware](https://stackoverflow.com/questions/51391080/handling-errors-in-express-async-middleware/51391081#:~:text=Answer%20with%20asyncHandler%20is%20good%20and%20usefull%2C%20but%20it%20is%20still%20not%20comfortable%20to%20write%20this%20wrapper%20in%20every%20route.%20I%20propose%20to%20improve%20it)