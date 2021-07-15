// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, 13, 21 which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

// recursion
function fib(num){
  
  if(num < 2 ) {
    return num
  }

  return fib(num - 1) + fib(num - 2)

}

// loop solution
function fib2(location) {

  const seq = [0, 1]

  for(let i = 2; i <= location; i++) {
    seq.push(seq[i - 1] + seq[i - 2])
  }

  return seq[location]

}

const testFunc = fib

console.log(testFunc(4) === 3);// 3
console.log(testFunc(6) === 8);// 8
console.log(testFunc(10) === 55); // 55
console.log(testFunc(28) === 317811) // 317811
console.log(testFunc(35) === 9227465) // 9227465
