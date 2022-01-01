class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
    let index = this.values.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);
    while (index !== 0 && this.values[index] > this.values[parentIndex]) {
      let temp = this.values[index];
      this.values[index] = this.values[parentIndex];
      this.values[parentIndex] = temp;
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
    return this;
  }

  extractMax() {
    const root = this.values[0];
    this.values[0] = this.values[this.values.length - 1];
    this.values.pop();
    let index = 0;
    let length = this.values.length;
    while (index < length) {
      let left = 2 * index + 1;
      let right = 2 * index + 2;
      if (left >= length) break;
      if (right >= length) {
        if (this.values[left] > this.values[index]) {
          let temp = this.values[left];
          this.values[left] = this.values[index];
          this.values[index] = temp;
          index = left;
        } else break;
      } else if (this.values[left] > this.values[right]) {
        if (this.values[left] > this.values[index]) {
          let temp = this.values[left];
          this.values[left] = this.values[index];
          this.values[index] = temp;
          index = left;
        } else break;
      } else {
        if (this.values[right] > this.values[index]) {
          let temp = this.values[right];
          this.values[right] = this.values[index];
          this.values[index] = temp;
          index = right;
        } else break;
      }
    }
    return root;
  }
}

const maxHeap = new MaxBinaryHeap();

console.log(
  maxHeap
    .insert(41)
    .insert(39)
    .insert(33)
    .insert(18)
    .insert(27)
    .insert(12)
    .insert(55)
);
console.log(maxHeap.extractMax(), maxHeap.values);
console.log(maxHeap.extractMax(), maxHeap.values);
console.log(maxHeap.extractMax(), maxHeap.values);
console.log(maxHeap.extractMax(), maxHeap.values);
console.log(maxHeap.extractMax(), maxHeap.values);
console.log(maxHeap.extractMax(), maxHeap.values);
console.log(maxHeap.extractMax(), maxHeap.values);
console.log(maxHeap.extractMax(), maxHeap.values);
