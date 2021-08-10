class Node {
  constructor(val, priority) {
    this.value = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    const node = new Node(val, priority);
    this.values.push(node);
    this.bubbleUp();
  }

  bubbleUp() {
    let itemIndex = this.values.length - 1;
    const currentItem = this.values[itemIndex];

    while (itemIndex > 0) {
      let parentIndex = Math.floor((itemIndex - 1) / 2);

      const parentItem = this.values[parentIndex];

      if (currentItem.priority >= parentItem.priority) {
        break;
      }

      this.values[parentIndex] = currentItem;
      this.values[itemIndex] = parentItem;
      itemIndex = parentIndex;
    }
  }

  dequeue() {
    const minItem = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;
    this.sinkDown();

    return minItem;
  }

  sinkDown() {
    let parentIdx = 0;
    const length = this.values.length;
    const parentItem = this.values[parentIdx];

    while (true) {
      let leftChildIdx = 2 * parentIdx + 1;
      let rightChildIdx = 2 * parentIdx + 2;

      let leftChild, rightChild;

      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];

        if (leftChild.priority < parentItem.priority) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];

        if (
          (!swap && rightChild.priority < parentItem.priority) ||
          (swap && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) {
        break;
      }

      this.values[parentIdx] = this.values[swap];
      this.values[swap] = parentItem;
      parentIdx = swap;
    }

    return this.values;
  }
}

const pQ = new PriorityQueue();

pQ.enqueue("gun shot wound", 1);
pQ.enqueue("common cold", 5);
pQ.enqueue("broken ribs", 2);
pQ.enqueue("high fever", 4);
pQ.enqueue("glass in feet", 3);

console.log(pQ.dequeue()); // Node { value: 'gun shot wound', priority: 1 }
console.log(pQ.dequeue()); // Node { value: 'broken ribs', priority: 2 }
console.log(pQ.dequeue()); // Node { value: 'glass in feet', priority: 3 } ...
console.log(pQ.dequeue());
console.log(pQ.dequeue());

// console.log(pQ);
