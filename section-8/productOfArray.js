function productOfArray(numbers) {
  if (numbers.length === 0) return 1;
  else return numbers[0] * productOfArray(numbers.slice(1));
}
