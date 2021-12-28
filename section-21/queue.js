class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(value) {
    const node = new Node(value);
    if (!this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.head) return undefined;
    const dequeueNode = this.head;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = dequeueNode.next;
      dequeueNode.next = null;
    }
    this.size--;
    return dequeueNode.value;
  }
}

const queue = new Queue();

console.log(queue.enqueue("first"));
console.log(queue.enqueue("second"));
console.log(queue.enqueue("third"));
console.log(queue.enqueue("forth"));
console.log(queue.enqueue("fifth"));
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
