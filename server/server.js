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
    const newHabit = new Habit(req.body);

    newHabit.save().then(res.sendStatus(200));
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.put("/api/editHabit/:id", async (req, res) => {
  try {
    const { id } = req.params; // Extract ID from path parameters
    const { ...updatedHabitData } = req.body; // Destructure remaining data

    const habitToUpdate = await Habit.findByIdAndUpdate(id, updatedHabitData, { new: true });

    if (!habitToUpdate) {
      return res.status(404).send("Habit not found");
    }

    res.status(200).json(habitToUpdate);
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).send("Internal Server Error");
  }
});


app.delete("/api/deleteHabit/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const habitToDelete = await Habit.findByIdAndDelete(id);

    if (!habitToDelete) {
      return res.status(404).send("Habit not found");
    }

    res.sendStatus(200); // No content needed in response
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).send("Internal Server Error");
  }
})

app.get("/api/markAsDone/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const habitToMarkDone = await Habit.findById(id);

    if (!habitToDelete) {
      return res.status(404).send("Habit not found");
    }

    // TODO: Update habit to increment completions and update last completion date.

    res.sendStatus(200); // No content needed in response
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).send("Internal Server Error");
  }
})