function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const str1Chars = {};
  const str2Chars = {};

  for (let char of str1) {
    str1Chars[char] = str1Chars[char]++ || 1;
  }
  for (let char of str2) {
    str2Chars[char] = str2Chars[char]++ || 1;
  }

  for (let char in str1Chars) {
    if (str1Chars[char] !== str2Chars[char]) {
      return false;
    }
  }
  return true;
}

console.log(validAnagram("anagrams", "nagaramm"));
