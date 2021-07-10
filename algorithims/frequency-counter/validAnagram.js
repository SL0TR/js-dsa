// BigO of O(n)
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


// BigO of O(n2)
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



console.log(validAnagram2('', '') === true )
console.log(validAnagram2('aaz', 'zza') === false)
console.log(validAnagram2('anagram', 'nagaram') === true)
console.log(validAnagram2('rat', 'car') === false)
console.log(validAnagram2('awesome', 'awesom') === false)
console.log(validAnagram2('texttwisttime', 'timetwisttext') === true)