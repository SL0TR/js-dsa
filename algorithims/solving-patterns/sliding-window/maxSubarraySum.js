function maxSubarraySum(arr, num) {
  if(num > arr.length) {
    return null;
  }

  let maxSum = 0;
  let tempSum = 0;

  for(let i = 0; i < num; i++) {
    maxSum += arr[i]
  }

  tempSum = maxSum;

  for(let i = num; i < arr.length; i++) {
    const leftNum = arr[i - num];
    const rightNum = arr[i];
    tempSum = (tempSum - leftNum) + rightNum;
    maxSum = Math.max(maxSum, tempSum)

  }

  return maxSum

}


// O(n^2)
function maxSubarraySum3(arr, num) {
  if(num > arr.length) {
    return null;
  }

  let max = -Infinity;

  for(let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for(let j = 0; j < num; j++) {
      temp += arr[i + j];
    }

    if(temp > max) {
      max = temp;
    }

  }
  return max;
}

const testFunc = maxSubarraySum;

console.log(testFunc([1,2,5,2,8,1,5], 2) === 10);
console.log(testFunc([1,2,5,2,8,1,5], 4) === 17);
console.log(testFunc([4,2,1,6], 1) === 6);
console.log(testFunc([4, 2, 1, 6, 2], 4) === 13);
console.log(testFunc([], 2) === null);