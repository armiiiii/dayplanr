import { useEffect, useState } from "react";
import connector from "./fetch.js";

import Day from "./ui/Day.jsx";

function App() {
  const [week, setWeek] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await connector.getTasks();
      setWeek(data);
    }
    fetchData();
  }, []);

  return (
    <>
    <header>
      <h1>Hello!</h1>
    </header>
    <main>
      {week.map(day => (
        <Day key={day.id} day={day.day} todos={day.tasks}/>
      ))}
    </main>
    </>
  );
}

export default App;
