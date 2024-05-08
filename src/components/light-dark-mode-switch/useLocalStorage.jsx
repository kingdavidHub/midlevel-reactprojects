import { useEffect, useState } from "react"


// creating custom reusable hook
// default value is passed in parent component "dark"
const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    let currentValue;

    try {
      // take a json string and converts it into js object
      // if there is no value in local storage then it will return default value
      currentValue = JSON.parse(localStorage.getItem(key) || String(defaultValue));
    } catch (error) {
      console.log(error);
      currentValue = defaultValue;
    }
    return currentValue;
  });

  useEffect(() => {
    // saving state in local storage
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;