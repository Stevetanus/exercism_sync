// @ts-check

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy':
      return 0.5
      break;
    case 'Energizer':
    case 'Green Garden':
      return 1.5
      break;
    case 'Tropical Island':
      return 3
      break;
    case 'All or Nothing':
      return 5
      break;
    default:
      return 2.5
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let counts = 0
    for (let index in limes){
      if (wedgesNeeded > 0){
        counts += 1
        if (limes[index] === 'small'){wedgesNeeded -= 6}
        if (limes[index] === 'medium'){wedgesNeeded -= 8}
        if (limes[index] === 'large'){wedgesNeeded -= 10} 
      }
    }
    return counts
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let lastOrder;
  for (let index in orders){
    if (timeLeft > 0){
        timeLeft -= timeToMixJuice(orders[index])
        lastOrder = Number(index)
    }
  }
  return orders.slice(lastOrder + 1)
}
