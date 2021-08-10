class BinaryHeap {
  constructor() {
    this.values = [55, 39, 41, 18, 27, 12, 33];
  }

  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    let itemIndex = this.values.length - 1;
    const currentItem = this.values[itemIndex];

    while (itemIndex > 0) {
      let parentIndex = Math.floor((itemIndex - 1) / 2);

      const parentItem = this.values[parentIndex];

      if (currentItem <= parentItem) {
        break;
      }

      this.values[parentIndex] = currentItem;
      this.values[itemIndex] = parentItem;
      itemIndex = parentIndex;
    }
  }

  extractMax() {
    const maxItem = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;
    this.sinkDown();

    console.log(this.values);

    return maxItem;
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

        if (leftChild > parentItem) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];

        if (
          (!swap && rightChild > parentItem) ||
          (swap && rightChild > leftChild)
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

const bh = new BinaryHeap();

// bh.insert(55);
// bh.insert(155);

console.log(bh.extractMax());
