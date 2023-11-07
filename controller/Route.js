const express = require("express");
const schema = require("../model/schema");
const Route = express.Router();
const mongoose = require("mongoose");

// POST request
Route.post("/createUser", (req, res) => {
    schema.create(/*{
        "name":"vini1",
        "email":"vini1@gmail.com",
        "pwd":"vini1pwd"
    }*/ req.body, (err, data) => {
        if (err)
            return err;
        else
            res.json(data);
    })
});

// GET request handled to the root endpoint
Route.get("/", (req, res) => {
    schema.find((err, data) => {
        if (err)
            return err;
        else
            res.json(data);
    })
});

// To delete by request:
Route.delete("/deleteUser/:id", (req, res) => {
    schema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id), (err, data) => {
        if (err)
            return err;
        else
            res.json(data);
    })
});

// Both the GET and PUT requests are going to share a common URL; route() is used to deal with such cases
// http://localhost:4000/Route/updateUser/6549d2a763cf1929d7fae84f
Route.route("/updateUser/:id")
    .get((req, res) => {
        schema.findById(mongoose.Types.ObjectId(req.params.id), (err, data) => {
            if (err)
                return err;
            else
                res.json(data);
        });
    }).put((req, res) => {
        schema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id), {
            $set: req.body
        }, (err, data) => {
            if (err)
                return err;
            else
                res.json(data);
        })
    });

// Axios.put("http://localhost:4000/Route/updateUser/6549d2a763cf1929d7fae84f")

module.exports = Route;