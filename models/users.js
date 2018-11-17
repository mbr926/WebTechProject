 //Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var usersSchema = new Schema({
    _id: String,
    access: String,
    password: String,
    username: String
}, { collection: 'Users'});

// Compile model from schema
var usersModel = mongoose.model('Users', usersSchema );

module.exports = usersModel;

