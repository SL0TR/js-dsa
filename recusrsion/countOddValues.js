// recursion with helper method
function collectOddValues(arr) {

  let result = [];

  const helper = function(helperInput) {
    if(helperInput.length === 0) {
      return;
    }

    if(helperInput[0] % 2 !== 0) {
      result.push(helperInput[0])
    }

    helper(helperInput.slice(1))

  }

  helper(arr)

  return result

}


// pure recursion 
function collectOddValues2(arr) {

  let newArr = []

  if(arr.length === 0) {
    return newArr
  }

  if(arr[0] % 2 !== 0) {
    newArr.push(arr[0])
  }

  newArr = newArr.concat(collectOddValues2(arr.slice(1)))
  return newArr

}



const testFunc = collectOddValues2

console.log(testFunc([0, 1, 2, 3, 4, 5, 6, 7, 8 ,9 , 10]))