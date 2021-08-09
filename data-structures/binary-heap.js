class BinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
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

    console.log({ bh: this.values });
  }
}

const bh = new BinaryHeap();

bh.insert(55);
bh.insert(155);
