import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const habits = [
    {      
      id: 1,
      name: "One",
      goal: 7,
      frequency: "Daily",
    },
    {      
      id: 2,
      name: "Two",
      goal: 7,
      frequency: "Daily",
    },
    {      
      id: 3,
      name: "Three",
      goal: 4,
      frequency: "Weekly",
    },
  ]

  function Header(props) {
    return(
      <header>
        <h1>{props.name}</h1>
      </header>
    )
  }

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
  

  function Footer(props) {
    return (
      <footer>
        <p>Copyright {props.year}</p>
      </footer>
    )
  }
  return (
    <>
      <Header name="Habbit Rabbit"/>
      <div className="card">
        <Habits habits={habits}/>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Footer year={new Date().getFullYear()}/>
    </>
  )
}

export default App
