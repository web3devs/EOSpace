const passport  = require("passport");
const User      = require("../models/user.model");

exports.test = function ( req, res ) {
    res.send ( 'Welcome to the EOSpace User homepage!' );
};

exports.create = function ( req, res ) {
    var newUser = new User(req.body);
    newUser.save()
        .then(item => {
            res.send("User DATA saved to database! WHOOOOOOOOOT!!");
            console.log(req.body)
        })
        .catch(err => {
            res.status(400).send("Unable to save to database :( sad face");
        });
};
