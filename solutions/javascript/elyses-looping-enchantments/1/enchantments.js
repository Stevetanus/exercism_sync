// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
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
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  let counts = 0
  for (const number of stack){
    if (type && number % 2 === 0){
      counts += 1
    }
    if (!type && number % 2 === 1){
      counts += 1
    }
  }
  return counts
}
