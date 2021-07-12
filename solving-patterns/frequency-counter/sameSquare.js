// Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

// O(n)
function sameSquare(arr1, arr2) {

  if(arr1.length !== arr2.length) {
    return false;
  }

  let frqCounter1 = {}

  for(const val of arr1) {
    frqCounter1[val] = (frqCounter1[val] || 0) + 1
  }

  for(const item of arr2) {
    const suqredItem = Math.sqrt(item)

    if(!frqCounter1[suqredItem]) {
      return false
    }
    frqCounter1[suqredItem]--
  }

  return true;

}


// O(n^2)
function sameSquare2(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false;
  }

  for(let i = 0; i < arr1.length; i++) {
    const correctIndex = arr2.indexOf(arr1[i] ** 2);


    if(correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }

  return true;

}

const testFunc = sameSquare

console.log(testFunc([1,2,3], [4,1,9]) === true )
console.log(testFunc([1,2,2,3], [1,9, 4, 4]) === true)
console.log(testFunc([1,2,3], [1,9]) === false)
console.log(testFunc([1,2,1], [4,4,1]) === false)