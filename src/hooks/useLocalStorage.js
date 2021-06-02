import { useState } from "react";

function useLocalStorage (key, initVal) {
  const [storedValue, setStoredValue] = useState(() => {
    return (JSON.parse(window.localStorage.getItem(key)) || initVal);
  });

  const setValueNLocal = (value) => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValueNLocal];
};

export default useLocalStorage;
