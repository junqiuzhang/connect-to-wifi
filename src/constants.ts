export const ConsoleError = (error: string): void => {
  console.log(error);
}
export enum ESecurity {
  WPA = 'WPA',
  WPA2 = 'WPA WPA2',
}
export enum EDictionary {
  test = 'test.txt',
  common = 'common.txt',
  my = 'myDictionary.txt',
}
export const EDictionaryString = {
  common: 'CommonString',
  char: 'CharString',
  name: 'NameString',
  year: 'YearString',
  month: 'MonthString',
  day: 'DayString',
}