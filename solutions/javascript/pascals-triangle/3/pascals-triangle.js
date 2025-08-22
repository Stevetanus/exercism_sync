export const rows = (num) => {

  const pascals = []
  let row = [1]

  function add_rows(row1, row2) {
    const res = [];
    for (let i = 0; i < row1.length; i++){
      res.push(row1[i] + row2[i])
    }
    return res;
  }

  for (let i = 0; i < num; i++) {
      pascals.push(row)
      row = add_rows(
        [0, ...row],
        [...row , 0]
      )
  }

  return pascals
};
