// Fibonacci with memoization
function fibonacciMemo(num) {
  const memoization = [];
  function helper(n) {
    if (memoization[n]) return memoization[n];
    if (n < 3) return 1;
    const result = helper(n - 1) + helper(n - 2);
    memoization[n] = result;
    return result;
  }
  helper(num);
  return memoization[num];
}

// Fibonacci with tabulation
function fibonacciTab(num) {
  const table = [0,1,1];
  for (let i = 3; i <= num; i++) {
    table[i] = table[i-1] + table[i-2];
  }
  return table[num];
}

console.log(fibonacciTab(40));

// Solution with tabulation has better space complexity