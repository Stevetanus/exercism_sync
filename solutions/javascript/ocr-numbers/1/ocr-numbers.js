export const convert = (str) => {
  let strArr = str.split('\n');
  let answer = "";
  let numberObj = {
    0: [' _ ', '| |', '|_|'],
    1: ['   ', '  |', '  |'],
    2: [' _ ', ' _|', '|_ '],
    3: [' _ ', ' _|', ' _|'],
    4: ['   ', '|_|', '  |'],
    5: [' _ ', '|_ ', ' _|'],
    6: [' _ ', '|_ ', '|_|'],
    7: [' _ ', '  |', '  |'],
    8: [' _ ', '|_|', '|_|'],
    9: [' _ ', '|_|', ' _|'],
  }
  
  for (let x = 0; x < strArr.length; x+=4) {
    if (x > 0) answer += ',';
    for (let i = 0; i < strArr[0].length; i+=3) {
      let isMatch = false;
      for (let j = 0; j < 10; j++) {
        if (numberObj[j][0] === strArr[x][i] + strArr[x][i + 1] + strArr[x][i + 2]  &&
            numberObj[j][1] === strArr[x + 1][i] + strArr[x + 1][i + 1] + strArr[x + 1][i + 2] &&
            numberObj[j][2] === strArr[x + 2][i] + strArr[x + 2][i + 1] + strArr[x + 2][i + 2]
           ) {
            answer += j.toString();
            isMatch = true;
            break;
           }
      }
      if (!isMatch) {
        answer += '?'
      }
    }
  }

  return answer;
};

