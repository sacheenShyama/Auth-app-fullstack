const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const userRoutes = require("./routes/userRoutes");

const app = express();

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(morgan("dev")); // HTTP request logger
app.use("/api", userRoutes);

module.exports = app;
