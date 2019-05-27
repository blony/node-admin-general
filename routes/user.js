const fs = require('fs')

const tokens = {
    admin:{
        token:'admin-token'
    },
    editor:{
        token:'editor-token'
    }
}

const users = {
    "admin-token":{
        "roles":["admin"],
        "introduction":"I am a super administrator",
        "avatar":"https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
        "name":"Super Admin"
    },
    "editor-token":{
        "roles":["editor"],
        "introduction":"I am an editor",
        "avatar":"https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
        "name":"Normal Editor"
    }
  }
exports.login = (req,res) => {
    const { username } = req.body
    const token = tokens[username] 
    if (!token) {
        return res.json({
            code: 60204,
            message:'用户名或密码错误'
        })
    }
 return  res.json({
    code:20000,
    data:token
})
}
exports.userInfo = (req, res) => {
        const { token } = req.query
        const info =users[token]
        if (!info) {
            return {
                code: 50008,
                message:'登录失败，无法获取用户详情'
            }
        }
        return res.json({
            code:20000,
            data:info
        })
    
    
}