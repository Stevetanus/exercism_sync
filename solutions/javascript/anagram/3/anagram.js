//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (target, words) => {
  return words.filter(
    word => word.toLowerCase() !== target.toLowerCase()).filter(
    word => word.toLowerCase().split('').sort().join('') === target.toLowerCase().split('').sort().join('')
    )
};
