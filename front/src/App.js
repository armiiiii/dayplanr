import { useEffect, useState } from "react";

import Day from "./ui/Day.jsx";

import connector from "./fetch.js";

function App() {
  const [week, setWeek] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await connector.getTodo();
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
        <Day key={day.id} day={day.day} todos={day.tasks} />
      ))}
    </main>
    </>
  );
}

export default App;
