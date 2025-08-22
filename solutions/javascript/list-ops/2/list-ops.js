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
    let length = this.length();
    let lengthB = listB.length();
    for (let i = 0; i < length; i++) {
      result.push(this.values[i]);
    }
    if (Array.isArray(listB.values)) {
      for (let i = 0; i < lengthB; i++) {
        const subList = listB.values[i];
        let subListLength = subList.length();
        
        if (subList instanceof List) {
          for (let j = 0; j < subListLength; j++) {
            result.push(subList.values[j]);
          }
        }
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
