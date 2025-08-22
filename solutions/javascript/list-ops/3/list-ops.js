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
    result = [...this.values, ...listB.values];
    
    return new List(result);
  }

  concat(listB) {
    let result = [];

    // flaten this.values and add elements into result;
    for (let element of this.values) {
      if (element instanceof List) {
        result.push(...element.concat(new List([])).values)
      } else {
        result.push(element);
      }
    }

    // flaten listB.values and add elements into result;
    for (let element of listB.values) {
      if (element instanceof List) {
        result.push(...element.concat(new List([])).values)
      } else {
        result.push(element);
      }
    }
    
    return new List(result);
  }

  filter(fn) {
    let result = [];
    for (let element of this.values) {
      if (fn(element)) {
        result.push(element)
      }  
    }
    return new List(result);
  }

  map(fn) {
    let result = [];
    for (let element of this.values) {
      result.push(fn(element));
    }
    return new List(result);
  }

  length() {
    let count = 0;
    for (let i in this.values) {
      count ++;
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
    let length = this.length();
    for (let i = length - 1; i >= 0; i--) {
      acc = fn(acc, this.values[i]);
    }
    return acc;
  }

  reverse() {
    let result = [];
    let length = this.length();
    for (let i = length - 1; i >= 0; i--) {
      result.push(this.values[i]);
    }
    return new List(result);
  }
}
