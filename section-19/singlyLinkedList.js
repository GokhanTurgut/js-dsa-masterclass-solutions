class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let previous = this.head;
    let temp = previous;
    while (temp.next !== null) {
      previous = temp;
      temp = previous.next;
    }
    previous.next = null;
    this.tail = previous;
    this.length--;
    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  shift() {
    if (!this.head) return undefined;
    const oldHead = this.head;
    this.head = oldHead.next;
    this.length--;
    if (!this.length) {
      this.tail = null;
    }
    return oldHead;
  }

  unshift(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      if (index === i) return current;
      current = current.next;
    }
  }

  set(value, index) {
    const node = this.get(index);
    if (!node) return false;
    node.value = value;
    return true;
  }

  insert(value, index) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) {
      return !!this.push(value);
    }
    if (index === 0) {
      return !!this.unshift(value);
    }
    const previousNode = this.get(index - 1);
    const currentNode = new Node(value);
    currentNode.next = previousNode.next;
    previousNode.next = currentNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) {
      return this.pop();
    }
    if (index === 0) {
      return this.shift();
    }
    const previousNode = this.get(index - 1);
    const removedNode = previousNode.next;
    previousNode.next = removedNode.next;
    this.length--;
    return removedNode;
  }

  reverse() {
    if (!this.head) return undefined;
    let previousNode = this.head;
    this.head = this.tail;
    this.tail = previousNode;
    let currentNode = previousNode.next;
    let nextNode = currentNode.next;
    previousNode.next = null;
    while (nextNode) {
      currentNode.next = previousNode;
      previousNode = currentNode;
      currentNode = nextNode;
      nextNode = currentNode.next;
    }
    currentNode.next = previousNode;
    return list;
  }

  // Optional, just for checking the list easily.
  print() {
    const listArray = [];
    let currentNode = this.head;
    while (currentNode) {
      listArray.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(listArray);
  }
}

const list = new SinglyLinkedList();

list.push("Hi");
list.push("there!");
list.push("My");
list.push("name");
list.push("is");
list.push("Gokhan");

console.log(list.reverse());
list.print();
