// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow() - do not worry about negative bases and exponents.

// pure recursion
function power(base, exponent) {
  if(exponent === 0) {
    return 1;
  }

  return base * power(base, --exponent)


}


const testFunc = power


console.log(testFunc(2, 0) === 1)
console.log(testFunc(2, 2) === 4)
console.log(testFunc(2, 4) === 16)
console.log(testFunc(3, 2) === 9)
console.log(testFunc(3, 3) === 27)