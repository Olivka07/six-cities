import { convertStringToDate } from './convert-string-to-date';

export function sortByDate<T, K extends keyof T>(data: T[], keyDate: K) {
  return data.toSorted((prev, next) => convertStringToDate(next[keyDate] as string).getTime() - convertStringToDate(prev[keyDate] as string).getTime());
}