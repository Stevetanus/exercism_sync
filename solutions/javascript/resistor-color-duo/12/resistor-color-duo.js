export const decodedValue = (list) => {
  const COLORS = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white',
  ]
  function colorIndex (color){
    return COLORS.indexOf(color)
  }
  const number = Number(list.slice(0, 2).map(colorIndex).join(''))
  return number
}

