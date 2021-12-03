function minSubArrayLen(array, value) {
  let minLength = Infinity;
  let startPointer = 0;
  let endPointer = 0;
  let totalValue = 0;

  while (startPointer < array.length) {
    if (totalValue < value && endPointer < array.length) {
      totalValue += array[endPointer];
      endPointer++;
    } else if (totalValue >= value) {
      minLength = Math.min(minLength, endPointer - startPointer);
      totalValue -= array[startPointer];
      startPointer++;
    } else break;
  }
  return minLength === Infinity ? 0 : minLength;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
