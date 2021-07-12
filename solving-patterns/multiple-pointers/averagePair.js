// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.


function averagePair(arr, num) {
  let left = 0;
  let right = arr.length - 1;

  while(left < right) {
    const avg = (arr[left] + arr[right]) / 2;
    
    if(avg === num) {
      return true;
    } else if (avg < num) {
      left ++;
    } else {
      right--;
     
    }
  }

  return false;
}



const testFunc = averagePair

console.log(testFunc([1, 2, 3], 2.5) === true); // true
console.log(testFunc([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) === true); // true
console.log(testFunc([-1, 0, 3, 4, 5, 6], 4.1) === false); // false
console.log(testFunc([], 4) === false); // false