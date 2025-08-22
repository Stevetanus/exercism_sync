export const parse = (phrase) => {
  return phrase
      .split(/[^a-zA-Z0-9']+/)
      .map(word => word[0].toUpperCase())
      .join('');
};
