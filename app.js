const express = require('express')
const app = express()

//将路由文件引入
const route = require('./routes/index');

//初始化所有路由
route(app);

module.exports = app