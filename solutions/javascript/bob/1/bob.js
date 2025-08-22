export const hey = (message) => {
  let mes = message.trim()

  let regExp = /[A-Z]+/;
  
  if (regExp.test(mes) && mes.endsWith("?") && mes.toUpperCase() === mes){
    return "Calm down, I know what I'm doing!"
  }
  if (regExp.test(mes) && mes.toUpperCase() === mes){
    return "Whoa, chill out!"
  }
  if (mes.endsWith("?")){
    return "Sure."
  }
  if (!mes){
    return "Fine. Be that way!"
  }
    return "Whatever."
};
