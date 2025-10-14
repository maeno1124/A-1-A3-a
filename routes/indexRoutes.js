// 必要なモジュールを読み込む
const express = require('express');
const router = express.Router();

// ルートURL ('/') へのGETリクエストに対する処理を定義
router.get('/', (req, res) => {
  // EJSテンプレートに渡すためのデータオブジェクト
  const data = {
    title: '岩手県警察-犯罪対策教育用サイト',
    message: '制作中',
    navLinks: [
      { href: '/', label: 'ホーム' },
      { href: '/about', label: '概要' },
      { href: '/services', label: 'サービス' },
      { href: '/contact', label: 'お問い合わせ' }
    ]
  };

  // 'views/index.ejs' ファイルを描画し、データを渡す
  res.render('index', data);
});

// このルーターを他のファイルで読み込めるようにエクスポートする
module.exports = router;
