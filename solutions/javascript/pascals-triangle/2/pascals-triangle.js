export const rows = (num) => {

  const pascals = []
  let row = []

  function add_rows(row1, row2) {
    const res = [];
    for (let i = 0; i < row1.length; i++){
      res.push(row1[i] + row2[i])
    }
    return res;
  }

  for (let i = 0; i < num; i++) {
    if (i === 0){
      row.push(1)
      pascals.push(row)
    }
    if (i > 0) {
      const next_row = add_rows(
        [0, ...row],
        [...row , 0]
      )
      row = next_row
      pascals.push(row)
    }
  }

  return pascals
};
