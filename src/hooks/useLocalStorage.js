import { useState } from 'react';


// We can omit window. when using local storage i.e. we can directly call localStorage.getItem(key)
// When a function is passed to useState() as an argument the return value of that function gets set as the initial value of the variable we are defining when calling useState(). In this case the return value of the callback function will set the value of storedValue.

const useLocalStorage = (key, initialValue) => {
  if (typeof key !== 'string') {
    throw new Error('First argument should be a string');
  }
  const [ storedValue, setStoredValue ] = useState(() => {
    if (window.localStorage.getItem(key)) {
      return JSON.parse(window.localStorage.getItem(key));
    } else {
      return initialValue;
    }
  })

  const setValue = value => {
    window.localStorage.setItem(key, JSON.stringify(value));
    setStoredValue(value);
  }

  return [storedValue, setValue];
}

export default useLocalStorage;