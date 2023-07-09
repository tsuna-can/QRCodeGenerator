export const zeroPaddiong = (value: string, digits: number): string => {
  // TODO decide behavior if digits is less than value.length
  return String(value).padStart(digits, '0');
};

export const calcMinValue = (digits: number): string => {
  return '0'.repeat(digits);
};

export const calcMaxValue = (digits: number): string => {
  return '9'.repeat(digits);
};
