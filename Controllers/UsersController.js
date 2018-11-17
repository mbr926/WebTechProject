var usersModel= require('../models/users');
exports.view = async function (req,res) {
    user=req.params.username;
    console.log(user);
    usersModel.findOne({ 'username': user },function (err, output) {
      if (err) return handleError(err);
      res.render('Users/view',{
        output: output
    })
    })   
}