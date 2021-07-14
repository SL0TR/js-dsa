// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn’t one, return 0 instead.


function minSubArrayLen(arr, num) {

  let start = 0;
  let sum = 0;
  let minSize = Infinity;

  for(let end = 0; end < arr.length; end++) {

    sum += arr[end];

    while(sum >= num) {
      const test = (end - start) + 1
      minSize = Math.min(minSize, test);
      sum -= arr[start];
      start++
    }

  }

  return minSize

}


const minSubArrayLen2 = (arr, num) => {
  let start = 0; // start
  let end = 0; // end
  let sum = 0;
  let minLen = Infinity;

  while (start < arr.length) {
    if (sum < num && end < arr.length) {
      sum += arr[end];
      end++;
    } else if (sum >= num) {
      minLen = Math.min(minLen, end - start);
      sum -= arr[start];
      start++;
    } else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
};

const testFunc = minSubArrayLen2


console.log(testFunc([2, 3, 1, 2, 4, 3], 7) === 2); // 2 -> because [4, 3] is the smallest subarray
console.log(testFunc([2, 1, 6, 5, 4], 9) === 2); // 2 -> because [5, 4] is the smallest subarray
console.log(testFunc([3, 1, 62, 19], 52) === 1); // 1 -> because [62] is greater than 52
console.log(testFunc([1, 4, 16, 22, 5, 7, 8, 9, 10], 39) === 3); // 3 -> because [22, 16, 4] is greater than 39
console.log(testFunc([1, 4, 16, 22, 5, 7, 8, 9, 10], 55) === 5); // 5 -> because [16, 22, 5, 7, 8] is greater than 55
console.log(testFunc([4, 3, 3, 3, 8, 1, 2, 3], 11) === 2); // 2 -> because [3, 8] is greater than 11
console.log(testFunc([1, 4, 16, 22, 5, 7, 8, 9, 95], 11) === 1); // 1 -> because 
