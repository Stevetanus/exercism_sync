export const classify = (num) => {
  if (num <= 0){throw 'Classification is only possible for natural numbers.'}
  function factorSum (num){
    let sum = 0;
    for (let i = 1; i < num; i++){
      if (num % i === 0){
        sum += i
      }
    }
    return sum;
  }
  let perfectNumbers = factorSum(num)
  console.log(perfectNumbers)
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
