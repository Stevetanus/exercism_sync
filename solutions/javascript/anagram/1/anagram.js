//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (target, words) => {
  let targetMap = wordToMap(target.toLowerCase());
  let answer = words.reduce((accu, curr) => {
    if (target.toLowerCase() === curr.toLowerCase() || target.length !== curr.length) return accu;
    let currMap = wordToMap(curr.toLowerCase());

    let keys = Object.keys(targetMap);
    
    let isAnagram = true;
    outerLoop:
    for (let i = 0; i < keys.length; i++) {
        let ki = keys[i];
        if (targetMap[ki] !== currMap[ki]) {
            isAnagram = false;
            break outerLoop;
        }
    }
    if (isAnagram) {
      accu.push(curr);
    }
    return accu
  }, [])
  return answer
};

export const wordToMap = (word) => {
  let wordsMap = {}
  word.split("").map(w => {
    if (wordsMap[w]) {
      wordsMap[w]++;
    } else {
      wordsMap[w] = 1;
    }
  })
  return wordsMap
}