function recursiveRange(number) {
  return number === 0 ? 0 : number + recursiveRange(number - 1);
}
