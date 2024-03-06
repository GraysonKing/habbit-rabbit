import React from "react";

function Habits({ habits }) {
  return (
    <section>
      <ul>
        {habits ? (
          habits.map((habit) => <li key={habit.name}>{habit.name}</li>)
        ) : (
          <p>Loading habits...</p>
        )}
      </ul>
    </section>
  );
}

export default Habits;
