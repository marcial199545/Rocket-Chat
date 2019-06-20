const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");

const User = mongoose.model("users");
const optionsJWT = {};

optionsJWT.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
optionsJWT.secretOrKey = "secret";

module.exports = passport => {
    passport.use(
        new JWTStrategy(optionsJWT, (jwt_payload, done) => {
            User.findById(jwt_payload.id)
                .then(user => {
                    if (user) {
                        return done(null, user);
                    }
                    return done(null, false);
                })
                .catch(err => {
                    console.error(err);
                });
        })
    );
};
