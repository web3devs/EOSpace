const passport  = require("passport");
const Owner     = require("../models/owner.model");

exports.test = function ( req, res ) {
    res.send ( 'Welcome to the EOSpace Owner homepage!' );
};

exports.create = function ( req, res ) {
    var newOwner = new Owner(req.body);
    newOwner.save()
        .then(item => {
            res.send("Owner DATA saved to database! WHOOOOOOOOOT!!");
            console.log(req.body)
        })
        .catch(err => {
            res.status(400).send("Unable to save to database :( sad face");
        });
};
