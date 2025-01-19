require("dotenv").config(); // Load environment variables
const http = require("http");
const mongoose = require("mongoose"); // Example: using MongoDB
const app = require("./src/app");

// Configuration
const PORT = process.env.PORT || 8000;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");

    const server = http.createServer(app);
    server.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1); // Exit process with failure
  });
