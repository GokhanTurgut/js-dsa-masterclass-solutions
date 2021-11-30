function isSubsequence(firstStr, secondStr) {
  let i = 0;

  for (let j = 0; j < secondStr.length; j++) {
    if (firstStr.length < i) return false;
    if (firstStr[i] === secondStr[j]) {
      i++;
    }
  }
  if (firstStr.length === i) return true;
  else return false;
}

console.log(isSubsequence("abc", "abracadabra"));
