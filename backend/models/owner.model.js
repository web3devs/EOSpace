const mongoose = require("mongoose");
// var passportLocalMongoose = require("passport-local-mongoose");

var OwnerSchema = new mongoose.Schema({
    username: String,
    password: String,
    accountName: String
});

// OwnerSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Owner", OwnerSchema);
