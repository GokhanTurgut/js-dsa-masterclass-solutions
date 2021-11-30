function maxSubarraySum(numbers, subarray) {
  if (numbers.length < subarray) return null;

  let total = 0;

  for (let i = 0; i < subarray; i++) {
    total += numbers[i];
  }

  let maxTotal = total;

  for (let i = subarray; i < numbers.length; i++) {
    total = total - numbers[i - subarray] + numbers[i];
    if (total > maxTotal) {
      maxTotal = total;
    }
  }
  return maxTotal;
}

console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));
