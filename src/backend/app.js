const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const DB = require("./db");
const usersRoutes = require("./routes/user");
const cors = require("express-cors");
const app = express();
//SECTION passport configs
app.use(passport.initialize());
require("./passport")(passport);

//SECTION bodyparser configs
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", usersRoutes);
app.get("/", function(req, res) {
    res.send("hello");
});

//NOTE cors middleware
app.use(
    cors({
        allowedOrigin: ["http://localhost:3000"]
    })
);

// port setting
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
