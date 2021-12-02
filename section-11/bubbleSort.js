function bubbleSort(array) {
  let noSwaps;
  for (let i = array.length - 1; i >= 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return array;
}

console.log(bubbleSort([3, 5, 2, 8, 4, 1, 0, 9]));
