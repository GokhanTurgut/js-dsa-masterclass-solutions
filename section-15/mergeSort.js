function merge(arr1, arr2) {
  const sortedMerge = [];

  let arr1Pointer = 0;
  let arr2Pointer = 0;

  while (arr1Pointer < arr1.length && arr2Pointer < arr2.length) {
    if (arr1[arr1Pointer] < arr2[arr2Pointer]) {
      sortedMerge.push(arr1[arr1Pointer]);
      arr1Pointer++;
    } else if (arr1[arr1Pointer] > arr2[arr2Pointer]) {
      sortedMerge.push(arr2[arr2Pointer]);
      arr2Pointer++;
    } else {
      sortedMerge.push(arr1[arr1Pointer]);
      sortedMerge.push(arr2[arr2Pointer]);
      arr1Pointer++;
      arr2Pointer++;
    }
  }

  if (arr1Pointer !== arr1.length) {
    arr1.slice(arr1Pointer).forEach((number) => sortedMerge.push(number));
  }
  if (arr2Pointer !== arr2.length) {
    arr2.slice(arr2Pointer).forEach((number) => sortedMerge.push(number));
  }

  return sortedMerge;
}

function mergeSort(array) {
  if (array.length < 2) return array;
  const midPoint = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, midPoint));
  const right = mergeSort(array.slice(midPoint));
  return merge(left, right);
}

console.log(mergeSort([4, 2, 8, 3, 43, 2, 66, 45, 23, 41, 99, 5, 120]));
