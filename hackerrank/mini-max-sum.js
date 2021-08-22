// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Example
// arr = [1,3,5,7,9]
// The minimum sum is 1 + 3 + 5 + 7 = 16  and the maximum sum is 3 + 5 + 7 + 9 = 24. The function prints

// -> 16 24

function miniMaxSum(arr) {
  const sortedArr = arr.sort((a, b) => a - b);

  const maxArray = sortedArr.slice(1);

  const minArray = sortedArr.slice(0, -1);

  const getSum = (arr) => arr.reduce((prev, curr) => prev + curr, 0);

  console.log(`${getSum(minArray)} ${getSum(maxArray)}`);
}

miniMaxSum([1, 3, 5, 7, 9]); // -> 16 24
