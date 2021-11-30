function averagePair(numbers, average) {
  let i = 0;
  let j = numbers.length - 1;

  while (i < j) {
    if ((numbers[i] + numbers[j]) / 2 < average) {
      i++;
    } else if ((numbers[i] + numbers[j]) / 2 > average) {
      j--;
    } else return true;
  }
  return false;
}
