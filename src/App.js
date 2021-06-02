import React from "react";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import useDarkMode from "./hooks/useDarkMode";
import useCoinData from "./hooks/useCoin";

const App = () => {
  const [coinData] = useCoinData([]);
  const [darkMode, setDarkMode] = useDarkMode(false);

  return (
    <div className={darkMode ? "dark-mode App" : "App"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Charts darkMode={darkMode} coinData={coinData} />
    </div>
  );
};

export default App;
