import { use, useEffect, useState } from "react";

const useLocalStorage = (key, initialState) => {

  const [state, setState] = useState(initialState);

  useEffect(() => {
    const storage = localStorage.getItem(key);
    if (storage) {
      setState(JSON.parse(storage));
    }
  }, [key]);

  useEffect(() => {
    if (state.length > 0) {
      localStorage.setItem(key, JSON.stringify(state));
    }
  }, [state, key]);

  return [state, setState];
}

export default useLocalStorage;