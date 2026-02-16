export class Matrix {
  #rows;
  #columns;
  
  constructor(input) {
    this.#rows = input
      .split('\n')
      .map(rowString => rowString.split(' ').map(Number))

    this.#columns = this.#rows[0].map((_, col) => this.#rows.map(row => row[col]));
  }

  get rows() {
    return this.#rows;
  }

  get columns() {
    return this.#columns;
  }
}
