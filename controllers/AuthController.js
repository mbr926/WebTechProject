exports.login= async function(req,res){

}

exports.auth=  async function(req,res){
    if(!req.body.id || !req.body.password){
       res.render('login', {message: "Please enter both id and password"});
    } else {
          if(user.id === req.body.id && user.password === req.body.password){
             req.session.user = user;
             res.redirect('/Users/view/'+user);
          }
       res.render('error', {message: "Invalid credentials!"});
    }
}