// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while(left < right) {
    const sum = arr[left] + arr[right];

    if(sum === 0) {
      return [arr[left], arr[right]];
    } else if(sum > 0) {
      right--;
    } else {
      left++;
    }

  }


}


console.log(sumZero([-5,-3,-2,-1,0,1,2,3,4,5,6,7,8])) //expected output [-5,5]
console.log(sumZero([-5,-4,-2,-1,0,1,2,3,6,7,8]))  // /expected output [-2,2]
console.log(sumZero([-5,-4,-2,0,1,3,6,7,8])) //expectedoutput undefined