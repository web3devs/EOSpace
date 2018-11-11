const express = require('express');
const router = express.Router();

const Owner = require('../controller/owner.controller');

// test get route
router.get("/test", Owner.test);

// create new owner
router.post("/register", Owner.create);

// get owner by id
// router.get("/owner/:id", Owner.getOne);

// // update owner
// router.put("/owner/:id", Owner.update);
//
// // get all transactions
// router.get("/owner/:id/txns", Owner.getTxns);

// delete owner - ?


module.exports = router;
