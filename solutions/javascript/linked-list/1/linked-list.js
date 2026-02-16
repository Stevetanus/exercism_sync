//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class LinkedList {
  items = [];
  push(num) {
    this.items.push(num)
  }

  pop() {
    return this.items.pop();
  }

  shift() {
    return this.items.shift();
  }

  unshift(num) {
    this.items.unshift(num);
  }

  delete(num) {
    const deletedIndex = this.items.indexOf(num);
    if (deletedIndex === -1) return;

    this.items.splice(deletedIndex, 1);
  }

  count() {
    return this.items.length;
  }
}
