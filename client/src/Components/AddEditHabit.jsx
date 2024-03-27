import React, { useState, useEffect } from "react";
import axios from "axios";
const addHabitsURL = "http://localhost:5000/api/addHabit";
const editHabitsURL = "http://localhost:5000/api/editHabit";

function AddEditHabit({ setModal, onHabitUpdate, habitToEdit }) {
  const action = habitToEdit ? 'edit' : 'add';
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [frequency, setFrequency] = useState("Daily");

  useEffect(() => {
    if (habitToEdit) {
      setName(habitToEdit.name);
      setGoal(habitToEdit.goal);
      setFrequency(habitToEdit.frequency);
    }
  }, [habitToEdit]); // Update form fields when habitToEdit changes

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const updatedHabit = {
        name,
        goal: parseInt(goal), // Ensure goal is a number
        frequency,
      };

      action === "edit"
        ? await axios.put(editHabitsURL + "/" + habitToEdit._id, updatedHabit) // Edit existing habit
        : await axios.post(addHabitsURL, updatedHabit, {
            headers: {
              "Content-Type": "application/json",
            },
            timeout: 5000,
          }); // Add new habit

      setModal(false);
      onHabitUpdate(); // Signal data change for both add and edit scenarios
    } catch (error) {
      console.error(
        habitToEdit ? "Error editing habit:" : "Error adding habit:",
        error
      );
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
          className="select-none rounded-lg bg-red-500 mx-4 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="select-none mx-4 rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          {action === 'edit' ? (
            <p>Edit Habit</p>
          ) : (
            <p>Add Habit</p>
          )}

        </button>
      </form>
    </section>
  );
}

export default AddEditHabit;
