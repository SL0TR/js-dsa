/* Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string*/

function collectStrings(obj) {
    let arr = [];

    const helper = function(helperInput) {

        const keys = Object.keys(helperInput);

        if(!keys.length) {
            return
        }

        for(const key of keys) {
            if(typeof helperInput[key] === 'string') {
                arr.push(helperInput[key])
            }

            if(typeof helperInput[key] === 'object') {
                helper(helperInput[key])
            }

        }
        
    }

    helper(obj)
    
    return arr;

}


const obj = {
  stuff: "foo",
  lang: 1,
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

console.log(collectStrings(obj)) // ["foo", "bar", "baz"])