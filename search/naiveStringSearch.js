function naiveStringSearch(longStr, shortStr) {
  let count = 0;

  for (let i = 0; i < longStr.length; i++) {
    for (let j = 0; j < shortStr.length; j++) {
      if (shortStr[j] !== longStr[i + j]) {
        break;
      }

      if (j === shortStr.length - 1) {
        count++;
      }
    }
  }

  console.log(count);

  return count;
}

console.log(naiveStringSearch("iambadyo", "bad") === 1);
console.log(naiveStringSearch("iambadyo", "ade") === 0);
console.log(naiveStringSearch("psychopath", "path") === 1);
console.log(
  naiveStringSearch("give me some sugar baby give it to me now", "give") === 2
);
