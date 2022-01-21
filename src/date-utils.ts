export const defaultDate = (date: Date, daysToShift: number): Date => 
  new Date(date.getFullYear(), date.getMonth(), date.getDate() + daysToShift);

export const getLastDayOfNextMonth = (date: Date): Date => 
  new Date(date.getFullYear(), date.getMonth() + 2, 0);

export const pad = (v: string | number): string => 
  `0${v}`.slice(-2);

export const formatDate = (date: Date): string => 
  `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;