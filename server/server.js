const express = require("express");
const app = express();
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const PORT = process.env.PORT || 5000;

const connectionString = "mongodb://localhost:27017/HabbitRabbit";

// Enable CORS middleware
app.use(cors());

// Connect to MongoDB
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB database");
});

// Define routes and middleware for your app logic (later)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
