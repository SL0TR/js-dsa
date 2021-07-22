// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

function flatten(arr) {
  let flattenArr = [];

  const helper = function(helperInput) {

    for(const item of helperInput) {

      if(helperInput === null || helperInput === undefined) {
        return;
      }

      if(!Array.isArray(item)) {
        flattenArr.push(item)
      } else {
        helper(item)
      }

    }

  }

  helper(arr)

  return flattenArr

}


console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1, 2, 3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1, 2, 3]