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
      return false;
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
      return true;
    }
    return false;
  }

  insert(val, index) {
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
    const prevNode = this.get(index - 1);
    const currentNode = prevNode.next;
    newNode.next = currentNode;
    prevNode.next = newNode;

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length || !this.head) {
      return false;
    }

    if (index === this.length) {
      return this.pop();
    }

    if (index === 0) {
      return this.shift();
    }

    const prevNode = this.get(index - 1);
    const indexNode = prevNode.next;
    prevNode.next = indexNode.next;
    this.length--;
    return indexNode;
  }

  print() {
    let string = "";
    let current = this.head;

    while (current) {
      string += `${current.val}${current.next ? " --> " : ""}`;
      current = current.next;
    }

    return string;
  }

  reverse() {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;

    let prev = null;
    let next = null;

    for (let i = 0; i < this.length; i++) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    return this;
  }

  reverse2(head) {
    let prev = null;
    let next = null;
    let current = head;
    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    return prev;
  }
}

const singlyLinkedList = new SinglyLinkedList();

singlyLinkedList.push("wazzup");
singlyLinkedList.push("hey!");
singlyLinkedList.push("who dat");
singlyLinkedList.push("in yo face");
// console.log(singlyLinkedList.unshift("puntastic"));
// console.log(singlyLinkedList.unshift("you are"));
// console.log(singlyLinkedList.set("very very puntastic", 1));
// console.log(singlyLinkedList.get(1));
// console.log(singlyLinkedList.insert("very puntastic", 1));
// console.log(singlyLinkedList.remove(0));
// console.log(singlyLinkedList.print());
// console.log(singlyLinkedList.reverse2(singlyLinkedList.head));
console.log(singlyLinkedList.reverse());
// console.log(singlyLinkedList.print());
