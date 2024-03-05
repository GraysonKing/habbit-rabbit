import { useState, React } from "react";
import axios from "axios";
import { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Habits from "./Components/Habits";
const habitsURL = 'http://localhost:5000/api/getHabits'; // Replace with your actual server URL and endpoint


function App() {
  let habits = [
    {
      id: 1,
      name: "One",
      goal: 7,
      frequency: "Daily",
    },
    {
      id: 2,
      name: "Two",
      goal: 7,
      frequency: "Daily",
    },
    {
      id: 3,
      name: "Three",
      goal: 4,
      frequency: "Weekly",
    },
  ];
  const fetchHabits = async () => {
    try {
      const response = await axios.get(habitsURL);
      habits = response.data.habits;
      console.log(habits);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchHabits();
  }, []);
  const [count, setCount] = useState(0);

  return (
    <>
      <Header name="Habbit Rabbit" />
      <div className="card">
        <Habits habits={habits} />
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Footer year={new Date().getFullYear()} />
    </>
  );
}

export default App;
