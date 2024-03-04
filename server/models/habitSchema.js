const { default: mongoose } = require("mongoose");

const habitSchema = new mongoose.Schema({
  name: {
    // The name of the habit.
    type: String,
    required: true,
  },
  goal: {
    // The desired streak for the habit.
    type: Number,
    required: true,
  },
  completed: {
    // Whether or not the habit's goal is completed.
    type: [Boolean],
    default: [],
  },
  startDate: {
    // Start date for the habit.
    type: Date,
    default: Date.now,
  },
  frequency: {
    // How often the habit repeats. (Daily, Weekly, Monthly)
    type: String,
    default: "Daily",
  },
  currentStreak: {
    // The current streak for the habit.
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Habit", habitSchema);
