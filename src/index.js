import React from "react";
import ReactDOM from "react-dom";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import useDarkMode from "./hooks/useDarkMode";
import useCoinData from "./hooks/useCoin";

import "./styles.scss";


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

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
