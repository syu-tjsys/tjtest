const http = require('http');
const express = require("express");
const RED = require("node-red");

// Expressアプリケーションの生成
const app = express();

// 静的コンテンツのルートを追加
app.use("/",express.static("public"));

const useDevelopment = (process.env.NODE_RED_ENV == 'development');

// サーバの生成
const server = http.createServer(app);

// 設定オブジェクトの生成
const FlowSettings = require("./flow-settings");

// サーバと設定とランタイムの初期化
RED.init(server,FlowSettings);

// エディタUIのルートを '/red' に指定
// FlowSettings.httpAdminRoot:"false"の場合、editor uiが無効になる
app.use(FlowSettings.httpAdminRoot,RED.httpAdmin);

// HTTP node UIのルートを '/api' に指定
app.use(FlowSettings.httpNodeRoot,RED.httpNode);

server.listen(8000);

// ランタイム起動
RED.start();