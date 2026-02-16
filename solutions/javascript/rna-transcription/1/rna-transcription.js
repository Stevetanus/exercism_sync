
export const toRna = (DNA) => {
  return [...DNA].reduce((output, letter) => output += { 'G': 'C', 'C': 'G', 'T': 'A', 'A': 'U' }[letter], '')
};
