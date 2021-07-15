/* Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string*/

function collectStrings(obj) {
    let arr = [];

    

}


const obj = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}

collectStrings(obj) // ["foo", "bar", "baz"])