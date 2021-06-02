import {useState} from "react";

function useLocalStorage (key, initVal) {
  const [storedValue, setStoredValue] = useState(() => {
    console.log(window.localStorage.getItem(key) || initVal);
    return (window.localStorage.getItem(key) || initVal);
  });

  const setValueNLocal = (value) => {
    setStoredValue(value);
    window.localStorage.setItem(key, value);
  };

  return [storedValue, setValueNLocal];
};

export default useLocalStorage;
