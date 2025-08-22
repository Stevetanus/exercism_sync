

export const score = (input) => {
  let score = 0;
  let value1 = ['A','E','I','O','U','L','N','R','S','T']
  let value2 = ['D','G']
  let value3 = ['B','C','M','P']
  let value4 = ['F','H','V','W','Y']
  let value5 = ['K']
  let value8 = ['J','X']
  let value10 = ['Q','Z']
  for (let i = 0; i < input.length; i++){
    if(value1.includes(input[i].toUpperCase())){score += 1}
    if(value2.includes(input[i].toUpperCase())){score += 2}
    if(value3.includes(input[i].toUpperCase())){score += 3}
    if(value4.includes(input[i].toUpperCase())){score += 4}
    if(value5.includes(input[i].toUpperCase())){score += 5}
    if(value8.includes(input[i].toUpperCase())){score += 8}
    if(value10.includes(input[i].toUpperCase())){score += 10}
  }
  return score
};
