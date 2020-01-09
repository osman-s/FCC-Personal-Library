const Joi = require("joi");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true,
    minlength: 5
  },
  createdby: {
    type: String,
    required: true
  },
  assignedto: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  }
});

const User = mongoose.model("User", userSchema);

function validateUser(user) {
  const schema = {
    name: Joi.string()
      .min(3)
      .max(50)
      .required()
  };

  return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;
