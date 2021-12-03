function findLongestSubstring(str) {
  let longest = 0;
  let seenChars = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seenChars[char]) {
      start = Math.max(start, seenChars[char]);
    }
    longest = Math.max(longest, i - start + 1);
    seenChars[char] = i + 1;
  }
  return longest;
}

console.log(findLongestSubstring("rithmschool"));
console.log(findLongestSubstring("thisisawesome"));
console.log(findLongestSubstring("thecatinthehat"));
console.log(findLongestSubstring("bbbbbb"));
