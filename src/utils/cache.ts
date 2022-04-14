export const writeToCache = (key: string, data: any): void => localStorage.setItem(key, JSON.stringify(data));

export const readFromCache = (key: string): string | null => localStorage.getItem(key) || null;
