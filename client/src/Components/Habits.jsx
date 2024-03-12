import React from "react";
import HabitItem from "./HabitItem";

function Habits({ habits }) {
  return (
    <section>
      <div className="grid grid-cols-3 gap-4 p-2">
        {habits ? (
          habits.map((habit) => <HabitItem key={habit._id} habit={habit} />)
        ) : (
          <p>Loading habits...</p>
        )}
      </div>
    </section>
  );
}

export default Habits;
