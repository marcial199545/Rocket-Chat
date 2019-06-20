const Validator = require("validator");
const isEmpty = require("./isEmpty");

module.export = function validateRegisterInput(data) {
    let { name, email, password, password_confirm } = data;
    name = !isEmpty(name) ? name : "";
    email = !isEmpty(email) ? email : "";
    password = !isEmpty(password) ? password : "";
    password_confirm = !isEmpty(password_confirm) ? password_confirm : "";

    let errors = {};

    //NOTE checking for lenght of name
    if (!Validator.isLength(name, { min: 2, max: 30 })) {
        errors.name = "Name must be between 2 and 30 characters";
    }
    //NOTE checking for name absence
    if (Validator.isEmpty(name)) {
        errors.name = "Name field is required";
    }
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
    //NOTE checking for length of password_confirm
    if (!Validator.isLength(password_confirm, { min: 6, max: 30 })) {
        errors.password_confirm = "Please confirm lenght of password (6-30)";
    }
    //NOTE checking for equality between passwords
    if (!Validator.equals(password, password_confirm)) {
        errors.password_confirm = "Please make sure passwords provided match";
    }
    //NOTE checking for absence of password_confirm
    if (Validator.isEmpty(password_confirm)) {
        errors.password_confirm = "Password fields are required";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
};
