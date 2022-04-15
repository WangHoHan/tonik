export const readFromCache = (key: string): string | null => localStorage.getItem(key) || null;

export const removeFromCache = (key: string): void => localStorage.removeItem(key);

export const writeToCache = (key: string, data: string): void => localStorage.setItem(key, data);
