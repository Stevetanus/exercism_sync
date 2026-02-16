export const score = (input) => {
  let score = 0;
  let upperInput = input.toUpperCase()
  let valueLetter = {
    1: ['A','E','I','O','U','L','N','R','S','T'],
    2: ['D','G'],
    3: ['B','C','M','P'],
    4: ['F','H','V','W','Y'],
    5: ['K'],
    8: ['J','X'],
    10: ['Q','Z']
  }
  
  for (const element of upperInput){
    for (const property in valueLetter){
      if (valueLetter[property].includes(element)){
        score += Number(property)
      }
    }
  }
  
  return score
};
