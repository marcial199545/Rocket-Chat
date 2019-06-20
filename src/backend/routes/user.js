const Router = require("express").Router;
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const validationRegisterInput = require("../validation/register");
const validationLoginInput = require("../validation/login");
const User = require("../models/User");

const router = Router();

router.route("/register").post((req, res) => {
    const { errors, isValid, email, name, password } = validationRegisterInput(req.body);
    // NOTE checking for valid inputs
    if (!isValid) {
        return res.status(400).json(errors);
    }
    // NOTE check if the email already exists
    User.findOne({
        email
    }).then(user => {
        //NOTE if already exist send error
        if (user) {
            return res.status(400).json({
                email: "Email already exist"
            });
        }
        //SECTION if it does not exist...
        else {
            //NOTE fetch avatar based on email address
            const avatar = gravatar.url(email, {
                s: "200",
                r: "pg",
                d: "mm"
            });
            const newUser = new User({
                name,
                email,
                password,
                avatar
            });
            //NOTE create a hash value of the password
            bcrypt.genSalt(10, (err, salt) => {
                if (err) console.error("There was an error encrypting the password", err);
                else {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) console.error("There was an error hashing the password", err);
                        else {
                            newUser.password = hash;
                            //NOTE save the user in the database
                            newUser.save().then(user => {
                                res.json(user);
                            });
                        }
                    });
                }
            });
        }
    });
});

router.route("/login").post((req, res) => {
    const { errors, isValid } = validationLoginInput(req.body);
    // NOTE checking for valid inputs
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const { email, password } = req.body;
    // NOTE check if the email exists
    User.findOne({ email }).then(user => {
        //NOTE if email does not exist throw error
        if (!user) {
            errors.email = "User email not found";
            return res.status(400).json(errors);
        }
        //NOTE check passwords with bcrypt.compare
        bcrypt.compare(password, user.password).then(isMatch => {
            //NOTE if they match generate jwt token
            if (isMatch) {
                const payload = {
                    id: user.id,
                    name: user.name,
                    avatar: user.avatar
                };
                jwt.sign(
                    payload,
                    "secret",
                    {
                        expiresIn: 3600
                    },
                    (err, token) => {
                        if (err) console.error("there is some error in token", err);
                        else {
                            res.json({
                                success: true,
                                token: `Bearer ${token}`
                            });
                        }
                    }
                );
            } else {
                errors.pasword = "Incorrect password";
                return res.status(400).json(errors);
            }
        });
    });
});

//SECTION protected route
//NOTE if the user is logged in and has the jwt token then it can access this route
router.get("/me", passport.authenticate("jwt", { session: false }), (req, res) => {
    const { id, name, email } = req.user;
    return res.json({
        id,
        name,
        email
    });
});
module.exports = router;
