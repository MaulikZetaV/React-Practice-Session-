export const isEmpty = (value) => {
  return !value || value.trim() === "";
};

export const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const isValidLength = (value, min = 1) => {
  return value && value.length >= min;
};
