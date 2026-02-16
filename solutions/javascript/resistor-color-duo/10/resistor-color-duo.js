export const decodedValue = ([first, second]) => {
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
  const number = COLORS.indexOf(first) * 10 + COLORS.indexOf(second)
  return number
}

