import React, { useState } from "react";
import axios from "axios";
const addHabitsURL = "http://localhost:5000/api/addHabit";

function AddHabit(props) {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [frequency, setFrequency] = useState("Daily");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newHabit = {
        name,
        goal: parseInt(goal), // Ensure goal is a number
        frequency,
      };

      const response = await axios.post(addHabitsURL, newHabit);
      console.log("Habit added successfully:", response.data);
      // Handle successful response (e.g., reset form, close modal)
    } catch (error) {
      console.error("Error adding habit:", error);
      // Handle errors appropriately (e.g., display error message)
    }
  };

  return (
    <section>
      <h1>Add Habit</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <label htmlFor="goal">Goal:</label>
        <input
          type="number"
          id="goal"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          required
        />
        <br />
        <label htmlFor="frequency">Frequency:</label>
        <select id="frequency" value={frequency} onChange={(e) => setFrequency(e.target.value)}>
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
        </select>
        <br />
        <button type="submit">Add Habit</button>
      </form>
    </section>
  );
}

export default AddHabit;
