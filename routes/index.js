const user = require('./user')

module.exports = app => {
    app.post('/user/login',user.login)
    app.post('user/info',user.userInfo)
}