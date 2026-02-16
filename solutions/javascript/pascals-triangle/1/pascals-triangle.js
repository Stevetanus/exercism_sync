export const rows = (num) => {
  
  const pascals = []
  
  for (let i = 0; i < num; i++){
    
    const row = [1]
    
    for (let j = 1; j < i; j++){
      row.push(pascals[i - 1][j - 1] + pascals[i - 1][j])
    }
    
    if (i > 0) row.push(1)
    
    pascals.push(row)
  }
  
  return pascals
};
