const mongoose = require("mongoose");

const { Schema } = mongoose;
const userSchema = new Schema({
  firstName: { type: String, required: true, default: true },
  lastName: { type: String, required: true, default: true },
  email: { type: String, unique: true },
  password: { type: String, required: true },
  token: { type: String, required: true },
});

module.exports = mongoose.model("user", userSchema);
