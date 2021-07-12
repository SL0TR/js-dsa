// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Time: O(n) Space O(1)
function isSubsequence(str1, str2) {

  if(!str1) {
    return true;
  }

  let left = 0;
  let right = 0;

  while(right < str2.length) {
    if(str1[left] === str2[right]) {
      left++; 
    }
    if(left === str1.length) {
      return true;
    }
    right++
  }

  return false;

}

// Recursive but not O(1) Space
function isSubsequence2(str1, str2) {
  if(str1.length === 0) return true
  if(str2.length === 0) return false
  if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
  return isSubsequence(str1, str2.slice(1))
}

const testFunc = isSubsequence2

console.log(testFunc('hello', 'hello world') === true); // true
console.log(testFunc('sing', 'sting') === true); // true
console.log(testFunc('abc', 'acb') === false); // false (order matters)