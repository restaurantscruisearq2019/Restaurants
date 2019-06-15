const express = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb://mongodb:27017/Restaurant");
//mongoose.connect("mongodb://localhost:27017/Restaurant");

require("./models/Restaurant");

const app = express();

require("./routes/index")(app);
require("./routes/restaurants")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);

console.log("App listening at localhost:" + PORT);
