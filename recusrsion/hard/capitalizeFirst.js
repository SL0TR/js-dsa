// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.


function capitalizeFirst(arr) {

  let newArr = []

  if(!arr.length) {
    return newArr;
  }

  const word = arr[0];
  const uppercasedLetter = word[0].toUpperCase()

  if(word[0] === uppercasedLetter) {
    return;
  }

  newArr.push(uppercasedLetter + word.slice(1))

  newArr = newArr.concat(capitalizeFirst(arr.slice(1)))
  return newArr


}


console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car', 'Taco', 'Banana']