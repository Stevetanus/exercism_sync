//
// This is only a SKELETON file for the 'Wordy' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const answer = (question) => {
  const q_split = question.slice(0,-1).split(" ");
  const operands = ["plus", "minus", "multiplied", "divided"]
  
  if (q_split.length < 3) throw new Error('Syntax error');
  const first = Number(q_split[2]);
  if (q_split.length === 3) {
    if (!isNaN(first)) return first;
    throw new Error('Syntax error');
  }
  if (!q_split.some(q => operands.includes(q))) throw new Error ('Unknown operation');
  if (q_split.length < 5) throw new Error('Syntax error');
  // one calculation
  if (q_split.length === 5) {
      const second = Number(q_split[4]);
      const operand = q_split[3];
      return calculation(first, second, operand)
  }
  if (q_split.length === 6) {
      const second = Number(q_split[5]);
      const operand =`${q_split[3]} ${q_split[4]}`;
      return calculation(first, second, operand)
  }
  if (q_split.length === 7) {
      const operand1 = q_split[3];
      const second = Number(q_split[4]);
      const operand2 = q_split[5];
      const third =  Number(q_split[6]);
      return calculation(calculation(first, second, operand1), third, operand2) 
  }
  if (q_split.length === 8) {
      const operand1 = q_split[3];
      const second = Number(q_split[4]);
      const operand2 =`${q_split[5]} ${q_split[6]}`;
      const third = Number(q_split[7]);
      return calculation(calculation(first, second, operand1), third, operand2) 
  }
  if (q_split.length === 9) {
      const operand1 =`${q_split[3]} ${q_split[4]}`;
      const second = Number(q_split[5]);
      const operand2 =`${q_split[6]} ${q_split[7]}`;
      const third = Number(q_split[8]);
      return calculation(calculation(first, second, operand1), third, operand2)
  }
  throw new Error("Syntax error")
};

const calculation = (a, b, action) => {
  switch (action) {
  case "plus":
    return a + b
    break;
  case "minus":
    return a - b
    break;
  case "multiplied by":
    return a * b
    break;
  case "divided by":
    return a / b
    break;
  default:
    throw new Error("Syntax error")
}
}
