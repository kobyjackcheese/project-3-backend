const mongoose = require("mongoose");
require('../config/db.connection')
const leaderboardSchema = new mongoose.Schema({
  name: String,
  score: String,
},{timestamps: false});

const Leaderboard = mongoose.model("Leaderboard",leaderboardSchema);

module.exports = Leaderboard