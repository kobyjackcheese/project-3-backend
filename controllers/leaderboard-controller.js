// ./controllers/people-controller.js

const express = require('express')
const router = express.Router()
const Leaderboard = require('../models/Leaderboard')

///////////////////////////////
// ROUTES
////////////////////////////////

// LEADERBOARDINDEX ROUTE
router.get("/", async (req, res) => {
	try {
    res.json(await Leaderboard.find({}));
  } catch (error) {
    res.status(400).json(error);
  }
});


router.post("/", async (req, res) => {
    try {
      res.json(await Leaderboard.create(req.body));
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  });


module.exports = router
