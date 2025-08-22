//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (old) => {
  const expected = {};
  Object.entries(old).forEach(([key, value]) => {
    value.forEach(v => {
      expected[v.toLowerCase()] = Math.abs(key)
    })
  })
  return expected;
};
