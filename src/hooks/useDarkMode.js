import useLocalStorage from "./useLocalStorage";

function useDarkMode(initBool){
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", initBool);
  return [darkMode, setDarkMode];
};

export default useDarkMode;
