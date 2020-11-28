const deepEqual = (value1, value2) => {
  if (value1 === value2) {
    return true;
    //Both objects?
  } else if (
    typeof value1 === 'object' &&
    typeof value2 === 'object' &&
    value1 !== null &&
    value2 !== null
  ) {
    let val1Keys = Object.keys(value1);
    let val2Keys = Object.keys(value2);

    //Same amount of keys?
    if (val1Keys.length == val1Keys.length) {
      //Keys have same names and values?

      for (let key of val1Keys) {
        if (!val2Keys.includes(key) || !deepEqual(value1[key], value2[key]))
          return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
};

let obj = { here: { is: 'an' }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: 'an' }, object: 2 }));
// → true
