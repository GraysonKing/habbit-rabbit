import React from "react";

function Footer({ year }) {
  return (
    <footer className="bg-gray-200 text-center p-4">
      <p className="text-gray-700">Copyright {year}</p>
    </footer>
  );
}

export default Footer;
