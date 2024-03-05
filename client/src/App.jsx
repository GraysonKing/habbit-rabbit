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
      console.log(response.data.habits);
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
      <Header name="Habbit Rabbit" />
      <div className="card">
        {!modal ? (
          <>
            <Habits habits={habits} />
            <button onClick={() => setModal(true)}>Add Habit</button>
          </>
        ) : (
          <>
            <AddHabit />
          </>
        )}
      </div>
      <Footer year={new Date().getFullYear()} />
    </>
  );
}

export default App;
