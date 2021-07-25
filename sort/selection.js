export function selectionSort(arr) {
  let operations = 0;
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      operations++;
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }

    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  console.log({ operations });
  return arr;
}
const testFunc = selectionSort;

console.log(testFunc([37, 45, 29, 8]));
console.log(testFunc([5, 10, 22, 1, 33, 50, 100]));
console.log(testFunc([15, 120, 322, 15, 133, 50, 100, 233, 122, 500, 1000]));
console.log(testFunc([8, 1, 2, 3, 4, 5, 6, 7]));
console.log(testFunc([10, 9, 8, 7, 6, 5, 1]));
