require("dotenv").config({ path: "../.env" });
const express = require("express");
const app = express();
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const PORT = process.env.PORT || 5000;
const connectionString = process.env.MONGODB_URI;

// Model imports.
const Habit = require("./models/habitSchema");

// Middleware
app.use(express.json());

// Enable CORS and handle preflight requests for all routes.
app.use(cors());
app.options("*", cors());

// Connect to MongoDB
mongoose.connect(connectionString);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB database");
});

// Define routes and middleware for your app logic (later)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/api/getHabits", async (req, res) => {
  try {
    Habit.find({}).then((habits) => {
      res.json({
        habits: habits,
      });
    });
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/api/addHabit", async (req, res) => {
  try {
    console.log(req.body);
    const newHabit = new Habit(req.body);

    newHabit.save().then(res.sendStatus(200));
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).send("Internal Server Error");
  }
});
