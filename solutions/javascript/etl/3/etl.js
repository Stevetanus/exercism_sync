//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (obj) => {
  return Object.keys(obj).reduce((accu, curr) => {
    obj[curr].forEach(value => {
      accu[value.toLowerCase()] = +curr;
    })
    return accu;
  }, {})
};
