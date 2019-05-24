const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('vue-admin-general'));
//将路由文件引入
const route = require('./routes/index');

//初始化所有路由
route(app);

module.exports = app