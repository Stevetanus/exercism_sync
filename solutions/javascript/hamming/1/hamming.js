export const compute = (strandA, strandB) => {
  if (strandA.length !== strandB.length) {
    throw new Error('strands must be of equal length');
  }
  let difference = 0;
  strandA.split('').map((strand, i) => {
    console.log(strand, strandB[i])
    if (strand !== strandB[i]) {
      difference++;
    }
  })
  return difference;
};
