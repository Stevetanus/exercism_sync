export const convert = (number) => {
  let sounds = "";
  if (number % 3 === 0){
    sounds += 'Pling'
  }
  if (number % 5 === 0){
    sounds += 'Plang'
  }
  if (number % 7 === 0){
    sounds += 'Plong'
  }
  return sounds ? sounds : String(number)
};
