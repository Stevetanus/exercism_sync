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
  const number = parseInt(list.slice(0, 2).map(color => COLORS.indexOf(color)).join(''))
  return number
}

