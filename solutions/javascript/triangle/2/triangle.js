//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.conditionAB = a + b > c;
    this.conditionAC = a + c > b;
    this.conditionBC = b + c > a;
  }

  get isMeetTriangleCondition() {
    return this.conditionAB && this.conditionAC && this.conditionBC
  }

  get isEquilateral() {
    return this.a === this.b && this.a === this.c && this.a !== 0;
  }

  get isIsosceles() {
    return (this.isMeetTriangleCondition) && 
      (this.a === this.b || this.a === this.c || this.b === this.c)
  }

  get isScalene() {
    return (this.isMeetTriangleCondition) && 
      !(this.a === this.b || this.a === this.c || this.b === this.c)
  }
}
