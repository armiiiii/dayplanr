import { useEffect, useState } from "react";
import connector from "./fetch.js";

import Day from "./ui/Day.jsx";

function App() {
  const [week, setWeek] = useState([]);

  useEffect(() => {
    const fetchWeek = async () => {
      const content = await connector.getTasks();
      setWeek(content);
    }
    fetchWeek();
  }, []);

  return (
    <>
    <h1>Hello!</h1>
    <p>{week}</p>
    </>
  );
}

export default App;
