/**
 * Checks if value is classified as a Number primitive or object.
 * @param value - The value to check.
 * @return - Returns true if value is correctly classified, else false.
 */
export const isFloat = (value?: any) =>
  Number.isFinite(value) && !Number.isInteger(value);
