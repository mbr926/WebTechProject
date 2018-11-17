var Blogs= require('../models/blogs');

exports.view =async function(req,res){
   
    user_id=req.params.user_id;
    // find all athletes that play tennis
    Blogs.findOne({ 'user_id': user_id}, function(err, output) {
        if (err) throw err;
      
        // show the one user
        console.log(output);
        res.render('Blogs/view',{
            output: output
        })
      });
   
}