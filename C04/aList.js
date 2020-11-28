const arrayToList = (arr) => {
  while (arr.length > 0) {
    return { value: arr[0], rest: arrayToList(arr.splice(1, arr.length)) };
  }
};

const listToArray = (list) => {
  var arr = [];

  const findNextValue = (list) => {
    if (list.rest !== undefined) {
      findNextValue(list.rest);
    }
    arr.push(list.value);
    return arr;
  };

  return findNextValue(list).reverse();
};

const prepend = (list, element) => {
  return { value: element, rest: list };
};

const nth = (list, position) => {
  let ans;

  const depthFinder = (list, position) => {
    if (position === 0) {
      ans = list.value;
    } else if (list.rest === undefined) {
      return undefined;
    } else {
      depthFinder(list.rest, position - 1);
    }
    return ans;
  };

  return depthFinder(list, position);
};

console.log(nth(arrayToList([2, 3, 4]), 0)); //returns 3
