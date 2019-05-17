const express = require("express");
const indexRoute = require("./routes/index");

const app = express();

indexRoute(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);

console.log("App listening at localhost:5000");
