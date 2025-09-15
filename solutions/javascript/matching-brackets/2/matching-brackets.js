//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPaired = (brackets) => {
  const stack = [];
  const bracketsMap = new Map([
    ["[", "]"],
    ["{", "}"],
    ["(", ")"]
  ])
  const openBrackets = new Set(bracketsMap.keys());
  const closeBrackets = new Set(bracketsMap.values());
  for (const char of brackets) {
    if (openBrackets.has(char)) {
      stack.push(char)
    }
    if (closeBrackets.has(char)) {
      if (!stack.length) return false;
      const openBracket = stack.pop();
      if (bracketsMap.get(openBracket) !== char) return false;
    }
  }
  return stack.length === 0;
};
