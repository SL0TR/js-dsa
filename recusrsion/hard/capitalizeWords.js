{/* Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized. */}

function capitalizedWords (arr) {
  let newArr = []

  if(!arr.length) {
    return newArr;
  }

  const word = arr[0];
  const uppercasedWord = word.toUpperCase()

  if(word === uppercasedWord) {
    return;
  }

  newArr.push(uppercasedWord)

  newArr = newArr.concat(capitalizedWords(arr.slice(1)))
  return newArr
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']