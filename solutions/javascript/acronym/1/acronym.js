export const parse = (phrase) => {
  // const singleWords = phrase.split(/[\W_]+(?<!')/);
  const singleWords = phrase.split(/[^a-zA-Z0-9']+/);
  let answer = '';
  singleWords.forEach((word, i) => {
    answer += word[0].toUpperCase()
  })
  return answer
};
