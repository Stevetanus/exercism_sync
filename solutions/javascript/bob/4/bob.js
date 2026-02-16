export const hey = (message) => {
  let mes = message.trim()

  if (!mes) return "Fine. Be that way!"

  if (mes.toLowerCase() !== mes && mes.toUpperCase() === mes){
    return (mes.endsWith("?")) ? "Calm down, I know what I'm doing!" : "Whoa, chill out!"
  }

  return (mes.endsWith("?")) ? "Sure." : "Whatever."

};
