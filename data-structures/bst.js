class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
    } else {
      let current = this.root;

      while (true) {
        if (val < current.value) {
          if (!current.left) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (val > current.value) {
          if (!current.right) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        } else {
          break;
        }
      }
    }
  }

  find(val) {
    let current = this.root;

    while (current) {
      if (!this.root) {
        return null;
      }

      if (val === current.value) {
        current.left = null;
        current.right = null;
        return current;
      } else if (val > current.value) {
        current = current.right;
      } else if (val < current.value) {
        current = current.left;
      }
    }

    return null;
  }

  BFS() {
    const data = [];
    const queue = [];
    let node = this.root;

    queue.push(this.root);

    while (queue.length) {
      node = queue.shift();

      data.push(node.value);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    return data;
  }

  DFSPreOrder() {
    const visited = [];

    const recurseHelper = (node) => {
      if (!node) {
        return;
      }

      visited.push(node.value);

      if (node.left) {
        recurseHelper(node.left);
      }
      if (node.right) {
        recurseHelper(node.right);
      }
    };

    recurseHelper(this.root);

    return visited;
  }

  DFSPostOrder() {
    const visited = [];

    const recurseHelper = (node) => {
      if (!node) {
        return;
      }

      if (node.left) {
        recurseHelper(node.left);
      }
      if (node.right) {
        recurseHelper(node.right);
      }

      visited.push(node.value);
    };

    recurseHelper(this.root);

    return visited;
  }

  DFSInOrder() {
    const visited = [];

    const recurseHelper = (node) => {
      if (!node) {
        return;
      }

      if (node.left) {
        recurseHelper(node.left);
      }

      visited.push(node.value);

      if (node.right) {
        recurseHelper(node.right);
      }
    };

    recurseHelper(this.root);

    return visited;
  }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(15);
bst.insert(5);
bst.insert(30);
bst.insert(3);
bst.insert(34);
bst.insert(101);
bst.insert(51);
bst.insert(69);

// console.dir(bst.find(101));
// console.dir(bst.BFS());
// console.dir(bst.DFSPreOrder());
// console.dir(bst.DFSPostOrder());
console.dir(bst.DFSInOrder());
