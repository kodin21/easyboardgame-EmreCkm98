/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line no-unused-vars
import React, { useState, useMemo } from 'react';

export const useLocalStorage = (storedKeyName, initialValue) => {
  //localstoragea karakter bilgisini kaydetme
  initialValue = useMemo(
    () => JSON.parse(localStorage.getItem(storedKeyName)) || initialValue || '',
    [storedKeyName, initialValue]
  );

  const [value, setCharValue] = useState(initialValue);

  const setValue = (value) => {
    const valueStoreChar = value instanceof Function ? value() : value;
    localStorage.setItem(storedKeyName, JSON.stringify(valueStoreChar));
    setCharValue(valueStoreChar);
    console.log('location', valueStoreChar);
  };

  return [value, setValue];
};
