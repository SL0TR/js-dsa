export function bubbleSort(arr) {
  let operations = 0;
  let noSwaps;
  for (let i = 0; i < arr.length; i++) {
    noSwaps = true;
    for (let j = 1; j < arr.length - i; j++) {
      operations++;
      console.log({
        [`i:${i}`]: arr[i],
        [`j:${j + i}`]: arr[j + i],
      });

      if (arr[i] > arr[j + i]) {
        noSwaps = false;
        [arr[i], arr[j + i]] = [arr[j + i], arr[i]];
      }
    }

    if (noSwaps) {
      break;
    }
  }

  console.log({ operations });

  return arr;
}

export function bubbleSort2(arr) {
  let noSwaps;
  let operations = 0;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      operations++;
      console.log({
        [`j:${j}`]: arr[j],
        [`j+1:${j + 1}`]: arr[j + 1],
      });

      if (arr[j] > arr[j + 1]) {
        noSwaps = false;
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }

    if (noSwaps) {
      break;
    }
  }

  console.log({ operations });

  return arr;
}

const testFunc = bubbleSort;

// console.log(testFunc([37, 45, 29, 8]));
// console.log(testFunc([5, 10, 22, 1, 33, 50, 100]));
console.log(testFunc([15, 120, 322, 15, 133, 50, 100, 233, 122, 500, 1000]));
// console.log(testFunc([8, 1, 2, 3, 4, 5, 6, 7]));
// console.log(testFunc([10, 9, 8, 7, 6, 5, 1]));
