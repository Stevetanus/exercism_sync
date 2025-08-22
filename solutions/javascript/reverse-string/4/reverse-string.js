export const reverseString = (str) => {
  return [...str].reverse().reduce((accu, curr) => {
    return accu += curr
  }, '')
}

