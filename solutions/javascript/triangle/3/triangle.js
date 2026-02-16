//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(a, b, c) {
    // slide length from short to long;
    this.slideList = [a, b, c].sort((x, y) => x - y);
    this.a = a;
    this.b = b;
    this.c = c;
  }

  get isMeetTriangleCondition() {
    console.log(this.slideList)
    return this.slideList[0] + this.slideList[1] > this.slideList[2];
  }

  get isEquilateral() {
    return this.slideList[0] !== 0 && (this.slideList[0] === this.slideList[2]);
  }

  get isIsosceles() {
    return (this.isMeetTriangleCondition) && 
      (this.slideList[0] === this.slideList[1] || this.slideList[1] === this.slideList[2]);
  }

  get isScalene() {
    return (this.isMeetTriangleCondition) && 
      (this.slideList[0] !== this.slideList[1] && this.slideList[1] !== this.slideList[2]);
  }
}
