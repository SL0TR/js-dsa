// Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g., factorial four (4!) is equal to 24, because 4 * 3 * 2 * 1 equals 24. factorial zero (0!) is always 1.

function factorialWithLoop(num) {
  let total = 1;

  for(let i = num; i > 0; i--) { 
    total *= i;
  }

  return total

}

function factorialWithRecursion(num){
  if(num === 1) {
    return 1;
  }

  return num * factorialWithRecursion(num -1)

}

const testFunc = factorialWithLoop


console.log(testFunc(10) === 3628800)