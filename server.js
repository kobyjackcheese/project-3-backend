const leaderboardController = require('./controllers/leaderboard-controller')
require("dotenv").config();
const { PORT, MONGODB_URI } = process.env;
const express = require("express");
const app = express();
const cors = require("cors")
const morgan = require("morgan")

	
///////////////////////////////
// MIDDLEWARE
app.use(express.json());
app.use(cors()); 
app.use(morgan("dev"));
app.use('/leaderboard', leaderboardController)
////////////////////////////////

	app.get("/", (req, res) => {
	    res.send("hello world");
	});


app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
