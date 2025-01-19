const User = require("../models/userModel");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const registerUser = async (req, res) => {
  console.log("check", req.body);

  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ message: "Validation failed", error: errors.array() });
    }

    const { name, email, password, image } = req.body;
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "Name,email and password are required" });
    }

    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email formate" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "password must be at least 6 characters long" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already is in use" });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const image_url =
      image ||
      "https://pics.craiyon.com/2023-06-26/b9b1a22a02414687a6ee21564052117f.webp";
    const user = new User({
      name,
      email,
      password: hashedPassword,
      image: image_url,
    });
    await user.save();

    res.status(200).json({
      message: "User created successfully",
      user: user,
    });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while creating the user",
      error,
    });
  }
};

const loginUser = (req, res) => {
  res.json({ message: "Login user" });
};

module.exports = {
  registerUser,
  loginUser,
};
