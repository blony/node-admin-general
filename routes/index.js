const user = require('./user')
const table = require('./table')
module.exports = app => {
    //用户操作
    app.post('/user/login',user.login)
    app.get('/user/info',user.userInfo)
    app.post('/user/logout',user.logout)

    //表格数据获取
    app.get('/table/list',table.list)
}