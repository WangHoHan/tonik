export const readFromCache = (key: string): string | null => localStorage.getItem(key) || null;

export const removeFromCache = (key: string): void => localStorage.removeItem(key);

export const writeToCache = (key: string, data: any): void => localStorage.setItem(key, JSON.stringify(data));