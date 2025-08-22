//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(first, second, third) {
    const [a, b, c] = [first, second, third].sort((x, y) => x - y);
    // slide length from short to long;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  get isMeetTriangleCondition() {
    return this.a + this.b > this.c;
  }

  get isEquilateral() {
    return this.a !== 0 && this.a === this.c;
  }

  get isIsosceles() {
    return this.isMeetTriangleCondition && 
      (this.a === this.b || this.b === this.c);
  }

  get isScalene() {
    return this.isMeetTriangleCondition && 
      (this.a !== this.b && this.b !== this.c);
  }
}
