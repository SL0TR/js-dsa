// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

function isPalindrome(str) {
  let reverseStr = '';

  const helper = function(helperInput) {

    if(!helperInput) {
      return
    }

    reverseStr += helperInput[helperInput.length -1];

    helper(helperInput.substring(0, helperInput.length - 1))

  }

  helper(str.toLowerCase())

  return str === reverseStr;

}

console.log(isPalindrome('awesome') === false); // false
console.log(isPalindrome('foobar') === false); // false
console.log(isPalindrome('tacocat') === true); // true
console.log(isPalindrome('amanaplanacanalpanama') === true); // true
console.log(isPalindrome('amanaplanacanalpandemonium') === false); // false