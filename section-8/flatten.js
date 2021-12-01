function flatten(arrays) {
  const flatArray = [];

  function helper(arr) {
    if (arr.length === 0) return;
    if (typeof arr[0] === "object") {
      helper(arr[0]);
      helper(arr.slice(1));
    } else {
      flatArray.push(arr[0]);
      helper(arr.slice(1));
    }
  }

  helper(arrays);

  return flatArray;
}

// console.log(flatten([1, 2, 3, 4, [7, 8, 9, [10, 11, 12]]]));
console.log(flatten([1, [2, [3, 4], [[5]]]]));
