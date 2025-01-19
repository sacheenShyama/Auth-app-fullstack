const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      require: [true, "email is required"],
      unique: true,
    },
    name: {
      type: String,
      required: [true, "Name is requied"],
      trim: true,
      minlength: [3, "Name must be at least 3 characters long"],
    },
    image: { type: String },
    password: {
      type: String,
      requied: [true, "Password is requied"],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
