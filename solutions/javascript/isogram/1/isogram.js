//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isIsogram = (inputString) => {
  if (!inputString.length) return true;
  const regex = /^[a-z]$/;
  const inputStringMap = new Map(); 
  for (const char of inputString.toLowerCase()) {
    if (!regex.test(char)) continue;
    if(!inputStringMap.get(char)) {
      inputStringMap.set(char, 1)
    } else {
      inputStringMap.set(char, inputStringMap.get(char) + 1)
    }
  }
  for (let [key, value] of inputStringMap.entries()) {
    if (value !== 1) return false;
  }
  return true;
};
