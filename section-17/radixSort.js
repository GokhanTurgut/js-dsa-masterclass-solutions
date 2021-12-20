function getDigit(num, place) {
  if (num.toString().length < place + 1) return 0;
  let numMod = num % 10 ** (place + 1);
  if (numMod < 0) {
    let numStr = numMod.toString().slice(0, 2);
    return Number(numStr);
  } else {
    let numStr = numMod.toString()[0];
    return Number(numStr);
  }
}

function digitCount(num) {
  if (num < 0) {
    return num.toString().length - 1;
  } else {
    return num.toString().length;
  }
}

function mostDigits(nums) {
  let maxDigit = 0;
  for (let i = 0; i < nums.length; i++) {
    const currentDigit = digitCount(nums[i]);
    if (maxDigit < currentDigit) {
      maxDigit = currentDigit;
    }
  }
  return maxDigit;
}

function radixSort(numbersArr) {
  let nums = [...numbersArr];
  const maxDigit = mostDigits(nums);
  for (let i = 0; i < maxDigit; i++) {
    const buckets = [[], [], [], [], [], [], [], [], [], []];
    for (let j = 0; j < nums.length; j++) {
      buckets[getDigit(nums[j], i)].push(nums[j]);
    }
    nums = [];
    for (let k = 0; k < buckets.length; k++) {
      nums = nums.concat(buckets[k]);
    }
  }
  return nums;
}

console.log(radixSort([2, 12, 4141, 123, 5]));
