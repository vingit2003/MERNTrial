const mongoose = require("mongoose");

// One bracket for ddocument details and the other for collection details
const schema = new mongoose.Schema({
    "name": {type:String},
    "email": {type:String},
    "pwd": {type:String}
}, {
    collection: "people"
})

module.exports = mongoose.model("schema", schema);