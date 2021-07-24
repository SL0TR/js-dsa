function linearSeach(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

console.log(linearSeach([1, 2, 34, 6, 312, 323, 23, 211], 323) === 5);
console.log(linearSeach([11, 52, 4, 16, 2, 3, 55, 211], 16) === 3);
console.log(linearSeach([121, 552, 41, 16, 222, 31, 5335, 2115], 5335) === 6);
console.log(linearSeach([121, 552, 41, 16, 222, 31, 5335, 2115], 100) === -1);
