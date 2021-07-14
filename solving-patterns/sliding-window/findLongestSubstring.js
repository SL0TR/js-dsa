// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.


function findLongestSubstring(str) {

  if(!str) {
    return 0;
  }

  let start = 0;
  let longestLen = 0;
  const lookup = {}

  for(let i = 0; i < str.length; i++) {
    let char = str[i];

  }
    
  return longestLen

}

function findLongestSubstring2(str) {

  if(!str) {
    return 0;
  }

  let start = 0;
  let longestLen = 0;
  const lookup = {}

  for(let i = 0; i < str.length; i++) {
    let char = str[i];
  
    if(lookup[char]) {
      start = Math.max(start, lookup[char])
    }

    console.log({ longestLen, start, index: i, char, charValue: lookup[char] })

    longestLen = Math.max(longestLen, i - start + 1);

    lookup[char] = i + 1;
  }

  console.log(lookup)
    
  return longestLen

}



const testFunc = findLongestSubstring2

// console.log(testFunc('') === 0); // 0
// console.log(testFunc('rithmschool') === 7); // 7
// console.log(testFunc('thisisawesome') === 6); // 6
// console.log(testFunc('thecatinthehat') === 7); // 7
// console.log(testFunc('bbbbbb') === 1); // 1
console.log(testFunc('longestsubstring') === 8); // 8
// console.log(testFunc('thisishowwedoit') === 6); // 6