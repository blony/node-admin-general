const fs = require('fs')
const tokens = {
    admin:{
        token:'admin-token'
    },
    editor:{
        token:'editor-token'
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
    code:200,
    data:token
})
}
exports.userInfo = (req, res) => {
        const { token } = req.body
        
    fs.readFile('../data/user.json',(err,data)=> {
        if (err) {
            console.log(err)
        }
        const info = data.toString()[token]
        console.log(data.toString())
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
    })
    
}