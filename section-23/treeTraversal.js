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

  // Breadth First Search
  BFS() {
    const queue = [this.root];
    const result = [];
    let current = queue.shift();
    while (current) {
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
      result.push(current.value);
      current = queue.shift();
    }
    return result;
  }

  // Depth First Search - Pre Order
  DFSPreOrder() {
    const result = [];
    function helper(node) {
      result.push(node.value);
      if (node.left) helper(node.left);
      if (node.right) helper(node.right);
    }
    helper(this.root);
    return result;
  }

  // Depth First Search - Post Order
  DFSPostOrder() {
    const result = [];
    function helper(node) {
      if (node.left) helper(node.left);
      if (node.right) helper(node.right);
      result.push(node.value);
    }
    helper(this.root);
    return result;
  }

  // Depth First Search - In Order
  DFSInOrder() {
    const result = [];
    function helper(node) {
      if (node.left) helper(node.left);
      result.push(node.value);
      if (node.right) helper(node.right);
    }
    helper(this.root);
    return result;
  }
}

const tree = new BinarySearchTree();

tree
  .insert(10)
  .insert(12)
  .insert(5)
  .insert(7)
  .insert(11)
  .insert(2)
  .insert(17)
  .insert(6)
  .insert(13);
console.log(tree.DFSInOrder());
