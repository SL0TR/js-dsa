class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.length  = 0;
    this.first = null;
    this.last = null;
  }

  push(val) {
    const node = new Node(val);

    if(!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }

    return ++this.length;

  }

  pop() {

    if(!this.first || !this.length) {
      return null;
    }
  
    if(this.length === 1) {
      this.last = null;
    }

    const temp = this.first;
    this.first = this.first.next;

    this.length--;

    return temp.val

  }

}

const queue = new Queue()
queue.push(1)
queue.push(2)
queue.push(3)
queue.push(4)
queue.push(5)
console.log(queue)
console.log(queue.pop())
console.log(queue)