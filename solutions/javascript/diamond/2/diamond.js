const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
export function rows (char) {
  const answer = [];
  let charIndex = ALPHABET.indexOf(char) + 1;

  // upper alphabet triangle which is end at the row contains "char"
  for (let i = 0; i < charIndex; i++) {
    let row = '';
    for (let j = 1; j < charIndex - i; j++) {
      row += ' '
    }
    if (i === 0) {
      row += ALPHABET[i]
    } else if (i > 0) {
      // plus the first "char"
      row += ALPHABET[i]
      // plus the empty space between first and second "char"
      for (let middle = 0; middle < (i - 1) *2 + 1; middle++) {
        row += ' '
      }
      // plus the second "char"
      row += ALPHABET[i]
    }
    for (let k = charIndex - i; k > 1; k--) {
      row += ' '
    }
    answer.push(row)
  }
  
  // push the row from the second to last to the first row
  for (let i = charIndex; i > 1; i--) {
     answer.push(answer[i - 2])
  }
  return answer;
};
