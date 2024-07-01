import { useEffect, useState } from "react";
import connector from "./fetch.js";

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
    <p>{week}</p>
  );
}

export default App;
