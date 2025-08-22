//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Node {
  constructor(value = null, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

export class LinkedList {
  constructor () {
    this.head = new Node();
    this.tail = new Node(null, this.head);
    this.head.next = this.tail
    this._size = 0;
  }

  setSize(size){
    this._size = size;
  }

  getSize() {
    return this._size;
  }
  
  push(num) {
    const current = new Node(num, this.tail.prev, this.tail);
    this.setSize(this.getSize()+1);
    this.tail.prev.next = current;
    this.tail.prev = current;
  }

  pop() {
    const popItem = this.tail.prev;
    if (popItem === this.head) return;
    popItem.prev.next = this.tail;
    this.tail.prev = popItem.prev;
    this.setSize(this.getSize()-1);
    return popItem.value;
  }

  shift() {
    const shiftItem = this.head.next;
    if (shiftItem === this.tail) return;
    this.head.next = shiftItem.next;
    shiftItem.next.prev = this.head;
    this.setSize(this.getSize()-1);
    return shiftItem.value;
  }

  unshift(num) {
    const current = new Node(num, this.head, this.head.next);
    this.setSize(this.getSize()+1);
    this.head.next.prev = current;
    this.head.next = current;
  }

  delete(num) {
    let currentItem = this.head;
    while (
      currentItem.next != this.tail
    ) {
      if (currentItem.next.value === num) {
        const deleteItem = currentItem.next;
        deleteItem.prev.next = deleteItem.next;
        deleteItem.next.prev = deleteItem.prev;
        this.setSize(this.getSize()-1);
        return deleteItem;
      }
      currentItem = currentItem.next;
    }
    return null;
  }

  count() {
    return this.getSize()
  }
}
