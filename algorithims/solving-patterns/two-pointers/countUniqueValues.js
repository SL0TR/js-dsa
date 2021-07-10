// with two pointers with while loop O(n)
function countUniqueValues(arr) {

  if(!arr.length) {
    return 0;
  }

  let left = 0;
  let right = 1;

  while(right < arr.length) {
    if(arr[left] === arr[right]) {
      right++;
    } else {
      left++;
      arr[left] = arr[right];
      right++;
    }
  }

  return left + 1;

}

// with two pointer and for loop
function countUniqueValues2(arr) {

  let i = 0;
  for(let j = 1; j < arr.length; j++) {
    if(arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;

}

// with frequncy counting O(n)
function countUniqueValues3(arr) {
  let count = 0

  if(!arr.length) {
    return count;
  }

  const lookup = {}

  for (const item of arr) {
    if(!lookup.hasOwnProperty(item)) {
      lookup[item] = null;
      count++;
    }
  }

  return count;

}

const testFunc = countUniqueValues

console.log(testFunc([1,1,1,1,1,2]) === 2)
console.log(testFunc([1,2,3,4,4,4,7,7,12,12,13]) === 7)
console.log(testFunc([]) === 0)
console.log(testFunc([-2, -1, -1, 0, 1]) === 4)