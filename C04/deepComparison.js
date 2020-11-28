const deepEqual = (value1, value2) => {
  let match;

  if (value1 === value2) {
    return true;
    //Both objects?
  } else if (
    typeof value1 === 'object' &&
    typeof value2 === 'object' &&
    value1 !== null &&
    value2 !== null
  ) {
    //Same amount of keys?
    if (Object.keys(value1).length == Object.keys(value2).length) {
      //Keys have same names and values?
      let val1Keys = Object.keys(value1);

      for (let i = 0; i < val1Keys.length; i++) {
        //check each key in value1 is in value 2
        if (value2.hasOwnProperty(val1Keys[i]) == true) {
          //check if the value of each key is the same
          if (value2[val1Keys[i]] === value1[val1Keys[i]]) {
            match = true;
          } else {
            match = false;
            return false;
          }
        } else {
          match = false;
          return false;
        }
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
  return match;
};
