var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var usersSchema = new Schema({
    _id: Number,
    username: String,
    password: String,
    access: String
}, { collection: 'Users' });
var Users = mongoose.model('Users', usersSchema );


module.exports = Users;

/*exports.index =async function(req,res){
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
*/


