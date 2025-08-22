//
// This is only a SKELETON file for the 'Pythagorean Triplet' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function triplets({ minFactor, maxFactor, sum }) {
  
  if (minFactor === undefined) minFactor = 2;
  if (maxFactor === undefined) maxFactor = sum;

  let triplets = [];

    for (let a = minFactor; a <= maxFactor; a++) {
      let m = sum * sum - 2 * sum * a;
      let n = 2 * (sum - a);
      if (m % n !== 0) continue;
      let b = m / n;
      let c = sum - a - b;
      if (a < b && b < c && c < maxFactor) {
        let currentTriplet = new Triplet(a, b, c);
        triplets.push(currentTriplet)
      }
    }
  
  return triplets;
}

class Triplet {
  constructor(a, b, c) {
    this.a = a
    this.b = b
    this.c = c
  }
  
  toArray() {
    return [this.a, this.b, this.c]
  }
}