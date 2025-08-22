export const valid = (sin) => {
  let digitStrings = sin.split(' ').join('') 
  if (digitStrings.length <= 1){
    return false
  }

  let regExp = /^\d+$/

  if (regExp.test(digitStrings)){
    let arrayStrings = String(Number(digitStrings)).split('')
    let sum = 0
    for (let index in arrayStrings){
      arrayStrings[index] = Number(arrayStrings[index])
      let i = arrayStrings.length - index
      if (i % 2 === 0){
         if (arrayStrings[index] * 2 > 9){
           arrayStrings[index] = arrayStrings[index] * 2 - 9
         } else {
           arrayStrings[index] = arrayStrings[index] * 2
         }
      }
      sum += arrayStrings[index]
    }
    if (sum % 10 === 0){
      return true
    } else {
      return false
    }
  }else {
    return false
  }
};
