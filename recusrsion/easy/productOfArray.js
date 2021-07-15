// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) 

// with helper recursion func
function productOfArray(arr) {

  let product = 1;

  const helper = function(helperInput) {

    if(helperInput.length === 0) {
      return;
    }

    product *= helperInput[0]


    helper(helperInput.slice(1))
  }

  helper(arr);


  return product;

}


// pure recursion
function productOfArray2(arr) {

  if(arr.length === 0) {
    return 1;
  }

  return arr[0] * productOfArray2(arr.slice(1))

}



const testFunc = productOfArray2

console.log(testFunc([1,2,3]) === 6)
console.log(testFunc([1,2,3,10]) === 60)
console.log(testFunc([2,2,5,20]) === 400)
console.log(testFunc([1,3,30]) === 90)