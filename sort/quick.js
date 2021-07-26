function pivot(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      [arr[i], arr[swapIdx]] = [arr[swapIdx], arr[i]];
    }
  }

  [arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]];

  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivIdx = pivot(arr, left, right);

    // for left side
    quickSort(arr, left, pivIdx - 1);

    // for right side
    quickSort(arr, pivIdx + 1, right);
  }

  return arr;
}

// console.log(pivot([9, 4, 8, 2, 1, 5, 7, 6, 3]));

const testFunc = quickSort;

console.log(testFunc([1, 10, 50, 2, 14, 99, 100]));
console.log(testFunc([10, 5, 100, 2000, 23, 123, 67, 47, 2345, 32]));
