export const valid = (input) => {
  
const regExp = /\d/

let sum = 0;

let length = input.length

let position = 0
  
function backwards(sin){
  length -= 1;
  
  if(length < 0){
    return;
  }
  
  let num = Number(sin[length])
  
  if(isNaN(num)){
    return;
  }
  
  if(length >= 0 && sin[length] !== " "){
    if (position % 2 === 1){
      if(num * 2 > 9){
        sum += (num * 2 - 9)
      } else {
      sum += num * 2
      }      
    } else {
      sum += num
    }
    position += 1
  }
  
  backwards(sin)
}

backwards(input);

return sum % 10 === 0 && position > 1

};
