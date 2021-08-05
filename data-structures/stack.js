class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
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
      const temp = this.first;
      this.first = node;
      this.first.next = temp;
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

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
console.log(stack.pop())
console.log(stack)