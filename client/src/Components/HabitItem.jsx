import React from "react";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import EditIcon from "@mui/icons-material/EditOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";

function HabitItem({ habit, onDelete, onEdit, onDone }) {
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this habit?")) {
      await onDelete(id);
    }
  };

  const handleEdit = (habit) => {
    onEdit(habit);
  };

  const handleDone = (habit) => {
    onDone(habit)
  }

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
      <div className="pb-6 flex grid grid-cols-2 gap-4">
        <div className="mx-2 flex">
          <button
            className="select-none rounded-lg bg-red-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            onClick={() => handleDelete(habit._id)}
          >
            <DeleteIcon fontSize="small" />
          </button>
          <button
            className="select-none mx-2 rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            onClick={() => handleEdit(habit)}
          >
            <EditIcon fontSize="small" />
          </button>
        </div>
        <button
          className="select-none rounded-lg bg-blue-500 py-3 px-6 mx-2 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          onClick={() => handleDone(habit)}
        >
          <CheckOutlinedIcon fontSize="small" />
        </button>
      </div>
      
    </div>
  );
}

export default HabitItem;
