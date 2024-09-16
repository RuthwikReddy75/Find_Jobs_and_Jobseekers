const Validator = require("validator");
const isEmpty = require("is-empty");

const validateLoginInput = data => {
let errors = {};
  console.log(data);
// Convert empty fields to an empty string so we can use validator functions
data.email = !isEmpty(data.email) ? data.email.toString() : "";
data.password = !isEmpty(data.password) ? data.password.toString() : "";

// Email checks
if (Validator.isEmpty(data.email)) {
  errors.email = "Email field is required";
} else if (!Validator.isEmail(data.email)) {
  errors.email = "Email is invalid";
}

// Password checks
if (Validator.isEmpty(data.password)) {
  errors.password = "Password field is required";
}

return {
    errors,
    isValid: isEmpty(errors)
  }

}

module.exports = validateLoginInput 