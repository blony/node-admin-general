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

    fs.readFile('../data/user.json',(err,data)=> {
        if (err) {
            console.log(err)
        }
        console.log(data.toString())
    })
    res.json({

    })
}