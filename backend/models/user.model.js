const mongoose = require("mongoose");
// var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    accountName: String
});

// UserSchema.plugin(passportLocalMongoose);

// THIS associates the BlockSchema with mongoose
const User = mongoose.model('user', UserSchema);

module.exports = mongoose.model("User", UserSchema);
