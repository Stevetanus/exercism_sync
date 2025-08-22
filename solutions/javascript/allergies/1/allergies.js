export class Allergies {
  constructor(input) {
    this.allergy = input
  }

  list() {
    return [
      'eggs',
      'peanuts',
      'shellfish',
      'strawberries',
      'tomatoes',
      'chocolate',
      'pollen',
      'cats'
    ].filter((_, i)=> this.allergy & 2**i)
  }

  allergicTo(allergicItems) {
    return this.list().includes(allergicItems)
  }
}
