import React from "react";

function Habits(props) {
  console.log(props.habits);
  return (
    <section>
      <ul>
        {props.habits.map((habit) => (
          <li key={habit.id}>{habit.name}</li>
        ))}
      </ul>
    </section>
  );
}

export default Habits;
