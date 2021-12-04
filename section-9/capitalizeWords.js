function capitalizeWords(wordsArr) {
  const initialArr = [...wordsArr];
  const resultArr = [];
  function helper(arr) {
    if (arr.length === 0) return;
    const word = arr[0];
    const capitalizedWord = word.toUpperCase();
    resultArr.push(capitalizedWord);
    helper(arr.slice(1));
  }
  helper(initialArr);
  return resultArr;
}
