import React from "react";

function HabitItem({ habit }) {
  return (
    <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="p-6">
        <h3 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {habit.name}
        </h3>
        <div className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          <p>Goal: {habit.goal}</p>
          <p>Frequency: {habit.frequency}</p>
          <p>Streak: {habit.currentStreak}</p>
        </div>
      </div>
      <div className="pb-6">
        <button
          className="select-none rounded-lg bg-pink-500 mx-4 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Delete
        </button>
        <button
          className="select-none mx-4 rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Update
        </button>
      </div>
    </div>
  );
}

export default HabitItem;
