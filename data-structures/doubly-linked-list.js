class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head || !this.tail || !this.length) {
      return null;
    }

    const poppedNoded = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNoded.prev;
      this.tail.next = null;
      poppedNoded.prev = null;
    }
    this.length--;
    return poppedNoded;
  }

  shift() {
    if (!this.head || !this.tail || !this.length) {
      return null;
    }

    const oldHead = this.head;

    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    }

    this.head = oldHead.next;
    this.head.prev = null;
    oldHead.next = null;
    this.length--;

    return oldHead;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (!this.head || !this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }
}

const doublyLinkedList = new DoublyLinkedList();

console.log(doublyLinkedList.push(1));
console.log(doublyLinkedList.push(2));
console.log(doublyLinkedList.push(3));
// console.log(doublyLinkedList.pop());
// console.log(doublyLinkedList.shift());
console.log(doublyLinkedList.unshift(0));
