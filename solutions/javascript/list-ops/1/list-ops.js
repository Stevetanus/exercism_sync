//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(list) {
    this.values = list || [];
  }

  append(listB) {
    let result = [];
    if (this.values) {
      result = [...this.values];
    }
    if (listB.values) {
      result = [...result, ...listB.values]
    }
    console.log(result)
    return new List(result);
  }

  concat(listB) {
    let result = [];
    for (let i = 0; i < this.length(); i++) {
      result.push(this.values[i]);
    }
    if (Array.isArray(listB.values)) {
      for (let i = 0; i < listB.length(); i++) {
        const subList = listB.values[i];
        
        if (subList instanceof List) {
          for (let j = 0; j < subList.length(); j++) {
            result.push(subList.values[j]);
          }
        }
      }
    }

    return new List(result);
  }

  filter(fn) {
    let result = [];
    for (let i in this.values) {
      if (fn(this.values[i])) {
        result.push(this.values[i])
      }  
    }
    return new List(result);
  }

  map(fn) {
    let result = [];
    for (let i in this.values) {
      result.push(fn(this.values[i]));
    }
    return new List(result);
  }

  length() {
    let count = 0;
    for (let i in this.values) {
      if (this.values.hasOwnProperty(i)) {
        count ++;
      }
    }
    return count;
  }

  foldl(fn, accumulator) {
    let acc = accumulator
    for (let i in this.values) {
      acc = fn(acc, this.values[i]);
    }
    return acc;
  }

  foldr(fn, accumulator) {
    let acc = accumulator;
    for (let i = this.length() - 1; i >= 0; i--) {
      acc = fn(acc, this.values[i]);
    }
    return acc;
  }

  reverse() {
    let result = []; 
    for (let i = this.length() - 1; i >= 0; i--) {
      result.push(this.values[i]);
    }
    return new List(result);
  }
}
