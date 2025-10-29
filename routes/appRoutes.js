/*
  appRoutes.js
*/
const express = require('express');
const router = express.Router();

// ... ( /phone, /calendar, /mail, /message, /search, /setting のルートはそのまま) ...
router.get('/phone', (req, res) => { res.render('app/phone'); });
router.get('/calendar', (req, res) => { res.render('app/calendar'); });
router.get('/mail', (req, res) => { res.render('app/mail'); });
router.get('/message', (req, res) => { res.render('app/message'); });
router.get('/search', (req, res) => { res.render('app/search'); });
router.get('/setting', (req, res) => { res.render('app/setting'); });


// appRoutes.js

// ... (他のルートはそのまま) ...

// ▼▼▼ /searchResults ルートを以下に置き換え ▼▼▼
// ----------------------------------------------------
router.get('/searchResults', (req, res) => {
  // 1. URLから検索語(q=...)を取得
  const query = req.query.q || ''; 

  // 2. まず、結果配列を空で用意
  let filteredResults = [];

  // 3. ★新しいルール:
  // もし検索語が "配達.com" だったら、3件のダミー結果を生成
  if (query.toLowerCase() === '配達.com') {
      
      filteredResults = [
        { 
          title: '配達.com - 配送検索サービス', 
          url: 'ha1tatu.com/info', // 偽のURL
          snippet: '最新の配送情報を簡単に検索・確認できます。',
          isRealLink: false // これは偽物
        },
        { 
          title: '配達.com - お荷物のお届け状況', 
          url: 'haitatu.com', // 本物っぽいURL
          snippet: 'お客様宛のお荷物が、住所情報不備のため配達センターにて一時保管中です。',
          isRealLink: true // ★これが本物
        },
        { 
          title: '配達.com ログイン', 
          url: 'haitatu/login', // 偽のURL
          snippet: '会員の方はこちらからログインしてください。ポイントも貯まります。',
          isRealLink: false // これは偽物
        }
      ];
  }
  // 4. もし "配達.com" 以外が検索された場合、
  //    filteredResults は空のまま。

  // 5. EJSに「検索語」と「絞り込んだ結果」を渡して表示
  res.render('app/searchResults', { 
    query: query,
    results: filteredResults
  });
});
// ----------------------------------------------------
// ▲▲▲ 置き換えここまで ▲▲▲


router.get('/haitatu', (req, res) => {
  res.render('app/haitatu');
});

// ------------------------------------------------
// '/app/koukoku' というURLでアクセスが来たら、koukoku.ejs を表示
router.get('/koukoku', (req, res) => {
  res.render('app/koukoku');
});
// ------------------------------------------------
// ▲▲▲ 追記ここまで ▲▲▲

module.exports = router;