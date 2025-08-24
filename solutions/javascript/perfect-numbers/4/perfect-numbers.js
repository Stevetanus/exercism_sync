export const classify = (num) => {
  if (num <= 0) throw 'Classification is only possible for natural numbers.'
  function factorSum (num){
    let sum = 0;
    for (let i = 1; i <= num / 2; i++){
      if (num % i === 0){
        sum += i
      }
    }
    return sum;
  }
  const perfectNumbers = factorSum(num)
  if (perfectNumbers > num){
    return 'abundant'
  }
  if (perfectNumbers < num){
    return 'deficient'
  }
  if (perfectNumbers === num){
    return 'perfect'
  }
};
