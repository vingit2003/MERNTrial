const express = require("express");
const mongoose = require("mongoose");
const Route = require("./controller/Route");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// To supress the deprecation warning:
mongoose.set("strictQuery", true);

// Connect to MongoDB via URL:
mongoose.connect("your_mogodb_url");

var db = mongoose.connection;
db.on("open", () => console.log("Connected to DB"));
db.on("error", () => console.log("Error occured"));

// Use the middleware:
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use("/Route", Route);

app.listen(4000, () => {
    console.log("Server started at 4000");
})
