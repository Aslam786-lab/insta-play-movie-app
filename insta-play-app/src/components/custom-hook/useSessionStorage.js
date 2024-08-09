import { useCallback, useEffect, useState } from "react";

const getSavedValue = (key, initialValue) => {
  const savedValue = JSON.parse(sessionStorage.getItem(key));
  if (savedValue) return savedValue;

  return initialValue;
};

const useSessionStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => getSavedValue(key, initialValue));

  useEffect(() => {
    if (value === undefined) return sessionStorage.removeItem(key);
    sessionStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  const removeValue = useCallback(() => {
    setValue(undefined);
  }, []);

  return [value, setValue, removeValue];
};

export default useSessionStorage;
