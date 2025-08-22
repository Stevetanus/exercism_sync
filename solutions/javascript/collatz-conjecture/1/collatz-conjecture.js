export const steps = (num, count = 0) => {
  if (num <= 0) throw "Only positive numbers are allowed";
  if (num === 1) return count;
  return steps(num % 2 === 0 ? num / 2 : num * 3 + 1, count + 1);
};
