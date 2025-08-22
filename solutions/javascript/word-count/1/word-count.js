export const countWords = (phrase) => {
  let regExp = /\w+('\w+)?/g;
  let objWords = {};

  phrase = phrase.toLowerCase().match(regExp);

  phrase.forEach(words=>{
    (objWords[words])
    ? objWords[words]++
    : objWords[words] = 1;
  })
  return objWords;
};
