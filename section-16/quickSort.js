function pivot(arr, startIndex = 0, endIndex = arr.length - 1) {
  const pivotNumber = arr[0];
  let pivotIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (pivotNumber > arr[i]) {
      pivotIndex++;
      let temp = arr[i];
      arr[i] = arr[pivotIndex];
      arr[pivotIndex] = temp;
    }
  }
  let temp = arr[pivotIndex];
  arr[pivotIndex] = arr[0];
  arr[0] = temp;
  return pivotIndex;
}

console.log(pivot([8,2,1,6,10,9,3]));