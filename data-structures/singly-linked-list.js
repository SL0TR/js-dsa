class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = 0;
  }

  push(val) {
    const node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return null;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() {
    if (this.length <= 1 || !this.head) {
      return null;
    }

    const head = this.head;
    this.head = head.next;
    this.length--;
    return head;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const prevHead = this.head;
      newNode.next = prevHead;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index > this.length) {
      return null;
    }

    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  set(val, index) {
    let indexNode = this.get(index);
    if (indexNode) {
      indexNode.val = val;
      return this;
    }
    return null;
  }
}

const singlyLinkedList = new SinglyLinkedList();

singlyLinkedList.push("wazzup");
singlyLinkedList.push("hey!");
singlyLinkedList.push("who dat");
singlyLinkedList.push("in yo face");

console.log(singlyLinkedList.unshift("puntastic"));
console.log(singlyLinkedList.unshift("you are"));
console.log(singlyLinkedList.get(1));
console.log(singlyLinkedList.set("very puntastic", 1));
