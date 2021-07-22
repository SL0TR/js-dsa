// Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.

function nestedEvenSum(obj) {
  let sum = 0;

  const helper = function (helperInput) {
    const keys = Object.keys(helperInput);

    if (!keys.length) {
      return;
    }

    for (const key of keys) {
      if (typeof helperInput[key] === "number" && helperInput[key] % 2 === 0) {
        sum += helperInput[key];
      }

      if (typeof helperInput[key] === "object") {
        helper(helperInput[key]);
      }
    }
  };

  helper(obj);

  return sum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

console.log(nestedEvenSum(obj1) === 6); // 6
console.log(nestedEvenSum(obj2) === 10); // 10
