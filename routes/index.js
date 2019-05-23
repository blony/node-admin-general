const user = require('./user')

module.exports = app => {
    app.post('/user/login',user.login)
}