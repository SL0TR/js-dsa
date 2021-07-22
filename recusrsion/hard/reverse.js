// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

function reverse(str) {
  let reverseStr = "";

  const helper = function (helperInput) {
    if (!helperInput) {
      return;
    }

    reverseStr += helperInput[helperInput.length - 1];

    helper(helperInput.substring(0, helperInput.length - 1));
  };

  helper(str.toLowerCase());

  return reverseStr;
}

console.log(reverse("awesome") === "emosewa"); // 'emosewa'
console.log(reverse("rithmschool") === "loohcsmhtir"); // 'loohcsmhtir'
