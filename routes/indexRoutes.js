/*
  indexRoutes.js
*/

const express = require('express');
const router = express.Router();
const appRoutes = require('./appRoutes.js'); // ★★★ appRoutesをここで読み込む

// '/app' で始まるパスを appRoutes に引き継ぐ
router.use('/app', appRoutes); // ★★★ この行を追加

// ルートパス '/' へのGETリクエスト (URLは /cybersimulator となる)
router.get('/', (req, res) => {
  // views/index.ejs を描画します
  res.render('index');
});

// '/experience' パスへのGETリクエスト (URLは /cybersimulator/experience となる)
router.get('/app', (req, res) => {
  // views/experience.ejs を描画します
  res.render('app');
});

module.exports = router;