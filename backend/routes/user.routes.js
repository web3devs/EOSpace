const express = require('express');
const router = express.Router();

const User = require('../controller/user.controller');

// test get route
router.get("/test", User.test);

// create new users
router.post("/register", User.create);
//
// // get users by id
// router.get("/user/:id", User.getOne);
//
// // update users
// router.put("/user/:id", User.update);
//
// // delete users

module.exports = router;
