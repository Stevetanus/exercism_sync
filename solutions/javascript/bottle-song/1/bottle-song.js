//
// This is only a SKELETON file for the 'Bottle Song' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const recite = (initialBottlesCount, takeDownCount) => {
  const bottleObj = {
    0: "no green bottles",
    1: "One green bottle",
    2: "Two green bottles",
    3: "Three green bottles",
    4: "Four green bottles",
    5: "Five green bottles",
    6: "Six green bottles",
    7: "Seven green bottles",
    8: "Eight green bottles",
    9: "Nine green bottles",
    10: "Ten green bottles"
  }

  let expected = [];
  let hangOnStr = " hanging on the wall,";
  
  for (let i = 0; i < takeDownCount; i++) {
    if (i > 0) expected.push(``);
    expected.push(bottleObj[initialBottlesCount - i] + hangOnStr)
    expected.push(bottleObj[initialBottlesCount - i] + hangOnStr)
    expected.push(`And if one green bottle should accidentally fall,`);
    expected.push(
      "There'll be " + bottleObj[initialBottlesCount - i - 1].toLowerCase()       + " hanging on the wall.")
  }
  return expected;
};
