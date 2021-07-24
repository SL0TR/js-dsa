function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);

  while (val !== arr[middle] && left <= right) {
    if (val > arr[middle]) {
      left = middle + 1;
    }

    if (val < arr[middle]) {
      right = middle - 1;
    }

    middle = Math.floor((left + right) / 2);
  }

  return arr[middle] === val ? middle : -1;
}

console.log(binarySearch([1, 2, 34, 312, 323, 523], 323) === 4);
console.log(
  binarySearch([11, 52, 104, 116, 200, 230, 555, 581, 1202], 581) === 7
);
console.log(
  binarySearch([121, 252, 341, 416, 522, 731, 5335, 8115], 200) === -1
);
