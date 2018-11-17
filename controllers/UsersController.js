var Users= require('../models/users');

exports.view =async function(req,res){
    console.log("user");
    user=req.params.username;
    // find all athletes that play tennis
    Users.findOne({ 'username': user}, function(err, user) {
        if (err) throw err;
      
        // show the one user
        console.log(user);
        res.render('Users/view',{
            username: user
        })
      });
   
}

exports.edit =async function(req,res){
    console.log("user");
    user=req.params.username;
    // find all athletes that play tennis
    Users.find({ 'username': user}, function(err, user) {
        if (err) throw err;
        // show the one user
        console.log(user);
        res.render('users',{
            username: user
        })
      });
   
}
