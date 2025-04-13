type StorageProps = {
  dark: boolean;
};

type StorageKey = keyof StorageProps;

const defaultStorage: StorageProps = {
  dark: false,
};

export const storage = {
  get<T extends StorageKey>(key: T): StorageProps[T] {
    const value = localStorage.getItem(key);
    if (value === null) {
      return defaultStorage[key];
    }
    try {
      return JSON.parse(value);
    } catch {
      return value as never as StorageProps[T];
    }
  },
  set<T extends StorageKey>(key: T, value: StorageProps[T]) {
    const storageValue = typeof value === 'string' ? value : JSON.stringify(value);
    localStorage.setItem(key, storageValue);
  },
};
