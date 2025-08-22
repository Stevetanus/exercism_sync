// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  let counts = 0
  stack.forEach((num, index) => {
    if (num === card) {
      counts += 1
    }
  })
  return counts
}

/**
 * Determine how many cards are odd or even
 */
export function determineOddEvenCards(stack, type) {
  let counts = 0
  let division = type ? 0 : 1
  for (const number of stack){
    if (number % 2 === division){
      counts += 1
    }
  }
  return counts
}
