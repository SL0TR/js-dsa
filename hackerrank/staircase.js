// Staircase detail

// This is a staircase of size n =4 :

//    #
//   ##
//  ###
// ####
// Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

// Write a program that prints a staircase of size n;

function generateStaircase(height) {
  for (let i = 0; i < height; i++) {
    let base = Array.from({ length: height }, () => " ");

    for (let j = 0; j < i + 1; j++) {
      base[base.length - 1 - j] = "#";
    }

    console.log(base.join(""));
  }
}

function generateStaircase2(height) {
  for (let i = 1; i <= height; i++) {
    console.log("#".repeat(i).padStart(height));
  }
}

generateStaircase2(6);
