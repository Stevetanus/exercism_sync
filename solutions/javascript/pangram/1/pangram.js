export const isPangram = (sentence) => {
  const lower = sentence.toLowerCase()
  return [...'abcdefghijklmnopqrstuvwxyz'].every((letter) => lower.includes(letter))
};
