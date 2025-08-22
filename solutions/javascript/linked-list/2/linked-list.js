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
    this.last = new Node(null, this.head);
    this.head.next = this.last
    this.size = 0;
  }
  
  push(num) {
    const current = new Node(num, this.last.prev, this.last);
    this.size ++;
    this.last.prev.next = current;
    this.last.prev = current;
  }

  pop() {
    const popItem = this.last.prev;
    if (popItem === this.head) return;
    popItem.prev.next = this.last;
    this.last.prev = popItem.prev;
    this.size --;
    return popItem.value;
  }

  shift() {
    const shiftItem = this.head.next;
    if (shiftItem === this.last) return;
    this.head.next = shiftItem.next;
    shiftItem.next.prev = this.head;
    this.size --;
    return shiftItem.value;
  }

  unshift(num) {
    const current = new Node(num, this.head, this.head.next);
    this.size ++;
    this.head.next.prev = current;
    this.head.next = current;
  }

  delete(num) {
    let currentItem = this.head;
    while (
      currentItem.next != this.last
    ) {
      if (currentItem.next.value === num) {
        const deleteItem = currentItem.next;
        deleteItem.prev.next = deleteItem.next;
        deleteItem.next.prev = deleteItem.prev;
        this.size --;
        return deleteItem;
      }
      currentItem = currentItem.next;
    }
    return null;
  }

  count() {
    return this.size;
  }
}
