function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let curVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > curVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = curVal;
  }

  return arr;
}

const testFunc = insertionSort;

console.log(testFunc([3, 44, 38, 5, 47, 15]));
console.log(testFunc([5, 10, 22, 1, 33, 50, 100]));
console.log(testFunc([15, 120, 322, 15, 133, 50, 100, 233, 122, 500, 1000]));
console.log(testFunc([8, 1, 2, 3, 4, 5, 6, 7]));
console.log(testFunc([10, 9, 8, 7, 6, 5, 1]));
