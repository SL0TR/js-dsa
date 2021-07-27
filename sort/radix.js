function getDigit(num, rightPos) {
  const numString = num.toString();
  return numString.length === 1
    ? +numString[numString.length - 1]
    : +numString[numString.length - rightPos - 1];
}

function getDigit2(num, rightPos) {
  return Math.floor((Math.abs(num) / Math.pow(10, rightPos)) % 10);
}

const getDigitCount = (num) => num.toString().length;
const getDigitCount2 = (num) =>
  num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num)) + 1);

function getMostDigits(arr) {
  let max = 1;

  for (const item of arr) {
    let digitCount = getDigitCount(item);
    max = Math.max(digitCount, max);
  }

  return max;
}

// Helper function tests
// console.log(getDigit(12345, 0) === 5);
// console.log(getDigit(12345, 1) === 4);
// console.log(getDigitCount(1234) === 4);
// console.log(getDigitCount(123456) === 6);
// console.log(getMostDigits([1234, 56, 7]) === 4);
// console.log(getMostDigits([1, 1, 11111, 1]) === 5);
// console.log(getMostDigits([12, 334, 56, 78]) === 3);

function radixSort(arr) {
  let maxDigit = getMostDigits(arr);

  for (let i = 0; i < maxDigit; i++) {
    let digitBucket = Array.from({ length: 10 }, () => []);

    for (const item of arr) {
      const lastDigit = getDigit2(item, i);
      digitBucket[lastDigit].push(item);
    }

    arr = [].concat(...digitBucket);
  }

  return arr;
}

const testFunc = radixSort;

console.log(testFunc([1, 10, 50, 2, 14, 99, 100]));
console.log(testFunc([10, 5, 100, 2000, 23]));
console.log(testFunc([23, 345, 5467, 2345, 9852]));
