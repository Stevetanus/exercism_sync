//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (obj) => {
  const newObj = {};
  for (let key in obj) {
    for (let element of obj[key]) {
      newObj[element.toLowerCase()] = +key;
    }
  }
  return newObj;
};
