// Implement a function called, testFunc which accepts a variable number of arguments, 
// and checks whether there are any duplicates among the arguments passed in. You can solve 
// this using the frequency counter pattern OR the multiple pointers pattern.


// Time: O(n) Space: O(n) using freqCounter
function areThereDuplicates(...args) {

  const lookup = {}

  for(const item of args) {
    if(lookup[item]) {
      return true
    }
    lookup[item] = (lookup[item] || 0) + 1;
  }
  return false;
}


// Time: O(nlog n) Space: O(1) using multiple pointers
function areThereDuplicates2(...args) {

  args.sort((a,b) => a > b);

  let i = 0;

  for(let j = 1; j < args.length; i++, j++) {
    if(args[i] === args[j]) {
      return true
    }
  }

  return false;
}


// Time O(n) (probably)
function areThereDuplicates3() {
  return new Set(arguments).size !== arguments.length;
}

const testFunc = areThereDuplicates

console.log(testFunc(1, 2, 3) === false); // false
console.log(testFunc(1, 2, 2) === true ); // true
console.log(testFunc('a', 'b', 'c', 'a') === true); // true