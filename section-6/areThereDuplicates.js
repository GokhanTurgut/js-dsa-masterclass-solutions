function areThereDuplicates(...args) {
  const argsFrequency = {};

  for (let char of args) {
    if (argsFrequency[char]) {
      return true;
    } else {
      argsFrequency[char] = 1;
    }
  }

  return false;
}

console.log(areThereDuplicates(1, 2, 3));
