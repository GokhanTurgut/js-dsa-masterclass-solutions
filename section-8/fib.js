function fib(number) {
  if (number === 2 || number === 1) return 1;
  return fib(number - 1) + fib(number - 2);
}

console.log(fib(10));
