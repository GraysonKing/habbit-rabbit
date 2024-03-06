import { React, useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Habits from "./Components/Habits";
import AddHabit from "./Components/AddHabit";
const getHabitsURL = "http://localhost:5000/api/getHabits";

function App() {
  const [habits, setHabits] = useState([]);
  const [modal, setModal] = useState(false);

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
            <Habits
              habits={habits}
              className="mb-4 p-4 bg-white rounded shadow-md"
            />
            <button
              onClick={() => setModal(true)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add Habit
            </button>
          </>
        ) : (
          <>
            <AddHabit setModal={setModal}className="mb-4 p-4 bg-white rounded shadow-md" />
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
