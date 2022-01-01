class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(value, priority) {
    const node = new Node(value, priority);
    this.queue.push(node);
    let index = this.queue.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);
    while (
      index !== 0 &&
      this.queue[index].priority > this.queue[parentIndex].priority
    ) {
      let temp = this.queue[index];
      this.queue[index] = this.queue[parentIndex];
      this.queue[parentIndex] = temp;
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
    return this;
  }

  dequeue() {
    const root = this.queue[0];
    this.queue[0] = this.queue[this.queue.length - 1];
    this.queue.pop();
    let index = 0;
    let length = this.queue.length;
    while (index < length) {
      let left = 2 * index + 1;
      let right = 2 * index + 2;
      if (left >= length) break;
      if (right >= length) {
        if (this.queue[left].priority > this.queue[index].priority) {
          let temp = this.queue[left];
          this.queue[left] = this.queue[index];
          this.queue[index] = temp;
          index = left;
        } else break;
      } else if (this.queue[left].priority > this.queue[right].priority) {
        if (this.queue[left].priority > this.queue[index].priority) {
          let temp = this.queue[left];
          this.queue[left] = this.queue[index];
          this.queue[index] = temp;
          index = left;
        } else break;
      } else {
        if (this.queue[right].priority > this.queue[index].priority) {
          let temp = this.queue[right];
          this.queue[right] = this.queue[index];
          this.queue[index] = temp;
          index = right;
        } else break;
      }
    }
    return root;
  }
}

const tasks = new PriorityQueue();

tasks
  .enqueue("Sent email", 3)
  .enqueue("Loundry", 5)
  .enqueue("Dinner", 2)
  .enqueue("Meeting", 10)
  .enqueue("Cleaning", 7)
  .enqueue("Shopping", 4);

console.log(tasks.queue);
console.log(tasks.dequeue(), tasks.queue);
console.log(tasks.dequeue(), tasks.queue);
console.log(tasks.dequeue(), tasks.queue);
console.log(tasks.dequeue(), tasks.queue);
console.log(tasks.dequeue(), tasks.queue);
console.log(tasks.dequeue(), tasks.queue);
console.log(tasks.dequeue(), tasks.queue);
