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

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    const middle = Math.floor(this.length / 2);
    let counter = 0;
    let current = this.head;
    let key = "next";

    if (index > middle) {
      current = this.tail;
      key = "prev";
      index = this.length - index - 1;
    }

    while (counter !== index) {
      current = current[key];
      counter++;
    }

    return current;
  }

  set(index, val) {
    const indexNode = this.get(index);

    if (indexNode) {
      indexNode.val = val;
      return true;
    }

    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index === this.length) {
      return !!this.push(val);
    }

    if (!this.head || index === 0) {
      return !!this.unshift(val);
    }

    const newNode = new Node(val);
    const indexNode = this.get(index);
    const beforeIndexNode = indexNode.prev;

    newNode.prev = indexNode.prev;
    newNode.next = indexNode;
    indexNode.prev = newNode;
    beforeIndexNode.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index === this.length) {
      return !!this.pop(val);
    }

    if (index === 0) {
      return !!this.shift(val);
    }

    const indexNode = this.get(index);

    indexNode.prev.next = indexNode.next;
    indexNode.next.prev = indexNode.prev;

    indexNode.next = null;
    indexNode.prev = null;

    this.length--;
    return indexNode;
  }

  print() {
    let string = "";
    let current = this.head;

    while (current) {
      string += `${current.val}${current.next ? " <==> " : ""}`;
      current = current.next;
    }

    return string;
  }

  reverse() {
    const current = this.head;
    // to do
  }
}

const doublyLinkedList = new DoublyLinkedList();

for (let i = 1; i < 15; i++) {
  doublyLinkedList.push(i);
}

// console.log(doublyLinkedList.pop());
// console.log(doublyLinkedList.shift());
// console.log(doublyLinkedList.unshift(0));
// console.log(doublyLinkedList.get(7));
// console.log(doublyLinkedList.set(7, 10));
// console.log(doublyLinkedList.insert(7, 8));
// console.log(doublyLinkedList.remove(3));
console.log(doublyLinkedList.print());
console.log(doublyLinkedList.reverse());
console.log(doublyLinkedList.print());
