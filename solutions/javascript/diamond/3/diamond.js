const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
export function rows(char, answer = []) {
  const charIndex = ALPHABET.indexOf(char) + 1;
  const rowCount = charIndex * 2 - 1;
  if (answer.length === rowCount) {
    return answer;
  } else {
    let innerRow = '';
    if (answer.length < charIndex) {
      let spaceInMiddle = '';
      for (let j = 0; j < answer.length * 2 - 1; j++) {
        spaceInMiddle += ' ';
      }
      let charLength =
        answer.length === 0 || answer.length === rowCount ? 1 : 2;
      let spaceFrontEnd = '';
      for (
        let k = 0;
        k < (rowCount - charLength - spaceInMiddle.length) / 2;
        k++
      ) {
        spaceFrontEnd += ' ';
      }
      innerRow = spaceInMiddle
        ? spaceFrontEnd +
          ALPHABET[answer.length] +
          spaceInMiddle +
          ALPHABET[answer.length] +
          spaceFrontEnd
        : spaceFrontEnd + ALPHABET[answer.length] + spaceFrontEnd;
    } else {
      innerRow = answer[rowCount - answer.length - 1];
    }
    answer.push(innerRow);
    return rows(char, answer);
  }
}
