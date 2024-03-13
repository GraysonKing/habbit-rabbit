import { React, useEffect, useState } from "react";
import axios from "axios";
import HabitItem from "./HabitItem";
import AddHabit from "./AddHabit";
import Calendar from "./Calendar";
const getHabitsURL = "http://localhost:5000/api/getHabits";
const deleteHabitsURL = "http://localhost:5000/api/deleteHabit";

function Habits() {
  const [habits, setHabits] = useState([]);
  const [modal, setModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().slice(0, 10)
  );

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

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
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
    <section>
      {!modal ? (
        <>
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={() => setModal(true)}
              className="select-none mb-4 rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Add Habit
            </button>
            <input
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
              className="mb-4 p-2 rounded shadow-sm border appearance-none outline-none focus:outline-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>
          <Calendar
            habits={habits}
            selectedDate={selectedDate}
            className="mb-4 p-2 rounded shadow-sm border appearance-none outline-none focus:outline-blue-500 focus:ring-2 focus:ring-blue-200 ml-auto"
          />
          <div className="grid grid-cols-3 gap-4 p-2">
            {habits ? (
              habits.map((habit) => (
                <HabitItem
                  key={habit._id}
                  habit={habit}
                  onDelete={handleDeleteHabit}
                />
              ))
            ) : (
              <p>Loading habits...</p>
            )}
          </div>
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
    </section>
  );
}

export default Habits;
