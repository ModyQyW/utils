/**
 * Convert number to uppercase Chinese.
 * @param number - The value to convert, should be Yuan.
 * @param digits - The prefix to add.
 * @returns - Returns a string.
 */
export const convertNumberToPercentage = (number: number, digits = 2) =>
  `${(number * 100).toFixed(digits)}%`;
