function selectionSort(array) {
  let minIndex;
  for (let i = 0; i < array.length; i++) {
    noSwap = true;
    minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    if (i !== minIndex) {
      let temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
  }
  return array;
}

console.log(selectionSort([2, 1, 7, 3, 100, 56, 23, 111, 5, 13]));
