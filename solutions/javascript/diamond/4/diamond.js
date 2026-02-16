const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
export function rows(char, answer = []) {
  const charIndex = ALPHABET.indexOf(char) + 1;
  const rowCount = charIndex * 2 - 1;
  // break the recurrsion
  if (answer.length === rowCount) {
    return answer;
  } else {
    let row = '';
    if (answer.length < charIndex) {
      let spacesInMiddle = '';
      for (let spaceCount = 0; spaceCount < answer.length * 2 - 1; spaceCount++) {
        spacesInMiddle += ' ';
      }
      let charLength =
        answer.length === 0 || answer.length === rowCount ? 1 : 2;
      let spaceFrontEnd = '';
      for (
        let spaceCount = 0;
        spaceCount < (rowCount - charLength - spacesInMiddle.length) / 2;
        spaceCount++
      ) {
        spaceFrontEnd += ' ';
      }
      row = spacesInMiddle
        ? spaceFrontEnd +
          ALPHABET[answer.length] +
          spacesInMiddle +
          ALPHABET[answer.length] +
          spaceFrontEnd
        : spaceFrontEnd + ALPHABET[answer.length] + spaceFrontEnd;
    } else {
      // add the row back from the middle
      row = answer[rowCount - answer.length - 1];
    }
    answer.push(row);
    return rows(char, answer);
  }
}
