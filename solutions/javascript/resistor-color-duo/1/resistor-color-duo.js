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
  const answer = String(COLORS.indexOf(list[0])) + String(COLORS.indexOf(list[1]))
  return Number(answer)
};

