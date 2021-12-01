// function binarySearch(array, value) {
//   if (array.length === 0) return -1;

//   const middlePoint = Math.floor(array.length / 2);

//   if (array[middlePoint] < value) {
//     return binarySearch(array.slice(middlePoint), value);
//   } else if (array[middlePoint] > value) {
//     return binarySearch(array.slice(0, middlePoint), value);
//   } else return middlePoint;
// }

function binarySearch(array, value) {
  let startPointer = 0;
  let endPointer = array.length - 1;

  while (startPointer < endPointer) {
    const middlePoint = Math.floor((endPointer + startPointer) / 2);

    if (array[middlePoint] < value) {
      if (endPointer - startPointer < 2) {
        return array[endPointer] === value ? endPointer : -1;
      }
      startPointer = middlePoint;
    } else if (array[middlePoint] > value) {
      if (endPointer - startPointer < 2) {
        return array[startPointer] === value ? startPointer : -1;
      }
      endPointer = middlePoint;
    } else return middlePoint;
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 6));
// console.log(
//   binarySearch(
//     [
//       1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 15, 17, 19, 22, 23, 55, 100, 233, 984,
//       1200, 2000,
//     ],
//     233
//   )
// );
