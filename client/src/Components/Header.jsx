import React from "react";

function Header({ name }) {
  return (
    <header className="bg-gray-800 text-white p-4 text-center font-bold">
      <h1>{name}</h1>
    </header>
  );
}

export default Header;
