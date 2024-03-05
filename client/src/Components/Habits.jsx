import React from "react";

function Habits({ habits }) {
  console.log(habits);
  return (
    <section>
      <ul>
        {habits ? (
          habits.map((habit) => <li key={habit.id}>{habit.name}</li>)
        ) : (
          <p>Loading habits...</p>
        )}
      </ul>
    </section>
  );
}

export default Habits;
