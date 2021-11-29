function countUniqueValues(array) {
  let firstPointer = 0;
  let secondPointer = 1;
  let counter;
  array.length ? (counter = 1) : (counter = 0);

  while (secondPointer < array.length) {
    if (array[firstPointer] !== array[secondPointer]) {
      counter++;
      firstPointer = secondPointer;
    } else {
      secondPointer++;
    }
  }

  return counter;
}

console.log(
  countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13, 14, 20, 21, 99])
);
