function insertionSort(array) {
  let currentValue;
  for (let i = 1; i < array.length; i++) {
    currentValue = array[i];
    for (let j = i - 1; j > -1; j--) {
      if (currentValue < array[j]) {
        array[j + 1] = array[j];
      }
      if (array[j] < currentValue) {
        array[j + 1] = currentValue;
        break;
      }
      if (j === 0) {
        array[j] = currentValue;
        break;
      }
    }
  }
  return array;
}

console.log(insertionSort([5, 2, 1, 3, 10, 4, 34, 7]));
