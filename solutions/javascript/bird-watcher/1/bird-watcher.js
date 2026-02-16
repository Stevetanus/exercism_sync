// @ts-check

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let birdsCounts = 0
  for(let birds in birdsPerDay){
    birdsCounts += birdsPerDay[birds]
  }
  return birdsCounts
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let birdsCounts = 0
  let days = [(week-1)*7, week*7]
  for(let i = days[0]; i < days[1]; i++){
    console.log(i)
    birdsCounts += birdsPerDay[i]
  }
  return birdsCounts
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i+=2){
    birdsPerDay[i] +=1
  }
  return birdsPerDay
}
