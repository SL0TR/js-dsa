// Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.

function someRecursive(arr, cb) {
  const helper = function (helperInput) {
    if (!helperInput.length) {
      return false;
    }

    if (cb(helperInput[helperInput.length - 1])) {
      return true;
    }

    helperInput.pop();

    return helper(helperInput);
  };

  return helper(arr);
}

function someRecursive2(array, callback) {
  if (array.length === 0) return false;
  if (callback(array[0])) return true;
  return someRecursive(array.slice(1), callback);
}

const isOdd = (val) => val % 2 !== 0;

const testFunc = someRecursive;

console.log(testFunc([1, 2, 3, 4], isOdd) === true); // true
console.log(testFunc([4, 6, 8, 9], isOdd) === true); // true
console.log(testFunc([4, 6, 8], isOdd) === false); // false
console.log(testFunc([4, 6, 8], (val) => val > 10) === false); // false
