exports.login =(req,res) => {
   // let {username,password} = req.body
  res.json({
      code:20000,
      data:{
          token:'admin-token'
      }
  })
}