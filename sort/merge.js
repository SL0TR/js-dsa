function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);

  return mergeSortedArr(
    mergeSort(arr.slice(0, middle)),
    mergeSort(arr.slice(middle))
  );
}

function mergeSortedArr(arr1, arr2) {
  let left = 0;
  let right = 0;
  const results = [];

  while (left < arr1.length && right < arr2.length) {
    if (arr2[right] > arr1[left]) {
      results.push(arr1[left]);
      left++;
    } else {
      results.push(arr2[right]);
      right++;
    }
  }

  return results.concat(right > left ? arr1.slice(left) : arr2.slice(right));
}

const testFunc = mergeSort;

// console.log(mergeSortedArr([100], [1, 2, 3, 5, 6]));
// console.log(mergeSortedArr([10, 20, 30], [1, 2]));
// console.log(mergeSortedArr([2, 14], [99, 100]));

// console.log(testFunc([1, 10, 50, 2, 14, 99, 100]));
console.log(testFunc([10, 5, 100, 2000, 23, 123, 67, 47, 2345, 32]));
