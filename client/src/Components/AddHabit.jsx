import React, { useState } from "react";
import axios from "axios";
const addHabitsURL = "http://localhost:5000/api/addHabit";

function AddHabit({ setModal }) {
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

      const response = await axios.post(addHabitsURL, newHabit, {
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 5000,
      });
      // Handle successful response (e.g., reset form, close modal)
    } catch (error) {
      console.error("Error adding habit:", error);
      // Handle errors appropriately (e.g., display error message)
    }
  };

  return (
    <section className="p-4 bg-white rounded-lg shadow-md">
      {" "}
      <h1 className="text-2xl font-bold mb-4">Add Habit</h1>{" "}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="goal">
            Goal:
          </label>
          <input
            type="number"
            id="goal"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="frequency"
          >
            Frequency:
          </label>
          <select
            id="frequency"
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
          </select>
        </div>
        <button
          onClick={() => setModal(false)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Habit
        </button>
      </form>
    </section>
  );
}

export default AddHabit;
