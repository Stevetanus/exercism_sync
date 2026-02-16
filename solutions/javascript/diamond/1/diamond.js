export const rows = (char) => {
  let ans = [];
  let ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  let charIndex = char.charCodeAt() - 64;
  for (let i = 0; i < charIndex; i++) {
    let row = '';
    for (let j = 1; j < charIndex - i; j++) {
      row += ' '
    }
    if (i === 0) {
      row += ABC[i]
    } else if (i > 0) {
      row += ABC[i]
      for (let middle = 0; middle < (i - 1) *2 + 1; middle++) {
        row += ' '
      }
      row += ABC[i]
    }
    for (let k = charIndex - i; k > 1; k--) {
      row += ' '
    }
    ans.push(row)
  }
  for (let i = charIndex; i > 1; i--) {
     ans.push(ans[i - 2])
  }
  return ans;
};
