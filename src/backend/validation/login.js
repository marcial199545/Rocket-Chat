const Validator = require("validator");
const isEmpty = require("./isEmpty");

module.export = function validateLoginInput(data) {
    let { email, password } = data;

    email = !isEmpty(email) ? email : "";
    password = !isEmpty(password) ? password : "";

    let errors = {};

    //NOTE checking for format of email
    if (!Validator.isEmail(email)) {
        errors.email = "Email format is invalid";
    }
    //NOTE checking for absence of email
    if (Validator.isEmpty(email)) {
        errors.email = "Email field is required";
    }
    //NOTE checking for length of password
    if (!Validator.isLength(password, { min: 6, max: 30 })) {
        errors.password = "Password length must be between 6 to 30 characters";
    }
    //NOTE checking for absence of password
    if (Validator.isEmpty(password)) {
        errors.password = "Password fields are required";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
};
