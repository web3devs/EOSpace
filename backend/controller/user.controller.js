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

// handle sign up logic
// exports.create = function ( req, res ) {
//     var newUser = new User({username: req.body.username});
//     User.register(newUser, req.body.password, function (err, user) {
//      if (err) {
//        req.flash("error", err);
//        return res.render("register", {"error": err.message});
//      }
     // passport.authenticate("local")(req, res, function() {
     //    req.flash("success", "Successfully Signed Up! Nice to meet you " + req.body.username);
     //    res.redirect("/");
     // });
//    });
// };

// // show login form
// router.get("/login", function(req, res){
//     res.render("login");
// });

// // handling login logic -middleWare
// router.post("/login", passport.authenticate("local",
//     {
//         successRedirect: "/cargrounds",
//         failureRedirect: "/login"
//     }), function(req, res){
// });
//
// // logout route
// router.get("/logout", function(req, res){
//   req.logout();
//   req.flash("error", "Logged You Out!");
//   res.redirect("/cargrounds");
// });

// module.exports = {User};
