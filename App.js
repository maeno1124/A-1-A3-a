/**
 * メイン関数
 * 実行方法: "node App.js"
 */

// 必要なモジュールを読み込む
const express = require('express');
const os = require('os');
const app = express();

const port = process.env.PORT || 8000;
const host = '0.0.0.0'; // すべてのネットワークインターフェースからアクセスを許可

// 静的ファイルの提供
app.use(express.static('public'));
// EJSをビューエンジンとして設定
app.set('view engine', 'ejs');

// --- ルーティング設定 ---

// ルート用ルーターをインポート
const indexRoutes = require('./routes/indexRoutes.js'); 

// URLのパスに応じて、使用するルーターを振り分ける
app.use('/cybersimulator', indexRoutes); // '/cybersimulator'で始まるリクエストは全てindexRoutesに送る

// --- サーバー起動処理 ---

// ネットワーク上のIPアドレスを取得する関数
function getNetworkIp() {
  const nets = os.networkInterfaces();
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === 'IPv4' && !net.internal) {
        return net.address;
      }
    }
  }
  return null;
}

// HTTPサーバーを起動
app.listen(port, host, () => {
  const networkIp = getNetworkIp();
  console.log('----------------------------------------------------');
  console.log(`サーバーが起動しました (Port: ${port})`);
  console.log('以下のURLにアクセスしてください:');
  console.log(`  - Local:   http://localhost:${port}/cybersimulator`);
  if (networkIp) {
    console.log(`  - Network: http://${networkIp}:${port}/cybersimulator`);
  }
  console.log('----------------------------------------------------');
});