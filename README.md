### [Netlify 網頁連結](https://crypto-profit-web.netlify.app/)

![preview](https://github.com/miamai/Crypto-Profit-Caculator/blob/main/public/preview.png)

### 介紹

以前用 Google sheet 串聯 Binance Api 來計算，因此學習後希望能製作一個 web app 計算外，並且能有更多功能，所以後面加上紀錄保存、即時消息、存取最愛等使用。

- 登入登出頁面 : 以 firebase 儲存使用者帳號密碼
- 首頁 : FormProvider 紀錄貨幣、價錢、數量
  - 我的頁面 : 損益計算
  - 我的貨幣 : 可以加自選貨幣，"我的頁面"中有選的貨幣會自動加入。24 小時貨幣價格資料可點圖放大
  - 已實現交易 : "我的頁面"結算的損益結果
- 最新消息 : 虛擬貨幣新聞
- url : react-router 管理

---

### Technologies

- React, React-Router
- Firebase: Login/Logout, Authentication, Fetch/Store user's crypto
  information, Database
  ```javascript
  export const onAuth = async (email, pw) => {
    try {
      /** 登入，拿儲存資料 **/
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        // 註冊
        const res = await createUserWithEmailAndPassword(auth, email, pw);
        // 加使用者資料
        await setDoc(doc(db, 'users', res.user.uid), {
          id: res.user.uid,
          user_name: email.split('@')[0],
        });
      }
      /**/
        };
  ```
- HighCharts: Draw 24hr crypto history chart
- MUI: UI library

### API use

- Binance Api: Fetch USDT trading pairs
- Coinbase Api: USDT/TWD ratio
- Rapid Api/ Bing News Search Api: Crypto news
