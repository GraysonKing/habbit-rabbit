import { React } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Habits from "./Components/Habits";

function App() {
  return (
    <>
      <Header
        name="Habbit Rabbit"
        className="bg-gray-800 text-white p-4 text-center font-bold"
      />
      <div className="container mx-auto mt-4">
          <Habits className="mb-4 p-4 bg-white rounded shadow-md" />
      </div>
      <Footer
        year={new Date().getFullYear()}
        className="bg-gray-200 text-center p-4"
      />
    </>
  );
}

export default App;
