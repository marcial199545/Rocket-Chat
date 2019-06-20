//mongoose connection
const mongoose = require("mongoose");
const dbConfig = require("./config/keys");

const DB = mongoose
    .connect(dbConfig.URI, { useNewUrlParser: true })
    .then(() => console.log("Database is connected"))
    .catch(err => console.log("TCL: err", err));

module.exports = DB;
