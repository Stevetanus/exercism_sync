export const isPangram = (sentence) => {
  return new Set(sentence.toUpperCase().match(/[A-Z]/g)).size === 26
};
