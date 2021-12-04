function capitalizeFirst(stringArray) {
  const initialArr = [...stringArray];
  const resultArr = [];

  function helper(arr) {
    if (arr.length === 0) return;
    const string = arr[0];
    const capitalizedStr = string[0].toUpperCase() + string.slice(1);
    resultArr.push(capitalizedStr);
    helper(arr.slice(1));
  }
  helper(initialArr);

  return resultArr;
}
