import { useState, React } from "react";
import axios from "axios";
import { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Habits from "./Components/Habits";

function App() {
  const fetchHabits = async () => {
    try {
      const response = await axios.get();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchHabits();
  }, []);
  const [count, setCount] = useState(0);

  const habits = [
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
