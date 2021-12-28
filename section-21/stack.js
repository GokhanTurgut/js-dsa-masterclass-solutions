class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(value) {
    const node = new Node(value);
    if (!this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    return ++this.size;
  }

  pop() {
    if (!this.head) return undefined;
    const popNode = this.head;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = popNode.next;
      popNode.next = null;
    }
    this.size--;
    return popNode.value;
  }
}

const stack = new Stack();

console.log(stack.push("first"));
console.log(stack.push("second"));
console.log(stack.push("third"));
console.log(stack.push("forth"));
console.log(stack.push("fifth"));
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
