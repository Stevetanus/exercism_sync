//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.condition1 = a + b > c;
    this.condition2 = a + c > b;
    this.condition3 = b + c > a;
  }

  get isEquilateral() {
    return this.a === this.b && this.a === this.c && this.a !== 0;
  }

  get isIsosceles() {
    return (this.condition1 && this.condition2 && this.condition3) && 
      (this.a === this.b || this.a === this.c || this.b === this.c)
  }

  get isScalene() {
    return (this.condition1 && this.condition2 && this.condition3) && 
      !(this.a === this.b || this.a === this.c || this.b === this.c)
  }
}
