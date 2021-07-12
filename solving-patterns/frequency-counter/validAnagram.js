// Given two strings, write a function called validAnagram to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// O(n)
function validAnagram(str1, str2) {

  if(str1.length !== str2.length) {
    return false;
  }

  if(str1 === str2) {
    return true;
  }

  const lookup = {}

  for(const val of str1) {
    lookup[val] ? lookup[val] += 1 : lookup[val] = 1;
  }

  for(const val of str2) {

    if(!lookup[val]) {
      return false
    }

    lookup[val] -= 1;

  }

  return true;

}


// O(n^2)
function validAnagram2(str1, str2) {

  if(str1.length !== str2.length) {
    return false;
  }

  if(str1 === str2) {
    return true;
  }

  for(let i = 0; i < str1.length; i++) {
    const correctIndex = str2.indexOf(str1[i]);

    if(correctIndex === -1) {
      return false;
    }

    let arrStr = str2.split('')

    arrStr.splice(correctIndex, 1);

    str2 = arrStr.join('')
  }

  return true;

}


const testFunc = validAnagram2

console.log(testFunc('', '') === true )
console.log(testFunc('aaz', 'zza') === false)
console.log(testFunc('anagram', 'nagaram') === true)
console.log(testFunc('rat', 'car') === false)
console.log(testFunc('awesome', 'awesom') === false)
console.log(testFunc('texttwisttime', 'timetwisttext') === true)