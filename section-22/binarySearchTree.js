class Node {
  constructor(value) {
    this.value = value;
    this.frequency = 1;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);
    if (!this.root) {
      this.root = node;
      return this;
    } else {
      let parent = this.root;
      while (true) {
        if (value === parent.value) {
          parent.frequency++;
          return tree;
        } else if (value > parent.value) {
          if (!parent.right) {
            parent.right = node;
            return this;
          } else {
            parent = parent.right;
          }
        } else if (value < parent.value) {
          if (!parent.left) {
            parent.left = node;
            return this;
          } else {
            parent = parent.left;
          }
        }
      }
    }
  }

  find(value) {
    let current = this.root;
    while (current) {
      if (value > current.value) {
        current = current.right;
      } else if (value < current.value) {
        current = current.left;
      } else return current;
    }
    return null;
  }
}

const tree = new BinarySearchTree();

tree.insert(10).insert(12).insert(5).insert(7).insert(11).insert(10);
console.log(tree.find(13));
