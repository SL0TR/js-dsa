// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Time: O(n)
function sameFrequency(num1, num2) {
  const num1Arr = num1.toString().split('');
  const num2Arr = num2.toString().split('');

  if(num1Arr.length !== num2Arr.length) {
    return false;
  }

  const num1Freq = {}

  for(const item of num1Arr) {
    num1Freq[item] = (num1Freq[item] || 0) + 1;
  }
  
  for(const item of num2Arr) {

    if(!num1Freq[item]) {
      return false
    }
    num1Freq[item]--
  }

  return true;

}


const testFunc = sameFrequency

console.log(testFunc(182, 281) === true); // true
console.log(testFunc(3589578, 5879385) === true); // true
console.log(testFunc(34, 14) === false); // false
console.log(testFunc(22, 222) === false); // false