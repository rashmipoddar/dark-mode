import { useEffect } from 'react';

import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
  const [ userPreference , setUserPreference ] = useLocalStorage('mode', false);
  
  useEffect(() => {

    if (userPreference === true) {
      document.querySelector('body').classList.add('dark-mode');
    } else {
      document.querySelector('body').classList.remove('dark-mode');
    }
  }, [userPreference])

  return [ userPreference, setUserPreference ];
}

export default useDarkMode;