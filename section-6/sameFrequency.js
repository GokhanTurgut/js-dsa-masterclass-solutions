function sameFrequency(num1, num2) {
  const num1Frequency = {};
  const num2Frequency = {};

  const num1String = num1 + "";
  const num2String = num2 + "";

  for (let char of num1String) {
    if (num1Frequency[char]) {
      num1Frequency[char]++;
    } else {
      num1Frequency[char] = 1;
    }
  }

  for (let char of num2String) {
    if (num2Frequency[char]) {
      num2Frequency[char]++;
    } else {
      num2Frequency[char] = 1;
    }
  }

  for (let char in num1Frequency) {
    if (num1Frequency[char] !== num2Frequency[char]) {
      return false;
    }
  }

  return true;
}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));
