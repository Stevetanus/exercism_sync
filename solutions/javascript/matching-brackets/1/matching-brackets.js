//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPaired = (brackets) => {
  const stack = [];
  const bracketsMap = new Map()
  bracketsMap.set("[", "]");
  bracketsMap.set("{", "}");
  bracketsMap.set("(", ")");
  const openBrackets = "[{(";
  const closeBrackets = "]})";
  for (const element of brackets) {
    if (openBrackets.includes(element)) {
      stack.push(element)
    }
    if (closeBrackets.includes(element)) {
      if (!stack.length) return false;
      const openBracket = stack.pop();
      if (bracketsMap.get(openBracket) !== element) return false;
    }
  }
  return !stack.length
};
