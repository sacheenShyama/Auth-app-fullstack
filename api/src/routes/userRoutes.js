const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controller/userController");

router.post("/auth/login", loginUser);
router.post("/auth/register", registerUser);

module.exports = router;
