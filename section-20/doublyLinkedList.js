class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
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
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.tail) return undefined;
    const oldTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = oldTail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }
    this.length--;
    return oldTail;
  }

  shift() {
    if (!this.head) return undefined;
    const oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    const middle = Math.floor(this.length / 2);
    if (index <= middle) {
      let node = this.head;
      for (let i = 0; i <= middle; i++) {
        if (i === index) return node;
        node = node.next;
      }
    } else {
      let node = this.tail;
      for (let i = this.length - 1; i > middle; i--) {
        if (i === index) return node;
        node = node.prev;
      }
    }
  }

  set(value, index) {
    const node = this.get(index);
    if (node) {
      node.value = value;
      return true;
    }
    return false;
  }

  insert(value, index) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);
    const prevNode = this.get(index - 1);
    const insertNode = new Node(value);
    insertNode.next = prevNode.next;
    insertNode.prev = prevNode;
    prevNode.next.prev = insertNode;
    prevNode.next = insertNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const removeNode = this.get(index);
    removeNode.prev.next = removeNode.next;
    removeNode.next.prev = removeNode.prev;
    removeNode.prev = null;
    removeNode.next = null;
    this.length--;
    return removeNode;
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

const list = new DoublyLinkedList();

list.push("Hi");
list.push("there!");
list.push("My");
list.push("name");
list.push("is");
list.push("Gokhan");
