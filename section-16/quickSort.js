function pivot(
  arr,
  startIndex = Math.floor(arr.length / 2),
  endIndex = arr.length - 1
) {
  const pivotNumber = arr[startIndex];
  let pivotIndex = startIndex;
  for (let i = startIndex + 1; i <= endIndex; i++) {
    if (pivotNumber > arr[i]) {
      pivotIndex++;
      let temp = arr[i];
      arr[i] = arr[pivotIndex];
      arr[pivotIndex] = temp;
    }
  }
  let temp = arr[pivotIndex];
  arr[pivotIndex] = arr[startIndex];
  arr[startIndex] = temp;
  return pivotIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

const unsortedArr = [
  8, 2, 1, 6, 10, 9, 3, 7, 12, 5, 22, 20, 17, 15, 13, 14, 19,
];
console.log(quickSort(unsortedArr));
