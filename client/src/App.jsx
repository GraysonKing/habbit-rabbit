import { React, useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Habits from "./Components/Habits";
import AddHabit from "./Components/AddHabit";
const getHabitsURL = "http://localhost:5000/api/getHabits";
const deleteHabitsURL = "http://localhost:5000/api/deleteHabit";

function App() {
  const [habits, setHabits] = useState([]);
  const [modal, setModal] = useState(false);

  const handleDeleteHabit = async (id) => {
    try {
      const response = await axios.delete(`${deleteHabitsURL}/${id}`);
      console.log("Habit deleted successfully:", response.data);

      // Update the state with the filtered habits (excluding the deleted one)
      setHabits(habits.filter((habit) => habit._id !== id));
    } catch (error) {
      console.error("Error deleting habit:", error);
    }
  };

  const fetchHabits = async () => {
    try {
      const response = await axios.get(getHabitsURL);
      setHabits(response.data.habits);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchHabits();
  }, []);

  return (
    <>
      <Header
        name="Habbit Rabbit"
        className="bg-gray-800 text-white p-4 text-center font-bold"
      />
      <div className="container mx-auto mt-4">
        {!modal ? (
          <>
            <button
              onClick={() => setModal(true)}
              className="select-none mb-4 rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Add Habit
            </button>
            <Habits
              habits={habits}
              onDeleteHabit={handleDeleteHabit}
              className="mb-4 p-4 bg-white rounded shadow-md"
            />
          </>
        ) : (
          <>
            <AddHabit
              setModal={setModal}
              onHabitAdded={fetchHabits}
              className="mb-4 p-4 bg-white rounded shadow-md"
            />
          </>
        )}
      </div>
      <Footer
        year={new Date().getFullYear()}
        className="bg-gray-200 text-center p-4"
      />
    </>
  );
}

export default App;
