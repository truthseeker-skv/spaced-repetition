import React, { useState, useCallback, useMemo } from 'react';

export interface IStorage {
  isAvailable: boolean;

  (key: string): {
    get: () => string,
    set: (value: string) => void,
  },
}

export function useStorage(key: string) {
  const storage = useMemo(() => {
    if (_sessionStorage.isAvailable) {
      return _sessionStorage(key);
    }
    return _domStorage(key);
  }, []);

  const [value, setValue] = useState(storage.get());

  const handleChangeValue = useCallback((e: React.ChangeEvent<HTMLInputElement> | string) => {
    storage.set(
      typeof e === 'string'
        ? e
        : e.currentTarget.value
    );
    setValue(storage.get());
  }, [setValue]);

  return {
    value,
    onChangeValue: handleChangeValue,
  };
}

const _domStorage: IStorage = (key: string) => {
  if (!window.ankiStorage) {
    window.ankiStorage = {};
  }

  return {
    get: () => window.ankiStorage[key] || '',
    set: (value: string) => {
      window.ankiStorage[key] = value;
    },
  };
}

_domStorage.isAvailable = true;

// Mobile Anki doesn't have access to localStorage or any other storage except sessionStorage
// and it loses global state between card's sides
const _sessionStorage: IStorage = (key: string) => {
  return {
    get: () => window.sessionStorage.getItem(key) || '',
    set: (value: string) => {
      window.sessionStorage.setItem(key, value);
    },
  };
}

_sessionStorage.isAvailable = (() => {
  try {
    return !!window.sessionStorage;
  } catch (_) {
    return false;
  }
})();
